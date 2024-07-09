export interface GetAgentIndexRealTimeResponse {
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
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
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据列表。
     */
    Data: {
        /**
         * 每页大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `4`
         */
        Total: number;
        /**
         * 当前页数。
         * @example `1`
         */
        Page: number;
        /**
         * 返回列描述。
         */
        Columns: {
            /**
             * 指标。
             * @example `客服ID`
             */
            Key: string;
            /**
             * 指标说明。
             * @example `servicerId`
             */
            Title: string;
        }[];
        /**
         * 返回数据结果。
         */
        Rows: any[];
    };
}
