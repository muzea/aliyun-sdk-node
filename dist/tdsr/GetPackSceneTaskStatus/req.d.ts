export interface GetPackSceneTaskStatusRequest {
    /**
     * 任务ID
     * @example `hjsyuyiuwe7wehg****`
     */
    "TaskId": string;
    /**
     * 操作类型：download（下载），sync（同步）
     * @example `download`
     */
    "Type": string;
}
