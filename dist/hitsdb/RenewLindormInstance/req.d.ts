export interface RenewLindormInstanceRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~426062~~)接口获取。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 实例ID，可调用[GetLindormInstanceList](~~426069~~)接口获取。
     * @example `ld-bp1z3506imz2f****`
     */
    "InstanceId": string;
    /**
     * 实例购买的付费周期，取值：
     * - **Month**：单位为月。
     * - **Year**：单位为年。
     * @example `Month`
     */
    "PricingCycle": string;
    /**
     * 实例包年包月的时间，取值：
     * - PricingCycle为**Month**，表示按月付费，取值范围为**1**~**9**。
     * - PricingCycle为**Year**，表示按年付费，取值范围为**1**~**3**。
     * @example `1`
     */
    "Duration": number;
}
