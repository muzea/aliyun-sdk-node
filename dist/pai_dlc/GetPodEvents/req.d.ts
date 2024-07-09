export interface GetPodEventsRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-20210126170216-*****`
     */
    "JobId": string;
    /**
     * 节点ID。如何获取节点ID，请参见[GetJob](~~459677~~)。
     * @example `dlc-20210126170216-mtl37ge7gkvdz-chief-0`
     */
    "PodId": string;
    /**
     * 节点UID。如何获取节点UID，请参见[GetJob](~~459677~~)。
     * @example `dlc-20210126170216-*****-chief-0`
     */
    "PodUid"?: string;
    /**
     * 返回的事件最大数量。
     * @example `100`
     */
    "MaxEventsNum"?: number;
    /**
     * 起始时间（UTC）。
     * @example `2020-11-08T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 截止时间（UTC）。
     * @example `2020-11-09T16:00:00Z`
     */
    "EndTime"?: string;
}
