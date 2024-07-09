export interface DescribeCrossBackupMetaListRequest {
    /**
     * 跨地域备份集ID。可以通过接口DescribeCrossRegionBackups查询。
     * @example `123456`
     */
    "BackupSetId": string;
    /**
     * 要查询的数据库名。精确匹配，会返回具体的数据库名以及库内的表名。
     * @example `testdb1`
     */
    "GetDbName"?: string;
    /**
     * 要查询的数据库名。模糊匹配，只返回匹配的数据库名，不返回表名。
     * >您可以先模糊匹配，例如传入test匹配testdb1和testdb2，确定目标数据库名称后再精确匹配，通过传入**GetDbName**查看具体的数据库名和表名。
     * @example `test`
     */
    "Pattern"?: string;
    /**
     * 每页记录数。默认值：**1**。
     * >需要和**PageIndex**一起传入才生效。
     * @example `30`
     */
    "PageSize"?: string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * >需要和**PageSize**一起传入才生效。
     * @example `1`
     */
    "PageIndex"?: string;
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
