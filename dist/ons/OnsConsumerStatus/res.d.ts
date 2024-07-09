export interface OnsConsumerStatusResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `10EDC518-10E7-4B34-92FB-171235FA****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 总消费TPS。
         * @example `0`
         */
        ConsumeTps: number;
        /**
         * 消费模型。取值说明如下：
         * -  **CLUSTERING**：集群消费模式
         * - **BROADCASTING**：广播消费模式
         * 两种订阅模式的详细信息，请参见[集群消费和广播消费](~~43163~~)。
         * @example `CLUSTERING`
         */
        ConsumeModel: string;
        ConnectionSet: {
            /**
             * 该集群当前在线客户端信息。
             */
            ConnectionDo: {
                /**
                 * 宿主机IP地址或公网IP地址。
                 * @example `42.120.74.**`
                 */
                RemoteIP: string;
                /**
                 * 消费端版本。
                 * @example `V4_3_6_SNAPSHOT`
                 */
                Version: string;
                /**
                 * 该消费实例的地址和端口。
                 * @example `30.5.121.**`
                 */
                ClientAddr: string;
                /**
                 * 消费端语言。
                 * @example `JAVA`
                 */
                Language: string;
                /**
                 * 消费实例的ID。
                 * @example `30.5.121.**@25560#-1999745829#-1737591554#458773089270275`
                 */
                ClientId: string;
            }[];
        };
        /**
         * 集群总的消费堆积。
         * @example `197`
         */
        TotalDiff: number;
        ConsumerConnectionInfoList: {
            /**
             * 该集群在线客户端详细信息，包含Jstack、消费RT时间等信息。如需获取详细信息，请确保将**Detail**请求参数设置为**true**。否则返回值为空。
             */
            ConsumerConnectionInfoDo: {
                /**
                 * 消费模型。取值说明如下：
                 * -  **CLUSTERING**：集群消费模式
                 * - **BROADCASTING**：广播消费模式
                 * 两种订阅模式的详细信息，请参见[集群消费和广播消费](~~43163~~)。
                 * @example `CLUSTERING`
                 */
                ConsumeModel: string;
                RunningDataList: {
                    /**
                     * 实时状态统计。
                     */
                    ConsumerRunningDataDo: {
                        /**
                         * 消费RT时间，单位：毫秒。
                         * @example `0`
                         */
                        Rt: number;
                        /**
                         * 订阅的Topic名称。
                         * @example `test-mq_topic`
                         */
                        Topic: string;
                        /**
                         * 每小时内消费失败的消息数统计。
                         * @example `0`
                         */
                        FailedCountPerHour: number;
                        /**
                         * 消费消息成功的TPS统计。
                         * @example `0`
                         */
                        OkTps: number;
                        /**
                         * 消费消息失败的TPS统计。
                         * @example `0`
                         */
                        FailedTps: number;
                    }[];
                };
                SubscriptionSet: {
                    /**
                     * 订阅关系集合。
                     */
                    SubscriptionData: {
                        /**
                         * 订阅该Topic的子类别Tag表达式。
                         * @example `*`
                         */
                        SubString: string;
                        /**
                         * 订阅关系版本号，为自增Long型。
                         * @example `1570701364301`
                         */
                        SubVersion: number;
                        /**
                         * 订阅的Topic名称。
                         * @example `test-mq_topic`
                         */
                        Topic: string;
                        TagsSet: {
                            /**
                             * 订阅的Tag集合。
                             */
                            Tag: string[];
                        };
                    }[];
                };
                Jstack: {
                    /**
                     * Jstack堆栈信息。如需获取Jstack信息，请确保将**NeedJstack**入参设置为**true**。否则返回值为空。
                     */
                    ThreadTrackDo: {
                        TrackList: {
                            /**
                             * Jstack堆栈信息字符串。
                             */
                            Track: string[];
                        };
                        /**
                         * 线程名称。
                         * @example `ConsumeMessageThread_0`
                         */
                        Thread: string;
                    }[];
                };
                /**
                 * 最后消费时间。
                 * 该参数值的格式为毫秒级Unix时间戳。
                 * @example `1570701368114`
                 */
                LastTimeStamp: number;
                /**
                 * 消费开始时间。
                 * 该参数值的格式为毫秒级Unix时间戳。
                 * @example `1570701361528`
                 */
                StartTimeStamp: number;
                /**
                 * 客户端语言。
                 * @example `JAVA`
                 */
                Language: string;
                /**
                 * 消费实例的ID。
                 * @example `30.5.**.**@25560#-1999745829#-1737591554#458773089270275`
                 */
                ClientId: string;
                /**
                 * 连接信息。
                 * @example `**`
                 */
                Connection: string;
                /**
                 * 客户端版本号。
                 * @example `V4_3_6`
                 */
                Version: string;
                /**
                 * 消费者消费消息的模式。取值说明如下：
                 * - **PUSH**：云消息队列 RocketMQ 版服务端主动向消费者推送消息。
                 * - **PULL**：消费者主动向云消息队列 RocketMQ 版服务端拉取消息。
                 * @example `PUSH`
                 */
                ConsumeType: string;
                /**
                 * 消费线程数。
                 * @example `20`
                 */
                ThreadCount: number;
            }[];
        };
        /**
         * 实例ID。
         * @example `MQ_INST_111111111111_DOxxxxxx`
         */
        InstanceId: string;
        DetailInTopicList: {
            /**
             * 各个Topic的消费情况。如需获取详细信息，请确保将**Detail**请求参数设置为**true**。否则返回值为空。
             */
            DetailInTopicDo: {
                /**
                 * 指定Topic的消费延迟时间。单位：毫秒。
                 * @example `0`
                 */
                DelayTime: number;
                /**
                 * 该Topic消费总堆积数。
                 * @example `0`
                 */
                TotalDiff: number;
                /**
                 * 最后消费时间。
                 * 该参数值的格式为毫秒级Unix时间戳。
                 * @example `1570701259403`
                 */
                LastTimestamp: number;
                /**
                 * Topic名称。
                 * @example `test-mq_topic`
                 */
                Topic: string;
            }[];
        };
        /**
         * 订阅关系是否一致。
         * @example `true`
         */
        SubscriptionSame: boolean;
        /**
         * 指定Group ID所订阅的所有Topic中的最大消费延时时间。单位：毫秒。
         * @example `100857`
         */
        DelayTime: number;
        /**
         * 最后消费时间。
         * 该参数值的格式为毫秒级Unix时间戳。
         * @example `1566883844954`
         */
        LastTimestamp: number;
        /**
         * 是否在线。
         * @example `true`
         */
        Online: boolean;
        /**
         * 客户端Rebalance是否正常。取值说明如下：
         * - **true**：正常
         * - **false**：不正常
         * @example `true`
         */
        RebalanceOK: boolean;
    };
}
