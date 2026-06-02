import { test, expect } from '@playwright/test';

test('Petstore GET /pet/10 returns valid pet details', async ({ request }) => {
  const url = 'https://petstore.swagger.io/v2/pet/10';
  console.log(`Sending GET request to ${url}`);

  const response = await request.get(url);
  console.log('Response status:', response.status());

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('Response body:', JSON.stringify(responseBody, null, 2));

  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('category.id');
  expect(responseBody).toHaveProperty('category.name');
  expect(responseBody).toHaveProperty('name');
  expect(responseBody).toHaveProperty('photoUrls');

  const petSchema = {
    type: 'object',
    required: ['id', 'category', 'name', 'photoUrls'],
    properties: {
      id: { type: 'number' },
      category: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
        },
      },
      name: { type: 'string' },
      photoUrls: { type: 'array', items: { type: 'string' } },
    },
  } as const;

  const validateSchema = (data: any, schema: any, path = '') => {
    expect(typeof data).toBe('object');
    if (schema.required) {
      for (const key of schema.required) {
        expect(data, `Missing required key: ${path}${key}`).toHaveProperty(key);
      }
    }

    for (const key of Object.keys(schema.properties || {})) {
      const propertySchema = schema.properties[key];
      const value = data[key];
      const currentPath = path ? `${path}${key}.` : `${key}.`;

      if (propertySchema.type === 'object') {
        expect(typeof value).toBe('object');
        validateSchema(value, propertySchema, currentPath);
      } else if (propertySchema.type === 'array') {
        expect(Array.isArray(value)).toBe(true);
        for (const item of value) {
          expect(typeof item).toBe(propertySchema.items.type);
        }
      } else {
        expect(typeof value).toBe(propertySchema.type);
      }
    }
  };

  validateSchema(responseBody, petSchema);

  expect(responseBody.id).toBe(10);
  expect(responseBody.name).toBe('doggie');
  expect(responseBody.category.id).toBe(10);
  expect(responseBody.category.name).toBe('string');
});