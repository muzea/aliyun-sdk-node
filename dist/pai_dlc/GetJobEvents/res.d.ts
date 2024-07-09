export interface GetJobEventsResponse {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-******`
     */
    JobId: string;
    /**
     * 事件。
     */
    Events: string[];
    /**
     * 本次调用的请求ID，用于诊断和答疑。
     * @example `78F6FCE2-278F-4C4A-A6B7-DD8ECEA9C456`
     */
    RequestId: string;
}
