export interface SubmitIndexJobRequest {
    /**
     * 业务空间id，请登录百炼后，在左上角业务空间详情中获取。
     * @example `ws_3Nt27MYcoK191ISp`
     */
    "WorkspaceId": string;
    /**
     * 索引ID
     * @example `79c0aly8zw`
     */
    "IndexId": string;
}
