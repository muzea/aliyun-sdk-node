export interface UpdateDatasetRequest {
    /**
     * 数据集ID。如何获取数据集ID，详情请参见[ListDatasets](~~457222~~)。
     * @example `d-rbvg5wz****c9ks92`
     */
    "DatasetId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 数据集名称。如何获取数据集名称，详情请参见[ListDatasets](~~457222~~)。
         * @example `myName`
         */
        Name: string;
        /**
         * 描述。
         * @example `用于标注的数据。`
         */
        Description: string;
        /**
         * 扩展字段，JsonString类型。
         * 当DLC使用数据集时，可通过配置mountPath字段指定数据集默认挂载路径。
         * @example `{
          "mountPath": "/mnt/data/"
        }`
         */
        Options: string;
    };
}
