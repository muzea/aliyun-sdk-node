export interface CreateInstancesRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 镜像ID。您可以调用[ListImages](~~189313~~)查询指定地域下可用的镜像ID。
     * @example `e2c9c365024a44369c9b955a998a****`
     */
    "ImageId": string;
    /**
     * 套餐ID。您可以调用[ListPlans](~~189314~~)查询指定地域下的全部套餐信息。
     * @example `swas.s1.c1m1s40b3t05`
     */
    "PlanId": string;
    /**
     * 购买资源的时长。单位：月。取值范围：{"1", "3", "6", "12", "24", "36"}
     * @example `1`
     */
    "Period": number;
    /**
     * 是否开启到期自动续费。取值范围：
     * - true：开启
     * - false：不开启
     * 默认值：false
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费的时长，仅当`AutoRenew=true`时该参数必填。单位：月。取值范围：{"1", "3", "6", "12", "24", "36"}
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 挂载的数据盘容量大小。单位：GB。取值范围：0~16380，取值必须是20的整数倍。
     * <props="china">
     * - 取值为0时，表示不挂载数据盘。
     * - 如果您选择的套餐使用的是ESSD云盘（性能级别PL0），则挂载的数据盘容量最小值为40 GB。
     * - 如果您选择的套餐使用的是SSD云盘，则挂载的数据盘容量最小值为20 GB。
     * </props>
     * <props="intl">
     * - 取值为0时，表示不挂载数据盘。
     * - 如果您选择的套餐使用的是SSD云盘，则挂载的数据盘容量最小值为20 GB。
     * </props>
     * 默认值：0
     * @example `20`
     */
    "DataDiskSize"?: number;
    /**
     * 创建轻量应用服务器的数量。取值范围：1~20
     * 默认值：1
     * @example `1`
     */
    "Amount"?: number;
    /**
     * 计费方式。取值：PrePaid，目前仅支持包年包月计费方式。
     * 默认值：PrePaid
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
