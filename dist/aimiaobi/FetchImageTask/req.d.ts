export interface FetchImageTaskRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 任务ID列表
     * @example `["9d8c9185-3f75-4a20-aca1-c5bb53dd97b3"]`
     */
    "TaskIdList": string[];
    /**
     * 文章taskId
     * @example `e1be065b-adc3-435e-bd01-1c18c5ed75d3`
     */
    "ArticleTaskId": string;
}
