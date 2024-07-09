export interface ModifyDedicatedHostsChargeTypeRequest {
    /**
     * 专有宿主机ID。取值可以由多台专有宿主机ID组成一个JSON数组，最多支持20个ID，ID之间用半角逗号（,）隔开。
     * @example `["dh-bp181e5064b5sotr****","dh-bp18064b5sotrr9c****"]`
     */
    "DedicatedHostIds": string;
    /**
     * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 包年包月续费时长。取值范围：
     * - `PeriodUnit=Week`时，`Period`的有效取值：1、2、3、4。
     * - `PeriodUnit=Month`时，`Period`的有效取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 续费时长的时间单位，即参数`Period`的单位。取值范围：
     * - Week：周。
     * - Month：月。
     * 默认值为Month。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - false：发送正常请求，通过检查后返回2XX的HTTP状态码并直接查询资源状况。
     * 默认值为false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否自动支付。取值范围：
     * - true：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，并只能作废订单。
     * - false：只生成订单不扣费。
     * 默认值为true。
     * >如果您的支付方式余额不足，可以将参数`AutoPay`置为`false`，此时会生成未支付订单，您可以自行支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 专有宿主机需要修改的目标计费方式。取值范围：
     * - PrePaid：将按量付费转换为包年包月。
     * - PostPaid：将包年包月转换为按量付费。
     * 默认值为PrePaid。
     * @example `PrePaid`
     */
    "DedicatedHostChargeType"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 包年包月转换为按量付费时，是否返回订单费用详情。
     * 默认值为false。
     * @example `false`
     */
    "DetailFee"?: boolean;
}
