export interface DeleteFileResponse {
    /**
     * 请求ID
     * @example `7EFAD5FB-2296-5D52-BC60-FCC992A40767`
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
         * 文件路径
         * @example `src/main/delete.java`
         */
        filePath: string;
        /**
         * 分支名称
         * @example `master`
         */
        branchName: string;
    };
}
