export interface DeleteBranchResponse {
    /**
     * 请求ID
     * @example `6177543A-8D54-5736-A93B-E0195A1512CB`
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
    success: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 删除的分支名称
         * @example `deleteBranch`
         */
        branchName: string;
    };
}
