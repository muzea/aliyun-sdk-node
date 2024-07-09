export interface DeleteNodeToolExecutionHistoryRequest {
    /**
     * 集群ID。
     * @example `cds-3872l6py****n4ug`
     */
    "ClusterId": string;
    /**
     * 作业ID。
     * @example `job-QdKa51s****U0gHf`
     */
    "JobId": string;
    /**
     * 集群数据中心ID。
     * @example `cn-shanghai-f`
     */
    "DataCenterId": string;
}
