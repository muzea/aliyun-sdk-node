export interface GetAutonomousNotifyEventContentRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "__context"?: string;
    /**
     * 实例ID。
     * @example `rm-18ff4a195d****`
     */
    "InstanceId": string;
    /**
     * 事件的唯一标识，您可调用[GetAutonomousNotifyEventsInRange](~~288371~~)接口查看返回参数中的SpanId。
     * @example `7e7b2774-95b8-4fa3-bd9c-0ab47cb7****`
     */
    "SpanId": string;
}
