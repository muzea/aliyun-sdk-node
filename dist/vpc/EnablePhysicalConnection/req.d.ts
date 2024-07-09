export interface EnablePhysicalConnectionRequest {
    /**
     * 物理专线所在的地域。
     * 您可以通过调用DescribeRegions接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 物理专线的ID。
     * @example `pc-2zeoaxkq3x****`
     */
    "PhysicalConnectionId": string;
    /**
     * 客户端token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
    /**
     * 表示是否跳过SP（即订单生命周期），取值：
     * - **true**：跳过SP，说明阿里云售卖系统不再管理该实例，可免费使用。
     * - **false**（默认值）：不跳过SP。
     * > 该功能需要向客户经理申请使用。
     * @example `false`
     */
    "ByPassSp"?: boolean;
}
