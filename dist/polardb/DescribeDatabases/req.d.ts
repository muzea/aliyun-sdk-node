export interface DescribeDatabasesRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 数据库名。
     * > 不支持填入多个数据库名称。
     * @example `test_db`
     */
    "DBName"?: string;
    /**
     * 页码，取值范围为大于0但不超过Integer最大值的整数，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值范围如下：
     * * **30**
     * * **50**
     * * **100**
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
}
