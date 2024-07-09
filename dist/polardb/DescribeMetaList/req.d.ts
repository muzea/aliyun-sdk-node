export interface DescribeMetaListRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查询账号下所有集群的信息详情。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 备份集ID。
     * > * 查询时，`BackupId`和`RestoreTime`参数必选其一传入。
     * > * 您可以通过[DescribeBackups](~~98102~~)接口查看备份集ID。
     * @example `111111`
     */
    "BackupId"?: string;
    /**
     * 还原时间点，格式为YYYY-MM-DDThh:mmZ（UTC时间）。
     * >查询时，`BackupId`和`RestoreTime`参数必选其一传入。您可以通过[DescribeBackups](~~98102~~)接口查看还原时间点。
     * @example `2020-10-04T01:40:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 传入具体的数据库名称（如`test_db`）以获取目标数据库所有支持恢复的数据表名称。
     * > * 每次仅支持传入一个数据库名称。
     * > * 若该参数留空，您可以查看当前备份集下所有支持恢复的数据库名称，但无法查看各数据库下对应的数据表名称。
     * @example `test_db`
     */
    "GetDbName"?: string;
    /**
     * 每页记录数，取值范围如下：
     * * **30**
     * * **50**
     * * **100**
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值范围为大于0但不超过Integer最大值的整数，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 实例所在地域ID，您可以调用[DescribeDBClusterAttribute](~~2319132~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionCode"?: string;
}
