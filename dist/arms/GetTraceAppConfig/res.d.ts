export interface GetTraceAppConfigResponse {
    /**
     * 请求ID。
     * @example `78901766-3806-4E96-8E47-CFEF59E4****
    `
     */
    RequestId: string;
    /**
     * 应用的自定义配置，格式为一个JSON字符串，每个配置的含义见**返回参数补充说明**。
     * @example `{"profiler":{"enable":true}}`
     */
    Data: string;
    /**
     * 返回信息。
     * @example `查询应用配置成功`
     */
    Message: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 查询是否成功。
     * @example `true`
     */
    Success: boolean;
}
