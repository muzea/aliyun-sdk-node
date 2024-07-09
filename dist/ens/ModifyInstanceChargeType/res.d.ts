export interface ModifyInstanceChargeTypeResponse {
    /**
     * 请求ID。
     * @example `E2CE5821-7A18-5F7B-A18A-1C751B933D2A`
     */
    RequestId: string;
    /**
     * 实例ID列表。
     */
    InstanceIds: string[];
    /**
     * 生成的订单ID。
     * @example `21522202681****`
     */
    OrderId: number;
}
