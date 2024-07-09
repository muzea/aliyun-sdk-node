export interface DownloadFileNameListRequest {
    /**
     * 数据集ID。
     * @example `808`
     */
    "DatasetId": number;
    /**
     * 文件名称（支持模糊搜索）。
     * @example `jpg`
     */
    "Identity"?: string;
}
