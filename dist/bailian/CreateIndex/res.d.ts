export interface CreateIndexResponse {
    /**
     * Id of the request
     * @example `17204B98-7734-4F9A-8464-2446A84821CA`
     */
    RequestId: string;
    /**
     * 接口业务数据字段。
     */
    Data: {
        /**
         * 索引信息主键id
         * @example `jkurxhju6b`
         */
        Id: string;
    };
    /**
     * 接口返回的状态码
     * @example `200`
     */
    Status: string;
    /**
     * 调用是否成功。
     * @example `true
    `
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `Invalid input, variable name is missing`
     */
    Message: string;
    /**
     * 错误状态码
     * @example `Index.Forbidden`
     */
    Code: string;
}
