export interface GetConsumerListResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `808F042B-CB9A-4FBC-9009-00E7DDB6****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    ConsumerList: {
        /**
         * Group列表。
         */
        ConsumerVO: {
            /**
             * Group名称。
             * @example `kafka-test`
             */
            ConsumerId: string;
            /**
             * 实例ID。
             * @example `alikafka_post-cn-v0h18sav****`
             */
            InstanceId: string;
            /**
             * 备注。
             * @example `test`
             */
            Remark: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            Tags: {
                /**
                 * 标签。
                 */
                TagVO: {
                    /**
                     * 标签键。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `test`
                     */
                    Value: string;
                }[];
            };
            /**
             * 自动创建的Group
             */
            AutomaticallyCreatedGroup: boolean;
        }[];
    };
    /**
     * 总数量。
     * @example `12`
     */
    Total: number;
    /**
     * 每页显示的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 指定显示返回结果中的第几页，最小值为1。
     * @example `1`
     */
    CurrentPage: number;
}
