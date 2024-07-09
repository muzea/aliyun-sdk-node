export interface CancelAsyncTaskRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 任务唯一ID
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    "TaskId"?: string;
}
