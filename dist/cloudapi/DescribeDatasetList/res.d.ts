export interface DescribeDatasetListResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `D403C6E6-21B3-5B78-82DA-E3B6********`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `20`
     */
    TotalCount: number;
    /**
     * 由datasetinfo组成的数组格式，返回数据集信息
     */
    DatasetInfoList: {
        /**
         * 数据集ID
         * @example `6304ce6b4ae6453f********`
         */
        DatasetId: string;
        /**
         * 数据集名称
         * @example `DatasetName`
         */
        DatasetName: string;
        /**
         * 数据集类型，可选值：
         * - JWT_BLOCKING : JWT黑名单
         * - IP\_WHITELIST\_CIDR : IP白名单
         * - PARAMETER_ACCESS : 参数访问控制
         * @example `IP_WHITELIST_CIDR`
         */
        DatasetType: string;
        /**
         * 最后修改时间，格林威治时间
         * @example `2022-09-21T12:58:43Z
        `
         */
        ModifiedTime: string;
        /**
         * 创建时间，格林威治时间
         * @example `2022-09-21T12:58:43Z
        `
         */
        CreatedTime: string;
        /**
         * 标签
         */
        Tags: {
            /**
             * 标签的键
             * @example `ENV`
             */
            Key: string;
            /**
             * 标签值
             * @example `123`
             */
            Value: string;
        }[];
    }[];
}
