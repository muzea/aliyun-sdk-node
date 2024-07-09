export interface QueryMetricResponse {
    /**
     * 返回统计信息。
     * @example `{ "Data": "{\"data\":[{\"date\":1583686800000,\"count\":0,\"rt\":0,\"rpc\":\"childSpan3\"}]}}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
}
