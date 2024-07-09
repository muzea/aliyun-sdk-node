export interface UpdateEventBusRequest {
    /**
     * 事件总线名称。
     * @example `eventTest`
     */
    "EventBusName": string;
    /**
     * 描述信息。
     * @example `test`
     */
    "Description"?: string;
}
