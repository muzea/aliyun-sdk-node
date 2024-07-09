export interface CreateConfigDeliveryChannelRequest {
    /**
     * 投递渠道名称。
     * > 如果未设置该参数，默认为空。
     * @example `testoss`
     */
    "DeliveryChannelName"?: string;
    /**
     * 投递渠道类型。取值：
     * - OSS：对象存储。
     * - MNS：消息服务。
     * - SLS：日志服务。
     * @example `OSS`
     */
    "DeliveryChannelType": string;
    /**
     * 投递渠道目标地址的ARN。取值：
     * - 当投递渠道为OSS时，格式为`acs:oss:{RegionId}:{accountId}:{bucketName}`，例如：`acs:oss:cn-shanghai:100931896542****:new-bucket`。
     * - 当投递渠道为MNS时，格式为`acs:mns:{RegionId}:{accountId}:/topics/{topicName}`，例如：`acs:mns:cn-shanghai:100931896542****:/topics/topic1`。
     * - 当投递渠道为SLS时，格式为`acs:log:{RegionId}:{accountId}:project/{projectName}/logstore/{logstoreName}`，例如：`acs:log:cn-shanghai:100931896542****:project/project1/logstore/logstore1`。
     * @example `acs:oss:cn-shanghai:100931896542****:new-bucket`
     */
    "DeliveryChannelTargetArn": string;
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
    "DeliveryChannelCondition"?: string;
    /**
     * 当投递数据超过投递渠道限制时，投递数据转存到对象存储OSS的目标存储空间。格式为`acs:oss:{RegionId}:{accountId}:{bucketName}`。
     * 如果您未设置该参数，配置审计仅投递概要信息。
     * > 仅支持投递渠道SLS和MNS。日志服务SLS的投递渠道限制是1 MB，消息服务MNS的投递渠道限制是64 KB。
     * @example `acs:oss:cn-shanghai:100931896542****:new-bucket`
     */
    "OversizedDataOSSTargetArn"?: string;
    /**
     * 投递渠道描述。
     * @example `My OSS delivery.`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * `ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 是否接收资源定时快照。每天`04:00Z`和`16:00Z`（UTC时间），配置审计定时向对象存储OSS和消息服务SLS投递资源定时快照。取值：
     * - true：接收资源定时快照。
     * - false（默认值）：不接收资源定时快照。
     * > - 当投递渠道为OSS时，`ConfigurationSnapshot`（资源定时快照）和`ConfigurationItemChangeNotification`（配置变更历史）至少二选一。
     * >- 当投递渠道为SLS时，`ConfigurationSnapshot`（资源定时快照）、`ConfigurationItemChangeNotification`（配置变更历史）和`NonCompliantNotification`（资源不合规事件）至少三选一。
     * @example `true`
     */
    "ConfigurationSnapshot"?: boolean;
    /**
     * 是否接收资源配置变更历史。当资源配置变更时，配置审计向对象存储OSS、日志服务SLS或消息服务MNS投递资源配置变更历史。取值：
     * - true：接收资源配置变更历史。
     * - false（默认值）：不接收资源配置变更历史。
     * > - 当投递渠道为OSS时，`ConfigurationSnapshot`（资源定时快照）和`ConfigurationItemChangeNotification`（配置变更历史）至少二选一。
     * >- 当投递渠道为SLS时，`ConfigurationSnapshot`（资源定时快照）、`ConfigurationItemChangeNotification`（配置变更历史）和`NonCompliantNotification`（资源不合规事件）至少三选一。
     * > - 当投递渠道为MNS时，`ConfigurationItemChangeNotification`（配置变更历史）和`NonCompliantNotification`（资源不合规事件）至少二选一。
     * @example `false`
     */
    "ConfigurationItemChangeNotification"?: boolean;
    /**
     * 是否接收资源不合规事件。当资源不合规时，配置审计向日志服务SLS或消息服务MNS投递资源不合规事件。取值：
     * - true：接收资源不合规事件。
     * - false（默认值）：不接收资源不合规事件。
     * >- 当投递渠道为SLS时，`ConfigurationSnapshot`（资源定时快照）、`ConfigurationItemChangeNotification`（配置变更历史）和`NonCompliantNotification`（资源不合规事件）至少三选一。
     * > - 当投递渠道为MNS时，`ConfigurationItemChangeNotification`（配置变更历史）和`NonCompliantNotification`（资源不合规事件）至少二选一。
     * @example `false`
     */
    "NonCompliantNotification"?: boolean;
    /**
     * 资源定时快照每日开始投递的时间。
     * 格式为`HH:mmZ`（UTC时间）。
     * > 当您开启资源定时快照投递时，可通过该参数自定义投递时间。如果您未设置该参数，则每天默认`04:00Z`和`16:00Z`开始投递。
     * @example `09:10Z`
     */
    "DeliverySnapshotTime"?: string;
}
