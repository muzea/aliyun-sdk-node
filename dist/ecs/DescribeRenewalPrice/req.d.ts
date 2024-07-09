export interface DescribeRenewalPriceRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询续费价格的资源类型。取值：instance。
     * 默认值：instance。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 查询续费价格的资源ID。参数`ResourceType`取值为`instance`时，`ResourceId`可以理解为`InstanceId`。
     * @example `i-bp1f2o4ldh8l29zv****`
     */
    "ResourceId": string;
    /**
     * 指定续费时长。取值范围：
     * - 当参数`PriceUnit`取值为`Month`时：1~9。
     * - 当参数`PriceUnit`取值为`Year`时：1~3。
     * 默认值：1。
     * > 续费时长参数（`Period`、`PeriodUnit`）与统一到期日参数（`ExpectedRenewDay`）不能同时设置。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 指定续费周期。取值范围：
     * - Month：续费周期为一个月。
     * - Year：续费周期为一年。
     * 默认值：Month。
     * @example `Month`
     */
    "PriceUnit"?: string;
    /**
     * 统一到期日。指定该参数后，将查询实例续费至统一到期日的价格信息。取值范围：1~28。
     * 关于统一到期日功能的更多信息，请参见[统一实例到期日](~~108486~~)。
     * > 续费时长参数（`Period`、`PeriodUnit`）与统一到期日参数（`ExpectedRenewDay`）不能同时设置。
     * @example `5`
     */
    "ExpectedRenewDay"?: number;
}
