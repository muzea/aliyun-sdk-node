export interface CreateEventStreamingRequest {
    /**
     * 事件流的名称。
     * @example `myeventstreaming`
     */
    "EventStreamingName": string;
    /**
     * 事件流的描述。
     * @example `rocketmq2mns`
     */
    "Description"?: string;
    /**
     * 事件过滤规则，如果不指定表示匹配全部事件。
     * @example `无`
     */
    "FilterPattern": string;
    /**
     * 事件提供方。必须选择一种Source，且最多只能选择一种Source进行填选。
     */
    "Source": {
        /**
         * Source MNS 参数
         */
        SourceMNSParameters: {
            /**
             * 地域id。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 队列名称
             * @example `queue_api_1642474203601`
             */
            QueueName: string;
            /**
             * 是否开启Base64编码。默认为true。
             * @example `true`
             */
            IsBase64Decode: boolean;
        };
        /**
         * Source RabbitmQ源
         */
        SourceRabbitMQParameters: {
            /**
             * 地域id，您可以调用[describeregions](~~62010~~)查询。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 消息队列RabbitMQ版实例的实例ID。
             * @example `gtm-cn-k2c2yfg****`
             */
            InstanceId: string;
            /**
             * 消息队列RabbitMQ版实例的Vhost的名称。
             * @example `eb-connect`
             */
            VirtualHostName: string;
            /**
             * 消息队列RabbitMQ版实例的Queue的名称。
             * @example `demo`
             */
            QueueName: string;
        };
        /**
         * Source Kafka源
         */
        SourceKafkaParameters: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例ID。
             * @example `r-8vb64581862c****`
             */
            InstanceId: string;
            /**
             * Topic名称。
             * @example `popvip_center_robot_order`
             */
            Topic: string;
            /**
             * 订阅该Topic的消费者所对应的Group ID。
             * @example `DEFAULT_GROUP`
             */
            ConsumerGroup: string;
            /**
             * 偏移量。
             * @example `latest`
             */
            OffsetReset: string;
            /**
             * 网络配置 ：默认值Default，VPC网络是PublicNetwork。
             * @example `Default`
             */
            Network: string;
            /**
             * VPC ID。
             * @example `vpc-8vblalsi0vbhizr77****`
             */
            VpcId: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp179l3llg3jjxwrq72****`
             */
            VSwitchIds: string;
            /**
             * 安全组ID。
             * @example `sg-bp1iv19sp1msc7zot4****`
             */
            SecurityGroupId: string;
            ValueDataType: string;
        };
        /**
         * Source RocketMQ源
         */
        SourceRocketMQParameters: {
            /**
             * 地域ID。
             * @example `cn-qingdao`
             */
            RegionId: string;
            /**
             * 消息队列RocketMQ版的实例所属地域。
             * @example `default_C56C36026****`
             */
            InstanceId: string;
            /**
             * 消息服务的主题。
             * @example `Topic_publicRule_api_1667273421288`
             */
            Topic: string;
            /**
             * 消息的过滤标签。
             * @example `test`
             */
            Tag: string;
            /**
             * 消息的消费位点。取值说明如下：
             * - CONSUME_FROM_LAST_OFFSET：从最新位点开始消费。
             * - CONSUME_FROM_FIRST_OFFSET：从最早位点开始消费。
             * - CONSUME_FROM_TIMESTAMP：从指定时间点的位点开始消费。
             * 默认值：CONSUME_FROM_LAST_OFFSET。
             * @example `CONSUMEFROMLAST_OFFSET`
             */
            Offset: string;
            /**
             * 消息队列RocketMQ版的Group ID。
             * @example `GID_group1`
             */
            GroupID: string;
            /**
             * 时间戳。仅当参数Offset取值为CONSUME_FROM_TIMESTAMP时，该参数有效。
             * @example `1670656652009`
             */
            Timestamp: number;
            /**
             * 实例类型。
             * @example `2`
             */
            InstanceType: string;
            /**
             * 实例接入点。
             * @example `reg****-vpc.cn-zhangjiakou.aliyuncs.com`
             */
            InstanceEndpoint: string;
            /**
             * 实例用户名。
             * @example `admin`
             */
            InstanceUsername: string;
            /**
             * 实例密码。
             * @example `admin`
             */
            InstancePassword: string;
            /**
             * 网络类型：PublicNetwork,PrivateNetwork。
             * @example `PrivateNetwork`
             */
            Network: string;
            /**
             * 消息过滤类型。
             * @example `Tag`
             */
            FilterType: string;
            /**
             * sql过滤语句。
             * @example `index > 10`
             */
            FilterSql: string;
            /**
             * 鉴权类型。
             * @example `ACL`
             */
            AuthType: string;
            /**
             * 跨境任务VPC ID。
             * @example `vpc-m5e3sv4b12345****`
             */
            VpcId: string;
            /**
             * 跨境任务VSwitchIds。
             * @example `vsw-m5ev8asdc6h12345****`
             */
            VSwitchIds: string;
            /**
             * 跨境任务安全组。
             * @example `sg-m5edtu24f12345****`
             */
            SecurityGroupId: string;
            /**
             * 实例VPC信息。
             * @example `vpc-m5e3sv4b12345****`
             */
            InstanceVpcId: string;
            /**
             * 实例交换机信息。
             * @example `vsw-m5ev8asdc6h123456****`
             */
            InstanceVSwitchIds: string;
            /**
             * 实例安全组信息。
             * @example `sg-m5edtu24f12345****`
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
        };
        /**
         * Source MQTT源
         */
        SourceMQTTParameters: {
            /**
             * 地域ID。
             * @example `cn-shenzhen`
             */
            RegionId: string;
            /**
             * 实例ID。
             * @example `r-bp1b5ncun5lqer****`
             */
            InstanceId: string;
            /**
             * 消息的Topic。
             * @example `CANAL_VICUTU_UAT`
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
             * @example `f86e5814-b223-482c-b768-3b873297****`
             */
            TaskId: string;
            /**
             * 数据订阅通道的网络地址及端口号信息。
             * @example `无`
             */
            BrokerUrl: string;
            /**
             * 数据订阅通道的订阅Topic。
             * @example `LTC_CACHE_PRD`
             */
            Topic: string;
            /**
             * 消费组ID。
             * @example `HD3`
             */
            Sid: string;
            /**
             * 消费组的账号。
             * @example `admin`
             */
            Username: string;
            /**
             * 消费组的账号密码。
             * @example `admin`
             */
            Password: string;
            /**
             * 消费位点，即SDK客户端消费第一条数据的时间戳，格式为Unix时间戳。
             * @example `1620962769`
             */
            InitCheckPoint: number;
        };
        /**
         * Source SLS源
         */
        SourceSLSParameters: {
            /**
             * 日志服务SLS的日志项目。
             * @example `test`
             */
            Project: string;
            /**
             * 日志服务SLS的日志库。
             * @example `sas-log`
             */
            LogStore: string;
            /**
             * 起始消费位点，可以选择最早或最新位点，分别对应“begin”，“end”，也可以从指定时间开始消费，以秒为单位。
             * @example `end`
             */
            ConsumePosition: string;
            /**
             * 授权事件总线EventBridge使用此角色读取SLS日志内容时，需满足条件：在RAM控制台创建服务所使用的角色时，需要选择“阿里云服务”，并且“受信服务”需要选择“事件总线”。
             * @example `testRole`
             */
            RoleName: string;
        };
        /**
         * Source Prometheus 事件源
         */
        SourcePrometheusParameters: {
            RegionId: string;
            /**
             * 集群id
             * @example `c83555068b6******ad213f565f209`
             */
            ClusterId: string;
            /**
             * 数据类型
             * @example `json`
             */
            DataType: string;
            /**
             * 标签
             * @example `__name__=.*`
             */
            Labels: string;
        };
        SourceCustomizedKafkaParameters: {
            InstanceId: string;
        };
        SourceCustomizedKafkaConnectorParameters: {
            ConnectorPackageUrl: string;
            WorkerParameters: any;
            ConnectorParameters: {
                Name: string;
                Config: any;
            };
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
     * 事件目标。必须选择一种Sink，且最多只能选择一种Sink进行填选。
     */
    "Sink": {
        /**
         * MNS事件目标
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
                 * 模板样式。
                 * @example `The value of ${key} is ${value}!
                `
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
                 * @example `The value of ${key} is ${value}!`
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
                 * 事件转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
         * Sink Rabbitmq的参数
         */
        SinkRabbitMQParameters: {
            /**
             * 目标服务类型为消息队列RabbitMQ版。
             */
            InstanceId: {
                /**
                 * 消息队列RabbitMQ版的实例ID。
                 * @example `a5ff91ad4f3f24947887fe184fc2****`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 消息队列RabbitMQ版实例的Vhost的名称。
             */
            VirtualHostName: {
                /**
                 * 消息队列RabbitMQ版实例的Vhost的名称。
                 * @example `rabbit-host`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 目标类型。
             */
            TargetType: {
                /**
                 * 目标类型。取值说明如下：
                 * - Exchange：Exchange模式。
                 * - Queue：Queue模式。
                 * @example `Exchange/Queue`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
                 * 模板样式。
                 * @example `The value of ${key} is ${value}!
                `
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
                 * 模板样式。
                 * @example `The value of ${key} is ${value}!
                `
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
                 * 模板样式。
                 * @example `The value of ${key} is ${value}!
                `
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
                 * @example `The value of ${key} is ${value}!`
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
                 * @example `The value of ${key} is ${value}!`
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
                 * @example `The value of ${key} is ${value}!`
                 */
                Template: string;
            };
        };
        /**
         * Sink kafak 参数
         */
        SinkKafkaParameters: {
            /**
             * 目标服务类型为消息队列Kafka版。
             */
            InstanceId: {
                /**
                 * 实例ID。
                 * @example `Defaut_1283278472_s****`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 主题名称。
             */
            Topic: {
                /**
                 * 主题的名称。
                 * @example `test`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
                 * 模板样式。
                 * @example `The value of ${key} is ${value}!
                `
                 */
                Template: string;
            };
            /**
             * 消息键。
             */
            Key: {
                /**
                 * 消息键。
                 * @example `key`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 消息体。
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
         * 函数目标。
         */
        SinkFcParameters: {
            /**
             * 服务名。
             */
            ServiceName: {
                /**
                 * 服务名。
                 * @example `myService`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 函数名。
             */
            FunctionName: {
                /**
                 * 函数名。
                 * @example `myFunction`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 投递并发度，最小1。
             */
            Concurrency: {
                /**
                 * 投递并发度，最小1。
                 * @example `1`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 服务版本。
             */
            Qualifier: {
                /**
                 * 服务版本。
                 * @example `LATEST`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 同步或则异步。
             * Sync：同步。
             * Async：异步。
             */
            InvocationType: {
                /**
                 * 同步或则异步。
                 * Sync：同步。
                 * Async：异步。
                 * @example `Async`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
         * Sink RocketMQ Parameters
         */
        SinkRocketMQParameters: {
            /**
             * 目标服务类型为消息队列RocketMQ版。
             */
            InstanceId: {
                /**
                 * 消息队列RocketMQ版的实例ID。
                 * @example `MQ_INST_164901546557****_BAAN****`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
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
             * 消息队列RocketMQ版实例的Topic。
             */
            Topic: {
                /**
                 * 消息队列RocketMQ版实例的Topic名称。
                 * @example `Mytopic`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为CONSTANT。
                 * @example `CONSTANT`
                 */
                Form: string;
                /**
                 * 模板样式
                 * @example `The value of ${key} is ${value}!
                `
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
                 * @example `The value of ${key} is ${value}!`
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
                 * @example `The value of ${key} is ${value}!`
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
                 * @example `The value of ${key} is ${value}!`
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
                 * @example `The value of ${key} is ${value}!`
                 */
                Template: string;
            };
            /**
             * 实例类型。
             */
            InstanceType: {
                /**
                 * 实例类型。
                 * @example `2`
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
             * 实例接入点。
             */
            InstanceEndpoint: {
                /**
                 * 实例接入点。
                 * @example `vbr-8vbsvkkbpf3vb0zef****`
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
             * 实例用户名。
             */
            InstanceUsername: {
                /**
                 * 实例用户名。
                 * @example `admin
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
             * 实例密码。
             */
            InstancePassword: {
                /**
                 * 实例密码。
                 * @example `admin`
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
             * VPC的ID。
             */
            VpcId: {
                /**
                 * VPC的ID。
                 * @example `vbr-8vb835n3zf9shwlvb****`
                 */
                Value: string;
                /**
                 * 事件转换的格式。默认为CONSTANT。
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
             * 交换机ID。
             */
            VSwitchIds: {
                /**
                 * 交换机ID。
                 * @example `vbr-8vb835n3zf9shwl****mp
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
             * 安全组ID。
             */
            SecurityGroupId: {
                /**
                 * 安全组ID。
                 * @example `b4bf375515f6440f942e3a20c33d****`
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
             * 网络类型。
             * - PublicNetwork
             * - PrivateNetwork
             */
            Network: {
                /**
                 * 网络类型。
                 * - PublicNetwork
                 * - PrivateNetwork
                 * @example `PublicNetwork`
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
         * Sink SLS Parameters
         */
        SinkSLSParameters: {
            /**
             * 日志服务SLS的日志项目。
             */
            Project: {
                /**
                 * 日志服务SLS的日志项目。
                 * @example `test-project`
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
                 * @example `	test-logstore`
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
             * 日志所在的Topic，对应SLS 保留字段“__topic__”。
             */
            Topic: {
                /**
                 * 日志所在的Topic，对应SLS 保留字段“__topic__”。
                 * @example `testTopic`
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
                 * @example `testRole`
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
         * Sink DataHub 参数
         */
        SinkDataHubParameters: {
            /**
             * DataHub项目名。
             */
            Project: {
                /**
                 * DataHub项目名。
                 * @example `demo-project`
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
             * DataHub Topic名称。
             */
            Topic: {
                /**
                 * DataHub Topic名称。
                 * @example `demo-topic`
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
             * topic 类型。
             * - TUPLE
             * - BLOB
             */
            TopicType: {
                /**
                 * topic 类型。
                 * - TUPLE
                 * - BLOB
                 * @example `TUPLE`
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
             * TUBLE类型，topic内容模式。
             */
            TopicSchema: {
                /**
                 * TUBLE类型，topic内容模式。
                 * @example `{"k1":"value1","k2":"value2"}`
                 */
                Value: string;
                /**
                 * 转换的格式。
                 * @example `TEMPLATE`
                 */
                Form: string;
                /**
                 * 模板样式。
                 * @example `{"k1":"${k1}","k2":"${k2}"}`
                 */
                Template: string;
            };
            /**
             * BLOB类型，Record内容模板。
             */
            Body: {
                /**
                 * BLOB类型，Record内容模板。
                 * @example `无`
                 */
                Value: string;
                /**
                 * 转换的格式。
                 * @example `ORIGINAL`
                 */
                Form: string;
                /**
                 * 无
                 * @example `无`
                 */
                Template: string;
            };
            /**
             * 任务角色名。
             */
            RoleName: {
                /**
                 * 任务角色名称。
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
        };
        /**
         * Sink Fnf 参数
         */
        SinkFnfParameters: {
            /**
             * 流程名称。
             */
            FlowName: {
                /**
                 * 流程名称。
                 * @example `test-streaming-fnf`
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
             * 执行名称。
             */
            ExecutionName: {
                /**
                 * 执行名称。
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
                 * @example `Al****FNF-x****`
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
        /**
         * Sink Prometheus 参数
         */
        SinkPrometheusParameters: {
            /**
             * Prometheus Remote Write URL 地址
             */
            URL: {
                /**
                 * Prometheus Remote Write URL 地址
                 * @example `https://cn-hangzhou.arms.aliyuncs.com/prometheus/167275****​/c5b7faeb2e8994641*****d5c559f/cn-hangzhou/api/v3/write`
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
            HeaderParameters: {
                Value: string;
                Form: string;
                Template: string;
            };
            /**
             * 鉴权方式
             */
            AuthorizationType: {
                /**
                 * 鉴权方式
                 * @example `BASIC_AUTH`
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
             * 用户名
             */
            Username: {
                /**
                 * 用户名
                 * @example `****admin`
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
             * 密码
             */
            Password: {
                /**
                 * 密码
                 * @example `*****`
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
             * 指标内容
             */
            Data: {
                /**
                 * 指标内容
                 * @example `$.data`
                 */
                Value: string;
                /**
                 * 转换的格式。默认为JSAONPATH。
                 * @example `JSAONPATH`
                 */
                Form: string;
                /**
                 * 模板样式。
                 * @example `无`
                 */
                Template: string;
            };
            /**
             * 网络类型
             */
            NetworkType: {
                /**
                 * 网络类型
                 * @example `PrivateNetwork`
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
             * vpc的Id
             */
            VpcId: {
                /**
                 * vpc的Id
                 * @example `i-2ze7u5i17mbqtx1p****`
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
             * 交换机Id
             */
            VSwitchId: {
                /**
                 * 交换机Id
                 * @example `vsw-dwaafds****`
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
             * 安全组ID。
             */
            SecurityGroupId: {
                /**
                 * 安全组ID。
                 * @example `sg-mw43*****`
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
    "RunOptions"?: {
        /**
         * 并发数。
         * @example `2`
         */
        MaximumTasks: number;
        /**
         * 异常容忍策略：
         * - NONE：不容忍异常。
         * - ALL：容忍所有异常。
         * @example `ALL`
         */
        ErrorsTolerance: string;
        /**
         * 事件推送失败时的重试策略。
         */
        RetryStrategy: {
            /**
             * 重试策略：
             * - BACKOFF_RETRY：退避重试。
             * - EXPONENTIAL_DECAY_RETRY：指数衰减重试。
             * @example `BACKOFF_RETRY`
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
         * 是否启用死信队列。默认不启用死信队列，超过重试策略后的消息将被丢弃。
         */
        DeadLetterQueue: {
            /**
             * 死信队列ARN。
             * @example `acs:ram::131733464781****:role/rdstoecsassumekms`
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
        ResourceSpec: {
            Resources: {
                Type: string;
                Value: number;
            }[];
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
    };
    /**
     * Transform 相关配置
     */
    "Transforms"?: {
        /**
         * 云产品的 ARN，比如函数计算中函数的 ARN
         * @example `acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func`
         */
        Arn: string;
    }[];
}
