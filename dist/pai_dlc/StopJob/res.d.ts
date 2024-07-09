export interface StopJobResponse {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-xxxxxxx`
     */
    JobId: string;
    /**
     * 请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-xxxxxx`
     */
    RequestId: string;
}
