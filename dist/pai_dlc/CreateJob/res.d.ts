export interface CreateJobResponse {
    /**
     * 此次调用创建的任务ID。
     * @example `dlc7*******`
     */
    JobId: string;
    /**
     * 本次请求的ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-xxxxxxx`
     */
    RequestId: string;
}
