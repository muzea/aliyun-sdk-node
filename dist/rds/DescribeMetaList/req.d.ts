export interface DescribeMetaListRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 恢复方式，取值：
     * * **BackupSetID**：基于备份集恢复，您还需要传入参数**BackupSetID**。
     * * **RestoreTime**：基于时间点恢复，您还需要传入参数**RestoreTime**。
     * 默认值：**BackupSetID**
     * @example `BackupSetID`
     */
    "RestoreType"?: string;
    /**
     * 基于备份集查询时，使用的备份集的ID。可调用DescribeBackups获取。
     * > **RestoreType**为**BackupSetID**时必传。
     * @example `14***`
     */
    "BackupSetID"?: number;
    /**
     * 基于时间点查询时，使用的时间节点，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。可调用DescribeBackups获取。
     * > **RestoreType**为**RestoreTime**时必传 。
     * @example `2019-05-30T03:29:10Z	`
     */
    "RestoreTime"?: string;
    /**
     * 要查询的数据库名。精确匹配，会返回具体的数据库名以及库内所有的表。
     * > 为空则返回包含所有数据库的列表。
     * @example `testdb1`
     */
    "GetDbName"?: string;
    /**
     * 要查询的数据库名。模糊匹配，只返回匹配的数据库名，不返回表名。
     * > 例如传入`test`匹配`testdb1`和`testdb2`，确定目标数据库名称后再通过**GetDbName**参数传入精确的数据库名称查看目标库下所有表的信息。
     * @example `test`
     */
    "Pattern"?: string;
    /**
     * 每页记录数。默认值：**1**。
     * > 需要和**PageIndex**一起传入才生效。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于**0**且不超过Integer的最大值。默认值：**1**。
     * > 需要和**PageSize**一起传入才生效。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
