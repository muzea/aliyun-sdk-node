export interface QueryTracedEventByEventIdRequest {
    /**
     * 事件总线的名称。
     * @example `demo`
     */
    "EventBusName": string;
    /**
     * 事件源名称。
     * @example `mse`
     */
    "EventSource"?: string;
    /**
     * 事件ID。
     * @example `1935debf-ddac-49dc-a090-d4f2857a046d`
     */
    "EventId": string;
}
