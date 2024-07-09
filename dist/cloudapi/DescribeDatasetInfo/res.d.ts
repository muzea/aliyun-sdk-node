export interface DescribeDatasetInfoResponse {
    /**
     * 请求ID
     * @example `A2C8F75E-EE84-5C64-960F-45C8********`
     */
    RequestId: string;
    /**
     * 数据集信息
     */
    DatasetInfo: {
        /**
         * 数据集ID
         * @example `62b91a790a693238********`
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
         * @example `JWT_BLOCKING`
         */
        DatasetType: string;
        /**
         * 最后修改时间，格林威治时间
         * @example `2022-09-21T12:58:43Z`
         */
        ModifiedTime: string;
        /**
         * 创建时间，格林威治时间
         * @example `2022-09-21T12:58:43Z`
         */
        CreatedTime: string;
    };
}
