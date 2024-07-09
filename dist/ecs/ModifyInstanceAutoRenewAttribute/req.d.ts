export interface ModifyInstanceAutoRenewAttributeRequest {
    /**
     * 实例ID。支持批量设置最多100个包年包月实例，多个实例ID以英文逗号分隔。
     * @example `i-bp67acfmxazb4ph****,i-bp67acfmxazb4pi****`
     */
    "InstanceId": string;
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 设置实例自动续费时长。
     * <props="china">
     * - `PeriodUnit`为`Year`（年）时，`Duration`的取值范围为：{"1", "2", "3", "4", "5"}
     * - `PeriodUnit`为`Month`（月）时，`Duration`的取值范围为：{"1", "2", "3", "6", "12", "24", "36", "48", "60"}
     * - `PeriodUnit`为`Week`（周）时，`Duration`的取值范围为：{"1", "2", "3", "4"}
     * </props>
     * <props="intl">
     * - `PeriodUnit`为`Year`（年）时，`Duration`的取值范围为：{"1", "2", "3", "4", "5"}
     * - `PeriodUnit`为`Month`（月）时，`Duration`的取值范围为：{"1", "2", "3", "6", "12", "24", "36", "48", "60"}
     * </props>
     * <props="partner">
     * - `PeriodUnit`为`Year`（年）时，`Duration`的取值范围为：{"1", "2", "3", "4", "5"}
     * - `PeriodUnit`为`Month`（月）时，`Duration`的取值范围为：{"1", "2", "3", "6", "12", "24", "36", "48", "60"}
     * </props>
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 实例到期前是否自动续费。
     * 默认值：false
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 实例的自动续费状态。取值范围：
     * - AutoRenewal：设置为自动续费。
     * - Normal：取消自动续费。
     * - NotRenewal：不再续费。传入该值后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以更改成待续费（`Normal`）后，再自行续费或设置为自动续费。
     * > 参数`RenewalStatus`的优先级高于参数`AutoRenew`。如果不传入参数`RenewalStatus`，则默认以参数`AutoRenew`为准。
     * @example `AutoRenewal`
     */
    "RenewalStatus"?: string;
    /**
     * 续费时长的时间单位，即参数`Duration`的单位。取值范围：
     * <props="china">
     * - Week
     * - Month（默认）
     * - Year
     * </props>
     * <props="intl">
     * - Month（默认）
     * - Year
     * </props>
     * <props="partner">
     * - Month（默认）
     * - Year
     * </props>
     * @example `Month`
     */
    "PeriodUnit"?: string;
}
