export interface CreateDdrInstanceRequest {
    /**
     * 目标地域ID，可以通过接口DescribeRegions查看地域ID。
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
     * * PostgreSQL：**9.4/10.0/11.0/12.0/13.0**
     * @example `5.6`
     */
    "EngineVersion": string;
    /**
     * 目标实例规格，详见[实例规格表](~~26312~~)。
     * @example `rds.mysql.s1.small`
     */
    "DBInstanceClass": string;
    /**
     * 目标实例存储空间，取值：**5~2000**。
     * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
     * @example `20`
     */
    "DBInstanceStorage": number;
    /**
     * 目标实例的字符集，取值：
     * * **utf8**
     * * **gbk**
     * * **latin1**
     * * **utf8mb4**
     * @example `uft8`
     */
    "SystemDBCharset"?: string;
    /**
     * 目标实例的网络连接类型，取值：
     * * **Internet**：公网连接
     * * **Intranet**：内网连接
     * @example `Intranet`
     */
    "DBInstanceNetType": string;
    /**
     * 目标实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以 http:// 和 https:// 开头。
     * @example `testdb`
     */
    "DBInstanceDescription"?: string;
    /**
     * 目标实例的[IP白名单](~~43185~~)，多个IP地址请以半角逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
     * * IP地址形式，例如：10.23.12.24。
     * * CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * @example `127.0.0.1`
     */
    "SecurityIPList": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 目标实例的付费类型，取值：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 目标实例的可用区ID。多可用区用英文冒号（:）分隔。
     * > 指定了VPC和交换机时，为匹配交换机对应的可用区，该参数必填。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 目标实例的网络类型，取值：
     * * **VPC**：VPC网络
     * * **Classic**：经典网络
     * 默认创建经典网络类型的实例。
     * >当本参数值为**VPC**时，还需要传入参数**VpcId**、**VSwitchId**。
     * @example `Classic`
     */
    "InstanceNetworkType"?: string;
    /**
     * 目标实例的访问模式，取值：
     * * **Standard**：标准访问模式
     * * **Safe**：数据库代理模式
     * 默认值：**Standard**。
     * @example `Standard`
     */
    "ConnectionMode"?: string;
    /**
     * 目标实例的VPC ID。当**InstanceNetworkType**=**VPC**时，本参数可用。
     * >如果传入此参数，您还需要传入参数**ZoneId**。
     * @example `vpc-****`
     */
    "VPCId"?: string;
    /**
     * 目标实例的虚拟交换机ID，多个值用半角逗号（,）隔开。当**InstanceNetworkType**=**VPC**时，本参数可用。
     * >如果传入此参数，您还需要传入参数**ZoneId**。
     * @example `vsw-****`
     */
    "VSwitchId"?: string;
    /**
     * 设置目标实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
     * @example `172.XX.XX.69`
     */
    "PrivateIpAddress"?: string;
    /**
     * 指定购买时长，取值：
     * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**。
     * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `2`
     */
    "UsedTime"?: string;
    /**
     * 指定预付费目标实例为包年或者包月类型，取值：
     * * **Year**：包年
     * * **Month**：包月
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 恢复方式，取值：
     * * **BackupSet**：基于备份集恢复，您还需要传入参数**BackupSetId**。
     * * **BackupTime**：基于时间点恢复，您还需要传入参数**RestoreTime**、**SourceRegion**、**SourceDBInstanceName**。
     * @example `BackupSet`
     */
    "RestoreType": string;
    /**
     * 基于备份集恢复时，使用的备份集的ID。可以通过接口DescribeCrossRegionBackups查看备份集ID。
     * >**RestoreType**=**BackupSet**时必传。
     * @example `14****`
     */
    "BackupSetId"?: string;
    /**
     * 基于时间点恢复时，要恢复的时间节点，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**RestoreType**=**BackupTime**时必传 。
     * @example `2019-05-30T03:29:10Z`
     */
    "RestoreTime"?: string;
    /**
     * 基于时间点恢复时，源地域的ID。
     * >**RestoreType**=**BackupTime**时必传。
     * @example `cn-hangzhou`
     */
    "SourceRegion"?: string;
    /**
     * 基于时间点恢复时，源实例的ID。
     * >**RestoreType**=**BackupTime**时必传。
     * @example `rm-uf6wjk5****`
     */
    "SourceDBInstanceName"?: string;
    /**
     * 目标实例存储类型，当前仅支持SSD本地盘，默认值：**local_ssd**。
     * @example `local_ssd`
     */
    "DBInstanceStorageType"?: string;
}
