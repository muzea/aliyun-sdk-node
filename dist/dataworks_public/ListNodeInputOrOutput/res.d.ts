export interface ListNodeInputOrOutputResponse {
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
     * 输入输出列表。
     */
    Data: {
        /**
         * 该参数暂不生效，目前无法获取。
         * @example `dwd_xxx_table`
         */
        TableName: string;
        /**
         * 输入输出节点名称。
         * @example `xxxx.123141254_out`
         */
        Data: string;
        /**
         * 节点ID。
         * @example `1234667`
         */
        NodeId: number;
    }[];
}
