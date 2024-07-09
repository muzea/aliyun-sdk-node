export interface ListAnnotationDataRequest {
    /**
     * 起始行
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。
     * @example `100`
     */
    "size"?: number;
    /**
     * 数据集唯一标识
     * @example `cb8cc4eb51a85e823471cdb368fae9be`
     */
    "datasetId"?: string;
}
