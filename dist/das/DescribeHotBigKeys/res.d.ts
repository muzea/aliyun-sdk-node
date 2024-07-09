export interface DescribeHotBigKeysResponse {
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
    /**
     * 详情信息列表。
     */
    Data: {
        HotKeys: {
            /**
             * 热键详细列表。
             */
            HotKey: {
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
                 * Key的访问频次，即Key的每秒访问数。
                 * @example `5500~6000`
                 */
                Hot: string;
                /**
                 * Key的类型。
                 * @example `zset`
                 */
                KeyType: string;
                /**
                 * LFU算法的统计值。
                 * @example `253`
                 */
                Lfu: number;
                /**
                 * Redis实例的数据分片ID。
                 * @example `r-x****-db-0`
                 */
                NodeId: string;
            }[];
        };
        BigKeys: {
            /**
             * 大Key的详细列表。
             */
            BigKey: {
                /**
                 * Key所在的DB。
                 * @example `0`
                 */
                Db: number;
                /**
                 * 具体的Key。
                 * @example `abc:def:eng`
                 */
                Key: string;
                /**
                 * Key类型。
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
         * 获取热Key失败的原因。
         * @example `current version doesn't support`
         */
        HotKeyMsg: string;
        /**
         * 获取大Key失败的原因。
         * @example `current version doesn't support`
         */
        BigKeyMsg: string;
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
