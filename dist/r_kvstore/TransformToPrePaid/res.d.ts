export interface TransformToPrePaidResponse {
    /**
     * 实例付费方式转换为包年包月后的实例到期时间。
     * @example `2019-01-18T16:00:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `426F1356-B6EF-4DAD-A1C3-DE53B9DAF586`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `111111111111111`
     */
    OrderId: string;
}
