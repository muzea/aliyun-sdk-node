export interface DescribeConsumerGroupResponse {
    /**
     * 请求ID。
     * @example `4204E899-8193-4D7D-A4FB-3A7F9063****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 一页最多可展示的消费组数量。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 消费组总数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    ConsumerChannels: {
        /**
         * 消费组列表。
         */
        DescribeConsumerChannel: {
            /**
             * 消费组账号。
             * @example `test`
             */
            ConsumerGroupUserName: string;
            /**
             * 消费组ID。
             * @example `dtspis1110z232****`
             */
            ConsumerGroupID: string;
            /**
             * 消息延迟时间=当前时间-数据订阅通道中存在时间最早的未被消费的消息的时间戳，单位为秒。
             * > 如果该参数返回**-1**，则表示当前没有客户端连接该消费组。
             * @example `172714`
             */
            MessageDelay: number;
            /**
             * 消费组名称。
             * @example `consumergrouptest`
             */
            ConsumerGroupName: string;
            /**
             * 消费位点，即客户端在订阅通道内消费最后一条信息的时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-10-02T12:00:00Z`
             */
            ConsumptionCheckpoint: string;
            /**
             * 未消费的消息总数=未被消费的订阅数据数量+心跳消息数量
             * > 如果该参数返回**-1**，则表示当前没有客户端连接该消费组。
             * @example `186600`
             */
            UnconsumedData: number;
        }[];
    };
}
