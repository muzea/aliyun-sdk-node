export interface GetPublicDatasetRequest {
    /**
     * 数据集名称
     * @example `西蒙斯基因组多样性计划`
     */
    "DatasetName": string;
    /**
     * 指定需要查询的属性列表
     */
    "Attributes"?: string[];
}
