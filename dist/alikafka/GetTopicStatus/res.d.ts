export interface GetTopicStatusResponse {
    /**
     * 状态码。返回200代表成功。
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
     * @example `E475C7E2-8C35-46EF-BE7D-5D2A9F5D****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * Topic状态。
     */
    TopicStatus: {
        /**
         * 消息总数。
         * @example `423`
         */
        TotalCount: number;
        /**
         * 最后一条被消费的消息的产生时间。单位：ms。
         * @example `1566470063575`
         */
        LastTimeStamp: number;
        OffsetTable: {
            /**
             * 偏移列表。
             */
            OffsetTable: {
                /**
                 * 分区ID。
                 * @example `0`
                 */
                Partition: number;
                /**
                 * 消息最小位点。
                 * @example `0`
                 */
                MinOffset: number;
                /**
                 * 最后更新时间。单位：ms。
                 * @example `1566470063547`
                 */
                LastUpdateTimestamp: number;
                /**
                 * 消息最大位点。
                 * @example `76`
                 */
                MaxOffset: number;
                /**
                 * Topic名称。
                 * @example `testkafka`
                 */
                Topic: string;
            }[];
        };
    };
}
