export interface OnsDLQMessageGetByIdResponse {
    /**
     * 为公共参数，每个请求的ID都是唯一的。
     * @example `A07E3902-B92E-44A6-B6C5-6AA111111****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 消息大小。单位：KB。
         * @example `407`
         */
        StoreSize: number;
        /**
         * 消息重试消费的次数。
         * @example `1`
         */
        ReconsumeTimes: number;
        /**
         * 消息被服务端存储的时间戳。单位：毫秒。
         * @example `1570761026708`
         */
        StoreTimestamp: number;
        /**
         * 实例ID。
         * @example `MQ_INST_111111111111_DOxxxxxx`
         */
        InstanceId: string;
        /**
         * 消息ID。
         * @example `0BC16699165C03B925DB8A404E2D****`
         */
        MsgId: string;
        /**
         * 存储该消息的服务器实例。
         * @example `11.220.***.***:10911`
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
                 * - **TRACE_ON**：是否有消息轨迹
                 * - **KEYS**：消息的Key属性
                 * - **TAGS**：消息的Tag属性
                 * - **INSTANCE_ID**：消息所在的实例的ID
                 * 更多概念信息请参见[名词解释](~~29533~~)。
                 * @example `TAGS`
                 */
                Name: string;
            }[];
        };
        /**
         * 消息生成的时间戳。单位：毫秒。
         * @example `1570761026630`
         */
        BornTimestamp: number;
        /**
         * 消息体CRC校验值。
         * @example `914112295`
         */
        BodyCRC: number;
        /**
         * 生成该消息的生产者实例。
         * @example `42.120.**.**:64646`
         */
        BornHost: string;
    };
}
