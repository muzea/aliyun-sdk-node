export interface QueryConsumerGroupStatusResponse {
    /**
     * 消费组消息消费速率，单位：条/分钟。
     * @example `14`
     */
    ConsumerSpeed: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 消费组堆积消息消费速率，单位：条/分钟。
     * @example `10`
     */
    AccumulatedConsumeCountPerMinute: number;
    /**
     * 最近消息消费时间。为UTC时间，以毫秒计，格式为“yyyy-MM-dd'T'HH:mm:ss.SSSZ”。
     * @example `2020-05-29T03:37:56.000Z`
     */
    LastConsumerTime: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 消费组实时消息消费速率，单位：条/分钟。
     * @example `14`
     */
    RealTimeConsumeCountPerMinute: number;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 消费组消息堆积数。
     * @example `13`
     */
    AccumulationCount: number;
    ClientConnectionStatusList: {
        /**
         * 消费组的在线客户端信息，请参见**ConsumerGroupClientConnectionInfo**。
         */
        ConsumerGroupClientConnectionInfo: {
            /**
             * 在线客户端的最后上线时间。取值为1970年01月01日00时00分00秒000毫秒以来的毫秒数。
             * @example `1591240546649`
             */
            OnlineTime: number;
            /**
             * 消费组的单个客户端堆积消息消费速率，单位：条/分钟。
             * @example `10`
             */
            AccumulatedConsumeCountPerMinute: number;
            /**
             * 消费组的单个客户端实时消息消费速率，单位：条/分钟。
             * @example `5`
             */
            RealTimeConsumeCountPerMinute: number;
            /**
             * 在线客户端IP和端口。
             * @example `192.168.1.2:36918	`
             */
            ClientIpPort: string;
            /**
             * 在线客户端ID。
             * @example `868575026******`
             */
            ClientId: string;
        }[];
    };
}
