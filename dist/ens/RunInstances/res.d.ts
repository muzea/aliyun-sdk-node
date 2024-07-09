export interface RunInstancesResponse {
    /**
     * 请求ID。
     * @example `91E4AFBE-4E35-5D2A-A886-BB477C9953D2`
     */
    RequestId: string;
    /**
     * 实例ID列表。
     */
    InstanceIds: string[];
    /**
     * 订单编号。
     * @example `213177957850399`
     */
    OrderId: string;
}
