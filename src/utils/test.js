import axios from 'axios';
import axiosRetry from 'axios-retry';
import { request as __request } from './request';
import { CancelablePromise } from './CancelablePromise';
import { BaseHttpRequest } from './BaseHttpRequest';
import { ApiRequestOptions } from './ApiRequestOptions';
import type { OpenAPIConfig } from './OpenAPI';

export class AxiosHttpRequestWithRetry extends BaseHttpRequest {
    axiosInstance = axios.create();

    constructor(config: OpenAPIConfig) {
        super(config);
        axiosRetry(this.axiosInstance);
    }

    public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
        return __request(this.config, options, this.axiosInstance);
    }
}