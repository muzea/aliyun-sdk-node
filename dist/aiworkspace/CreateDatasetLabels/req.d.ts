export interface CreateDatasetLabelsRequest {
    /**
     * 数据集ID。如何获取数据集ID，详情请参见[ListDatasets](~~457222~~)。
     * @example `d-lfd60v0p****ujtsdx`
     */
    "DatasetId"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 标签列表。
         */
        Labels: any[];
    };
}
