export interface UpgradeDBInstanceKernelVersionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * > * PostgreSQL实例的存储类型必须为**云盘**。本地盘实例可以通过[重启实例](~~26230~~)接口重启，以自动升级到最新的小版本。
     * > * SQL Server实例仅2019版本支持小版本升级。
     * @example `rm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 升级时间，取值：
     * * **Immediate**（默认）：立即生效。
     * * **MaintainTime**：在可运维时间段内生效，修改运维时间请参见ModifyDBInstanceMaintainTime。
     * * **SpecifyTime**：指定时间生效。
     * @example `Immediate`
     */
    "UpgradeTime"?: string;
    /**
     * 指定时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**UpgradeTime**= **SpecifyTime**时传入此参数有效。
     * @example `2020-01-15T00:00:00Z`
     */
    "SwitchTime"?: string;
    /**
     * 指定需要升级的数据库小版本号。格式：
     * * **PostgreSQL**：`rds_postgres_<大版本号>00_<小版本号>`。例如12版本的20200830：`rds_postgres_1200_20200830`。
     * * **MySQL**：`<实例版本>_<小版本号>`。例如`rds_20200229`、`xcluster_20200229`或`xcluster80_20200229`。其中，实例版本分为如下三种：
     *     * **rds**：高可用系列或基础系列。
     *     * **xcluster**：MySQL 5.7三节点企业系列。
     *     * **xcluster80**：MySQL 8.0三节点企业系列。
     * * **SQLServer**：`<小版本号>`。例如`15.0.4073.23`。
     * 不传此参数则默认升级到最新的小版本。
     * > 小版本号请参见：[PostgreSQL小版本Release Notes](~~126002~~)、[MySQL小版本Release Notes](~~96060~~)、[SQL Server小版本Release Notes](~~213577~~)。
     * @example `xcluster80_20210305`
     */
    "TargetMinorVersion"?: string;
}
