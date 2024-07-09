export interface GetFolderResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件夹的详情。
     */
    Data: {
        /**
         * 文件夹的路径。
         * @example `业务流程/我的第一个业务流程/MaxCompute/ods层`
         */
        FolderPath: string;
        /**
         * 文件夹的ID。
         * @example `2735****`
         */
        FolderId: string;
    };
}
