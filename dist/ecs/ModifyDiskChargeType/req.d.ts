export interface ModifyDiskChargeTypeRequest {
    /**
     * 云盘挂载的实例ID。
     * @example `i-bp1i778bq705cvx1****`
     */
    "InstanceId": string;
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云盘ID列表，一个带有格式的JSON Array，最多支持16个ID，用半角逗号（,）隔开。
     * @example `["d-bp67acfmxazb4ph****", "d-bp67acfmxazb4pi****", … "d-bp67acfmxazb4pj****"]`
     */
    "DiskIds": string;
    /**
     * 是否自动支付。取值范围：
     *
     * - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
     * - false：只生成订单不扣费。如果您的账户余额不足，会生成正常的未支付订单，此订单可登录用户中心后，在<props="china"><ph>[我的订单](https://usercenter2.aliyun.com/order/list)</ph></props><props="intl"><ph>[订单管理](https://usercenter2-intl.aliyun.com/order/list)</ph></props>页面支付。
     *
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 云盘计费方式。取值范围：
     *
     * - PrePaid（默认）：按量付费数据盘转换为包年包月数据盘。
     * - PostPaid：包年包月数据盘转换为按量付费数据盘。
     *
     * @example `PostPaid`
     */
    "DiskChargeType"?: string;
}
