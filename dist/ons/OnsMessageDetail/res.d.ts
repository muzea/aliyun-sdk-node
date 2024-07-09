export interface OnsMessageDetailResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `EAE5BE23-37A1-4354-94D6-E44AE17E****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 消息大小。单位：KB。
         * @example `2`
         */
        StoreSize: number;
        /**
         * 消息重试消费的次数。
         * @example `0`
         */
        ReconsumeTimes: number;
        /**
         * 消息被服务端存储的时间戳。单位：毫秒。
         * @example `1570761026708`
         */
        StoreTimestamp: number;
        /**
         * 消息体内容经过Base 64算法加密后的字符串。
         * @example `aGVsbG8=`
         */
        Body: string;
        /**
         * 云消息队列 RocketMQ 版实例ID。
         * @example `MQ_INST_184681981******_BXig0x6A`
         */
        InstanceId: string;
        /**
         * 消息ID，即Message ID。
         * @example `1E0578FE110F18B4AAC235C05F2*****`
         */
        MsgId: string;
        /**
         * 存储该消息的服务器实例。
         * @example `11.220.***.***:10911`
         */
        StoreHost: string;
        /**
         * 消息所属的Topic。
         * @example `test-mq_topic`
         */
        Topic: string;
        /**
         * 消息属性列表。
         */
        PropertyList: {
            /**
             * 消息属性的取值。
             * @example `MSG_REGION`
             */
            Value: string;
            /**
             * 消息属性。取值说明如下：
             * - **TRACE_ON**：是否有消息轨迹。
             * - **MSG_REGION**：消息的Topic所属实例的地域ID。
             * - **\_\_MESSAGE\_DECODED\_TIME**：消息被解码的时间。
             * - **\_\_BORNHOST**：消息生产者客户端的IP地址。
             * - **UNIQ_KEY**：消息的唯一标识，即Message ID。
             * 更多概念信息请参见[名词解释](~~29533~~)。
             * @example `cn-hangzhou`
             */
            Name: string;
        }[];
        /**
         * 消息生成的时间戳。单位：毫秒。
         * @example `1570761026630`
         */
        BornTimestamp: number;
        /**
         * 消息体CRC校验值。
         * @example `907060870`
         */
        BodyCRC: number;
        /**
         * 生成该消息的客户端实例。
         * @example `42.120.**.**:64646`
         */
        BornHost: string;
        /**
         * 消息体内容。
         * @example `hello`
         */
        BodyStr: string;
    };
}
