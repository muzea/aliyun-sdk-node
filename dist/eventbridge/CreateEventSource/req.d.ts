export interface CreateEventSourceRequest {
    /**
     * 事件源名称。
     * @example `myrabbitmq.sourc`
     */
    "EventSourceName": string;
    /**
     * 事件源描述详情。
     * @example `RabbitMQ事件源`
     */
    "Description"?: string;
    /**
     * 是否连接外部数据源
     */
    "LinkedExternalSource"?: boolean;
    /**
     * 外部数据源类型
     */
    "ExternalSourceType"?: string;
    /**
     * 外部数据源配置
     */
    "ExternalSourceConfig"?: any;
    /**
     * 与事件源绑定的事件总线的名称。
     * @example `my-event-bus`
     */
    "EventBusName": string;
    /**
     * MNS事件源参数。选择MNS事件源时RegionId、IsBase64Decode和QueueName都是必填参数。
     */
    "SourceMNSParameters"?: {
        /**
         * 消息服务MNS的队列所在的地域。
         * 可以填写以下地域 ：cn-qingdao、cn-beijing、cn-zhangjiakou、cn-huhehaote、cn-wulanchabu、cn-hangzhou、cn-shanghai、cn-shenzhen、cn-guangzhou、cn-chengdu、cn-hongkong、ap-southeast-1、ap-southeast-2、ap-southeast-3、ap-southeast-5、ap-northeast-1、eu-central-1、us-west-1、us-east-1、ap-south-1、me-east-1和cn-north-2-gov-1
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 消息服务MNS的Queue的名称。
         * @example `MyQueue`
         */
        QueueName: string;
        /**
         * 是否开启Base64解码。填写为true，即开启Base64解码。只能填写true或者false。
         * @example `true`
         */
        IsBase64Decode: boolean;
    };
    /**
     * 请求参数SourceRocketMQParameters。
     */
    "SourceRocketMQParameters"?: {
        /**
         * 消息队列RocketMQ版的实例所属地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 消息队列RocketMQ版的实例ID。更多信息，请参见[使用限制](~~163289~~)。
         * @example `MQ_INST_164901546557****_BAAN****	`
         */
        InstanceId: string;
        /**
         * 消息队列RocketMQ版实例的Topic名称。更多信息，请参见[使用限制](~~163289~~)。
         * @example `mytopic`
         */
        Topic: string;
        /**
         * 消息的过滤标签。
         * @example `test`
         */
        Tag: string;
        /**
         * 消息的消费位点。取值说明如下：
         * CONSUME_FROM_LAST_OFFSET：从最新位点开始消费。
         * CONSUME_FROM_FIRST_OFFSET：从最早位点开始消费。
         * CONSUME_FROM_TIMESTAMP：从指定时间点的位点开始消费。
         * 默认值：CONSUME_FROM_LAST_OFFSET。
         * @example `CONSUME_FROM_LAST_OFFSET`
         */
        Offset: string;
        /**
         * 时间戳。仅当参数Offset取值为CONSUME_FROM_TIMESTAMP时，该参数有效。
         * @example `1636597951964`
         */
        Timestamp: number;
        /**
         * 消息队列RocketMQ版的Group ID。
         * @example `GID-test`
         */
        GroupID: string;
        /**
         * 实例类型 ：
         * - 4.0实例填写：Cloud_4
         * - 5.0实例填写：Cloud_5
         * @example `Cloud_4`
         */
        InstanceType: string;
        /**
         * 无
         * @example `无`
         */
        InstanceNetwork: string;
        /**
         * 专有网络需要添加 ：vpcId
         * @example `vpc-bp1a4gmlk31hyg6pt****`
         */
        InstanceVpcId: string;
        /**
         * 专有网络需要添加 ：vSwitchId
         * @example `vsw-bp10rbrt6rb6vrd89****`
         */
        InstanceVSwitchIds: string;
        /**
         * 专有网络需要添加 ：securityGroupId
         * @example `sg-catalog-eventlist****`
         */
        InstanceSecurityGroupId: string;
        /**
         * ACL或者不填。
         * @example `ACL`
         */
        AuthType: string;
        /**
         * 实例接入点。
         * @example `registry-vpc****.aliyuncs.com
        `
         */
        InstanceEndpoint: string;
        /**
         * 实例用户名。
         * @example `root`
         */
        InstanceUsername: string;
        /**
         * 实例密码。
         * @example `******`
         */
        InstancePassword: string;
    };
    /**
     * 请求参数SourceRabbitMQParameters
     */
    "SourceRabbitMQParameters"?: {
        /**
         * 消息队列RabbitMQ版实例所在的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 消息队列RabbitMQ版的实例的ID。更多信息，请参见使用限制。
         * @example `amqp-cn-nif22u74****	`
         */
        InstanceId: string;
        /**
         * 消息队列RabbitMQ版实例的Vhost的名称。更多信息，请参见[使用限制](~~163289~~)。
         * @example `eb-connect	`
         */
        VirtualHostName: string;
        /**
         * eb-connect	消息队列RabbitMQ版实例的Queue的名称。更多信息，请参见[使用限制](~~163289~~)。
         * @example `demo`
         */
        QueueName: string;
    };
    /**
     * SourceSLSParameters
     */
    "SourceSLSParameters"?: {
        /**
         * 日志服务SLS的日志项目。
         * @example `test-project	`
         */
        Project: string;
        /**
         * 日志服务SLS的日志库。
         * @example `test-logstore	`
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
     * 请求参数SourceHttpEventParameters
     */
    "SourceHttpEventParameters"?: {
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
    };
    /**
     * 请求参数SourceScheduledEventParameters
     */
    "SourceScheduledEventParameters"?: {
        /**
         * Cron表达式。
         * @example `10 * * * * *`
         */
        Schedule: string;
        /**
         * Cron执行时区。
         * @example `GMT+0:00`
         */
        TimeZone: string;
        /**
         * JSON字符串
         * @example `{"a": "b"}
        `
         */
        UserData: string;
    };
    /**
     * 请求参数SourceKafkaParameters
     */
    "SourceKafkaParameters"?: {
        /**
         * 实例ID。
         * @example `pc-2zehmg67txzuyuuwl****`
         */
        InstanceId: string;
        /**
         * 订阅该Topic的消费者所对应的Group ID。
         * @example `wechat_peer_****`
         */
        ConsumerGroup: string;
        /**
         * Topic名称。
         * @example `prod_ma_dispatch_center_call_re****`
         */
        Topic: string;
        /**
         * 消费位点。
         * @example `latest`
         */
        OffsetReset: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 并发配额（消费者数）
         * @example `1`
         */
        MaximumTasks: number;
        /**
         * 网络配置 ：Default（默认网络）和PublicNetwork（自建网络）。
         * @example `Default`
         */
        Network: string;
        /**
         * 如果是自建网络需要添加：安全组id
         * @example `sg-8vbf66aoyp0wfzrz****`
         */
        SecurityGroupId: string;
        /**
         * 如果是自建网络需要添加：vSwitchId
         * @example `vsw-bp127azpeirmwu4q9****`
         */
        VSwitchIds: string;
        /**
         * 如果是自建网络需要添加：vpcId
         * @example `vpc-2ze5ejm986a73qq3v****`
         */
        VpcId: string;
    };
}
