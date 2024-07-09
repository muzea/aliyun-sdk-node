export interface DescribeDrdsSlowSqlsResponse {
    /**
     * 每页记录数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `509BDE17-505A-4B3B-854D-30D3F0******`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    Total: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    Items: {
        /**
         * 慢SQL详情。
         */
        Item: {
            /**
             * 慢SQL发送时间，单位为毫秒（ms）。
             * @example `1568267711`
             */
            SendTime: number;
            /**
             * 执行机器的IP。
             * @example `10.0.***.***`
             */
            Host: string;
            /**
             * 慢SQL内容。
             * @example `SELECT   count(1) from   payment_order where   order_status = '08';`
             */
            Sql: string;
            /**
             * 响应时间，单位为毫秒（ms）。
             * @example `1568267711`
             */
            ResponseTime: number;
            /**
             * 数据库名称。
             * @example `user`
             */
            Schema: string;
        }[];
    };
}
