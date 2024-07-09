export interface DescribeDatasetItemInfoRequest {
    /**
     * 数据集ID
     * @example `62b91a790a693238********`
     */
    "DatasetId": string;
    /**
     * 数据集条目ID
     * @example `5045****`
     */
    "DatasetItemId"?: string;
    /**
     * 数据值
     * @example `106.43.XXX.XXX
    `
     */
    "Value"?: string;
}
