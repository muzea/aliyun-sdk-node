export interface RestoreDdrTableRequest {
    /**
     * 要恢复的已有实例ID。
     * @example `rm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 目标地域ID，可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 恢复方式，取值：
     * * **0**：基于备份集恢复，还需要传入参数**BackupId**。
     * * **1**：基于时间点恢复，还需要传入参数**RestoreTime**、**SourceRegion**、**SourceDBInstanceName**。
     * 默认值：**0**。
     * @example `0`
     */
    "RestoreType": string;
    /**
     * 跨地域备份集ID。可以通过接口DescribeCrossRegionBackups查询。
     * >**RestoreType**=**0**时需要传入此参数。
     * @example `279563`
     */
    "BackupId"?: string;
    /**
     * 恢复时间点恢复的时间，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**RestoreType**=**1**时需要传入此参数。
     * @example `2020-04-25T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 基于时间点恢复的来源地域。
     * >**RestoreType**=**1**时需要传入此参数。
     * @example `cn-beijing`
     */
    "SourceRegion"?: string;
    /**
     * 基于时间点恢复的来源实例ID。
     * >**RestoreType**=**1**时需要传入此参数。
     * @example `rm-bp****`
     */
    "SourceDBInstanceName"?: string;
    /**
     * 指定恢复的库表。格式：
     * ```[{"type":"db","name":"<数据库1名称>","newname":"<新数据库1名称>","tables":[{"type":"table","name":"<数据库1内的表1名称>","newname":"<新的表1名称>"},{"type":"table","name":"<数据库1内的表2名称>","newname":"<新的表2名称>"}]},{"type":"db","name":"<数据库2名称>","newname":"<新数据库2名称>","tables":[{"type":"table","name":"<数据库2内的表3名称>","newname":"<新的表3名称>"},{"type":"table","name":"<数据库2内的表4名称>","newname":"<新的表4名称>"}]}]```
     * @example `[{"type":"db","name":"testdb1","newname":"testdb1","tables":[{"type":"table","name":"test1","newname":"test1_backup"},{"type":"table","name":"test2","newname":"test2_backup"}]}]`
     */
    "TableMeta": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
