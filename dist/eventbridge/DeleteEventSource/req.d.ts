export interface DeleteEventSourceRequest {
    /**
     * 绑定的总线
     */
    "EventBusName"?: string;
    /**
     * 事件源名称
     * @example `myrabbitmq.source`
     */
    "EventSourceName": string;
}
