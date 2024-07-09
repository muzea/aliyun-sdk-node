export interface ScaleoutApplicationWithNewInstancesResponse {
    /**
     * 应用扩容的变更记录ID。
     * @example `e370c17f-*****-3df0721a327`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `e370c17f-*****-3df0721a327`
     */
    RequestId: string;
    /**
     * ECS实例ID列表。
     */
    InstanceIds: string[];
}
