export interface TriggerPlaybookResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BD5A8DB6-A42C-532B-BCE8-83E69550CD59`
     */
    RequestId: string;
    /**
     * 剧本运行的UUID，可用于获取剧本的运行结果。
     * @example `55E63C57-D6C8-5036-A770-5CB10AC807AA`
     */
    TriggerUuid: string;
}
