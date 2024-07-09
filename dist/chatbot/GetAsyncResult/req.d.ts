export interface GetAsyncResultRequest {
    /**
     * 异步服务的任务ID
     * @example `从Chat接口中获取TASK_ID`
     */
    "TaskId": string;
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
