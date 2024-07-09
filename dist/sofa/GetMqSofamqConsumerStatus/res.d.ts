export interface GetMqSofamqConsumerStatusResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 查询结果
     */
    Data: {
        /**
         * 总消费 TPS
         * @example `0`
         */
        ConsumeTps: string;
        /**
         * 订阅关系是否一致
         * @example `true`
         */
        SubscriptionSame: boolean;
        /**
         * 消费模型。取值说明如下：CLUSTERING：集群消费模式；BROADCASTING：广播消费模式。
         * @example `CLUSTERING`
         */
        ConsumeModel: string;
        /**
         * 集群总的消费堆积
         * @example `197`
         */
        TotalDiff: number;
        /**
         * 最后更新时间
         * @example `1566883844954`
         */
        LastTimestamp: number;
        /**
         * 延迟时间
         * @example `100857`
         */
        DelayTime: number;
        /**
         * 是否在线
         * @example `true`
         */
        Online: boolean;
        /**
         * 实例 ID
         * @example `MQ_INST_111111111111_DOxxxxxx	 `
         */
        InstanceId: string;
        /**
         * 客户端 Rebalance 是否正常。取值说明如下：true：正常；false：不正常。
         * @example `true`
         */
        RebalanceOk: boolean;
        /**
         * 该集群当前在线客户端信息
         */
        ConnectionSet: {
            /**
             * 宿主机 IP 或公网 IP
             * @example `42.120.74.**`
             */
            RemoteIp: string;
            /**
             * 该消费实例的地址和端口
             * @example `30.5.121.**`
             */
            ClientAddr: string;
            /**
             * 消费端版本
             * @example `V4_3_6_SNAPSHOT`
             */
            Version: string;
            /**
             * 消费端语言
             * @example `JAVA`
             */
            Language: string;
            /**
             * 消费实例的 ID
             * @example `30.5.121.**@25560#-1999745829#-1737591554#458773089270275	 `
             */
            ClientId: string;
        }[];
        /**
         * 该集群在线客户端详细信息，包含 Jstack、消费 RT 时间等信息
         */
        ConsumerConnectionInfoList: {
            /**
             * 连接信息
             * @example `**`
             */
            Connection: string;
            /**
             * 消费模型，取值说明如下：CLUSTERING：集群消费模式；BROADCASTING：广播消费模式。
             * @example `CLUSTERING`
             */
            MessageModel: string;
            /**
             *  客户端版本号
             * @example `V4_3_6`
             */
            Version: string;
            /**
             * 开始时间
             * @example `1570701361528`
             */
            StartTimestamp: number;
            /**
             * 最后更新时间
             * @example `1570701368114`
             */
            LastTimestamp: number;
            /**
             * PUSH/PULL
             * @example `PUSH`
             */
            ConsumeType: string;
            /**
             * 消费线程数
             * @example `20`
             */
            ThreadCount: number;
            /**
             * 客户端语言
             * @example `JAVA`
             */
            Language: string;
            /**
             * 消费实例的 ID
             * @example `30.5.**.**@25560#-1999745829#-1737591554#458773089270275`
             */
            ClientId: string;
            /**
             * Jstack 堆栈信息
             */
            Jstack: {
                /**
                 * 线程名称
                 * @example `ConsumeMessageThread_0`
                 */
                Thread: string;
                TrackList: string[];
            }[];
            /**
             * 实时状态统计
             */
            RunningDataList: {
                /**
                 * 订阅方的 Group ID
                 * @example `000`
                 */
                GroupId: string;
                /**
                 * 堆积量
                 * @example `100`
                 */
                Diff: number;
                /**
                 * 消费 RT 时间，单位 ms
                 * @example `0.1`
                 */
                Rt: string;
                /**
                 * 订阅的 Topic 名称
                 * @example `test-mq_topic`
                 */
                Topic: string;
                /**
                 * 每小时内消费失败的消息数统计
                 * @example `0`
                 */
                FailedCountPerHour: number;
                /**
                 * 消费消息成功的 TPS 统计
                 * @example `0.1`
                 */
                OkTps: string;
                /**
                 * 消费消息失败的 TPS 统计
                 * @example `0.1`
                 */
                FailedTps: string;
            }[];
            /**
             * 订阅关系集合
             */
            SubscriptionSet: {
                /**
                 * 订阅该 Topic 的子类别 Tag 表达式
                 * @example `*`
                 */
                SubString: string;
                /**
                 *  订阅关系版本号，为自增 Long 型
                 * @example `1570701364301`
                 */
                SubVersion: number;
                /**
                 * 订阅的 Topic 名称
                 * @example `test-mq_topic`
                 */
                Topic: string;
                TagsSet: string[];
            }[];
        }[];
        /**
         * 各个 Topic 的消费情况
         */
        DetailInTopicList: {
            /**
             * 该 Topic 消费总堆积数
             * @example `0`
             */
            TotalDiff: number;
            /**
             * 延迟时间
             * @example `0`
             */
            DelayTime: number;
            /**
             * 最后更新时间
             * @example `1570701259403`
             */
            LastTimestamp: number;
            /**
             * Topic 名称
             * @example `test-mq_topic`
             */
            Topic: string;
        }[];
    };
}
