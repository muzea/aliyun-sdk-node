export interface CreateResourceResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
    `
     */
    requestId: string;
    /**
     * 资源ID。
     * @example `cctest`
     */
    resourceId: string;
    /**
     * 异步任务ID。当本次操作为异步时，此字段返回，此时Http状态码为202。
     * @example `task-433aead756057fff8189a7ce5****
    `
     */
    taskId: string;
    /**
     * 资源路径。相对资源id，资源路径会包含完整的资源定位（父资源/子资源）。
     * @example `Instance/r-8vbf5abe31c9c4d4/Account/cctest`
     */
    resourcePath: string;
}
