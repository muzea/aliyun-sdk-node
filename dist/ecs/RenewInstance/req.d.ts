export interface RenewInstanceRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 需要续费的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 包年包月续费时长。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：
     * <props="china">
     * - PeriodUnit=Week时，Period取值：1、2、3、4。
     * - PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * </props>
     * <props="intl">PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12。</props>
     * > 您必须指定续费时长参数（`Period`、`PeriodUnit`）或统一到期日参数（`ExpectedRenewDay`）的其中一个，但不能同时设置。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 续费时长的时间单位，即参数Period的单位。取值范围：
     * <props="china">
     * - Week。
     * - Month。
     * </props>
     * <props="intl">Month。</props>
     * 默认值：Month。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 统一到期日。该参数值必须与您已设置的统一到期日保持一致，否则将调用失败。指定该参数后，您的实例将续费至统一到期日。取值范围：1~28。
     * 关于统一到期日功能的限制说明，请参见[统一实例到期日](~~108486~~)。
     * > 您必须指定续费时长参数（`Period`、`PeriodUnit`）或统一到期日参数（`ExpectedRenewDay`）的其中一个，但不能同时设置。
     * @example `5`
     */
    "ExpectedRenewDay"?: number;
}
