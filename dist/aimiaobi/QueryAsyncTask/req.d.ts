export interface QueryAsyncTaskRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `33a2658aaabf4c24b45d50e575125311_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 任务唯一ID
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    "TaskId"?: string;
}
