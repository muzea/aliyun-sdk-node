export interface CreateImageModerationTaskResponse {
    /**
     * 当次请求的Request ID。
     * @example `1B3D5E0A-D8B8-4DA0-8127-ED32C851****`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `ImageModeration-179ef4f8-d583-4f0c-a293-7c0889c*****`
     */
    TaskId: string;
    /**
     * 事件ID。
     * @example `2E6-1I0FGn0zFnl5AflRfhzClma*****`
     */
    EventId: string;
}
