export interface DescribeDatasetItemListRequest {
    /**
     * 数据集ID
     * @example `602e1f6b3543200eaab0a89e********`
     */
    "DatasetId": string;
    /**
     * 数据集条目ID，支持填写多个ID，用","分隔
     * @example `5045****
    `
     */
    "DatasetItemIds"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数，每页显示条数，默认值10
     * @example `10`
     */
    "PageSize"?: number;
}
