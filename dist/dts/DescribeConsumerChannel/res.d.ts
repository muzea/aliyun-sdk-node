export interface DescribeConsumerChannelResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `D66140B3-C747-42B6-8315-BAF6490E****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 一页最多可展示的消费组数量。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 消费组总数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 调用出错时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 消费组列表。
     */
    ConsumerChannels: {
        /**
         * 消费组的账号。
         * @example `dtstest`
         */
        ConsumerGroupUserName: string;
        /**
         * 消费组ID。
         * @example `dtsor2y66j4219****`
         */
        ConsumerGroupId: string;
        /**
         * 消息延迟时间，该时间=下游客户端最新消费数据的时间戳-数据订阅任务中最新订阅数据的时间戳，格式为Unix时间戳，单位为秒。
         * 例如，源库最新的数据于10点产生，目前DTS订阅任务已读取到源库9点55分的数据，下游客户端消费到9点30分的数据，此时消息延迟时间应为9点55分至9点30分的unix时间戳差值。
         * > 如果该参数返回**-1**，则表示当前没有客户端连接该消费组。
         * @example `1500`
         */
        MessageDelay: number;
        /**
         * 消费组的名称。
         * @example `订阅组A`
         */
        ConsumerGroupName: string;
        /**
         * 消费位点，即客户端在订阅通道内消费最后一条信息的时间点，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-06-20T12:00:00Z`
         */
        ConsumptionCheckpoint: string;
        /**
         * 未消费的消息总数，为未消费的订阅数据数量与心跳消息数量的和。
         * > 如果该参数返回-1，则表示当前没有客户端连接该消费组。
         * @example `186600`
         */
        UnconsumedData: number;
    }[];
}
