export interface PurchaseReservedInstancesOfferingRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 预留实例券的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http:/`/或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 预留实例券的标签值。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http:/`/或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-bp199lyny9b3****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例所属的可用区编号，当`Scope`为`Zone`时必填。更多信息，请参见[DescribeZones](~~25610~~)获取可用区列表。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 预留实例券的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testReservedInstanceName`
     */
    "ReservedInstanceName"?: string;
    /**
     * 实例的资源规格。更多信息，请参见[实例规格族](~~25378~~)。
     * @example `ecs.g5.large`
     */
    "InstanceType": string;
    /**
     * 预留实例券的范围。取值范围：
     *
     * - Region：地域级别。
     * - Zone：可用区级别。
     * 默认值：Region。
     * @example `Zone`
     */
    "Scope"?: string;
    /**
     * 预留实例券可以同时匹配同规格按量付费实例的数量。取值范围：1~50。
     * 例如，实例规格设置为ecs.g5.large，预留实例数量设置为3时，该预留实例券就可以同时匹配3台规格为ecs.g5.large的按量付费实例。
     * @example `3`
     */
    "InstanceAmount"?: number;
    /**
     * 预留实例券的付款类型。取值范围：
     *
     * - No Upfront：零预付。
     * - Partial Upfront：部分预付。
     * - All Upfront：全预付。
     * 默认值：All Upfront。
     * @example `All Upfront`
     */
    "OfferingType"?: string;
    /**
     * 预留实例券的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 实例使用的镜像的操作系统类型。取值范围：
     * - Windows：Windows Server类型的操作系统。
     * - Linux：Linux及类Unix类型的操作系统。
     * 默认值：Linux。
     * @example `Linux`
     */
    "Platform"?: string;
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
     * true：自动续费。 false（默认）：不自动续费。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 每次自动续费的时长，单位为月。当参数AutoRenew取值True时，该参数才生效。
     * <props="china">AutoRenewPeriod取值范围：1，12，36，60。</props>
     * <props="china">当PeriodUnit=Month， 默认值为1。</props>
     * <props="intl">AutoRenewPeriod取值范围：12，36。</props>
     * 当PeriodUnit=Year，默认值为12。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
}
