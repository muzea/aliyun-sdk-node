export interface ListUserDefinedEventSourcesResponse {
    /**
     * 错误信息。
     * @example `InvalidArgument`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5169654A-7059-57E3-BFD9-33C7E012****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 当指定 Limit 时，如果还有多余的返回值则会返回 NextToken。
         * @example `100`
         */
        NextToken: string;
        /**
         * 总条数
         * @example `18`
         */
        Total: number;
        /**
         * 事件源列表。
         */
        EventSourceList: {
            /**
             * 查询到的事件源的名称。
             * @example `rocketmq.source`
             */
            Name: string;
            /**
             * 查询到的事件源在阿里云上的统一资源标识（ARN）。
             * @example `acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source`
             */
            Arn: string;
            /**
             * 查询到的事件源的状态。
             * 取值说明如下：
             * Activated：激活状态
             * @example `Activated`
             */
            Status: string;
            /**
             * 查询到的事件源的类型。
             * 取值说明如下：
             * UserDefined：外部事件源
             * @example `UserDefined`
             */
            Type: string;
            /**
             * 创建时间戳。
             * @example `1607071602000`
             */
            Ctime: number;
            /**
             * 事件来源类型。
             * @example `RabbitMQ`
             */
            ExternalSourceType: string;
            /**
             * 事件总线的名称。
             * @example `test-custom-bus`
             */
            EventBusName: string;
            /**
             * MNS事件源参数。
             */
            SourceMNSParameters: {
                /**
                 * 消息服务MNS的队列所在的地域。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * 消息服务MNS的Queue的名称。
                 * @example `queue.openapi-sign-callback`
                 */
                QueueName: string;
                /**
                 * 是否开启Base64解码。默认为勾选，即开启Base64解码。
                 * @example `true`
                 */
                IsBase64Decode: boolean;
            };
            /**
             * 请求参数SourceRocketMQParameters。
             */
            SourceRocketMQParameters: {
                /**
                 * 消息队列RocketMQ版的实例所属地域。
                 * @example `cn-shenzhen`
                 */
                RegionId: string;
                /**
                 * 消息队列RocketMQ版的实例ID。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `bastionhost-cn-7mz293s9d1p`
                 */
                InstanceId: string;
                /**
                 * 消息队列RocketMQ版实例的Topic名称。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `migration_instance`
                 */
                Topic: string;
                /**
                 * 消息的过滤标签。
                 * @example `dataact`
                 */
                Tag: string;
                /**
                 * 消息的消费位点。取值说明如下：
                 * - CONSUME_FROM_LAST_OFFSET：从最新位点开始消费。
                 * - CONSUME_FROM_FIRST_OFFSET：从最早位点开始消费。
                 * - CONSUME_FROM_TIMESTAMP：从指定时间点的位点开始消费。
                 * 默认值：CONSUME_FROM_LAST_OFFSET。
                 * @example `CONSUMEFROMLASTOFFSET`
                 */
                Offset: string;
                /**
                 * 时间戳。仅当参数Offset取值为CONSUME_FROM_TIMESTAMP时，该参数有效。
                 * @example `1664591760`
                 */
                Timestamp: number;
                /**
                 * 消息队列RocketMQ版的Group ID。
                 * @example `GID-test`
                 */
                GroupId: string;
                /**
                 * 实例类型。只能填写CLOUD_4（云上4.0实例）、CLOUD_5（云上5.0实例）和SELF_BUILT（自建MQ）。
                 * @example `CLOUD_5`
                 */
                InstanceType: string;
                /**
                 * 实例网络。
                 * @example `PublicNetwork`
                 */
                InstanceNetwork: string;
                /**
                 * 专有网络VPC的ID。
                 * @example `vpc-***`
                 */
                InstanceVpcId: string;
                /**
                 * 交换机ID。
                 * @example `vsw-bp1iu***`
                 */
                InstanceVSwitchIds: string;
                /**
                 * 安全组ID。
                 * @example `eb-167adad548***`
                 */
                InstanceSecurityGroupId: string;
                /**
                 * ACL或者不填。
                 * @example `ACL`
                 */
                AuthType: string;
                /**
                 * 实例接入点。
                 * @example `registry-vpc.cn-hangzhou.aliyuncs.com`
                 */
                InstanceEndpoint: string;
                /**
                 * 实例用户名。
                 * @example `root`
                 */
                InstanceUsername: string;
                /**
                 * 实例密码。
                 * @example `***`
                 */
                InstancePassword: string;
            };
            /**
             * 请求参数SourceRabbitMQParameters。
             */
            SourceRabbitMQParameters: {
                /**
                 * 消息队列RabbitMQ版实例所在的地域。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * 消息队列RabbitMQ版的实例的ID。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `bastionhost-cn-0ju2x28fj07`
                 */
                InstanceId: string;
                /**
                 * 消息队列RabbitMQ版实例的Vhost的名称。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `eb-connect`
                 */
                VirtualHostName: string;
                /**
                 * 消息队列RabbitMQ版实例的Queue的名称。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `file-upload-queue`
                 */
                QueueName: string;
            };
            /**
             * 请求参数SourceSLSParameters。
             */
            SourceSLSParameters: {
                /**
                 * 日志服务SLS的日志项目。
                 * @example `VideoTestProject`
                 */
                Project: string;
                /**
                 * 日志服务SLS的日志库。
                 * @example `cloudfirewall-logstore`
                 */
                LogStore: string;
                /**
                 * 起始消费位点，可以选择最早或最新位点，分别对应“begin”，“end”，也可以从指定时间开始消费，以秒为单位。
                 * @example `end`
                 */
                ConsumePosition: string;
                /**
                 * 授权事件总线EventBridge使用此角色读取SLS日志内容时，需满足条件：在RAM控制台创建服务所使用的角色时，需要选择“阿里云服务”，并且“受信服务”需要选择“事件总线”。此角色权限策略可参考自定义事件源日志服务SLS。
                 * @example `testRole`
                 */
                RoleName: string;
            };
            /**
             * 请求参数SourceHttpEventParameters。
             */
            SourceHttpEventParameters: {
                /**
                 * 生成的Webhook支持的协议类型。取值说明如下：
                 * - HTTP
                 * - HTTPS
                 * - HTTP&HTTPS
                 * @example `HTTPS`
                 */
                Type: string;
                /**
                 * 生成的Webhook支持的HTTP请求方法。可多选，可选范围如下：
                 * - GET
                 * - POST
                 * - PUT
                 * - PATCH
                 * - DELETE
                 * - HEAD
                 * - OPTIONS
                 * - TRACE
                 * - CONNECT
                 */
                Method: string[];
                /**
                 * 选择安全配置的类型。可选范围如下：
                 * - none：无需配置。
                 * - ip：IP网段。
                 * - referer：安全域名。
                 * @example `none`
                 */
                SecurityConfig: string;
                /**
                 * IP网段安全配置。仅在SecurityConfig取值为ip时，需要设置该参数。可填写IP地址段或IP地址。
                 */
                Ip: string[];
                /**
                 * 安全域名配置。仅在SecurityConfig取值为referer时，需要设置该参数。可填写域名。
                 */
                Referer: string[];
                /**
                 * 公网请求URL。
                 */
                PublicWebHookUrl: string[];
                /**
                 * 内网请求URL。
                 */
                VpcWebHookUrl: string[];
            };
            /**
             * Kafka事件源参数。
             */
            SourceKafkaParameters: {
                /**
                 * 实例ID。
                 * @example `i-2ze6kiwzkebf04s5h8ds`
                 */
                InstanceId: string;
                /**
                 * 订阅该Topic的消费者所对应的Group ID。
                 * @example `test-gid`
                 */
                ConsumerGroup: string;
                /**
                 * 主题名称。
                 * @example `topic_api_1674441611897`
                 */
                Topic: string;
                /**
                 * 消费位点。
                 * @example `earliest`
                 */
                OffsetReset: string;
                /**
                 * 地域ID。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * 并发配额（消费者数）。
                 * @example `2`
                 */
                MaximumTasks: number;
                /**
                 * 网络配置 ：Default（默认网络）和PublicNetwork（自建网络）。
                 * @example `Default`
                 */
                Network: string;
                /**
                 * 安全组ID。
                 * @example `sg-f8zatts5g97x0j***`
                 */
                SecurityGroupId: string;
                /**
                 * VPC ID。
                 * @example `vpc-bp1kz3ohhzgrau2***`
                 */
                VpcId: string;
                /**
                 * 交换机ID。
                 * @example `vsw-bp1hcrxq3mkcik***e`
                 */
                VSwitchIds: string;
            };
            /**
             * 时间事件源参数。
             */
            SourceScheduledEventParameters: {
                /**
                 * Cron 表达式
                 * @example `0 1 * * * *`
                 */
                Schedule: string;
                /**
                 * Cron执行时区。
                 * @example `GMT+0:00`
                 */
                TimeZone: string;
                /**
                 * JSON字符串
                 * @example `{"a": "b"}`
                 */
                UserData: string;
            };
        }[];
    };
    /**
     * 接口返回码：
     * - Success：表示成功。
     * - 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
