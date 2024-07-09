export interface RenewReservedInstancesRequest {
    /**
     * 预留实例券ID。
     */
    "ReservedInstanceId": string[];
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 购买预留实例券的时长。
     * <props="intl">取值范围：1、3。</props>
     * <props="china">
     * - 当`PeriodUnit`为`Year`时，取值范围：1、3、5。
     * - 当`PeriodUnit`为`Month`时，取值范围：1。
     * </props>
     * 默认值：1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买预留实例券的时长单位。
     * <props="intl">取值范围：Year。</props>
     * <props="intl">默认值：Year。</props>
     * <props="china">取值范围：Year、Month。</props>
     * <props="china">默认值：Month。</props>
     * @example `Year`
     */
    "PeriodUnit"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否要自动续费。
     * - true：自动续费。
     * - false：不自动续费。
     * 默认值：false。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 每次自动续费的时长，单位为月。当参数AutoRenew取值为true时，该参数才生效。
     * <props="intl">取值范围：12，36。默认值为12。</props>
     * <props="china">
     * - PeriodUnit=Month， 取值范围：1，12，36，60。默认值为1。
     * - PeriodUnit=Year，取值范围：12，36，60。默认值为12。
     * </props>
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
}
