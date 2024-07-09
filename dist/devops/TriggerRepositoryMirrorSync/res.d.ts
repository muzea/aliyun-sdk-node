export interface TriggerRepositoryMirrorSyncResponse {
    /**
     * 错误信息
     * @example `企业不存在`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `37294673-00CA-5B8B-914F-A8B35511E90A`
     */
    requestId: string;
    /**
     * 请求结果
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_ILLEGAL_ARGUMENT_ERROR`
     */
    errorCode: string;
    /**
     * 响应结果
     */
    result: {
        /**
         * 仓库同步触发结果
         * @example `true`
         */
        result: boolean;
    };
}
