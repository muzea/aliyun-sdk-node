export interface GetTaskByUuidRequest {
    /**
     * 实例id
     * @example `024f8cf0-c842-4c01-b74b-c8667e4579c7`
     */
    "InstanceId": string;
    /**
     * 任务id
     * @example `15160071061`
     */
    "TaskId": string;
    /**
     * 是否需要对话信息
     * @example `true`
     */
    "WithConversations"?: boolean;
}
