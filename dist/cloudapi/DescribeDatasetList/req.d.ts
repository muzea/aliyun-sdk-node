export interface DescribeDatasetListRequest {
    /**
     * 数据集ID（支持输入多个数据集ID，用","分隔）
     * @example `4add6a61804e47858266883e********`
     */
    "DatasetIds"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数，每页显示条数，默认值10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定规则所适用的对象标签，可设置多个
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `env`
         */
        Key: string;
        /**
         * 标签值
         * @example `value`
         */
        Value: string;
    }[];
}
