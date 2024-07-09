export interface ListPublicDatasetEntitiesRequest {
    /**
     * 公共数据集名称
     * @example `西蒙斯基因组多样性计划`
     */
    "DatasetName": string;
    /**
     * 排序字段
     * @example `LastModified`
     */
    "OrderBy"?: string;
    /**
     * 是否逆序，默认逆序排列
     * @example `true`
     */
    "IsReversed"?: boolean;
    /**
     * 翻页Token用来标记当前开始读取的位置，置空表示从头开始
     * @example `0f2cc944-67db-4fb1-bb10-f136cda74bda`
     */
    "NextToken"?: string;
    /**
     * 分页数量
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 地域ID
     * @example `cn-shanghai`
     */
    "Location"?: string;
}
