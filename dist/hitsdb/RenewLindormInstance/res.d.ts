export interface RenewLindormInstanceResponse {
    /**
     * 请求ID。
     * @example `1556DCB0-043A-4444-8BD9-CF4A68E7EE64`
     */
    RequestId: string;
    /**
     * 实例ID
     * @example `ld-bp1z3506imz2f****`
     */
    InstanceId: string;
    /**
     * 订单ID。您可以在阿里云用户中心的订单管理中获取。
     * @example `213465921640411`
     */
    OrderId: number;
}
