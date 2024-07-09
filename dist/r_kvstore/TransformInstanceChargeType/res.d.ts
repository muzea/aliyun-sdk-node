export interface TransformInstanceChargeTypeResponse {
    /**
     * 实例的到期时间。
     * > 当实例的付费类型从按量付费转换为包年包月时，本参数才会返回具体的值。
     * @example `2021-05-13T00:00:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `82C791FB-8979-489E-853D-706D7743****`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `20881824000****`
     */
    OrderId: string;
}
