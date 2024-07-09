export interface GetAggregateConfigDeliveryChannelResponse {
    /**
     * 单个投递渠道信息。
     */
    DeliveryChannel: {
        /**
         * 投递设置状态。取值：
         * - 0：关闭。
         * - 1：开启。
         * @example `1`
         */
        Status: number;
        /**
         * 投递渠道ID。
         * @example `cdc-d9106457e0d900b1****`
         */
        DeliveryChannelId: string;
        /**
         * 投递渠道名称。
         * @example `myDeliveryChannel`
         */
        DeliveryChannelName: string;
        /**
         * 投递渠道类型。取值：
         * - OSS：对象存储。
         * - MNS：消息服务。
         * - SLS：日志服务。
         * @example `OSS`
         */
        DeliveryChannelType: string;
        /**
         * 投递渠道目标地址的ARN。
         * - 当DeliveryChannelType为OSS时，该参数为Bucket的ARN。
         * - 当DeliveryChannelType为MNS时，该参数为Topic的ARN。
         * - 当DeliveryChannelType为SLS时，该参数为Logstore的ARN。
         * @example `acs:oss:cn-shanghai:120886317861****:new-bucket`
         */
        DeliveryChannelTargetArn: string;
        /**
         * 投递渠道扮演角色ARN。
         * @example `acs:ram::120886317861****:role/aliyunserviceroleforconfig`
         */
        DeliveryChannelAssumeRoleArn: string;
        /**
         * 投递渠道附加规则。当前支持MNS渠道的所有投递和SLS渠道的快照投递。
         * - 如果您指定MNS订阅事件的最低风险等级和资源类型，具体如下：
         *   - 订阅事件的最低风险等级为`{"filterType":"RuleRiskLevel","value":"1","multiple":false}`。
         *
         *     `value`表示您需要过滤的风险等级。取值：1表示高风险，2表示中风险，3表示低风险。
         *   - 订阅事件的资源类型为`{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`。
         *
         *
         *     `values`表示您需要订阅事件的资源类型，是一个资源类型的JSON数组。
         *     例如：
         * `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
         * - 如果您指定SLS快照投递的资源类型，资源类型为`{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`。
         *
         *
         *     `values`表示您需要投递的资源类型，是一个资源类型的JSON数组。
         *     例如：
         * `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
         * @example `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
         */
        DeliveryChannelCondition: string;
        /**
         * 当投递数据超过投递渠道限制时，投递数据转存到对象存储OSS的目标存储空间。
         * @example `acs:oss:cn-shanghai:100931896542****:new-bucket`
         */
        OversizedDataOSSTargetArn: string;
        /**
         * 投递渠道描述。
         * @example `My OSS delivery.`
         */
        Description: string;
        /**
         * 是否接收资源定时快照。每天`04:00Z`和`16:00Z`（UTC时间），配置审计定时向对象存储OSS和消息服务SLS投递资源定时快照。取值：
         * - true：接收资源定时快照。
         * - false：不接收资源定时快照。
         * @example `false`
         */
        ConfigurationSnapshot: boolean;
        /**
         * 是否接收资源配置变更历史。当资源配置变更时，配置审计向对象存储OSS、日志服务SLS或消息服务MNS投递资源配置变更历史。取值：
         * - true：接收资源配置变更历史。
         * - false：不接收资源配置变更历史。
         * @example `true`
         */
        ConfigurationItemChangeNotification: boolean;
        /**
         * 是否接收资源不合规事件。当资源不合规时，配置审计向日志服务SLS或消息服务MNS投递资源不合规事件。取值：
         * - true：接收资源不合规事件。
         * - false：不接收资源不合规事件。
         * @example `false`
         */
        NonCompliantNotification: boolean;
        /**
         * 账号组ID。
         * @example `ca-a4e5626622af0079****`
         */
        AggregatorId: string;
        /**
         * 账号组内成员ID。
         * @example `120886317861****`
         */
        AccountId: string;
        /**
         * 资源定时快照每日开始投递的时间。
         * 格式为`HH:mmZ`（UTC时间）。
         * @example `09:10Z`
         */
        DeliverySnapshotTime: string;
    };
    /**
     * 请求ID。
     * @example `DC300244-FCE3-5061-8214-C27ECB668487`
     */
    RequestId: string;
}
