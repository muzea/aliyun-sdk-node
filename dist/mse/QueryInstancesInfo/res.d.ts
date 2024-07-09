export interface QueryInstancesInfoResponse {
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `54973C90-F379-4372-9AA5-053A3F7****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 预留字段。
         * @example `null`
         */
        HealthStatus: string;
        /**
         * 预留字段。
         * @example `null`
         */
        Role: string;
        /**
         * POD名称。
         * @example `mse-xxxxx-xxxxx-reg-center-0-1`
         */
        PodName: string;
        /**
         * POD的IP。
         * @example `25.24.91.x`
         */
        Ip: string;
        /**
         * 公网IP。
         * @example `120.55.71.x`
         */
        InternetIp: string;
        /**
         * 内网IP。
         * @example `172.16.66.x`
         */
        SingleTunnelVip: string;
        /**
         * 创建时间。
         * @example `2022-12-15T02:02:15Z`
         */
        CreationTimestamp: string;
        /**
         * 启用的端口。
         * @example `8848`
         */
        ClientPort: string;
        /**
         * 可用区。
         * @example `cn-hangzhou-k`
         */
        Zone: string;
        /**
         * 所有Pod是否已满足多可用区分布。
         * @example `true`
         */
        ZoneDistributed: boolean;
    }[];
}
