export interface ListDatasetDatasRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页总共多少数据。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据集ID。
     * @example `120`
     */
    "DatasetId": number;
    /**
     * 文件标识（支持模糊搜索）。
     * @example `猫`
     */
    "Identity"?: string;
}
