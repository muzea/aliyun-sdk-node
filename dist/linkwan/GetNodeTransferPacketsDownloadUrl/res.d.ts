export interface GetNodeTransferPacketsDownloadUrlResponse {
    /**
     * 数据包统计文件下载地址。
     * @example `http://xxx.xxx.xxx/xxx.csv`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097	`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
