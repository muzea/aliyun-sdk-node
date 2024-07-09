export interface PauseEventStreamingRequest {
    /**
     * 要停用的事件流的名称。
     * @example `rocketmq-sync`
     */
    "EventStreamingName": string;
}
