export interface GetPodEventsResponse {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-*****`
     */
    JobId: string;
    /**
     * 节点ID。
     * @example `dlc-20210126170216-*****-chief-0`
     */
    PodId: string;
    /**
     * 实例UID。
     * @example `94a7cc7c-0033-48b5-85bd-71c63592c268`
     */
    PodUid: string;
    /**
     * 事件列表。
     */
    Events: string[];
    /**
     * 本次调用的请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
