export interface UpdateDatasetRequest {
    /**
     * 数据集ID。
     * @example `120`
     */
    "Id": number;
    /**
     * 数据集名称。
     * @example `test1`
     */
    "Name": string;
    /**
     * 数据集描述。
     * @example `test12`
     */
    "Description"?: string;
}
