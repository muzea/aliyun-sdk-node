export interface QueryEventTracesRequest {
    /**
     * 事件总线的名称。
     * @example `MyEventBus`
     */
    "EventBusName": string;
    /**
     * 事件ID。
     * @example `1935debf-ddac-49dc-a090-d4f2857a046d
    `
     */
    "EventId": string;
}
