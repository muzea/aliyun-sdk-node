export interface UpdateFileResponse {
    /**
     * 请求ID
     * @example `C2F153F6-BB43-50C4-9F4F-40593203E19A`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 分支名称
         * @example `master`
         */
        branchName: string;
        /**
         * 文件路径
         * @example `src/main/update.txt`
         */
        filePath: string;
    };
}
