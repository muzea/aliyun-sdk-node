export interface DeleteGatewayDomainResponse {
    /**
     * 请求ID。
     * @example `39016EAC-6EDB-52FE-AE20-4B013DF236FF`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回码。
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
         * 域名ID。
         * @example `2`
         */
        Id: number;
        /**
         * 名称。
         * @example `CONTACTINFO`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `253`
         */
        GatewayId: number;
        /**
         * 协议。
         * @example `HTTP`
         */
        Protocol: string;
        /**
         * 是否允许HTTP探测。
         * @example `true`
         */
        MustHttps: boolean;
        /**
         * 证书ID。
         * @example `243`
         */
        CertIdentifier: string;
        /**
         * 域名创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 最后修改时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
    };
}
