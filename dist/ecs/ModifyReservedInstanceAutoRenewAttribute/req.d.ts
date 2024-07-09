export interface ModifyReservedInstanceAutoRenewAttributeRequest {
    /**
     * 预留实例券所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动续费周期。取值范围：
     * <props="intl">取值范围：1、3。</props>
     * <props="china">
     * - 当`PeriodUnit`为`Year`时，取值范围：1、3、5。
     * - 当`PeriodUnit`为`Month`时，取值范围：1。
     * </props>
     * @example `1`
     */
    "Period"?: number;
    /**
     * 自动续费时长单位。
     * <props="intl">取值范围：Year。</props>
     * <props="china">取值范围：Month、Year。</props>
     * <props="china">默认值：Month。</props>
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动续费包年包月预留实例券。取值范围：
     * - AutoRenewal：自动续费。
     * - Normal：手动续费。
     * @example `AutoRenewal`
     */
    "RenewalStatus"?: string;
    /**
     * 预留实例券ID。
     */
    "ReservedInstanceId"?: string[];
}
