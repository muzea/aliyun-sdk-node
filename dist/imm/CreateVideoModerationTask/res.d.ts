export interface CreateVideoModerationTaskResponse {
    /**
     * 当次请求的Request ID。
     * @example `1B3D5E0A-D8B8-4DA0-8127-ED32C851****`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `VideoModeration-9442a216-4691-4a48-846d-76daccaf*****`
     */
    TaskId: string;
    /**
     * 事件ID。
     * @example `2E6-1I0FGn0zFnl5AflRfhzClma*****`
     */
    EventId: string;
}
