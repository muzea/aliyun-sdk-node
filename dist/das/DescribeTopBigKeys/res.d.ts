export interface DescribeTopBigKeysResponse {
    /**
     * 请求返回消息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    Data: {
        /**
         * 大Key详细信息列表。
         * > 查询时间段内没有大Key时，返回为空。
         */
        BigKey: {
            /**
             * 具体的Key。
             * @example `abc:def:eng`
             */
            Key: string;
            /**
             * Key所在的DB。
             * @example `0`
             */
            Db: number;
            /**
             * Key的类型。
             * @example `zset`
             */
            KeyType: string;
            /**
             * 元素的个数。
             * @example `2`
             */
            Size: number;
            /**
             * Redis实例的数据分片ID。
             * @example `r-x****-db-0`
             */
            NodeId: string;
        }[];
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
