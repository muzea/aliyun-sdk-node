export interface GetPublicDatasetEntityRequest {
    /**
     * 数据集名称
     * @example `西蒙斯基因组多样性计划`
     */
    "DatasetName": string;
    /**
     * 实体类型
     * @example `sample`
     */
    "EntityType": string;
    /**
     * 地域ID
     * @example `cn-shanghai`
     */
    "Location"?: string;
}
