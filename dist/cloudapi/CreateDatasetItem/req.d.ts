export interface CreateDatasetItemRequest {
    /**
     * 数据集ID
     * @example `a25a6589b2584ff490e891cc********`
     */
    "DatasetId": string;
    /**
     * 数据值（根据数据集类型填写对应类型数据值）
     * @example `106.43.XXX.XXX`
     */
    "Value": string;
    /**
     * 数据条目超时时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**
     * 为空时表示永不过期
     * @example `2022-09-22T12:00:00Z`
     */
    "ExpiredTime"?: string;
    /**
     * 描述，不超过180个字符
     * @example `描述信息`
     */
    "Description"?: string;
}
