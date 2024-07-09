export interface DescribeDatasetItemListResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `C6E9C6E4-608B-5C0F-9783-E288********`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回数据总条数
     * @example `20`
     */
    TotalCount: number;
    DatasetItemInfoList: {
        /**
         * 数据集ID
         * @example `
        4add6a61804e47858266883e********
        `
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
         * @example `2022-09-22T12:00:00Z`
         */
        ExpiredTime: string;
        /**
         * 最后修改时间，格林威治时间
         * @example `2022-09-21T12:58:43Z`
         */
        ModifiedTime: string;
        /**
         * 创建时间
         * @example `2022-09-21T12:58:43Z`
         */
        CreatedTime: string;
        /**
         * 描述信息
         * @example `描述信息`
         */
        Description: string;
    }[];
}
