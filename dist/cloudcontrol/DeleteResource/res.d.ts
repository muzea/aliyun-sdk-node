export interface DeleteResourceResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
    `
     */
    requestId: string;
    /**
     * 异步任务ID。当本次操作为异步时，此字段返回，此时Http状态码为202。
     * @example `task-433aead756057fff8189a7ce5****
    `
     */
    taskId: string;
}
