import type { APIRequestContext, APIResponse } from '@playwright/test';
import Ajv from 'ajv';

export type JsonSchema = Record<string, unknown>;

export function getApiBaseUrl() {
  return process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';
}

export function getApiToken() {
  return process.env.API_TOKEN;
}

export function createAuthHeaders(token?: string): Record<string, string> {
  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`
  };
}

export function createJsonHeaders(extraHeaders: Record<string, string> = {}) {
  return {
    'Content-Type': 'application/json',
    ...extraHeaders
  };
}

export async function getPost(request: APIRequestContext, postId: number) {
  return request.get(`${getApiBaseUrl()}/posts/${postId}`);
}

export async function createPost(request: APIRequestContext, postData: Record<string, unknown>) {
  return request.post(`${getApiBaseUrl()}/posts`, {
    data: postData,
    headers: createJsonHeaders()
  });
}

export async function deletePost(request: APIRequestContext, postId: number) {
  return request.delete(`${getApiBaseUrl()}/posts/${postId}`);
}

export async function measureResponseTime(action: () => Promise<APIResponse>) {
  const startTime = Date.now();
  const response = await action();
  const durationMs = Date.now() - startTime;

  return {
    response,
    durationMs
  };
}

export function validateJsonSchema(data: unknown, schema: JsonSchema) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  return {
    isValid,
    errors: validate.errors
  };
}
