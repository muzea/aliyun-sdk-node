export interface DescribeHotKeysResponse {
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
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
         * 详细信息列表。
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
             * 元素的个数。
             * @example `2`
             */
            Size: number;
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
