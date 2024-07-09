export interface GetPodLogsRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-20210126170216-*****`
     */
    "JobId": string;
    /**
     * 节点ID。如何获取节点ID，请参见[GetJob](~~459677~~)。
     * @example `dlc-20210126170216-*****-chief-0`
     */
    "PodId": string;
    /**
     * 节点UID；如何获取节点UID，请参见[GetJob](~~459677~~)。
     * @example `fe846462-af2c-4521-bd6f-96787a57****`
     */
    "PodUid"?: string;
    /**
     * 返回的日志的最大行数，默认值：2000。
     * @example `100`
     */
    "MaxLines"?: number;
    /**
     * 查询的起始时间，默认值：7天前。
     * @example `2020-11-08T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询的截止时间，默认值：当前。
     * @example `2020-11-08T17:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 是否下载日志文件。取值如下：
     * - false（默认）：表示不下载日志文件。
     * - true：开始下载日志文件。
     * @example `true`
     */
    "DownloadToFile"?: boolean;
}
