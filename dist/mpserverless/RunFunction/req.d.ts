export interface RunFunctionRequest {
    /**
     * 服务空间ID。
     * @example `ach41172-adba-4af1-b2e5-63fc5f56a649`
     */
    "SpaceId": string;
    /**
     * 格式为 JSON String，functionTarget 为函数名，functionArgs 为传递给函数的参数，格式为 JSON String。
     * @example `{"functionTarget":"test-function","functionArgs":{"a":"aaaa","b":"bbbb","num":100}}`
     */
    "Body": string;
}
