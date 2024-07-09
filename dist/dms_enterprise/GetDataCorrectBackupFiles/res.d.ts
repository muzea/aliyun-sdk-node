export interface GetDataCorrectBackupFilesResponse {
    /**
     * 请求ID。
     * @example `4AFF4109-FEFB-44E8-96A3-923B1FA8C46E`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    DataCorrectBackupFiles: {
        /**
         * 备份文件附件下载地址信息。
         */
        FileUrl: string[];
    };
}
