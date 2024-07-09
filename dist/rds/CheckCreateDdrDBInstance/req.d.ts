export interface CheckCreateDdrDBInstanceRequest {
    /**
     * 目的实例地域ID，可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标数据库类型，取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 目标数据库版本。根据**Engine**参数取值的不同，本参数取值如下：
     * * MySQL：**5.5/5.6/5.7/8.0**
     * * SQL Server：**2008r2/08r2_ent_ha/2012/2012_ent_ha/2012_std_ha/2012_web/2014_std_ha/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent/2019_std_ha/2019_ent**
     * * PostgreSQL：**10.0/11.0/12.0/13.0/14.0/15.0**
     * @example `5.6`
     */
    "EngineVersion": string;
    /**
     * 目的实例规格，详见[实例规格表](~~26312~~)。
     * @example `rds.mysql.s1.small`
     */
    "DBInstanceClass": string;
    /**
     * 目的实例存储空间，取值： **5~2000**。
     * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
     * @example `20`
     */
    "DBInstanceStorage": number;
    /**
     * 恢复方式，取值：
     * * **0**：基于备份集恢复，您还需要传入参数**BackupSetId**。
     * * **1**：基于时间点恢复，您还需要传入参数**RestoreTime**、**SourceRegion**、**SourceDBInstanceName**。
     * 默认值：**0**。
     * @example `0`
     */
    "RestoreType": string;
    /**
     * 基于备份集恢复时，使用的备份集的ID。可以通过接口DescribeCrossRegionBackups查看备份集ID。
     * >**RestoreTyp**e=**0**时必传。
     * @example `14358`
     */
    "BackupSetId"?: string;
    /**
     * 基于时间点恢复时，要恢复的时间节点，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**RestoreType**=**1**时必传 。
     * @example `2019-05-30T03:29:10Z`
     */
    "RestoreTime"?: string;
    /**
     * 基于时间点恢复时，源地域的ID。
     * >**RestoreType**=**1**时必传。
     * @example `cn-hangzhou`
     */
    "SourceRegion"?: string;
    /**
     * 基于时间点恢复时，源实例的ID。
     * >**RestoreType**=**1**时必传。
     * @example `rm-uf6wjk5****`
     */
    "SourceDBInstanceName"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
