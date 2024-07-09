export interface GetHotlineAgentDetailReportResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 查询结果数据。
     */
    Data: {
        /**
         * 每页的数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总共记录数。
         * @example `7`
         */
        Total: number;
        /**
         * 当前页。
         * @example `1`
         */
        Page: number;
        /**
         * 返回列描述。
         */
        Columns: {
            /**
             * 指标。
             * @example `realName`
             */
            Key: string;
            /**
             * 指标说明。
             * @example `客服姓名`
             */
            Title: string;
        }[];
        /**
         * 返回数据结果。
         */
        Rows: any[];
    };
}
