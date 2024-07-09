export interface GetInstanceLogRequest {
    /**
     * 实例的ID。
     * @example `1234`
     */
    "InstanceId": number;
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 可以从ListInstanceHistory获取InstanceHistoryId
     * @example `1`
     */
    "InstanceHistoryId"?: number;
}
