export interface HandleSecurityEventsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FF0020B9-999F-5DE2-985F-DB282BDA5311`
     */
    RequestId: string;
    /**
     * 处理安全告警事件的结果返回。
     */
    HandleSecurityEventsResponse: {
        /**
         * 处理安全告警事件的任务ID。
         * @example `15411`
         */
        TaskId: number;
    };
}
