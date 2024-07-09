export interface OnsMessagePageQueryByTopicResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `5DC2A47E-2B31-4722-96C8-FA59C9*****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    MsgFoundDo: {
        /**
         * 当前位于第几页。
         * @example `1`
         */
        CurrentPage: number;
        MsgFoundList: {
            /**
             * 当前页的消息集合，该类型与[OnsMessageGetByMsgId](~~29607~~)的返回结果一致。
             */
            OnsRestMessageDo: {
                /**
                 * 消息大小。单位：KB。
                 * @example `406`
                 */
                StoreSize: number;
                /**
                 * 消息重试消费的次数。
                 * @example `1`
                 */
                ReconsumeTimes: number;
                /**
                 * 消息被服务端存储的时间戳，单位：毫秒。
                 * @example `1570760999811`
                 */
                StoreTimestamp: number;
                /**
                 * 实例ID。
                 * @example `MQ_INST_111111111111_DOxxxxxx`
                 */
                InstanceId: string;
                /**
                 * 消息ID，即Message ID。
                 * @example `1E0578FE110F18B4AAC235C05F2*****`
                 */
                MsgId: string;
                /**
                 * 存储该消息的服务器实例。
                 * @example `11.193.***.***:10911`
                 */
                StoreHost: string;
                /**
                 * 消息的Topic。
                 * @example `test-mq_topic`
                 */
                Topic: string;
                PropertyList: {
                    /**
                     * 消息属性列表。
                     */
                    MessageProperty: {
                        /**
                         * 消息属性的取值。
                         * @example `TagA`
                         */
                        Value: string;
                        /**
                         * 消息属性。取值说明如下：
                         * - **TRACE_ON**：是否有消息轨迹。
                         * - **KEYS**：消息的Key属性。
                         * - **TAGS**：消息的Tag属性。
                         * - **INSTANCE_ID**：消息所在的实例的ID。
                         * 更多概念信息，请参见[名词解释](~~29533~~)。
                         * @example `TAGS`
                         */
                        Name: string;
                    }[];
                };
                /**
                 * 消息生成的时间戳，单位：毫秒。
                 * @example `1570760999721`
                 */
                BornTimestamp: number;
                /**
                 * 消息体CRC校验值。
                 * @example `914112295`
                 */
                BodyCRC: number;
                /**
                 * 生成该消息的客户端实例。
                 * @example `42.120.***.***:59270`
                 */
                BornHost: string;
            }[];
        };
        /**
         * 查询结果最大页数。
         * @example `400`
         */
        MaxPageCount: number;
        /**
         * 第一次新建查询时，返回的查询任务ID，用于后续取消息。
         * @example `0BC1310300002A9F000021E4D7A48346`
         */
        TaskId: string;
    };
}
