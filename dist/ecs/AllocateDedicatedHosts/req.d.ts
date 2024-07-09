export interface AllocateDedicatedHostsRequest {
    /**
     * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 专有宿主机的标签键。N的取值范围：1~20。
         * 一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun或者acs:开头，不能包含`http://`或者`https://`。
         * @example `Environment`
         */
        Key: string;
        /**
         * 专有宿主机的标签值。N的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `Production`
         */
        Value: string;
    }[];
    /**
     * 专有宿主机要加入的资源组ID。
     * @example `rg-bp67acfmxazb4ph***`
     */
    "ResourceGroupId"?: string;
    /**
     * 专有宿主机所属的可用区编号。
     * 默认值：空，表示由系统选择。
     * @example `cn-hangzhou-f`
     */
    "ZoneId"?: string;
    /**
     * 专有宿主机的名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `myDDH`
     */
    "DedicatedHostName"?: string;
    /**
     * 专有宿主机所属的专有宿主机集群ID。
     * @example `dc-bp12wlf6am0vz9v2****`
     */
    "DedicatedHostClusterId"?: string;
    /**
     * 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](~~134240~~)接口获得最新的专有宿主机规格表。
     * @example `ddh.c5`
     */
    "DedicatedHostType": string;
    /**
     * 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：
     * - Migrate：迁移实例到其他物理机并重新启动实例。
     *   当专有宿主机上挂载云盘存储时，默认值：Migrate。
     * - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。
     *   当专有宿主机上挂载本地盘存储时，默认值：Stop。
     * @example `Migrate`
     */
    "ActionOnMaintenance"?: string;
    /**
     * 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310。
     * @example `60`
     */
    "NetworkAttributes.SlbUdpTimeout"?: number;
    /**
     * 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310。
     * @example `60`
     */
    "NetworkAttributes.UdpTimeout"?: number;
    /**
     * 专有宿主机的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `This-is-my-DDH`
     */
    "Description"?: string;
    /**
     * 专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云将自动从加入资源池的专有宿主机中，为您选取适合的宿主机部署实例，更多信息，请参见[自动部署功能介绍](~~118938~~)。取值范围：
     * - on：加入自动部署资源池。
     * - off：不加入自动部署资源池。
     * 默认值：on。
     * > 若您不希望专有宿主机加入自动部署资源池，请将该参数设置为off。
     * @example `off`
     */
    "AutoPlacement"?: string;
    /**
     * CPU超卖比。仅自定义规格g6s、c6s、r6s支持设置CPU超卖比。取值范围：1~5。
     * CPU超卖比影响DDH的可用vCPU数，一台DDH的可用vCPU数=物理CPU核数\*2\*CPU超卖比。例如，g6s的物理CPU核数为52，如果设置CPU超卖比为4，则DDH创建完成后vCPU总数显示为416。针对CPU绝对稳定性要求不严苛或CPU负载不高的场景，例如开发测试环境，提升超卖比可以提升可用vCPU数，用于部署更多同等规格的ECS实例，降低单位部署成本。
     * @example `1`
     */
    "CpuOverCommitRatio"?: number;
    /**
     * 指定专有宿主机的最小购买数量。取值范围：1~100。
     * > 当专有宿主机的库存小于最小购买数量时，创建专有宿主机将会失败。
     * @example `2`
     */
    "MinQuantity"?: number;
    /**
     * 专有宿主机的计费方式。取值范围：
     * <props="china">
     * - PrePaid：包年包月。选择包年包月时，请确认您的支付方式支持余额或者信用额度支付，否则会提示`InvalidPayMethod`。
     * - PostPaid：按量付费。
     * </props>
     * <props="intl">
     * - PrePaid：包年包月。选择包年包月时，请确认您的支付方式支持信用额度支付，否则会提示`InvalidPayMethod`。
     * - PostPaid：按量付费。
     * </props>
     * 默认值：PostPaid。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 本次创建的专有宿主机的数量。取值范围：1~100。
     * 默认值：1。
     * @example `2`
     */
    "Quantity"?: number;
    /**
     * 购买专有宿主机的包年包月时长。当参数`ChargeType`取值为`PrePaid`时，`Period`参数方可生效并为必选参数。取值范围：
     * <props="china">
     * - PeriodUnit=Week时：1、2、3、4。
     * - PeriodUnit=Month时：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * - PeriodUnit=Year时：1、2、3、4、5。
     * </props>
     * <props="intl">
     * - PeriodUnit=Month时：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * - PeriodUnit=Year时：1、2、3、4、5。
     * </props>
     * @example `6`
     */
    "Period"?: number;
    /**
     * 购买专有宿主机的时长单位。取值范围：
     * <props="china">
     * - Week
     * - Month
     * - Year
     * </props>
     * <props="intl">
     * - Month
     * - Year
     * </props>
     * 默认值：Month。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动续费包年包月专有宿主机。
     * >当参数**ChargeType**取值PrePaid时，**AutoRenew**参数方可生效。
     * 默认值：false。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 单次自动续费的周期。当参数**AutoRenew**为true时，**AutoRenewPeriod**参数方可生效，并为必选参数。取值范围：
     * <props="china">
     * - PeriodUnit=Week时：1、2、3。
     * - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。
     * </props>
     * <props="intl">PeriodUnit=Month时：1、2、3、6、12。</props>
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 专有宿主机自动释放时间。需按照ISO 8601标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * > - 最短设置为当前时间之后半小时。
     * > - 最长不能超过当前时间之后三年。
     * > - 若参数值中的秒（ss）不是00，则自动取为00。
     * @example `2019-08-21T12:30:24Z`
     */
    "AutoReleaseTime"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
