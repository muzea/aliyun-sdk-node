export interface GetServiceListenersResponse {
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 监听者的地址。
         * @example `119.23.84.102`
         */
        Addr: string;
        /**
         * 监听者客户端版本。
         * @example `Nacos-Java-Client:v2.1.1`
         */
        Agent: string;
        /**
         * 监听者的应用名称。
         * @example `app`
         */
        App: string;
        /**
         * 被监听服务的IP地址。
         * @example `172.16.1.5`
         */
        IP: string;
        /**
         * 被监听服务的端口号。
         * @example `8080`
         */
        Port: string;
        /**
         * 命名空间ID。
         * @example `0ba53825-b183-414f-a6a0-288e4f1c467e`
         */
        NamespaceId: string;
        /**
         * 被监听服务的名称。
         * @example `zeekr-orderboss`
         */
        ServiceName: string;
        /**
         * 被监听服务所属集群名字。
         * @example `DEFAULT`
         */
        Cluster: string;
    }[];
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的监听者数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
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
     * @example `success`
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
}
