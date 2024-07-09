export interface ListEventStreamingsResponse {
    /**
     * 错误信息。
     * @example `The event streaming [xxxx] not existed!
    `
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `283FF852-C4B8-58C9-9777-F88A5A16****`
     */
    RequestId: string;
    /**
     * 事件流列表。
     */
    Data: {
        /**
         * 事件流列表。
         */
        EventStreamings: {
            /**
             * 事件流名称。
             * @example `name`
             */
            EventStreamingName: string;
            /**
             * 事件流描述信息。
             * @example `demo`
             */
            Description: string;
            /**
             * 事件提供方。
             */
            Source: {
                /**
                 * Source MNS Parameters
                 */
                SourceMNSParameters: {
                    /**
                     * 地域ID。
                     * @example `cn-zhangjiakou`
                     */
                    RegionId: string;
                    /**
                     * 消息服务MNS的Queue的名称。
                     * @example `work4`
                     */
                    QueueName: string;
                    /**
                     * 是否开启Base64编码。
                     * @example `true`
                     */
                    IsBase64Decode: boolean;
                };
                /**
                 * Source RabbitMQ Parameters
                 */
                SourceRabbitMQParameters: {
                    /**
                     * 地域ID。
                     * @example `cn-zhangjiakou`
                     */
                    RegionId: string;
                    /**
                     * 消息队列RabbitMQ版的实例的ID。
                     * @example `dbaudit-cn-7mz2hqo****`
                     */
                    InstanceId: string;
                    /**
                     * 消息队列RabbitMQ版实例的Vhost的名称。
                     * @example `eb-connect
                    `
                     */
                    VirtualHostName: string;
                    /**
                     * 消息队列RabbitMQ版实例的Queue的名称。
                     * @example `liuyang`
                     */
                    QueueName: string;
                };
                /**
                 * Source RocketMQ Parameters
                 */
                SourceRocketMQParameters: {
                    /**
                     * 消息队列RocketMQ版的地域ID。
                     * @example `cn-chengdu`
                     */
                    RegionId: string;
                    /**
                     * 消息队列RocketMQ版的实例id。
                     * @example `i-f8zbher64dlm58pl****
                    `
                     */
                    InstanceId: string;
                    /**
                     * 消息的Topic。
                     * @example `topic_add_anima`
                     */
                    Topic: string;
                    /**
                     * 消息的过滤标签
                     * @example `v1`
                     */
                    Tag: string;
                    /**
                     * 消息的消费位点。取值说明如下：
                     * CONSUMEFROMLASTOFFSET：从最新位点开始消费。
                     * CONSUMEFROMFIRSTOFFSET：从最早位点开始消费。
                     * CONSUMEFROMTIMESTAMP：从指定时间点的位点开始消费。
                     * @example `CONSUMEFROMTIMESTAMP`
                     */
                    Offset: string;
                    /**
                     * 消息队列RocketMQ版的Group ID。
                     * @example `GID_group1`
                     */
                    GroupID: string;
                    /**
                     * 时间戳。仅当参数Offset取值为CONSUMEFROMTIMESTAMP时，该参数有效。
                     * @example `1670742074043`
                     */
                    Timestamp: number;
                    /**
                     * 实例类型。
                     * @example `2`
                     */
                    InstanceType: string;
                    /**
                     * 实例接入点。
                     * @example `registry-vpc.cn-hangzhou.aliyuncs.com`
                     */
                    InstanceEndpoint: string;
                    /**
                     * 鉴权类型。
                     * @example `ACL`
                     */
                    AuthType: string;
                    /**
                     * 实例用户名。
                     * @example `admin**`
                     */
                    InstanceUsername: string;
                    /**
                     * 实例密码。
                     * @example `123`
                     */
                    InstancePassword: string;
                    /**
                     * 专有网络VPC的ID。
                     * @example `vpc-bp1a4gmlk31hy***l3ss`
                     */
                    InstanceVpcId: string;
                    /**
                     * 实例交换机信息。
                     * @example `vsw-m5ev8asdc6h123456****
                    `
                     */
                    InstanceVSwitchIds: string;
                    /**
                     * 实例安全组信息
                     * @example `sg-m5edtu24f12345****
                    `
                     */
                    InstanceSecurityGroupId: string;
                    /**
                     * 实例网络信息：
                     * - PublicNetwork
                     * - PrivateNetwork
                     * @example `PublicNetwork`
                     */
                    InstanceNetwork: string;
                    BodyDataType: string;
                    Network: string;
                    FilterType: string;
                    FilterSql: string;
                    VpcId: string;
                    VSwitchIds: string;
                    SecurityGroupId: string;
                };
                /**
                 * Source Kafka Parameters
                 */
                SourceKafkaParameters: {
                    /**
                     * 实例所在地域id。
                     * @example `cn-chengdu`
                     */
                    RegionId: string;
                    /**
                     * 实例id。
                     * @example `bastionhost-cn-i7m2gwt****`
                     */
                    InstanceId: string;
                    /**
                     * Topic名称。
                     * @example `topic_empower_1642473600414
                    `
                     */
                    Topic: string;
                    /**
                     * 订阅该Topic的消费者所对应的Group ID。
                     * @example `GID_TEST`
                     */
                    ConsumerGroup: string;
                    /**
                     * 偏移量。
                     * @example `latest`
                     */
                    OffsetReset: string;
                    /**
                     * 网络配置 ：默认值Default，vpc网络是PublicNetwork。
                     * @example `Default`
                     */
                    Network: string;
                    /**
                     * 用户的VPC ID。
                     * @example `vpc-wz9ki1qdlx3cx5cbf****`
                     */
                    VpcId: string;
                    /**
                     * 交换机ID。
                     * @example `vsw-bp1rmi8rind7eo50c****`
                     */
                    VSwitchIds: string;
                    /**
                     * 安全组ID。
                     * @example `sg-5ud5f3p0rqqis69****eho7cp`
                     */
                    SecurityGroupId: string;
                    ValueDataType: string;
                };
                /**
                 * Source MQTT源
                 */
                SourceMQTTParameters: {
                    /**
                     * 地域ID。
                     * @example `cn-qingdao`
                     */
                    RegionId: string;
                    /**
                     * 实例id。
                     * @example `bastionhost-cn-zvp27kc****`
                     */
                    InstanceId: string;
                    /**
                     * Topic名称。
                     * @example `migration_instance`
                     */
                    Topic: string;
                    BodyDataType: string;
                };
                /**
                 * Source DTS源
                 */
                SourceDTSParameters: {
                    /**
                     * 任务id。
                     * @example `1611b337285f44e2936a2c4170****`
                     */
                    TaskId: string;
                    /**
                     * 数据订阅通道的网络地址及端口号信息。
                     * @example `无`
                     */
                    BrokerUrl: string;
                    /**
                     * 数据订阅通道的订阅Topic。
                     * @example `TP_TEST_UNDERWRITE_ISSUE
                    `
                     */
                    Topic: string;
                    /**
                     * 消费组ID。
                     * @example `HG9`
                     */
                    Sid: string;
                    /**
                     * 消费组的账号。
                     * @example `admin`
                     */
                    Username: string;
                    /**
                     * 消费组的账号密码。
                     * @example `123456`
                     */
                    Password: string;
                    /**
                     * 消费位点，即SDK客户端消费第一条数据的时间戳，格式为Unix时间戳。
                     * @example `1620962769`
                     */
                    InitCheckPoint: string;
                };
                /**
                 * Source SLS源
                 */
                SourceSLSParameters: {
                    /**
                     * 日志服务SLS的日志项目。
                     * @example `dmmzk`
                     */
                    Project: string;
                    /**
                     * 日志服务SLS的日志库。
                     * @example `waf-logstore
                    `
                     */
                    LogStore: string;
                    /**
                     * 订阅该Topic的消费者所对应的Group ID。
                     * @example `go-dts-shelf-group`
                     */
                    ConsumerGroup: string;
                    /**
                     * 起始消费位点，可以选择最早或最新位点，分别对应“begin”，“end”，也可以从指定时间开始消费，以秒为单位。
                     * @example `begin`
                     */
                    ConsumePosition: string;
                    /**
                     * 授权事件总线EventBridge使用此角色读取SLS日志内容时，需满足条件：在RAM控制台创建服务所使用的角色时，需要选择“阿里云服务”，并且“受信服务”需要选择“事件总线”。
                     * @example `testRole`
                     */
                    RoleName: string;
                };
                SourcePrometheusParameters: {
                    RegionId: string;
                    ClusterId: string;
                    DataType: string;
                    Labels: string;
                };
                SourceCustomizedKafkaParameters: {
                    InstanceId: string;
                };
                SourceCustomizedKafkaConnectorParameters: {
                    ConnectorPackageUrl: string;
                    ConnectorParameters: {
                        Name: string;
                        Config: any;
                    };
                    WorkerParameters: any;
                };
                SourceApacheKafkaParameters: {
                    Bootstraps: string;
                    Topic: string;
                    ConsumerGroup: string;
                    OffsetReset: string;
                    ValueDataType: string;
                    VpcId: string;
                    VSwitchIds: string;
                    SecurityGroupId: string;
                    NetworkType: string;
                    SecurityProtocol: string;
                    SaslMechanism: string;
                    SaslUser: string;
                    SaslPassword: string;
                };
            };
            /**
             * 事件过滤规则，如果不指定表示匹配全部事件。
             * @example `无`
             */
            FilterPattern: string;
            /**
             * Transform 相关配置
             */
            Transforms: {
                /**
                 * 云产品的 ARN，比如函数计算中函数的 ARN
                 * @example `acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func
                `
                 */
                Arn: string;
            }[];
            /**
             * 事件目标。
             */
            Sink: {
                /**
                 * MNS事件目标。
                 */
                SinkMNSParameters: {
                    /**
                     * 目标服务类型为消息服务MNS。
                     */
                    QueueName: {
                        /**
                         * 消息服务MNS的Queue的名称。
                         * @example `MyQueue`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息内容。
                     */
                    Body: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 是否开启Base64编码。
                     */
                    IsBase64Encode: {
                        /**
                         * 开启Base64编码。
                         * @example `true`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                };
                /**
                 * 函数目标。
                 */
                SinkFcParameters: {
                    /**
                     * 服务的名称。
                     */
                    ServiceName: {
                        /**
                         * 服务的名称。
                         * @example `myService`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 函数名称。
                     */
                    FunctionName: {
                        /**
                         * 函数名称。
                         * @example `mFunction`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 投递并发度，最小为1。
                     */
                    Concurrency: {
                        /**
                         * 投递并发度，最小为1。
                         * @example `1`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 函数所属服务的别名。
                     */
                    Qualifier: {
                        /**
                         * 函数所属服务的别名。
                         * @example `LATEST`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 同步或则异步。
                     * - Sync：同步。
                     * - Async：异步。
                     */
                    InvocationType: {
                        /**
                         * 同步或则异步。
                         * - Sync：同步。
                         * - Async：异步。
                         * @example `Async`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 发送给函数的内容体。
                     */
                    Body: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                };
                /**
                 * Sink Rabbitmq的参数。
                 */
                SinkRabbitMQParameters: {
                    /**
                     * 目标服务类型为消息队列RabbitMQ版。
                     */
                    InstanceId: {
                        /**
                         * 消息队列RabbitMQ版的实例ID。
                         * @example `si-296cd57939a1421b****`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息队列RabbitMQ版实例的Vhost的名称。
                     */
                    VirtualHostName: {
                        /**
                         * 消息队列RabbitMQ版实例的Vhost的名称。
                         * @example `rabbit-host
                        `
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 目标类型。
                     */
                    TargetType: {
                        /**
                         * 目标类型。取值说明如下：
                         * Exchange：Exchange模式。
                         * Queue：Queue模式。
                         * @example `Queue`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * Exchange模式。
                     * 仅当参数TargetType配置为Exchange时，需配置此参数。
                     */
                    Exchange: {
                        /**
                         * 消息队列RabbitMQ版实例的Exchange的名称。
                         * @example `a_exchange`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息的路由规则。
                     * 仅当参数TargetType配置为Exchange时，需配置此参数。
                     */
                    RoutingKey: {
                        /**
                         * 消息的路由规则。
                         * @example `housekeeping`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * Queue模式。
                     * 仅当参数TargetType配置为Queue时，需配置此参数。
                     */
                    QueueName: {
                        /**
                         * 实例的Queue的名称。
                         * @example `MyQueue`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息内容。
                     */
                    Body: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 消息ID。
                     */
                    MessageId: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 过滤属性。
                     */
                    Properties: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                };
                /**
                 * Sink kafka参数。
                 */
                SinkKafkaParameters: {
                    /**
                     * 目标服务类型为消息队列Kafka版。
                     */
                    InstanceId: {
                        /**
                         * 实例ID。
                         * @example `Defaut_1283278472_sad****`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 主题名称。
                     */
                    Topic: {
                        /**
                         * 主题名称。
                         * @example `topic`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 写入Kafka确认模式：
                     * - acks=0：无需服务端的Response、性能较高、丢数据风险较大。
                     * - acks=1：服务端主节点写成功即返回Response、性能中等、丢数据风险中等、主节点宕机可能导致数据丢失；
                     * - acks=all：服务端主节点写成功且备节点同步成功才返回Response、性能较差、数据较为安全、主节点和备节点都宕机才会导致数据丢失。
                     */
                    Acks: {
                        /**
                         * 写入Kafka确认模式：
                         * - acks=0：无需服务端的Response、性能较高、丢数据风险较大。
                         * - acks=1：服务端主节点写成功即返回Response、性能中等、丢数据风险中等、主节点宕机可能导致数据丢失；
                         * - acks=all：服务端主节点写成功且备节点同步成功才返回Response、性能较差、数据较为安全、主节点和备节点都宕机才会导致数据丢失。
                         * @example `1`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息的标识。
                     */
                    Key: {
                        /**
                         * 消息的标识。
                         * @example `key`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息体内容。
                     */
                    Value: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                };
                /**
                 * Sink RocketMQ Parameters
                 */
                SinkRocketMQParameters: {
                    /**
                     * 目标服务类型为消息队列RocketMQ版。
                     */
                    InstanceId: {
                        /**
                         * 消息队列RocketMQ版的实例ID。
                         * @example `MQ_INST_164901546557****_BAAN****
                        `
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息队列RocketMQ版实例的Topic。
                     */
                    Topic: {
                        /**
                         * 消息队列RocketMQ版实例的Topic。
                         * @example `topic`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 消息内容。
                     */
                    Body: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 过滤属性。
                     */
                    Properties: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 过滤属性。
                     */
                    Keys: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 过滤属性。
                     */
                    Tags: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    InstanceType: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    InstanceEndpoint: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    InstanceUsername: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    InstancePassword: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    VpcId: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    VSwitchIds: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    SecurityGroupId: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    Network: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                };
                /**
                 * Sink SLS Parameters
                 */
                SinkSLSParameters: {
                    /**
                     * 日志服务SLS的日志项目。
                     */
                    Project: {
                        /**
                         * 日志服务SLS的日志项目。
                         * @example `test-project
                        `
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 日志服务SLS的日志库。
                     */
                    LogStore: {
                        /**
                         * 日志服务SLS的日志库。
                         * @example `test-logstore
                        `
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 日志所在的topic，对应SLS 保留字段“topic”。
                     */
                    Topic: {
                        /**
                         * 日志所在的topic，对应SLS 保留字段“topic”。
                         * @example `topic`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 发送给SLS的内容。
                     */
                    Body: {
                        /**
                         * 转换前的值。
                         * @example `{
                              "key": "value"
                        }`
                         */
                        Value: string;
                        /**
                         * 转换的格式。
                         * @example `TEMPLATE`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `The value of ${key} is ${value}!
                        `
                         */
                        Template: string;
                    };
                    /**
                     * 授权事件总线EventBridge使用此角色读取SLS日志内容时，需满足条件：在RAM控制台创建服务所使用的角色时，需要选择“阿里云服务”，并且“受信服务”需要选择“事件总线”。
                     */
                    RoleName: {
                        /**
                         * 授权事件总线EventBridge使用此角色读取SLS日志内容时，需满足条件：在RAM控制台创建服务所使用的角色时，需要选择“阿里云服务”，并且“受信服务”需要选择“事件总线”。
                         * @example `test-role`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 无
                         * @example `无`
                         */
                        Template: string;
                    };
                    ContentType: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    ContentSchema: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                };
                /**
                 * Sink Fnf 参数
                 */
                SinkFnfParameters: {
                    /**
                     * 流程名称
                     */
                    FlowName: {
                        /**
                         * 流程名称
                         * @example `test-streaming-fnf
                        `
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 执行名称
                     */
                    ExecutionName: {
                        /**
                         * 执行名称
                         * @example `123`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 执行输入信息
                     */
                    Input: {
                        /**
                         * 执行输入信息
                         * @example `123`
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `无`
                         */
                        Template: string;
                    };
                    /**
                     * 角色配置
                     */
                    RoleName: {
                        /**
                         * 角色配置
                         * @example `Al****FNF-x****
                        `
                         */
                        Value: string;
                        /**
                         * 转换的格式。默认为CONSTANT。
                         * @example `CONSTANT`
                         */
                        Form: string;
                        /**
                         * 模板样式。
                         * @example `无`
                         */
                        Template: string;
                    };
                };
                SinkDataHubParameters: {
                    Project: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    Topic: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    TopicType: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    TopicSchema: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    Body: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                    RoleName: {
                        Value: string;
                        Form: string;
                        Template: string;
                    };
                };
                SinkCustomizedKafkaParameters: {
                    InstanceId: string;
                };
                SinkCustomizedKafkaConnectorParameters: {
                    ConnectorPackageUrl: string;
                    ConnectorParameters: {
                        Name: string;
                        Config: any;
                    };
                    WorkerParameters: any;
                };
            };
            /**
             * 运行环境参数。
             */
            RunOptions: {
                /**
                 * 并发数。
                 * @example `2`
                 */
                MaximumTasks: number;
                /**
                 * 事件推送失败时的重试策略。
                 */
                RetryStrategy: {
                    /**
                     * 重试策略：BACKOFF_RETRY（退避重试）和EXPONENTIAL_DECAY_RETRY（指数衰减重试）。
                     * @example `EXPONENTIAL_DECAY_RETRY`
                     */
                    PushRetryStrategy: string;
                    /**
                     * 最大重试时间。
                     * @example `512`
                     */
                    MaximumEventAgeInSeconds: number;
                    /**
                     * 最大重试次数。
                     * @example `2`
                     */
                    MaximumRetryAttempts: number;
                };
                /**
                 * 异常容忍策略：NONE（不容忍异常）、ALL（容忍所有异常）。
                 * @example `ALL`
                 */
                ErrorsTolerance: string;
                /**
                 * 是否启用死信队列。默认不启用死信队列，超过重试策略后的消息将被丢弃。
                 */
                DeadLetterQueue: {
                    /**
                     * 死信队列ARN。
                     * @example `acs:ram::159787121179****:role/aliyunsaedefaultrole`
                     */
                    Arn: string;
                };
                /**
                 * 攒批窗口。
                 */
                BatchWindow: {
                    /**
                     * 窗口中最大可容纳的事件数量。当达到此阈值，会触发窗口内的数据往下游推送。当存在多个窗口时，有一个窗口满足即触发。
                     * @example `100`
                     */
                    CountBasedWindow: number;
                    /**
                     * 窗口中最大可容纳的时间范围内的事件（单位秒）。当达到此阈值，会触发窗口内的数据往下游推送。当存在多个窗口时，有一个窗口满足即触发。
                     * @example `10`
                     */
                    TimeBasedWindow: number;
                };
                LogDelivery: {
                    SLSLogParameters: {
                        ProjectName: string;
                        LogstoreName: string;
                    }[];
                    KafkaLogParameters: {
                        Endpoint: string;
                        InstanceId: string;
                        Topic: string;
                    }[];
                };
                ScaledObject: {
                    MinReplicaCount: number;
                    MaxReplicaCount: number;
                    Triggers: {
                        Type: string;
                        Metadata: {
                            Type: string;
                            Value: number;
                        };
                    }[];
                };
                RoleName: string;
                Network: {
                    VpcId: string;
                    VSwitchIds: string[];
                    SecurityGroupId: string;
                };
                ResourceSpec: {
                    Resources: {
                        Type: string;
                        Value: number;
                    }[];
                };
            };
            /**
             * 获取到的事件流的状态。
             * @example `RUNNING`
             */
            Status: string;
        }[];
        /**
         * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。下次调用时，需要将此设置到入参NextToken中。
         * @example `177`
         */
        NextToken: string;
        /**
         * 总共记录数。
         * @example `10`
         */
        Total: number;
    };
    /**
     * 接口返回码：
     * Success：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
