export interface TriggerSophonPlaybookResponse {
    /**
     * 触发命令或剧本后的返回详情。
     */
    Data: {
        /**
         * 业务的自定义ID，如果触发剧本时不指定，会产生一个随机的ID，用于排查与定位问题。
         * @example `a7c6d055-a72f-4676-bc89-3cd9edc0284c`
         */
        SophonTaskId: string;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0DFC9403-54EB-5672-B690-9AA93C9EBB54`
     */
    RequestId: string;
}
