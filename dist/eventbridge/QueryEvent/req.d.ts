export interface QueryEventRequest {
    /**
     * 事件总线的名称。
     * @example `demo`
     */
    "EventBusName": string;
    /**
     * 事件ID。
     * @example `1935debf-ddac-49dc-a090-d4f2857a046d`
     */
    "EventId": string;
    /**
     * 事件源名称。
     * - 查询default总线事件时，需填写EventSource参数。
     * @example `testEventSourceName`
     */
    "EventSource"?: string;
}
