export interface CreateBackupSetDownloadLinkResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 目标备份集所对应的下载任务 ID。
     * @example `10000***67`
     */
    DownloadTaskId: number;
}
