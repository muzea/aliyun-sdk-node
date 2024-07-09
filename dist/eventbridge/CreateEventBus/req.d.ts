export interface CreateEventBusRequest {
    /**
     * 事件总线名称。
     * @example `MyEventBus`
     */
    "EventBusName": string;
    /**
     * 描述信息
     * @example `demo`
     */
    "Description"?: string;
}
