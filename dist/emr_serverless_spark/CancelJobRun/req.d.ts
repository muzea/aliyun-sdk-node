export interface CancelJobRunRequest {
    /**
     * 工作空间ID。
     * @example `w-d2d82aa09155****`
     */
    "workspaceId": string;
    /**
     * 任务运行ID。
     * @example `jr-f09a8fda2396****`
     */
    "jobRunId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
