export interface CreateDatasetRequest {
    /**
     * 数据集名称
     * @example `DatasetName`
     */
    "DatasetName": string;
    /**
     * 数据集类型，可选值：
     * - JWT_BLOCKING : JWT黑名单
     * - IP\_WHITELIST\_CIDR : IP白名单
     * - PARAMETER_ACCESS : 参数访问控制
     * @example `JWT_BLOCKING`
     */
    "DatasetType": string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签的键
         * @example `env`
         */
        Key: string;
        /**
         * 标签的值
         * @example `123`
         */
        Value: string;
    }[];
}
