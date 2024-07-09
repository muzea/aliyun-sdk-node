export interface DescribeInstancesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有网络VPC ID。
     * @example `v-bp67acfmxazb4p****`
     */
    "VpcId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-bp67acfmxazb4p****`
     */
    "VSwitchId"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 实例网络类型。取值范围：
     * - classic：经典网络。
     * - vpc：专有网络VPC。
     * @example `vpc`
     */
    "InstanceNetworkType"?: string;
    /**
     * 实例所属的安全组。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SecurityGroupId"?: string;
    /**
     * 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp67acfmxazb4p****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]`
     */
    "InstanceIds"?: string;
    /**
     * 实例状态列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值为100。
     * 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。最大值为100。
     * 默认值：
     * - 当不设置值或设置的值小于10时，默认值为10。
     * - 当设置的值大于100时，默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 经典网络类型实例的内网IP列表。当InstanceNetworkType=classic时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
     * @example `["10.1.1.1", "10.1.2.1", … "10.1.10.1"]`
     */
    "InnerIpAddresses"?: string;
    /**
     * VPC网络类型实例的私有IP。当InstanceNetworkType=vpc时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
     * @example `["172.16.1.1", "172.16.2.1", … "172.16.10.1"]`
     */
    "PrivateIpAddresses"?: string;
    /**
     * 实例的公网IP列表。取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
     * @example `["42.1.1.**", "42.1.2.**", … "42.1.10.**"]`
     */
    "PublicIpAddresses"?: string;
    /**
     * 实例的弹性公网IP列表。当InstanceNetworkType=vpc时该参数生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
     * @example `["42.1.1.**", "42.1.2.**", … "42.1.10.**"]`
     */
    "EipAddresses"?: string;
    /**
     * 实例的计费方式。取值范围：
     *
     * - PostPaid：按量付费。
     * - PrePaid：包年包月。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 公网带宽计费方式。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 实例名称，支持使用通配符*进行模糊搜索。
     * @example `Test`
     */
    "InstanceName"?: string;
    /**
     * 镜像ID。
     * @example `m-bp67acfmxazb4p****`
     */
    "ImageId"?: string;
    /**
     * 实例状态。取值范围：
     * - Pending：创建中。
     * - Running：运行中。
     * - Starting：启动中。
     * - Stopping：停止中。
     * - Stopped：已停止。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 资源被锁定的原因。取值范围：
     * - financial：因欠费被锁定。
     * - security：因安全原因被锁定。
     * - Recycling：抢占式实例的待释放锁定状态。
     * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
     * - refunded：因退款被锁定。
     * @example `security`
     */
    "LockReason"?: string;
    /**
     * 查询资源时的筛选键，取值必须为`CreationStartTime`。同时设置`Filter.1.Key`和`Filter.1.Value`可以查询在指定时间点后创建的资源信息。
     * @example `CreationStartTime`
     */
    "Filter.1.Key"?: string;
    /**
     * 查询资源时的筛选键，取值必须为`CreationEndTime`。同时设置`Filter.2.Key`和`Filter.2.Value`可以查询在指定时间点前创建的资源信息。
     * @example `CreationEndTime`
     */
    "Filter.2.Key"?: string;
    /**
     * 查询资源时的筛选键，取值必须为`ExpiredStartTime`。同时设置`Filter.3.Key`和`Filter.3.Value`可以查询在指定时间点后到期的资源信息。
     * @example `ExpiredStartTime`
     */
    "Filter.3.Key"?: string;
    /**
     * 查询资源时的筛选键，取值必须为`ExpiredEndTime`。同时设置`Filter.4.Key`和`Filter.4.Value`可以查询在指定时间点前到期的资源信息。
     * @example `ExpiredEndTime`
     */
    "Filter.4.Key"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.1.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2017-12-05T22:40Z`
     */
    "Filter.1.Value"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.2.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2017-12-06T22:40Z`
     */
    "Filter.2.Value"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.3.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2017-12-07T22:40Z`
     */
    "Filter.3.Value"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.4.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2017-12-08T22:40Z`
     */
    "Filter.4.Value"?: string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `false`
     */
    "DeviceAvailable"?: boolean;
    /**
     * 是否是I/O优化型实例。取值范围：
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "IoOptimized"?: boolean;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `false`
     */
    "NeedSaleCycle"?: boolean;
    /**
     * 实例的规格。
     * @example `ecs.g5.large`
     */
    "InstanceType"?: string;
    /**
     * 实例的规格族。
     * @example `ecs.g5`
     */
    "InstanceTypeFamily"?: string;
    /**
     * 实例使用的SSH密钥对名称。
     * @example `KeyPairNameTest`
     */
    "KeyPairName"?: string;
    /**
     * 实例所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例所在的HPC集群ID。
     * @example `hpc-bp67acfmxazb4p****`
     */
    "HpcClusterId"?: string;
    /**
     * HPC实例的RDMA网络IP。
     * @example `10.10.10.102`
     */
    "RdmaIpAddresses"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否启用实例元数据的访问通道。取值范围：
     * - enabled：启用。
     * - disabled：禁用。
     * 默认值：enabled。
     * >有关实例元数据的更多信息，请参见[实例元数据概述](~~49122~~)。
     * @example `enabled`
     */
    "HttpEndpoint"?: string;
    /**
     * 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
     * - optional：不强制使用。
     * - required：强制使用。设置该取值后，普通模式无法访问实例元数据。
     * 默认值：optional。
     * >有关访问实例元数据模式的更多信息，请参见[实例元数据访问模式](~~150575~~)。
     * @example `optional`
     */
    "HttpTokens"?: string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `0`
     */
    "HttpPutResponseHopLimit"?: number;
    /**
     * 为弹性网卡指定的IPv6地址。
     */
    "Ipv6Address"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * > 为提高兼容性，建议您使用另一个`Tag.N.Key`参数。
         * @example `keyTest`
         */
        key: string;
        /**
         * 实例的标签键。N的取值范围为1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 标签值。
         * > 为提高兼容性，建议您使用另一个`Tag.N.Value`参数。
         * @example `valueTest`
         */
        value: string;
    }[];
    /**
     * 其他属性值。N的取值范围为1~20。取值范围：
     * - META_OPTIONS：实例元数据。
     * - DDH_CLUSTER：专有宿主机集群。
     * - NETWORK_PRIMARY_ENI_IP ：主网卡辅助IP。
     * - CPU_OPTIONS_TOPOLOGY_TYPE：实例的CPU拓扑类型。
     * @example `META_OPTIONS`
     */
    "AdditionalAttributes"?: string[];
}
