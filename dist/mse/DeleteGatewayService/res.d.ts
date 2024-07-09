export interface DeleteGatewayServiceResponse {
    /**
     * 请求唯一ID
     * @example `B3545F76-6ED1-586F-8DB9-ECE07985F381`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 服务ID。
         * @example `190`
         */
        Id: number;
        /**
         * 服务名称。
         * @example `test`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `1`
         */
        GatewayId: number;
        /**
         * 服务来源
         * @example `MSE`
         */
        SourceType: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 分组名称。
         * @example `DEFAULT_GROUP`
         */
        GroupName: string;
        /**
         * 来源ID。
         * @example `1`
         */
        SourceId: number;
        /**
         * 服务注册到注册中心的名称。
         * @example `test`
         */
        ServiceNameInRegistry: string;
        /**
         * 服务的基本信息。
         * @example `{}`
         */
        MetaInfo: string;
        /**
         * IP
         */
        Ips: string[];
        /**
         * 服务创建时间。
         * @example `2022-01-14 14:39:16`
         */
        GmtCreate: string;
        /**
         * 最后修改时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
    };
}
