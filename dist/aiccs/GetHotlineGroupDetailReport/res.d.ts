export interface GetHotlineGroupDetailReportResponse {
    /**
     * 状态吗。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `successful`
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
     * @example `Public`
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
         * 总共记录数
         * @example `9`
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
             * @example `skillGroupName`
             */
            Key: string;
            /**
             * 指标说明。
             * @example `技能组名称`
             */
            Title: string;
        }[];
        /**
         * 返回数据结果。
         */
        Rows: any[];
    };
}
