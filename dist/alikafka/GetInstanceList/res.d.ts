export interface GetInstanceListResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4B6D821D-7F67-4CAA-9E13-A5A997C3****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    InstanceList: {
        /**
         * 实例详情。
         */
        InstanceVO: {
            /**
             * VPC ID。
             * @example `vpc-bp1ojac7bv448nifj****`
             */
            VpcId: string;
            /**
             * 实例规格。取值：
             * - **professional**：专业版（高写版）
             * -  **professionalForHighRead**：专业版（高读版）
             * - **normal**：标准版
             * @example `professional`
             */
            SpecType: string;
            /**
             * 部署类型。取值：
             * - **4**：公网/VPC实例
             * - **5**：VPC实例
             * @example `5`
             */
            DeployType: number;
            /**
             * 创建时间。单位：ms。
             * @example `1577961819000`
             */
            CreateTime: number;
            /**
             * 磁盘容量。单位：GB。
             * @example `3600`
             */
            DiskSize: number;
            /**
             * 磁盘类型。取值：
             * - **0**：高效云盘
             * - **1**：SSD
             * @example `1`
             */
            DiskType: number;
            /**
             * 实例的安全组。
             * - 如果实例是通过云消息队列 Kafka 版控制台或调用[StartInstance](~~157786~~)（调用时没有配置安全组）部署的，则返回值为空。
             * - 如果实例是通过调用[StartInstance](~~157786~~)（调用时配置了安全组）部署的，则返回值为配置的安全组。
             * @example `sg-bp13wfx7kz9pkow****`
             */
            SecurityGroup: string;
            /**
             * SSL接入点的IP接入点。云消息队列 Kafka 版实例支持域名接入点和IP接入点。
             * - 域名接入点：由云消息队列 Kafka 版实例域名和端口号拼接而成，格式为`{实例域名}:{端口号}`。
             * - IP接入点：由Broker的IP地址和端口号拼接而成，格式为`{Broker的IP地址}:{端口号}`。
             * @example `192.0.XX.XX:9093,198.51.XX.XX:9093,203.0.XX.XX:9093`
             */
            SslEndPoint: string;
            /**
             * 实例ID。
             * @example `alikafka_pre-cn-mp919o4v****`
             */
            InstanceId: string;
            /**
             * 部署的云消息队列 Kafka 版的当前配置。
             * @example `{\"enable.vpc_sasl_ssl\":\"false\",\"kafka.log.retention.hours\":\"66\",\"enable.acl\":\"false\",\"kafka.message.max.bytes\":\"6291456\"}`
             */
            AllConfig: string;
            /**
             * > 该字段已过时，推荐参考ViewInstanceStatusCode
             * 实例状态。取值：
             * -  **0**：待部署
             * -  **1**：硬件资源准备中
             * - **2**：初始化中
             * - **3**：启动中
             * - **5**：服务中
             * - **6**：迁移中
             * - **7**：准备升级
             * - **8**：升级中
             * - **9**：准备变更
             * - **10**：已释放
             * - **11**：变更中
             * - **15**：已过期
             * - **30**：弹缩中
             * @example `5`
             */
            ServiceStatus: number;
            /**
             * 公网流量峰值。
             * @example `20`
             */
            EipMax: number;
            /**
             * 实例的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 消息保留时长。单位：小时。
             * @example `72`
             */
            MsgRetain: number;
            /**
             * vSwitch ID。
             * @example `vsw-bp1fvuw0ljd7vzmo3****`
             */
            VSwitchId: string;
            /**
             * 到期时间。单位：ms。
             * @example `1893581018000`
             */
            ExpiredTime: number;
            /**
             * Topic最大数量。
             * @example `180`
             */
            TopicNumLimit: number;
            /**
             * 可用区ID。
             * @example `zonei`
             */
            ZoneId: string;
            /**
             * 读流量峰值。单位 MB/s .
             * @example `1000`
             */
            IoMaxRead: number;
            /**
             * 写流量峰值。单位 MB/s .
             * @example `1000`
             */
            IoMaxWrite: number;
            /**
             * 流量峰值。
             * @example `20`
             */
            IoMax: number;
            /**
             * 付费类型。取值：
             * - **0**：预付费
             * - **1**：后付费
             * - **3**：V3系列后付费
             * - **4**：Confluent系列预付费
             * @example `1`
             */
            PaidType: number;
            /**
             * 实例名称。
             * @example `alikafka_post-cn-mp91gnw0****`
             */
            Name: string;
            /**
             * 默认接入点的IP接入点。云消息队列 Kafka 版实例支持域名接入点和IP接入点。
             * - 域名接入点：由云消息队列 Kafka 版实例域名和端口号拼接而成，格式为`{实例域名}:{端口号}`。
             * - IP接入点：由Broker的IP地址和端口号拼接而成，格式为`{Broker的IP地址}:{端口号}`。
             * @example `192.168.XX.XX:9092,192.168.XX.XX:9092,192.168.XX.XX:9092`
             */
            EndPoint: string;
            Tags: {
                /**
                 * 标签。
                 */
                TagVO: {
                    /**
                     * 标签键。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `test`
                     */
                    Value: string;
                }[];
            };
            /**
             * 实例的升级信息。
             */
            UpgradeServiceDetailInfo: {
                /**
                 * 实例的开源版本。
                 * @example `2.2.0`
                 */
                Current2OpenSourceVersion: string;
            };
            /**
             * 默认接入点的域名接入点。云消息队列 Kafka 版实例支持域名接入点和IP接入点。
             * - 域名接入点：由云消息队列 Kafka 版实例域名和端口号拼接而成，格式为`{实例域名}:{端口号}`。
             * - IP接入点：由Broker的IP地址和端口号拼接而成，格式为`{Broker的IP地址}:{端口号}`。
             * @example `alikafka-pre-cn-zv**********-1-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv**********-2-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv**********-3-vpc.alikafka.aliyuncs.com:9092`
             */
            DomainEndpoint: string;
            /**
             * SSL接入点的域名接入点。云消息队列 Kafka 版实例支持域名接入点和IP接入点。
             * - 域名接入点：由云消息队列 Kafka 版实例域名和端口号拼接而成，格式为`{实例域名}:{端口号}`。
             * - IP接入点：由Broker的IP地址和端口号拼接而成，格式为`{Broker的IP地址}:{端口号}`。
             * @example `alikafka-pre-cn-zv**********-1.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv**********-2.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv**********-3.alikafka.aliyuncs.com:9093`
             */
            SslDomainEndpoint: string;
            /**
             * SASL接入点的域名接入点。云消息队列 Kafka 版实例支持域名接入点和IP接入点。
             * - 域名接入点：由云消息队列 Kafka 版实例域名和端口号拼接而成，格式为`{实例域名}:{端口号}`。
             * - IP接入点：由Broker的IP地址和端口号拼接而成，格式为`{Broker的IP地址}:{端口号}`。
             * @example `alikafka-pre-cn-zv**********-1-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv**********-2-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv**********-3-vpc.alikafka.aliyuncs.com:9094`
             */
            SaslDomainEndpoint: string;
            /**
             * 资源组ID。
             * @example `rg-ac***********7q
            `
             */
            ResourceGroupId: string;
            /**
             * Topic使用量。
             * @example `3`
             */
            UsedTopicCount: number;
            /**
             * Group使用量。
             * @example `10`
             */
            UsedGroupCount: number;
            /**
             * Partition使用量。
             * @example `25`
             */
            UsedPartitionCount: number;
            /**
             * 同地域内的云盘加密的密钥ID。
             * @example `0d24xxxx-da7b-4786-b981-9a164dxxxxxx`
             */
            KmsKeyId: string;
            /**
             * 标准可用区id。
             * @example `cn-hangzhou-k`
             */
            StandardZoneId: string;
            /**
             * 流量规格。
             * @example `alikafka.hw.2xlarge`
             */
            IoMaxSpec: string;
            /**
             * 预留的发送流量规格值，单位为MB/s。
             * > 若实例为V3系列（Serverless）实例，才会返回该字段。
             * @example `60`
             */
            ReservedPublishCapacity: number;
            /**
             * 预留的消费流量规格值，单位为MB/s。
             * > 若实例为V3系列（Serverless）实例，才会返回该字段。
             * @example `60`
             */
            ReservedSubscribeCapacity: number;
            /**
             * 实例状态（新版），与控制台状态同步。
             * 取值：
             * -  **0**：待部署
             * -  **1**：部署中
             * - **2**：服务中
             * - **3**：已停机
             * - **4**：即将过期
             * - **5**：已过期
             * - **6**：已释放
             * - **7**：升级中
             * - **8**：迁移中
             * - **21**：停机中
             * - **22**：启用中
             * - **23**：释放中
             * - **30**：自动弹缩中
             * - **101**：部署失败
             * - **102**：升级失败
             * - **103**：迁移失败
             * @example `2`
             */
            ViewInstanceStatusCode: number;
            /**
             * 若实例为Confluent系列实例，才会返回该字段。
             */
            ConfluentConfig: {
                /**
                 * Kafka Broker CPU 核数。
                 * @example `4`
                 */
                KafkaCU: number;
                /**
                 * Kafka Broker 磁盘容量。单位 GB。
                 * @example `800`
                 */
                KafkaStorage: number;
                /**
                 * Kafka Broker 副本数量。
                 * @example `3`
                 */
                KafkaReplica: number;
                /**
                 * ZooKeeper 组件 CPU 核数。
                 * @example `2`
                 */
                ZooKeeperCU: number;
                /**
                 * ZooKeeper 组件磁盘容量。单位 GB。
                 * @example `100`
                 */
                ZooKeeperStorage: number;
                /**
                 * ZooKeeper 组件副本数量。
                 * @example `3`
                 */
                ZooKeeperReplica: number;
                /**
                 * ControlCenter 组件 CPU 核数。
                 * @example `4`
                 */
                ControlCenterCU: number;
                /**
                 * ControlCenter 组件磁盘容量。单位 GB。
                 * @example `300`
                 */
                ControlCenterStorage: number;
                /**
                 * ControlCenter 组件副本数量。
                 * @example `1`
                 */
                ControlCenterReplica: number;
                /**
                 * SchemaRegistry 组件 CPU 核数。
                 * @example `4`
                 */
                SchemaRegistryCU: number;
                /**
                 * SchemaRegistry 组件副本数量。
                 * @example `2`
                 */
                SchemaRegistryReplica: number;
                /**
                 * Connect 组件 CPU 核数。
                 * @example `4`
                 */
                ConnectCU: number;
                /**
                 * Connect 组件副本数量。
                 * @example `2`
                 */
                ConnectReplica: number;
                /**
                 * KsqlDB 组件
                 * CPU 核数。
                 * @example `2`
                 */
                KsqlCU: number;
                /**
                 * KsqlDB 组件磁盘容量。单位 GB。
                 * @example `100`
                 */
                KsqlStorage: number;
                /**
                 * KsqlDB 组件副本数量。
                 * @example `2`
                 */
                KsqlReplica: number;
                /**
                 * KafkaRestProxy 组件 CPU 核数。
                 * @example `4`
                 */
                KafkaRestProxyCU: number;
                /**
                 * KafkaRestProxy 组件副本数量。
                 * @example `2`
                 */
                KafkaRestProxyReplica: number;
            };
            /**
             * 实例系列标识。返回值有 v2 ，v3，confluent。
             * @example `v3`
             */
            Series: string;
        }[];
    };
}
