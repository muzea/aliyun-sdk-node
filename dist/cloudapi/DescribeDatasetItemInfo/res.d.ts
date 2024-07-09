export interface DescribeDatasetItemInfoResponse {
    /**
     * 请求ID
     * @example `5BAFA85F-38E3-5D9E-9E32-4B09********`
     */
    RequestId: string;
    /**
     * 数据集信息
     */
    DatasetItemInfo: {
        /**
         * 数据集ID
         * @example `626238665db4a5140eea3e40********`
         */
        DatasetId: string;
        /**
         * 数据集条目ID
         * @example `5045****`
         */
        DatasetItemId: string;
        /**
         * 数据值
         * @example `106.43.XXX.XXX`
         */
        Value: string;
        /**
         * 数据条目超时时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**
         * 为空时表示永不过期
         * @example `2022-09-22T12:00:00Z
        `
         */
        ExpiredTime: string;
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
         * 描述信息
         * @example `描述信息`
         */
        Description: string;
    };
}
