export interface DeleteDatasetLabelsRequest {
    /**
     * 数据集ID。如何获取数据集ID，详情请参见[ListDatasets](~~457222~~)。
     * @example `d-rbvg5****jhc9ks92`
     */
    "DatasetId"?: string;
    /**
     * 标签的键值。如何查询标签的键值，详情请参见[GetDataset](~~457218~~)。多项标签使用半角逗号（,）分隔。
     * @example `key1,key2`
     */
    "LabelKeys"?: string;
}
