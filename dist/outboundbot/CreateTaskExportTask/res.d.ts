export interface CreateTaskExportTaskResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID
     * @example `C377C5FF-4F94-1B23-89D0-50C560623EE4`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `[]`
     */
    Message: string;
    /**
     * 导出任务ID
     * @example `a7d6dcff1b8b40f4a8b769a9c24e7852`
     */
    TaskId: string;
}
