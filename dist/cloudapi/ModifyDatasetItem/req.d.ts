export interface ModifyDatasetItemRequest {
    /**
     * 数据集ID
     * @example `a25a6589b2584ff490e891cc********`
     */
    "DatasetId": string;
    /**
     * 数据集条目ID
     * @example `5045****
    `
     */
    "DatasetItemId": string;
    /**
     * 数据条目超时时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**
     * @example `2022-09-22T12:00:00Z`
     */
    "ExpiredTime"?: string;
    /**
     * 描述信息，长度不超过180个字符
     * @example `description`
     */
    "Description"?: string;
}
