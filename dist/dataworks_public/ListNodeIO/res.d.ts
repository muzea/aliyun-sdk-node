export interface ListNodeIOResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID，用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The project does not exist.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ProjectNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 上下游信息。
     */
    Data: {
        /**
         * 输入或输出表的表名。
         * @example `dataworks_a.datastudio_tenant_waitres_alarm`
         */
        TableName: string;
        /**
         * 输入或输出名称。
         * @example `dataworks_a.1234_out`
         */
        Data: string;
        /**
         * 节点ID。
         * @example `123123`
         */
        NodeId: number;
    }[];
}
