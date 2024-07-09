export interface ModifyDedicatedHostAutoRenewAttributeRequest {
    /**
     * 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。
     * @example `dh-bp165p6xk2tlw61e****`
     */
    "DedicatedHostIds": string;
    /**
     * 专有宿主机所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 续费周期。取值范围：
     * <props="china">
     * - PeriodUnit=Week时：1、2、3、4。
     * - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。
     * - PeriodUnit=Year时：1、2、3、4、5。
     * </props>
     * <props="intl">
     * - PeriodUnit=Month时：1、12。
     * - PeriodUnit=Year时：1、12。
     * </props>
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 续费时长单位。取值范围：
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
     * 是否自动续费包年包月专有宿主机。取值范围：
     * - true：自动续费包年包月专有宿主机。
     * - false：不自动续费包年包月专有宿主机。
     * 默认值：false
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 是否自动续费包年包月专有宿主机，参数`RenewalStatus`的优先级高于`AutoRenew`。取值范围：
     * - AutoRenewal：自动续费。
     * - Normal：待续费。
     * - NotRenewal：不续费，也不发送到期提醒。到期前第三天系统会自动发送不续费提醒。不续费的专有宿主机可以设置成待续费（Normal），再自行续费（[RenewDedicatedHosts](~~134250~~)）或设置为自动续费（AutoRenewal）。
     * @example `Normal`
     */
    "RenewalStatus"?: string;
    /**
     * 设置是否跟随专有宿主机内的包年包月ECS实例自动续费。
     * 如果您的专有宿主机（简称DDH）为包年包月计费方式，且该DDH内包年包月ECS实例开启了自动续费。您可以通过该参数设置DDH跟随ECS实例自动续费。当DDH内ECS实例自动续费时，如果DDH的到期时间比该ECS实例续费后的到期时间短，则DDH也会自动续费。DDH跟随ECS实例自动续费的原则说明：
     * DDH会自动判断对应ECS实例续费后的到期时间，然后在自动续费DDH时长时，选择大于ECS实例到期时间，且满足DDH续费周期的最小续费时长进行续费。DDH支持的续费周期详情，请参见`PeriodUnit`和`Duration`参数说明。
     * 例如：包年包月DDH在当年01月15日到期，DDH内的包年包月ECS实例在自动续费后，将时长延长至当年11月15日到期，则DDH生命周期比ECS实例的生命周期少10个月。此时，DDH在自动续费时，会选择大于10个月，且符合DDH续费周期的最小续费时长12个月（即`PeriodUnit=Month`且`Duration=12`）进行续费。
     * 取值范围：
     * - AutoRenewWithEcs：跟随专有宿主机内包年包月ECS实例自动续费。
     * - StopRenewWithEcs：不跟随专有宿主机内包年包月ECS实例自动续费。
     * - NoOperation：不改变专有宿主机当前的设置。
     * > 如果您设置该参数为AutoRenewWithEcs，需要确保专有宿主机已开启自动续费（即`AutoRenew=true`）。否则，该参数只是改变了参数值，实际的跟随ECS实例自动续费功能并不生效。
     * 默认值：NoOperation
     * @example `StopRenewWithEcs`
     */
    "AutoRenewWithEcs"?: string;
}
