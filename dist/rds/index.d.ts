interface RDS {
    /**
    * 调用RestoreDBInstance接口恢复备份集到原实例（覆盖性恢复），已下线。
    */ RestoreDBInstance(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxx`
        */ "ClientToken"?: string;
        /**
        * 备份集ID。可以通过接口[DescribeBackups](~~26273~~)查询备份集ID。
        * >**BackupId**和**RestoreTime**必须传入一个。
        * @example `327329803`
        */ "BackupId"?: string;
        /**
        * 用户指定备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >**BackupId**和**RestoreTime**必须传入一个。
        * @example `2011-06-11T16:00:00Z`
        */ "RestoreTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyAccountDescription接口修改数据库账号的描述。
    */ ModifyAccountDescription(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 账号名称。
        * @example `test1`
        */ "AccountName": string;
        /**
        * 账号描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * >不能以 http:// 和 https:// 开头。
        * @example `测试账号A`
        */ "AccountDescription": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateMigrateTask接口将OSS上的备份文件还原到RDS实例，实现数据上云。
    */ CreateMigrateTask(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 目标数据库名称。
        * @example `testDB`
        */ "DBName": string;
        /**
        * 迁移上云任务类型，取值：
        * * **FULL**：通过全量备份文件执去执行还原操作。
        * * **UPDF**：通过增量文件或者日志文件去还原增量部分的数据。
        * @example `FULL`
        */ "BackupMode": string;
        /**
        * 是否将还原后的数据库带上线，便于用户访问，取值：
        * * **True**：将数据库带上线。
        * * **False**：不将数据库带上线。
        * >目前SQL Server 2008 R2 版本该值恒定为**True**。
        * @example `True`
        */ "IsOnlineDB": string;
        "OwnerId"?: number;
        /**
        * 打开数据库后一致性检查方法，取值：
        * * **SyncExecuteDBCheck**：同步执行DB检查；
        * * **AsyncExecuteDBCheck**：异步执行DB检查。
        * 默认值为**AsyncExecuteDBCheck**（兼容 SQL Server 2008 R2）。
        * > 当 **IsOnlineDB**=**True**时，该值有效。
        * @example `AsyncExecuteDBCheck`
        */ "CheckDBMode"?: string;
        /**
        * OSS的组成部分。
        * 取值由3段组成，用英文冒号（:）分隔：
        * * OSS Endpoint地址：oss-ap-southeast-1.aliyuncs.com；
        * * OSS Bucket名字：rdsmssqlsingapore；
        * * OSS上的备份文件Key：autotest_2008R2_TestMigration_FULL.bak。
        * >* 该参数对于 SQL Server 2008 R2 版本实例是可选参数。
        * * 该参数对于 SQL Server 2008 R2 以上版本实例是必传参数。
        * @example `oss-ap-southeast-1.aliyuncs.com:rdsmssqlsingapore:autotest_2008R2_TestMigration_FULL.bak`
        */ "OssObjectPositions"?: string;
        /**
        * 备份文件所在OSS共享URL地址（Encode编码后的URL）。
        * 有多个地址时，先使用“|”隔开，再编码后传入参数。
        * > SQL Server 2008 R2 必须传入该参数。
        * @example `check_cdn_oss.sh www.xxxxxx.mobi `
        */ "OSSUrls"?: string;
        /**
        * 迁移任务ID：
        * * **BackupMode**=**FULL**时，该值为空。（兼容RDS for SQLServer 2008 R2）；
        * * **BackupMode**=**UPDF**时，该值为对应FULL任务的ID。
        * 默认值为FULL。
        * >* **IsOnlineDB**=**True**时，**BackupMode**必须取值为**FULL**；
        * * **IsOnlineDB**=**False**时，**BackupMode**必须为**UPDF**。
        * @example `无`
        */ "MigrateTaskId"?: string;
    }): Promise<{
        "BackupMode": string;
        "requestId": string;
        "DBInstanceId": string;
        "DBName": string;
        "MigrateIaskId": string;
        "TaskId": string;
    }>;
    /**
    * 调用ModifyDBInstanceDescription接口修改RDS实例的描述。
    */ ModifyDBInstanceDescription(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * RDS实例描述。
        * >长度为2-64个字符。
        * @example `阿里云测试环境实例`
        */ "DBInstanceDescription": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceMaintainTime接口修改RDS实例可维护时间段。
    */ ModifyDBInstanceMaintainTime(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例的可维护时间段。格式：<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
        * @example `22:00Z-02:00Z `
        */ "MaintainTime": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceHAConfig接口查询RDS实例高可用模式和数据复制方式。
    */ DescribeDBInstanceHAConfig(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "dBInstanceId": string;
        "hAMode": string;
        "hostInstanceInfos": {
            "logSyncTime": string;
            "nodeId": string;
            "nodeType": string;
            "regionId": string;
            "syncStatus": string;
            "zoneId": string;
        }[];
        "requestId": string;
        "syncMode": string;
    }>;
    /**
    * 调用ModifyDBInstanceSpec接口变更RDS实例（包括常规实例和只读实例，不包括灾备实例和临时实例）的规格或存储空间。
    */ ModifyDBInstanceSpec(query: {
        "RegionId"?: string;
        /**
        * 待变更配置的实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例当前的付费类型，取值：
        * * **Postpaid**：按量付费；
        * * **Prepaid**：预付费。
        * @example `Postpaid`
        */ "PayType": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        /**
        * 实例规格，详见[实例规格表](~~26312~~)。
        * >至少指定实例规格**DBInstanceClass**和存储空间**DBInstanceStorage**其中一个参数。
        * @example `rds.mys2.small`
        */ "DBInstanceClass"?: string;
        /**
        * 自定义存储空间，单位：GB。每5GB进行递增，详情请参见[实例规格表](~~26312~~)。
        * >至少指定实例规格**DBInstanceClass**和存储空间**DBInstanceStorage**其中一个参数。
        * @example `20`
        */ "DBInstanceStorage"?: number;
        /**
        * 生效时间，取值：
        * * **Immediate**：立即生效；
        * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~26249~~)。
        * 默认值：**Immediate**。
        * @example `MaintainTime`
        */ "EffectiveTime"?: string;
        /**
        * 数据库版本号，取值：
        * * MySQL：**5.5/5.6/5.7/8.0**；
        * * SQLServer：**2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_ent**；
        * * PostgreSQL：**9.4/10.0**；
        * * PPAS：**9.3/10.0**；
        * * MariaDB：**10.3**。
        * @example `5.6`
        */ "EngineVersion"?: string;
        "DBInstanceStorageType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRegions接口查询当前可选的RDS地域和可用区信息。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{
        "Regions": {
            "RDSRegion": {
                "RegionId": string;
                "ZoneId": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用AllocateInstancePublicConnection接口申请实例的外网地址。
    */ AllocateInstancePublicConnection(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 外网连接地址，前缀可以自定义。
        * >长度5~40，不能包含汉字和非法字符（~!#%^&amp;*=+\|{};:&#x27;&quot;,&lt;&gt;/?），建议由字母、数字、短横线（-）组成。
        * @example `test1.mysql.rds.aliyuncs.com`
        */ "ConnectionStringPrefix": string;
        /**
        * 外网连接端口，取值：**1000-5999**。
        * @example `3306`
        */ "Port": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySecurityIps接口修改白名单。
    */ ModifySecurityIps(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 该实例的[IP白名单](~~43185~~)，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
        * * IP地址形式，例如：10.23.12.24。
        * * CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
        * @example `10.23.12.24`
        */ "SecurityIps": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        /**
        * 需要修改的IP白名单分组名称，默认操作“Default”分组。
        * >单个实例最多支持50个白名单分组。
        * @example `test`
        */ "DBInstanceIPArrayName"?: string;
        /**
        * 白名单分组属性，默认为空。
        * >控制台不显示带有“hidden”属性的分组，带有该标签的分组通常是用于访问DTS、DRDS服务的。
        * @example `hidden`
        */ "DBInstanceIPArrayAttribute"?: string;
        /**
        * IP地址类型。
        * @example `IPv4`
        */ "SecurityIPType"?: string;
        /**
        * 白名单的网络类型，取值：
        * * **Classic**：高安全白名单模式下的经典网络；
        * * **VPC**：高安全白名单模式下的专有网络；
        * * **MIX**：通用模式，在通用白名单模式下会添加IP到通用分组里，在高安全白名单模式下会同时添加IP到经典网络和专有网络分组里。
        * 默认值：**MIX**。
        * @example `Classic`
        */ "WhitelistNetworkType"?: string;
        /**
        * 安全组编码。
        * @example `rg-acfmyxxxxx`
        */ "SecurityGroupId"?: string;
        /**
        * 修改方式，取值：
        * * **Cover**：覆盖原IP白名单；
        * * **Append**：追加IP；
        * * **Delete**：删除IP。
        * 默认值：**Cover**。
        * @example `Cover`
        */ "ModifyMode"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskId": number;
    }>;
    ModifyInstanceAutoRenewalAttribute(query: {
        /**
        * 地域名称的ID，例如：cn-hangzhou
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例名。
        * @example ` rm-bp1842vmucoa5w874`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证幂等性。
        * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
        */ "ClientToken"?: string;
        /**
        * 自动续费周期，当AutoRenew=”True”时，该值有效且必填。取值为1-12。表示实例到期时，自动续费1-12个月。
        * @example `True`
        */ "Duration"?: string;
        /**
        * 取值为：<br>AutoRenew=”True”设置自动续费;<br>AutoRenew=”False” 取消自动续费。
        * @example `True`
        */ "AutoRenew"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteDatabase接口删除实例下的某个数据库。
    */ DeleteDatabase(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 数据库名称。
        * @example `testdb01`
        */ "DBName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateBackup接口为实例创建一个备份集。
    */ CreateBackup(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 数据库列表，多个数据库之间用英文逗号（,）隔开。
        * >MySQL进行单库逻辑备份或SQL Server进行单库全量物理备份时可传入该参数。
        * @example `rds_mysql`
        */ "DBName"?: string;
        /**
        * 备份策略，取值：
        * * **db**：单库备份；
        * * **instance**：实例备份。
        * >MySQL进行逻辑备份或SQL Server进行全量物理备份时可传入该参数。
        * @example `db`
        */ "BackupStrategy"?: string;
        /**
        * 备份类型，取值：
        * * **Logical**：逻辑备份；
        * * **Physical**：物理备份；
        * * **Snapshot**：快照备份。
        * 默认值：**Physical**。
        * >* 实例必须存在数据库才能进行逻辑备份。
        * * MariaDB进行快照备份时请填写**Physical**。
        * @example `Physical`
        */ "BackupMethod"?: string;
        /**
        * 备份方式，取值：
        * * **Auto**：自动选择全量备份或增量备份；
        * * **FullBackup**：全量备份。
        * 默认值：**Auto**。
        * >仅SQL Server需要填写此参数，其他引擎不用填写。
        * @example `Auto`
        */ "BackupType"?: string;
    }): Promise<{
        "RequestId": string;
        "BackupJobId": string;
    }>;
    /**
    * 调用ModifyCollationTimeZone接口修改系统库的字符集排序规则和时区，已下线。
    */ ModifyCollationTimeZone(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 系统字符集排序规则，取值：
        * * **Latin1_General_CI_AS**
        * * **Latin1_General_CS_AS**
        * * **SQL_Latin1_General_CP1_CI_AS**
        * * **SQL_Latin1_General_CP1_CS_AS**
        * * **Chinese_PRC_CS_AS**
        * * **Chinese_PRC_BIN**
        * * **Chinese_PRC_CI_AS**
        * * **Japanese_CI_AS**
        * * **Japanese_CS_AS**
        * * **Chinese_Taiwan_Stroke_CI_AS**
        * * **Chinese_Taiwan_Stroke_CS_AS**
        * 默认为不修改。
        * >**Collation**与**Timezone**必须传入至少一个。
        * @example `Latin1_General_CI_AS`
        */ "Collation"?: string;
        /**
        * 系统时区，默认为不修改。
        * >**Collation**与**Timezone**必须传入至少一个。
        * @example `China Standard Time`
        */ "Timezone"?: string;
    }): Promise<{
        "collation": string;
        "dBInstanceId": string;
        "requestId": string;
        "taskId": string;
        "timezone": string;
    }>;
    /**
    * 调用DescribeMigrateTasks接口查询备份数据上云任务列表。
    */ DescribeMigrateTasks(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2017-10-20T01:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须大于开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2017-10-25T01:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "PageRecordCount": number;
        "PageNumber": number;
        "TotalRecordCount": number;
        "Items": {
            "MigrateTaskId": string;
            "DBName": string;
            "CreateTime": string;
            "EndTime": string;
            "IsDBReplaced": string;
            "Status": string;
            "BackupMode": string;
            "Description": string;
        };
    }>;
    /**
    * 调用ModifyDBInstanceConnectionMode接口开启或关闭数据库代理，已下线。
    */ ModifyDBInstanceConnectionMode(query: {
        "RegionId"?: string;
        /**
        * 实例名。
        * @example `rm-uf6wjk5xxxxxx`
        */ "DBInstanceId": string;
        /**
        * Performance为标准访问模式；Safe为高安全访问模式。
        * @example `Performance`
        */ "ConnectionMode": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceNetworkType接口切换RDS实例网络类型。
    */ ModifyDBInstanceNetworkType(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 目标网络类型，取值：
        * * **VPC**：专有网络；
        * * **Classic**：经典网络。
        * @example `Classic`
        */ "InstanceNetworkType": string;
        "OwnerId"?: number;
        /**
        * 是否保留经典网络地址，取值：
        * * **True**：保留；
        * * **False**：不保留。
        * 默认值：**False**。
        * >从经典网络切换到专有网络时该参数有效。
        * @example `True`
        */ "RetainClassic"?: string;
        /**
        * 经典网络地址保留的天数，取值**1-120**，单位：天。默认值：**7**。
        * >若传入参数**RetainClassic**=**True**，则该参数必传。
        * @example `7`
        */ "ClassicExpiredDays"?: string;
        /**
        * 读写分离的经典网络地址保留的天数，取值**1-120**，单位：天。默认值：**7**。
        * >* 当实例存在经典网络类型的读写分离地址，且**RetainClassic**=**True**，本参数有效。
        * @example `7`
        */ "ReadWriteSplittingClassicExpiredDays"?: number;
        /**
        * VPC ID。
        * @example `vpc-uf6f7l4fg90xxxxxx`
        */ "VPCId"?: string;
        /**
        * 交换机ID，若传入**VPCId**，则该参数必传。
        * @example `vsw-uf6adz52c2pxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 设置实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * @example `172.10.40.25`
        */ "PrivateIpAddress"?: string;
        /**
        * 设置实例的内网读写分离地址的IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * >当前实例存在经典网络类型的读写分离地址时，该值有效。
        * @example `192.168.0.22`
        */ "ReadWriteSplittingPrivateIpAddress"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLogBackupFiles接口查询实例的日志备份文件。
    */ DescribeLogBackupFiles(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2018-10-01T08:40Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2018-10-31T08:40Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "BinLogFile": any[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DescribeErrorLogs接口查看实例某段时间内的错误日志。
    */ DescribeErrorLogs(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2011-05-01T20:10Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，大于查询开始时间，与查询开始时间间隔小于31天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2011-05-30T20:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "PageNumber": number;
        "TotalRecordCount": number;
        "PageRecordCount": number;
        "Items": {
            "ErrorLog": {
                "ErrorInfo": string;
                "CreateTime": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteBackup接口删除数据备份文件。
    */ DeleteBackup(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 备份集ID。可通过接口[DescribeBackups](~~26273~~)查询。多组值以英文逗号（,）隔开，单次最多传入100个。
        * >只支持删除[DescribeBackups](~~26273~~)中**StoreStatus**为**Enabled**的备份集。
        * @example `324909958`
        */ "BackupId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDBInstancePerformance接口查看实例性能数据。
    */ DescribeDBInstancePerformance(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example ` rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 想要查询的性能指标，多个值用英文逗号（,）分隔，详细参数请参见[性能参数表](~~26316~~)。
        * >**Key**为**MySQL_SpaceUsage**或**SQLServer_SpaceUsage**时，仅支持查询1天内的监控数据。
        * @example `MySQL_Sessions`
        */ "Key": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2012-06-08T15:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2012-06-18T15:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "DBInstanceID": string;
        "StartTime": string;
        "EndTime": string;
        "Engine": string;
        "PerformanceKeys": {
            "PerformanceKey": {
                "Key": string;
                "Unit": string;
                "ValueFormat": string;
                "Values": {
                    "PerformanceValue": any[];
                };
            }[];
        };
    }>;
    /**
    * 调用PurgeDBInstanceLog接口清理或收缩RDS实例日志。
    */ PurgeDBInstanceLog(query: {
        "RegionId"?: string;
        /**
        * 待清理或收缩日志的实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RemoveTagsFromResource接口解绑标签。
    */ RemoveTagsFromResource(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 代理模式ID。
        * @example `API`
        */ "proxyId"?: string;
        /**
        * 需要解绑的一组标签，包括TagKey和TagValue。格式：{"key1":"value1"}。
        * >TagKey不能为空，TagValue可以为空。
        * @example `{"key1":"value1"}`
        */ "Tags"?: string;
        /**
        * 要解绑的第一组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key1`
        */ "Tag.1.key"?: string;
        /**
        * 要解绑的第二组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key2`
        */ "Tag.2.key"?: string;
        /**
        * 要解绑的第三组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key3`
        */ "Tag.3.key"?: string;
        /**
        * 要解绑的第四组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key4`
        */ "Tag.4.key"?: string;
        /**
        * 要解绑的第五组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key5`
        */ "Tag.5.key"?: string;
        /**
        * 要解绑的第一组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value1`
        */ "Tag.1.value"?: string;
        /**
        * 要解绑的第二组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value2`
        */ "Tag.2.value"?: string;
        /**
        * 要解绑的第三组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value4`
        */ "Tag.3.value"?: string;
        /**
        * 要解绑的第四组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value4`
        */ "Tag.4.value"?: string;
        /**
        * 要解绑的第五组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value5`
        */ "Tag.5.value"?: string;
    }): Promise<{
        "items": any[];
        "requestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceMonitor接口查询监控频率。
    */ DescribeDBInstanceMonitor(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "period": string;
        "requestId": string;
    }>;
    DescribeInstanceAutoRenewalAttribute(query: {
        /**
        * 地域名称的ID，例如：cn-hangzhou
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证幂等性。
        * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
        */ "ClientToken"?: string;
        /**
        * 隐藏参数
        * @example `隐藏参数`
        */ "proxyId"?: string;
        /**
        * 实例名ID。
        * @example `rm-bp1842vmucoa5w874`
        */ "DBInstanceId"?: string;
        /**
        * 每页记录数，可选值为30、50、100，默认值为30。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 当前页数。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "PageNumber": number;
        "PageRecordCount": number;
        "TotalRecordCount": number;
        "Items": {
            "AutoRenew": string;
            "DBInstanceId": string;
            "Duration": number;
            "RegionId": string;
            "Status": string;
        };
    }>;
    /**
    * 调用ModifyDBInstanceTDE接口开启RDS实例透明数据加密功能。
    */ ModifyDBInstanceTDE(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * TDE状态，取值：**Enabled | Disabled**
        * @example `Enabled`
        */ "TDEStatus": string;
        "OwnerId"?: number;
        /**
        * 想要开启TDE的数据库名称，可以一次输入多个，以英文逗号（,）分隔，最多传入50个。
        * >仅SQL Server企业版实例可以传入此参数。
        * @example `testDB`
        */ "DBName"?: string;
        /**
        * 自定义秘钥ID。
        * >仅MySQL实例可以传入此参数。
        * @example `749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
        */ "EncryptionKey"?: string;
        /**
        * 角色的全局资源描述符，用来指定具体角色。详情请参见[RAM角色概览](~~93689~~)。
        * >仅MySQL实例可以传入此参数。
        * @example `acs:ram::1406926xxxxx:role/aliyunrdsinstanceencryptiondefaultrole`
        */ "RoleArn"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceNetworkExpireTime接口修改连接地址过期时间。
    */ ModifyDBInstanceNetworkExpireTime(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        *
        * 要延期的经典网络连接地址，经典网络连接地址有两种：
        * * 经典网络内网地址；
        * * 经典网络读写分离地址。
        * @example `rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com`
        */ "ConnectionString": string;
        /**
        * 经典网络连接地址保留天数，取值：**1-120**，单位：天。
        * @example `7`
        */ "ClassicExpiredDays": number;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSlowLogRecords接口查看实例的慢日志明细。
    */ DescribeSlowLogRecords(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2011-06-01T16:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，需要大于查询开始时间，与查询开始时间间隔小于31天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2011-06-20T16:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 慢日志统计里的SQL语句唯一标识符，可用于获取该SQL语句的慢日志明细。
        * @example `U2FsdGVkxxxx`
        */ "SQLHASH"?: string;
        /**
        * 数据库名称。
        * @example `RDS_MySQL`
        */ "DBName"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "DBInstanceID": string;
        "Engine": string;
        "TotalRecordCount": string;
        "PageNumber": string;
        "PageRecordCount": string;
        "Items": {
            "SQLSlowRecord": {
                "HostAddress": string;
                "DBName": string;
                "SQLText": string;
                "QueryTimes": string;
                "LockTimes": string;
                "ParseRowCounts": string;
                "ReturnRowCounts": string;
                "ExecutionStartTime": string;
            };
        };
    }>;
    /**
    * 调用DescribeBinlogFiles接口查看Binlog日志。
    */ DescribeBinlogFiles(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2011-06-01T15:00:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，大于查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2011-06-20T15:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "BinLogFile": any[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "TotalFileSize": string;
        "RequestId": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用ModifyReadWriteSplittingConnection接口修改读写分离链路的延迟阈值和各个实例的读权重。
    */ ModifyReadWriteSplittingConnection(query: {
        "RegionId"?: string;
        /**
        * 主实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 读写分离地址前缀名，不可重复，由小写字母和中划线组成，需以字母开头，长度不超过30个字符。
        * >默认以“实例名+rw”字符串组成前缀。
        * @example `rm-m5xxxxxxxx.mysql.rds.aliyuncs.com`
        */ "ConnectionStringPrefix"?: string;
        /**
        * 读写分离地址端口号。
        * @example `3306`
        */ "Port"?: string;
        /**
        * 延迟阈值，单位为秒。当只读实例延迟时间超过该阈值时，读取流量不发往该实例。不传该参数则保持原值。
        * >* 参数**MaxDelayTime**不适用于SQL Server 2017集群版实例；
        * * 至少传入**MaxDelayTime**或**DistributionType**中的一个。
        * @example `12`
        */ "MaxDelayTime"?: string;
        /**
        * 读权重分配模式，取值：
        * * **Standard**：按规格权重自动分配；
        * * **Custom**：自定义分配权重。
        * >至少传入**MaxDelayTime**或**DistributionType**中的一个。
        * @example `Standard`
        */ "DistributionType"?: string;
        /**
        * 读权重分配，即传入主实例和只读实例的读请求权重。以100递增，最大值为10000，格式：{“Instanceid1“:”Weight”,”Instanceid2”:”Weight”...}。
        * >* 当**DistributionType**为**Custom**时，必须传入该参数；
        * * 当**DisrtibutionType**为**Standard**时，传入该参数无效。
        * @example `{“Instanceid1“:”100”,”Instanceid2”:”200”}`
        */ "Weight"?: string;
    }): Promise<{
        "RequestID": string;
    }>;
    /**
    * 调用DeleteAccount接口删除数据库账号。
    */ DeleteAccount(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 需要删除的数据库账号名称。
        * @example `test1`
        */ "AccountName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestID": string;
    }>;
    /**
    * 调用DescribeDBInstanceProxyConfiguration接口查看数据库代理设置，已下线。
    */ DescribeDBInstanceProxyConfiguration(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "PersistentConnectionsConfiguration": string;
        "TransparentSwitchConfiguration": string;
        "AttacksProtectionConfiguration": string;
        "RequestId": string;
    }>;
    /**
    * 调用CalculateDBInstanceWeight接口查询系统权重分配值。
    */ CalculateDBInstanceWeight(query: {
        "RegionId"?: string;
        /**
        * 主实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "items": {
            "DBInstanceId": string;
            "DBInstanceType": string;
            "Weight": string;
            "Availability": string;
        }[];
        "requestId": string;
    }>;
    /**
    * 调用GrantAccountPrivilege接口授权账号访问数据库。
    */ GrantAccountPrivilege(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 账号名称。
        * @example `test1`
        */ "AccountName": string;
        /**
        * 需要授权访问的数据库名称。
        * @example `testDB`
        */ "DBName": string;
        /**
        * 账号权限，取值：
        * * **ReadWrite**：读写；
        * * **ReadOnly**：只读；
        * * **DDLOnly**：仅执行DDL，适用于MySQL和MariaDB；
        * * **DMLOnly**：只执行DML，适用于MySQL和MariaDB；
        * * **DBOwner**：数据库所有者，适用于SQL Server。
        * @example `ReadWrite`
        */ "AccountPrivilege": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDatabases接口查看实例下的数据库信息。
    */ DescribeDatabases(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 数据库名称。
        * @example `testDB01`
        */ "DBName"?: string;
        /**
        * 数据库状态，取值：
        * * **Creating**：创建中；
        * * **Running**：使用中；
        * * **Deleting**：删除中。
        * @example `Creating`
        */ "DBStatus"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：30。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "Databases": {
            "Database": {
                "Engine": string;
                "CharacterSetName": string;
                "DBStatus": string;
                "DBDescription": string;
                "DBInstanceId": string;
                "Accounts": {
                    " AccountPrivilegeInfo": any[];
                };
                "DBName": string;
            }[];
        };
    }>;
    /**
    * 调用RestartDBInstance接口重启RDS实例。
    */ RestartDBInstance(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RecoveryDBInstance接口恢复数据库。
    */ RecoveryDBInstance(query: {
        "RegionId"?: string;
        /**
        * 数据库名，若指定多个数据库，按如下格式：{"原库名1":"新库名1","原库名2":"新库名2"}
        * >恢复到已有实例该参数必须传入。
        * @example `{sourceDbName1":"targetDbName1"}`
        */ "DbNames": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        /**
        * 新实例规格，详见[实例规格](~~26312~~)。
        * @example `rds.mysql.s2.large`
        */ "DBInstanceClass"?: string;
        /**
        * 新实例存储容量。
        * @example `5`
        */ "DBInstanceStorage"?: number;
        "DBInstanceDescription"?: string;
        /**
        * 新实例付费类型：
        * * **Postpaid**：后付费（按量付费）；
        * * **Prepaid**：预付费，（包年包月）。
        * @example `Postpaid`
        */ "PayType"?: string;
        /**
        * 新实例网络类型：
        * * **Classic**：经典网络；
        * * **VPC**：专有网络。
        * 默认与主实例网络类型一致。
        * @example `VPC`
        */ "InstanceNetworkType"?: string;
        /**
        * 原实例ID。
        * >* 按备份集恢复（即指定BackupId参数）时，本参数不是必须。
        * * 按时间点恢复（即指定RestoreTime参数）时，本参数为必须。
        * @example `rm-xxxxxxxx1`
        */ "DBInstanceId"?: string;
        /**
        * 目标实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "TargetDBInstanceId"?: string;
        /**
        * 备份集ID，可通过查询备份列表接口[DescribeBackups](~~26273~~)获取。
        * 指定此参数时，**DBInstanceId**参数为可选。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `293044600`
        */ "BackupId"?: string;
        /**
        * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * 指定此参数时，**DBInstanceId**参数为必须。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `2011-06-11T16:00:00Z`
        */ "RestoreTime"?: string;
        /**
        * VPC ID。
        * @example `vpc-xxxxxxxxxxx`
        */ "VPCId"?: string;
        /**
        * VSwitch ID，多个值用英文逗号（,）隔开。
        * @example `vsw-xxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 设置实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * @example `vpc-xxxxxxxxxxx`
        */ "PrivateIpAddress"?: string;
        /**
        * 指定购买时长，取值：
        * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
        * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `Prepaid`
        */ "UsedTime"?: string;
        /**
        * 指定预付费实例为包年或者包月类型，取值：
        * * **Year**：包年；
        * * **Month**：包月。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `Prepaid`
        */ "Period"?: string;
        "ResourceGroupId"?: string;
        "DBInstanceStorageType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用MigrateToOtherZone接口将RDS实例迁移至其他可用区。
    */ MigrateToOtherZone(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 目标可用区ID，可以通过[DescribeRegions](~~26243~~)接口查看。
        * @example `cn-hangzhou-b`
        */ "ZoneId": string;
        "OwnerId"?: number;
        "VPCId"?: string;
        /**
        * 生效时间，取值：
        * * **Immediate**：立即生效；
        * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~26249~~)。
        * 默认值：**Immediate**。
        * @example `Immediate`
        */ "EffectiveTime"?: string;
        /**
        * 交换机ID。
        * @example `vsw-uf6adz52c2pxxxxxxx`
        */ "VSwitchId"?: string;
        "Category"?: string;
        "ZoneIdSlave1"?: string;
        "ZoneIdSlave2"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateDBInstance接口创建一个RDS实例。
    */ CreateDBInstance(query: {
        /**
        * 地域ID，长度不超过50个字符，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 数据库类型，取值：
        * * **MySQL**；
        * * **SQLServer**；
        * * **PostgreSQL**；
        * * **PPAS**；
        * * **MariaDB**。
        * @example `MySQL`
        */ "Engine": string;
        /**
        * 数据库版本，取值：
        * * MySQL：**5.5/5.6/5.7**；
        * * SQLServer：**2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_ent**；
        * * PostgreSQL：**9.4/10.0**；
        * * PPAS：**9.3/10.0**；
        * * MariaDB：**10.3**。
        * @example `5.6`
        */ "EngineVersion": string;
        /**
        * 实例规格，详见[实例规格表](~~26312~~)。
        * @example `rds.mys2.small`
        */ "DBInstanceClass": string;
        /**
        * 实例存储空间，取值：
        * * MySQL/PostgreSQL/PPAS 双机高可用版： **5~2000**；
        * * MySQL 5.7 云盘版/MariaDB：**20~1000**；
        * * SQL Server 2008R2：**10~2000**；
        * * SQL Server 2012/2016/2017：**20~3000**。
        * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
        * @example `20`
        */ "DBInstanceStorage": number;
        /**
        * 实例的网络连接类型，取值：
        * * **Internet**：公网连接；
        * * **Intranet**：内网连接。
        * @example `Internet`
        */ "DBInstanceNetType": string;
        /**
        * 该实例的[IP白名单](~~43185~~)，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
        * * IP地址形式，例如：10.23.12.24。
        * * CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
        * @example `10.23.12.27/25`
        */ "SecurityIPList": string;
        /**
        * 实例的付费类型，取值：
        * * **Postpaid**：后付费（按量付费）；
        * * **Prepaid**：预付费（包年包月）。
        * @example `Postpaid`
        */ "PayType": string;
        "OwnerId"?: number;
        /**
        * 字符集，取值：
        * * MySQL/MariaDB实例：**utf8、gbk、latin1、utf8mb4**；
        * * SQL Server实例：**Chinese_PRC_CI_AS、Chinese_PRC_CS_AS、SQL_Latin1_General_CP1_CI_AS、SQL_Latin1_General_CP1_CS_AS、Chinese_PRC_BIN**。
        * @example `GBK`
        */ "SystemDBCharset"?: string;
        /**
        * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * >不能以 http:// 和 https:// 开头。
        * @example `测试数据库`
        */ "DBInstanceDescription"?: string;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 可用区ID。
        * > 如果数据库类型为MariaDB，该参数必填。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        "ZoneIdSlave1"?: string;
        "ZoneIdSlave2"?: string;
        /**
        * 实例的网络类型，取值：
        * * **VPC**：VPC网络；
        * * **Classic**：经典网络。
        * 默认创建经典网络类型的实例。
        * > * SQL Server2017集群版只支持VPC网络；
        * * 如果数据库类型为MariaDB，该参数必填。
        * @example `Classic`
        */ "InstanceNetworkType"?: string;
        /**
        * 实例的访问模式，取值：
        * * **Standard**：标准访问模式；
        * * **Safe**：数据库代理模式。
        * 默认为RDS系统分配。
        * > SQL Server 2012/2016/2017只支持标准访问模式。
        * @example `Standard`
        */ "ConnectionMode"?: string;
        /**
        * VPC ID， 多个值用英文逗号（,）隔开。
        * >如果数据库类型为MariaDB，该参数必填。
        * @example `vpc-xxxxxxxxxxxx`
        */ "VPCId"?: string;
        /**
        * VSwitch ID，多个值用英文逗号（,）隔开。
        * >如果数据库类型为MariaDB，该参数必填。
        * @example `vsw-xxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 设置实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * @example `172.16.201.69`
        */ "PrivateIpAddress"?: string;
        /**
        * 指定购买时长，取值：
        * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
        * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `2`
        */ "UsedTime"?: string;
        /**
        * 指定预付费实例为包年或者包月类型，取值：
        * * **Year**：包年；
        * * **Month**：包月。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `Year`
        */ "Period"?: string;
        "ResourceGroupId"?: string;
        /**
        * 实例存储类型，取值：
        * * **local_ssd**：本地SSD盘（推荐）；
        * * **cloud_ssd**：SSD云盘。
        * @example `cloud_ssd`
        */ "DBInstanceStorageType"?: string;
        "TunnelId"?: string;
        /**
        * 业务扩展参数。
        * @example `121436975448952`
        */ "BusinessInfo"?: string;
        "EncryptionKey"?: string;
        "RoleARN"?: string;
        "AutoRenew"?: string;
        "Category"?: string;
    }): Promise<{
        "OrderId": string;
        "ConnectionString": string;
        "DBInstanceId": string;
        "Port": string;
        "RequestId": string;
    }>;
    /**
    * 调用CreateAccount接口创建管理数据库的账号。
    */ CreateAccount(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 数据库账号名称。
        * >* 名称唯一；
        * * 以字母开头，以字母或数字结尾；
        * * 由小写字母、数字或下划线组成；
        * * 长度为2~16个字符；
        * * 其他非法字符，见[禁用关键字表](~~26317~~)。
        * @example `test1`
        */ "AccountName": string;
        /**
        * 数据库账号的密码。
        * >* 长度为8~32个字符；
        * * 由大写字母、小写字母、数字、特殊字符中的任意三种组成；
        * * 特殊字符为!@#$&amp;%^*()_+-=
        * @example `Test123456`
        */ "AccountPassword": string;
        "OwnerId"?: number;
        /**
        * 账号描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * >不能以 http:// 和 https:// 开头。
        * @example `测试账号A`
        */ "AccountDescription"?: string;
        /**
        * 账号类型，取值：
        * * **Normal**：普通账号；
        * * **Super**：高权限账号。
        * 默认值：**Normal**。
        * @example `Normal`
        */ "AccountType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCollationTimeZones接口查看支持的字符集排序规则和时区。
    */ DescribeCollationTimeZones(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "CollationTimeZones": {
            "CollationTimeZone": {
                "StandardTimeOffset": string;
                "Description": string;
                "TimeZone": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用SwitchDBInstanceNetType接口切换内外网地址。
    */ SwitchDBInstanceNetType(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 自定义连接地址的前辍。由字母，数字组成，小写字母开头，8~64个字符。
        * @example `rm-xxxxxx`
        */ "ConnectionStringPrefix": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 端口号，取值：**3001~3999**。
        * @example `3306`
        */ "Port"?: string;
        /**
        * 查询连接地址类型，取值：
        * * **Normal**：查询普通连接；
        * * **ReadWriteSplitting**：查询读写分离连接；
        * 默认返回所有连接。
        * @example `Normal`
        */ "ConnectionStringType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyBackupPolicy接口修改备份设置。
    */ ModifyBackupPolicy(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 备份类型：
        * * **DataBackupPolicy**：数据备份；
        * * **LogBackupPolicy**：日志备份。
        * @example `DataBackupPolicy`
        */ "BackupPolicyMode"?: string;
        /**
        * 执行备份任务的时间。格式：<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
        * >**BackupPolicyMode**为**DataBackupPolicy**时，该参数必传。
        * @example `00:00Z-01:00Z`
        */ "PreferredBackupTime"?: string;
        /**
        * 备份周期，多个取值用英文逗号（,）隔开，默认为原值。取值：
        * * **Monday**：周一；
        * * **Tuesday**：周二；
        * * **Wednesday**：周三；
        * * **Thursday**：周四；
        * * **Friday**：周五；
        * * **Saturday**：周六；
        * * **Sunday**：周日。
        * >**BackupPolicyMode**为**DataBackupPolicy**时，该参数必传。
        * @example `Monday`
        */ "PreferredBackupPeriod"?: string;
        /**
        *
        * 数据备份保留天数，取值：**7~730**。默认为原值。
        * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
        * @example `7`
        */ "BackupRetentionPeriod"?: string;
        /**
        * 是否开启日志备份。取值：**Enable | Disabled**。默认为原值。
        * >**BackupPolicyMode**为**DataBackupPolicy**时，用于开启或关闭日志备份。
        * @example `Enable`
        */ "BackupLog"?: string;
        /**
        * 日志备份保留天数。取值：**7~730**，且不大于数据备份保留天数。
        * >当开启日志备份时，可设置日志备份文件的保留天数，目前仅支持MySQL、PostgreSQL、PPAS实例设置该值。
        * @example `7`
        */ "LogBackupRetentionPeriod"?: string;
        /**
        * 是否开启日志备份。取值：**True | False**
        * >**BackupPolicyMode**为**LogBackupPolicy**时，用于开启或关闭日志备份。
        * @example `True`
        */ "EnableBackupLog"?: string;
        /**
        * 日志备份本地保留小时数。取值：**0~7*24**，0表示不保留。默认为原值。
        * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
        * @example `18`
        */ "LocalLogRetentionHours"?: string;
        /**
        * 本地日志最大循环空间使用率，超出后，则从最早的Binlog开始清理，直到空间使用率低于该比例。取值：**0~50**。默认为原值。
        * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
        * @example `30`
        */ "LocalLogRetentionSpace"?: string;
        /**
        *
        * 实例使用空间大于80%，或者剩余空间小于5GB时，是否无条件清理Binlog。取值：**Enable | Disable**。默认为原值。
        * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
        * @example `Enable`
        */ "HighSpaceUsageProtection"?: string;
        /**
        * 是否开启备份文件转储至OSS。取值：**Enable | Disable**。
        * @example `Disable`
        */ "Duplication"?: string;
        /**
        * 转储数据备份或者日志备份：
        * * **DATA**：转储数据备份；
        * * **LOG**：转储日志备份；
        * * **DATA&amp;LOG**：转储数据备份和日志备份。
        * >**Duplication**=**Enable**时，该参数必填。
        * @example `DATA`
        */ "DuplicationContent"?: string;
        /**
        * 用于让RAM授权RDS访问您的OSS。授权后日志文件才能转储至OSS。格式：
        *     {"Storage":"OSS","Location": {"Bucket": 'xxx', "Location":'cn-hangzhou',"OSSEndPoint":"oss-test","Object":"obje1"}
        * >如果**Duplication**=**Enable**，该参数必填。
        * @example ` {"Storage":"OSS","Location": {"Bucket": 'xxx', "Location":'cn-hangzhou',"OSSEndPoint":"oss-test","Object":"obje1"}`
        */ "DuplicationLocation"?: string;
        /**
        * 日志备份频率，取值：
        * * **LogInterval**：每30分钟备份一次。
        * * 默认与数据备份频率一致；
        * >**LogInterval**参数仅适用于SQL Server。
        * @example `LogInterval`
        */ "LogBackupFrequency"?: string;
        /**
        * 备份压缩方式，支持库表恢复。取值：**4**。
        * >支持的实例版本为MySQL 5.7 高可用版（本地SSD盘）和MySQL 5.6高可用版。
        * @example `4`
        */ "CompressType"?: string;
    }): Promise<{
        "HighSpaceUsageProtection": string;
        "DBInstanceID": string;
        "RequestId": string;
        "LocalLogRetentionHours": string;
        "EnableBackupLog": string;
        "LocalLogRetentionSpace": string;
    }>;
    /**
    * 调用ReleaseInstancePublicConnection接口释放实例的外网连接地址。
    */ ReleaseInstancePublicConnection(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 外网连接地址。
        * @example `rm-uf6wjk5xxxx.mysql.rds.aliyuncs.com`
        */ "CurrentConnectionString": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用MigrateSecurityIPMode接口把白名单从通用模式切换为高安全模式。
    */ MigrateSecurityIPMode(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "DBInstanceId": string;
        "RequestId": string;
        "SecurityIPMode": string;
    }>;
    /**
    * 调用CloneDBInstance接口将历史数据恢复至一个新实例（称为克隆实例）。
    */ CloneDBInstance(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 实例存储类型，取值：
        * * **local_ssd**​/**ephemeral_ssd**：本地SSD盘；
        * * **cloud_ssd**：SSD云盘；
        * * **cloud_essd**：ESSD云盘。
        * @example `cloud_essd`
        */ "DBInstanceStorageType"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        /**
        * 付费类型，取值：
        * * **Postpaid**：后付费（按量付费）；
        * * **Prepaid**：预付费（包年包月）。
        * @example `Postpaid`
        */ "PayType": string;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * 实例规格，详见[实例规格表](~~26312~~)。
        * >默认规格和主实例一致。
        * @example `mysql.n1.micro.1`
        */ "DBInstanceClass"?: string;
        /**
        * 实例存储空间，单位：GB。每5GB进行递增，详见[实例规格表](~~26312~~)。
        * >默认存储空间和主实例一致。
        * @example `1000`
        */ "DBInstanceStorage"?: number;
        "DBInstanceDescription"?: string;
        /**
        * 数据库名称。
        * @example `testDB`
        */ "DbNames"?: string;
        /**
        * 实例的网络类型，取值：
        * * **VPC**：专有网络；
        * * **Classic**：经典网络。
        * >默认网络类型和主实例一致。
        * @example `VPC`
        */ "InstanceNetworkType"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId"?: string;
        /**
        * 备份集ID。
        * 您可以通过[DescribeBackups](~~26273~~)接口获取备份列表。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `9026262`
        */ "BackupId"?: string;
        /**
        * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `2011-06-11T16:00:00Z`
        */ "RestoreTime"?: string;
        /**
        * VPC ID。
        * @example `vpc-uf6f7l4fg90xxxxxxxxxx`
        */ "VPCId"?: string;
        /**
        * VSwitch ID。
        * @example `vsw-uf6adz52c2pxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 新实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * @example `172.16.201.69`
        */ "PrivateIpAddress"?: string;
        /**
        * 购买时长，取值：
        * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
        * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `1`
        */ "UsedTime"?: string;
        /**
        * 预付费实例为包年或者包月类型，取值：
        * * **Year**：包年；
        * * **Month**：包月。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `Year`
        */ "Period"?: string;
        "ResourceGroupId"?: string;
        /**
        * 实例系列，取值：
        * * **Basic**：基础版；
        * * **HighAvailability**：高可用版；
        * * **AlwaysOn**：集群版；
        * * **Finance**：金融版（仅中国站支持）。
        * @example `HighAvailability`
        */ "Category"?: string;
        "ZoneIdSlave1"?: string;
        "ZoneIdSlave2"?: string;
        /**
        * 是否进行库表恢复，取值为**1**时表示进行库表恢复，否则不填。
        * @example `1`
        */ "RestoreTable"?: string;
        /**
        * 进行库表恢复时，指定恢复的库表信息。格式：
        * ```[{"type":"db","name":"<数据库1名称>","newname":"<新数据库1名称>","tables":[{"type":"table","name":"<数据库1内的表1名称>","newname":"<新的表1名称>"},{"type":"table","name":"<数据库1内的表2名称>","newname":"<新的表2名称>"}]},{"type":"db","name":"<数据库1名称>","newname":"<新数据库2名称>","tables":[{"type":"table","name":"<数据库2内的表3名称>","newname":"<新的表3名称>"},{"type":"table","name":"<数据库2内的表4名称>","newname":"<新的表4名称>"}]}]```
        * @example `[{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]`
        */ "TableMeta"?: string;
    }): Promise<{
        "OrderId": string;
        "DBInstanceId": string;
        "RequestId": string;
    }>;
    DescribeRenewalPrice(query: {
        /**
        * 地域名称ID，如“cn-hangzhou”。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 取值为Year、Month。
        * @example `Year`
        */ "TimeType": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
        */ "ClientToken"?: string;
        /**
        * 商品编码。
        * @example `rds`
        */ "CommodityCode"?: string;
        /**
        * 实例名。
        * @example `rm-bp1842vmucoa5w874`
        */ "DBInstanceId"?: string;
        /**
        * 购买时长，取值范围如下：<ul><li>Year[1,3]</li><li>Month[1,10]</li></ul>
        * @example `1`
        */ "UsedTime": number;
        /**
        * 付费类型。Postpaid：后付费实例；Prepaid：预付费实例。
        * @example `Postpaid`
        */ "PayType"?: string;
        /**
        * 当前实例规格，默认为当前实例规格。
        * @example `rds.mys2.small`
        */ "DBInstanceClass"?: string;
        /**
        * 无
        * @example `0`
        */ "Quantity"?: number;
        /**
        * 无
        * @example `无`
        */ "OrderType"?: string;
        /**
        * 无
        * @example `无`
        */ "PromotionCode"?: string;
        /**
        * 无
        * @example `无`
        */ "BusinessInfo"?: string;
    }): Promise<{
        "priceInfo": {
            "activityInfo": {};
            "coupons": any[];
            "currency": string;
            "discountPrice": number;
            "originalPrice": number;
            "ruleIds": string[];
            "tradePrice": number;
        };
        "requestId": string;
        "rules": {
            "name": string;
            "ruleId": number;
        }[];
    }>;
    /**
    * 调用DescribeDBInstanceAttribute接口查看RDS实例的详细信息。
    */ DescribeDBInstanceAttribute(query: {
        "RegionId"?: string;
        /**
        * 实例ID。可以一次输入最多30个，以英文逗号（,）分隔。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 实例过期状态，取值：
        * * **True**：已过期；
        * * **False**：未过期。
        * @example `False`
        */ "Expired"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{
        "Items": {
            "DBInstanceAttribute": {
                "Extra": {
                    "DBInstanceId": {
                        "DBInstanceId": any[];
                    };
                };
                "ConnectionString": string;
                "AccountMaxQuantity": number;
                "CurrentKernelVersion": string;
                "DBInstanceCPU": string;
                "IPType": string;
                "ZoneId": string;
                "ReadOnlyDBInstanceIds": {
                    "ReadOnlyDBInstanceId": any[];
                };
                "ConnectionMode": string;
                "VSwitchId": string;
                "VpcId": string;
                "Engine": string;
                "MaintainTime": string;
                "MaxConnections": number;
                "DBInstanceType": string;
                "DBInstanceMemory": number;
                "EngineVersion": string;
                "DBInstanceStorageType": string;
                "DBInstanceStatus": string;
                "SecurityIPMode": string;
                "PayType": string;
                "SupportUpgradeAccountType": string;
                "AccountType": string;
                "LockMode": string;
                "DBInstanceNetType": string;
                "MaxIOPS": number;
                "DBInstanceClass": string;
                "DBMaxQuantity": number;
                "ResourceGroupId": string;
                "DBInstanceId": string;
                "VpcCloudInstanceId": string;
                "DBInstanceClassType": string;
                "LatestKernelVersion": string;
                "InstanceNetworkType": string;
                "DBInstanceStorage": number;
                "SupportCreateSuperAccount": string;
                "CreationTime": string;
                "Category": string;
                "Port": string;
                "InsId": number;
                "ExpireTime": string;
                "RegionId": string;
                "AvailabilityValue": string;
                "SecurityIPList": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceConnectionString接口修改实例的连接地址和端口。
    */ ModifyDBInstanceConnectionString(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例当前的某个连接地址，可以是内外网地址，或者混访模式下的经典网络地址。
        * >不支持修改读写分离地址。
        * @example `rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com`
        */ "CurrentConnectionString": string;
        /**
        * 目标连接地址的前缀，即只能修改**CurrentConnectionString**参数的前缀部分。
        * >长度5~40，不能包含汉字和非法字符（~!#%^&amp;*=+\|{};:&#x27;&quot;,&lt;&gt;/?），建议由字母、数字、短横线（-）组成。
        * @example `m-xxxxbn5c23qo`
        */ "ConnectionStringPrefix": string;
        /**
        * 目标端口。
        * @example `3306`
        */ "Port": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateDatabase接口在某个实例下创建数据库。
    */ CreateDatabase(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 数据库名称。
        * >* 长度为2~64个字符；
        * * 以字母开头，以字母或数字结尾；
        * * 由小写字母、数字、下划线或中划线组成；
        * * 数据库名称在实例内必须是唯一的；
        * * 其他非法字符，详见[禁用关键字表](~~26317~~)。
        * @example `rds_mysql`
        */ "DBName": string;
        /**
        * 字符集，取值：
        * * MySQL/MariaDB类型：**utf8、gbk、latin1、utf8mb4**；
        * * SQL Server类型：**Chinese_PRC_CI_AS、Chinese_PRC_CS_AS、SQL_Latin1_General_CP1_CI_AS、SQL_Latin1_General_CP1_CS_AS、Chinese_PRC_BIN**。
        * @example `gbk`
        */ "CharacterSetName": string;
        "OwnerId"?: number;
        /**
        * 数据库描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * >不能以 http:// 和 https:// 开头。
        * @example `测试用数据库`
        */ "DBDescription"?: string;
    }): Promise<{
        "RequestID": string;
    }>;
    /**
    * 调用DescribeBackupDatabase接口查询备份集下的数据库列表，已下线。
    */ DescribeBackupDatabase(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 备份集ID。
        * @example `90262212`
        */ "BackupId"?: string;
    }): Promise<{
        "DatabaseNames": string;
        "RequestId": string;
    }>;
    /**
    * 调用CopyDatabase接口复制数据库SQL Server 2008 R2版，已下线。
    */ CopyDatabase(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestID": string;
    }>;
    /**
    * 调用AddTagsToResource接口为实例绑定标签。
    */ AddTagsToResource(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
        * @example `cn-hagnzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * >支持传入最多30个实例ID进行批量操作，用英文逗号（,）隔开。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 代理模式ID。
        * @example `API`
        */ "proxyId"?: string;
        /**
        * 需要绑定的Tag列表，包括TagKey和TagValue。单次最多支持传入5组值，格式：{"key1":"value1","key2":"value2"...}。
        * >TagKey不能为空，TagValue可以为空。
        * @example `{“key1”:”value1”,“key2”:””}`
        */ "Tags"?: string;
        /**
        * 当前第一组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key1`
        */ "Tag.1.key"?: string;
        /**
        * 当前第二组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key2`
        */ "Tag.2.key"?: string;
        /**
        * 当前第三组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key3`
        */ "Tag.3.key"?: string;
        /**
        * 当前第四组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key4`
        */ "Tag.4.key"?: string;
        /**
        * 当前第五组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `key5`
        */ "Tag.5.key"?: string;
        /**
        * 当前第一组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value1`
        */ "Tag.1.value"?: string;
        /**
        * 当前第二组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value2`
        */ "Tag.2.value"?: string;
        /**
        * 当前第三组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value3`
        */ "Tag.3.value"?: string;
        /**
        * 当前第四组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value4`
        */ "Tag.4.value"?: string;
        /**
        * 当前第五组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `value5`
        */ "Tag.5.value"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用ResetAccountPassword接口重置账号密码。
    */ ResetAccountPassword(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 账号名称。
        * @example `test1`
        */ "AccountName": string;
        /**
        * 新密码。
        * >* 长度为8~32个字符；
        * * 由大写字母、小写字母、数字、特殊字符中的任意三种组成；
        * * 特殊字符为!@#$&amp;%^*()_+-=
        * @example `Test123456`
        */ "AccountPassword": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceHAConfig接口修改实例的高可用模式和数据复制方式。
    */ ModifyDBInstanceHAConfig(query: {
        "RegionId"?: string;
        /**
        * [数据复制方式](~~26183~~)，取值：
        * * **Sync**：强同步；
        * * **Semi-sync**：半同步；
        * * **Async**：异步。
        * >* 对于SQL Server 2012/2016双机高可用版，值为**Sync**或**Async**；
        * * 对于SQL Server 2017集群版，值为**Semi-sync**。
        * @example `Sync`
        */ "SyncMode": string;
        /**
        * 高可用模式，取值：
        * * **RPO**：数据一致性优先，实例会尽可能保障数据的可靠性，即数据丢失量最少。对于数据一致性要求比较高的用户应该使用RPO模式；
        * * **RTO**：实例可用性优先，实例会尽快恢复服务，即可用时间最长。对于数据库在线时间要求比较高的用户应该使用RTO模式。
        * @example `RPO`
        */ "HAMode": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DbInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyParameter接口修改实例参数。
    */ ModifyParameter(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 参数及其值的JSON串，参数的值都是字符串类型。格式：{"参数名称1":"参数值1","参数名称2":"参数值2"...}
        * @example `{"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}`
        */ "Parameters"?: string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 修改参数是否重启数据库，取值：
        * * **true**：强制重启（若修改的参数当中，有需要重启的参数，则必须传入true，否则修改将不生效）。
        * * **false**：不强制重启。
        * 默认值：**false**。
        * @example `false`
        */ "Forcerestart"?: boolean;
        "ParameterGroupId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateReadOnlyDBInstance接口为某个实例创建一个只读实例。
    */ CreateReadOnlyDBInstance(query: {
        /**
        * 地域ID。只读实例的地域必须和主实例相同。可以通过接口[DescribeRegions](~~26243~~)查看地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 可用区ID。可以通过接口[DescribeRegions](~~26243~~)查看可用区列表。
        * @example `cn-hangzhou-b`
        */ "ZoneId": string;
        /**
        * 主实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例规格，详见[实例规格表](~~26312~~)。建议只读实例规格不小于主实例规格，否则易导致只读实例延迟高、负载高等现象。
        * @example `rds.mys2.small`
        */ "DBInstanceClass": string;
        /**
        * 存储空间，取值：**5-3000**，每5GB进行递增，单位：GB。
        * >不同版本实例，支持的取值范围不同，请以控制台创建只读实例页面为准。
        * @example `20`
        */ "DBInstanceStorage": number;
        /**
        * 数据库版本号。必须与主实例相同。取值：
        * * **5.6**
        * * **5.7**
        * * **8.0**
        * * **2017_ent**
        * @example `5.6`
        */ "EngineVersion": string;
        /**
        * 付费类型，仅支持按量付费，取值：**Postpaid**。
        * @example `Postpaid`
        */ "PayType": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 实例描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * >不能以 http:// 和 https:// 开头。
        * @example `测试只读实例`
        */ "DBInstanceDescription"?: string;
        /**
        * 实例的网络类型，取值：
        * * **VPC**：VPC网络；
        * * **Classic**：经典网络。
        * 默认创建经典网络实例。
        * @example `Classic`
        */ "InstanceNetworkType"?: string;
        /**
        * VPC ID。
        * @example `vpc-uf6f7l4fg90xxxxxxxxxx`
        */ "VPCId"?: string;
        /**
        * 交换机ID。
        * @example `vsw-uf6adz52c2pxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 设置只读实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * @example `172.16.201.69`
        */ "PrivateIpAddress"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmyxxxxxxxxxx`
        */ "ResourceGroupId"?: string;
        /**
        * 实例系列，取值：
        * * **Basic**：基础版；
        * * **HighAvailability**：高可用版；
        * * **AlwaysOn**：集群版；
        * * **Finance**：金融版（仅中国站支持）。
        * @example `HighAvailability`
        */ "Category"?: string;
        /**
        * 实例储存类型，取值：
        * * **local_ssd**​/**ephemeral_ssd**：本地SSD盘；
        * * **cloud_ssd**：SSD云盘；
        * * **cloud_essd**：ESSD云盘。
        * >MySQL仅支持本地盘存储类型，SQL Server仅支持云盘存储类型。
        * @example `local_ssd`
        */ "DBInstanceStorageType"?: string;
    }): Promise<{
        "OrderId": string;
        "ConnectionString": string;
        "DBInstanceId": string;
        "Port": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceMonitor修改监控频率。
    */ ModifyDBInstanceMonitor(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 监控的采集间隔，取值：
        * * **5**；
        * * **60**；
        * * **300**。
        * 单位：秒。
        * @example `60`
        */ "Period": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用DescribeDiagnosticReportList接口获取诊断报告列表。
    */ DescribeDiagnosticReportList(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "reportList": {
            "diagnosticTime": string;
            "downloadURL": string;
            "endTime": string;
            "score": number;
            "startTime": string;
        }[];
        "requestId": string;
    }>;
    /**
    * 调用ModifySQLCollectorPolicy接口开启或关闭实例的SQL审计功能。
    */ ModifySQLCollectorPolicy(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 开启或关闭SQL审计，取值：**Enable | Disable**
        * @example `Enable`
        */ "SQLCollectorStatus": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "StoragePeriod"?: number;
    }): Promise<{
        "requestId": string;
        "sQLCollectorStatus": string;
    }>;
    /**
    * 调用DescribeSlowLogs查看慢日志统计情况。
    */ DescribeSlowLogs(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始日期，格式：<i>yyyy-MM-dd</i>Z。
        * @example `2011-05-01Z`
        */ "StartTime": string;
        /**
        * 查询结束日期，不能小于查询开始日期，与查询开始日期间隔不超过31天。格式：<i>yyyy-MM-dd</i>Z。
        * @example `2011-05-30Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 数据库名称。
        * @example `RDS_MySQL`
        */ "DBName"?: string;
        /**
        * 排序依据，取值：
        * * **TotalExecutionCounts**：总执行次数最多；
        * * **TotalQueryTimes**：总执行时间最多；
        * * **TotalLogicalReads**：总逻辑读最多；
        * * **TotalPhysicalReads**：总物理读最多。
        * >仅SQL Server 2008 R2实例支持本参数。
        * @example `TotalExecutionCounts`
        */ "SortKey"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "DBInstanceID": string;
        "Engine": string;
        "StartTime": string;
        "EndTime": string;
        "TotalRecordCount": string;
        "PageNumber": string;
        "PageRecordCount": string;
        "Items": {
            "SQLSlowLog": {
                "SQLText": string;
                "SQLServerTotalExecutionCounts": string;
                "SQLServerTotalExecutionTimes": string;
                "TotalLogicalReadcounts": string;
                "TotalPhysicalReadcounts": string;
                "ReportTime": string;
            };
        };
    }>;
    /**
    * 调用ImportDatabaseBetweenInstances接口从其它RDS实例迁入数据。
    */ ImportDatabaseBetweenInstances(query: {
        "RegionId"?: string;
        /**
        * 目标实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 源实例ID，不能与目标实例相同。
        * @example `rm-g4a1jk8xxxxxxx`
        */ "SourceDBInstanceId": string;
        /**
        * 待迁移实例的数据库信息，格式为JSON串：
        * * 对于MySQL实例，值为数组，MySQL类型要求源数据库和目的数据库名称必须一致。例如：```{“DBNames”:[“mydb”,”mydb2”]}```
        * 表示将两个数据库mydb和mydb2进行数据迁入，源实例和目的实例都要有这两个数据库。
        * * 对于SQL Server实例，值为key-value对，key为原数据库，目标为迁移目标数据库，SQL Server允许源数据库和目标数据库名称可以不一致。例如：```{“DBNames”:{“srcdb”:”destdb”,”srcdb2”:”destmydb2”}}```表示将srcdb迁入至destdb，将srcdb2迁入至destmydb2，但是多个源数据库名称不允许一样，多个目标数据库名称也不允许一样。
        * @example `{“DBNames”:[“mydb”,”mydb2”]}`
        */ "DBInfo": string;
        "OwnerId"?: number;
    }): Promise<{
        "ImportId": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeParameters接口查询实例当前的参数配置。
    */ DescribeParameters(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "ConfigParameters": {
            "DBInstanceParameter": {
                "ParameterDescription": string;
                "ParameterName": string;
                "ParameterValue": string;
            }[];
        };
        "Engine": string;
        "EngineVersion": string;
        "RunningParameters": {
            "DBInstanceParameter": {
                "ParameterDescription": string;
                "ParameterName": string;
                "ParameterValue": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DeleteDBInstance接口释放RDS实例。
    */ DeleteDBInstance(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RenewInstance接口对RDS实例进行手动续费。
    */ RenewInstance(query: {
        "RegionId"?: string;
        /**
        * 需要续费的实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 预付费续费时长，单位：月。取值：
        * - **1~9**
        * - **12**
        * - **24**
        * - **36**
        * - **48**
        * - **60**
        * @example `12`
        */ "Period": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 续费时是否自动付费。取值：
        * * **True**：自动付费。请确保账号有足够的余额。
        * * **False**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用>进入费用中心**，在**订单管理**找到目标订单进行支付。
        * 默认值：**False**。
        * @example `True`
        */ "AutoPay"?: string;
        "BusinessInfo"?: string;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeResourceUsage接口查看实例的空间利用信息。
    */ DescribeResourceUsage(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{
        "BackupOssDataSize": string;
        "BackupOssLogSize": string;
        "RequestId": string;
        "DBInstanceId": string;
        "DataSize": number;
        "LogSize": number;
        "BackupSize": number;
        "SQLSize": number;
        "ColdBackupSize": number;
        "Engine": string;
        "DiskUsed": number;
    }>;
    /**
    * 调用DescribeSQLLogRecords接口查询实例的SQL审计日志。
    */ DescribeSQLLogRecords(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间，格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2011-06-01T15:00:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，大于查询开始时间，与查询开始时间间隔小于31天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2011-06-11T15:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * SQL语句唯一标识ID。
        * @example `25623548`
        */ "SQLId"?: number;
        /**
        * 用于查询的关键字，多个关键字以空格分隔，不超过10个关键字。
        * @example `rds`
        */ "QueryKeywords"?: string;
        /**
        * 数据库名称。默认为所有数据库，也可以输入数据库名称查询，一次只能输入一个。
        * @example `Database`
        */ "Database"?: string;
        /**
        * 用户名称。默认为所有用户，也可以输入用户名称查询，一次只能输入一个。
        * @example `user`
        */ "User"?: string;
        /**
        * 触发审计文件的生成或者返回SQL记录列表，取值：
        * * **File**：若传入这个值，则触发审计文件的生成，只返回公共参数，需再调用[DescribeSQLLogFiles](~~26295~~)接口获取文件的最终下载地址；
        * * **Stream**：默认值，返回SQL记录列表。
        * @example `Stream`
        */ "Form"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalRecordCounts": number;
        "ItemsCounts": number;
        "SQLItems": {
            "SQLItem": {
                "DBName": string;
                "AccountName": string;
                "HostAddress": string;
                "SQLText": string;
                "TotalExecutionTimes": number;
                "ReturnRowCounts": number;
                "ExecuteTime": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ReleaseReadWriteSplittingConnection接口释放读写分离地址。
    */ ReleaseReadWriteSplittingConnection(query: {
        "RegionId"?: string;
        /**
        * 主实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestID": string;
    }>;
    /**
    * 调用RevokeAccountPrivilege接口撤销账号对数据库的访问权限。
    */ RevokeAccountPrivilege(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 账号名称。
        * @example `test1`
        */ "AccountName": string;
        /**
        * 数据库名称，撤销账号对该数据库的所有权限。多个数据库用英文逗号（,）隔开。
        * @example `testDB`
        */ "DBName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateDiagnosticReport接口创建诊断报告。
    */ CreateDiagnosticReport(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxx`
        */ "DBInstanceId": string;
        /**
        * 用于生成诊断报告的监控数据起始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2018-06-11T15:00Z`
        */ "StartTime": string;
        /**
        * 用于生成诊断报告的监控数据结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2018-06-12T15:00Z`
        */ "EndTime": string;
    }): Promise<{
        "reportId": string;
        "requestId": string;
    }>;
    /**
    * 调用DescribeBackupPolicy接口查看实例备份设置。
    */ DescribeBackupPolicy(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 备份类型，取值：
        * * **DataBackupPolicy**：数据备份；
        * * **LogBackupPolicy**：日志备份。
        * @example `DataBackupPolicy`
        */ "BackupPolicyMode"?: string;
        /**
        * 备份压缩方式，取值：
        * * **0**：不压缩；
        * * **1**：zlib压缩；
        * * **2**：并行zlib压缩；
        * * **4**：quicklz压缩，开启了库表恢复；
        * * **8**：MySQL8.0 quicklz压缩但是还未支持库表恢复。
        * @example `1`
        */ "CompressType"?: string;
    }): Promise<{
        "backupLog": string;
        "backupRetentionPeriod": number;
        "logBackupRetentionPeriod": number;
        "preferredBackupPeriod": string;
        "preferredBackupTime": string;
        "preferredNextBackupTime": string;
        "requestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceIPArrayList接口查看RDS实例IP白名单。
    */ DescribeDBInstanceIPArrayList(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 白名单的网络类型，取值：
        * * **Classic**：高安全白名单模式下的经典网络；
        * * **VPC**：高安全白名单模式下的专有网络；
        * * **MIX**：通用白名单模式。
        * 默认返回所有网络类型的白名单IP。
        * @example `VPC`
        */ "WhitelistNetworkType"?: string;
    }): Promise<{
        "Items": {
            "DBInstanceIPArray": {
                "DBInstanceIPArrayName": string;
                "DBInstanceIPArrayAttribute": string;
                "WhitelistNetworkType": string;
                "SecurityIPList": string;
                "SecurityIPType": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateTempDBInstance接口创建临时实例。
    */ CreateTempDBInstance(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 备份集ID。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `603524168`
        */ "BackupId"?: number;
        /**
        * 用户指定备份保留时间内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >* 可以设置为7天之内并且早于当前时间半小时以上的任意时间点，默认时区为UTC；
        * * **BackupId**和**RestoreTime**两者至少传入一个。
        * @example `2011-06-11T16:00:00Z`
        */ "RestoreTime"?: string;
    }): Promise<{
        "RequestId": string;
        "TempDBInstanceId": string;
    }>;
    /**
    * 调用ModifyDBDescription接口修改数据库备注。
    */ ModifyDBDescription(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 数据库名称。
        * @example `testDB01`
        */ "DBName": string;
        /**
        * 数据库描述。
        * @example `测试数据库A`
        */ "DBDescription": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceNetInfo接口查看实例的所有连接地址信息。
    */ DescribeDBInstanceNetInfo(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 备用参数。
        * @example `-`
        */ "Flag"?: string;
        /**
        * 连接地址类型，取值：
        * * **Normal**：普通连接地址；
        * * **ReadWriteSplitting**：读写分离连接地址。
        * >默认返回所有类型连接地址。
        * @example `Normal`
        */ "DBInstanceNetRWSplitType"?: string;
    }): Promise<{
        "dBInstanceNetInfos": {
            "connectionString": string;
            "connectionStringType": string;
            "dBInstanceWeights": any[];
            "iPAddress": string;
            "iPType": string;
            "port": string;
            "securityIPGroups": any[];
            "upgradeable": string;
            "vPCId": string;
        }[];
        "instanceNetworkType": string;
        "requestId": string;
    }>;
    /**
    * 调用DescribeBackups接口查看备份集列表。
    */ DescribeBackups(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 备份集ID。
        * @example `327329803`
        */ "BackupId"?: string;
        "BackupLocation"?: string;
        /**
        * 备份集状态。取值：
        * * **Success**：已完成备份；
        * * **Failed**：备份失败。
        * @example `Success`
        */ "BackupStatus"?: string;
        /**
        * 备份模式，取值：
        * * **Automated**：系统自动备份；
        * * **Manual**：手动备份。
        * @example `Automated`
        */ "BackupMode"?: string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2011-06-01T16:00Z`
        */ "StartTime"?: string;
        /**
        * 查询结束时间，需要大于查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2011-06-15T16:00Z`
        */ "EndTime"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "Backup": {
                "StoreStatus": string;
                "HostInstanceID": number;
                "BackupLocation": string;
                "BackupIntranetDownloadURL": string;
                "BackupType": string;
                "DBInstanceId": string;
                "BackupEndTime": string;
                "BackupMethod": string;
                "BackupId": number;
                "BackupStartTime": string;
                "BackupDownloadURL": string;
                "MetaStatus": string;
                "BackupDBNames": string;
                "BackupMode": string;
                "BackupSize": number;
                "BackupStatus": string;
                "BackupScale": string;
            }[];
        };
        "TotalBackupSize": string;
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DescribeDBInstances接口查看RDS实例列表或被RAM授权的实例列表。
    */ DescribeDBInstances(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 代理模式ID。
        * @example `API`
        */ "proxyId"?: string;
        /**
        * 数据库类型，取值：
        * * **MySQL**；
        * * **SQLServer**；
        * * **PostgreSQL**；
        * * **PPAS**；
        * * **MariaDB**。
        * 默认返回所有数据库类型。
        * @example `MySQL`
        */ "Engine"?: string;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-a`
        */ "ZoneId"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmyxxxxx`
        */ "ResourceGroupId"?: string;
        /**
        * 实例状态，详情请参见[实例状态表](~~26315~~)。
        * @example `Running`
        */ "DBInstanceStatus"?: string;
        /**
        * 实例的过期状态，取值：
        * * **True**：已过期。
        * *  **False**：未过期。
        * @example `True`
        */ "Expired"?: string;
        /**
        * 可基于实例ID或者实例备注模糊搜索。
        * @example `rm-uf6w`
        */ "SearchKey"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId"?: string;
        /**
        * 实例类型，取值：
        * * **Primary**：主实例；
        * * **Readonly**：只读实例；
        * * **Guard**：灾备实例；
        * * **Temp**：临时实例。
        * 默认返回所有实例类型。
        * @example `Primary`
        */ "DBInstanceType"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 实例的网络类型，取值：
        * * **VPC**：专有网络下的实例；
        * * **Classic**：经典网络下的实例。
        * 默认返回所有网络类型下的实例。
        * @example `Classic`
        */ "InstanceNetworkType"?: string;
        /**
        * VPC ID。
        * @example `vpc-uf6f7l4fg90xxxxxxxxxx`
        */ "VpcId"?: string;
        /**
        * 交换机ID。
        * @example `vsw-uf6adz52c2pxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 实例规格，详见[实例规格表](~~26312~~)。
        * @example `rds.mys2.small`
        */ "DBInstanceClass"?: string;
        /**
        * 数据库版本。
        * @example `5.7`
        */ "EngineVersion"?: string;
        /**
        * 付费类型，取值：
        * * **Postpaid**：按量付费；
        * * **Prepaid**：包年包月。
        * @example `Postpaid`
        */ "PayType"?: string;
        /**
        * 实例的访问模式，取值：
        * * **Standard**：标准访问模式；
        * * **Safe**：数据库代理模式。
        * 默认返回所有访问模式下的实例。
        * @example `Standard`
        */ "ConnectionMode"?: string;
        /**
        * 当前第一组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagkey1`
        */ "Tag.1.key"?: string;
        /**
        * 当前第二组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagkey2`
        */ "Tag.2.key"?: string;
        /**
        * 当前第三组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagkey3`
        */ "Tag.3.key"?: string;
        /**
        * 当前第四组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagkey4`
        */ "Tag.4.key"?: string;
        /**
        * 当前第五组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagkey5`
        */ "Tag.5.key"?: string;
        /**
        * 当前第一组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagvalue1`
        */ "Tag.1.value"?: string;
        /**
        * 当前第二组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagvalue2`
        */ "Tag.2.value"?: string;
        /**
        * 当前第三组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagvalue3`
        */ "Tag.3.value"?: string;
        /**
        * 当前第四组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagvalue4`
        */ "Tag.4.value"?: string;
        /**
        * 当前第五组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
        * @example `Tagvalue5`
        */ "Tag.5.value"?: string;
        /**
        * 查询绑定有该标签的实例，包括TagKey和TagValue。单次最多支持传入5组值，格式：{"key1":"value1","key2":"value2"...}。
        * @example `{“key1”:”value1”}`
        */ "Tags"?: string;
    }): Promise<{
        "PageNumber": number;
        "Items": {
            "DBInstance": {
                "Engine": string;
                "DBInstanceType": string;
                "DBInstanceStatus": string;
                "DBInstanceDescription": string;
                "LockMode": string;
                "RegionId": string;
                "ZoneId": string;
                "DBInstanceId": string;
                "PayType": string;
                "ExpireTime": string;
                "DBInstanceNetType": string;
                "LockReason": string;
                "MasterInstanceId": string;
                "GuardDBInstanceId ": string;
                "TempDBInstanceId": string;
                "ReadOnlyDBInstanceIds": {
                    "ReadOnlyDBInstanceId": any[];
                };
            }[];
        };
        "TotalRecordCount": number;
        "PageRecordCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceTDE接口查询实例数据加密状态。
    */ DescribeDBInstanceTDE(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "TDEStatus": string;
        "Databases": {
            "DBName": string;
            "TDEStatus": string;
        }[];
        "requestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceSSL接口修改实例SSL链路。
    */ ModifyDBInstanceSSL(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 需要创建或更新SSL证书的连接地址。
        * >每个实例只能有一个连接地址受SSL保护。
        * @example `rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com`
        */ "ConnectionString": string;
        "OwnerId"?: number;
        "SSLEnabled"?: number;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用DescribeParameterTemplates接口查看数据库参数模板。
    */ DescribeParameterTemplates(query: {
        "RegionId"?: string;
        /**
        * 数据库类型，取值：
        * * **mysql**：MySQL数据库；
        * * **mssql**：SQL Server数据库；
        * * **PostgreSQL**：PostgreSQL数据库；
        * * **PPAS**：PPAS数据库；
        * * **MariaDB**：MariaDB数据库。
        * @example `MySQL`
        */ "Engine": string;
        /**
        * 数据库版本号，取值：
        * * MySQL数据库：**5.5/5.6/5.7/8.0**；
        * * SQL Server数据库：**2008r2**；
        * * PostgreSQL数据库：**9.4/10.0**；
        * * PPAS数据库：**9.3/10.0**；
        * * MariaDB数据库：**10.3**。
        * @example `5.6`
        */ "EngineVersion": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 实例类别，取值：
        * * **Basic**：基础版；
        * * **HighAvailability **：高可用版；
        * * **Finance **：金融版（仅支持中国站）。
        * 默认返回所有实例类型的参数模板。
        * @example `Basic`
        */ "Category"?: string;
    }): Promise<{
        "Engine": string;
        "EngineVersion": string;
        "ParameterCount": string;
        "Parameters": {
            "TemplateRecord": {
                "CheckingCode": string;
                "ForceRestart": string;
                "Factor": string;
                "ParameterDescription": string;
                "ParameterName": string;
                "ParameterValue": string;
                "ForceModify": string;
                "Unit": string;
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceSSL接口查询实例SSL设置。
    */ DescribeDBInstanceSSL(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "items": {
            "ConnectionString": number;
            "SSLExpireTime": string;
            "RequireUpdate": string;
            "RequireUpdateReason": string;
        }[];
        "requestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceProxyConfiguration接口设置数据库代理，已下线。
    */ ModifyDBInstanceProxyConfiguration(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 数据库代理的**ProxyConfigurationKey**，取值：
        * * **TransparentSwitch**：透明切换；
        * * **PersistentConnections**：短连接优化；
        * * **AttacksProtection**：防暴力破解。
        * @example `TransparentSwitch`
        */ "ProxyConfigurationKey": string;
        /**
        * 数据库代理的**ProxyConfigurationValue**，取值：
        * * **TransparentSwitch**：透明切换，取值为：
        *   * **Enable**：开启，默认值为Enable；
        *   * **Disable**：关闭。如：	{"status":"Enable"}。
        * * **PersistentConnections**：短连接优化，取值为：
        *   * **Enable**：开启；
        *   * **Disable**：关闭，默认值为Disable。如：	{"status":"Disable"}。
        * * **AttacksProtection**：防暴力破解，取值为：
        *   * **Enable**：开启；
        *   *  **Disable**：关闭，默认值为Disable。如：{"status":"Disable"}。
        * 返回值格式为JSON字符串，如：
        * 	{"status":"Disable", "check_interval_seconds": 60,
        *                     "max_failed_login_attempts": 60, "blocking_seconds": 600}
        * 参数说明及取值范围：
        *   * 对于每一个客户端，check_interval_seconds秒内最多允许max_failed_login_attempts次错误密码登录，否则将对该客户端IP禁止登录blocking_seconds秒钟。
        *   * 取值范围：
        * check_interval_seconds：**30~600**，单位为秒；
        * max_failed_login_attempts：**10~5000**，单位为次数；
        * blocking_seconds：**30~3600**，单位为秒。
        * @example `{"status":"Enable"}`
        */ "ProxyConfigurationValue": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    ModifyDBInstancePayType(query: {
        "RegionId"?: string;
        /**
        * 实例名。
        * @example ` rm-bp1842vmucoa5w874`
        */ "DBInstanceId": string;
        /**
        * 选择的付费类型为Prepaid，需要指定续费实例为包年或者包月类型，Year：包年；Month：包月。
        * @example `Year`
        */ "Period": string;
        "OwnerId"?: number;
        /**
        * 用于保证幂等性。
        * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
        */ "ClientToken"?: string;
        /**
        * 当参数Period为Year时，UsedTime可取值为[1,9]。
        * 当参数Period为Month时，UsedTime可取值为1、2、3。
        * @example `2`
        */ "UsedTime"?: number;
        /**
        * 付费类型，取值如下：
        * Postpaid:按量付费；
        * Prepaid：预付费。
        * @example `Prepaid`
        */ "PayType"?: string;
        /**
        * 是否自动支付。AutoPay 为 true 表示自动支付，账户余额不足的时候会生成无法支付的订单，需要登录控制台作废订单。AutoPay 为 false 时会生成未支付的订单，可登录控制台支付。取值范围：
        * true
        * false
        * 默认值：true
        * @example `true`
        */ "AutoPay"?: string;
        /**
        * 资源
        * @example `无`
        */ "Resource"?: string;
        /**
        * 座席ID
        * @example `无`
        */ "AgentId"?: string;
        /**
        * 无
        * @example `	 无`
        */ "BusinessInfo"?: string;
    }): Promise<{
        "OrderId": string;
        "DBInstanceId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeOssDownloads接口查看备份数据上云任务的文件详情。
    */ DescribeOssDownloads(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 迁移任务的ID，可以通过[DescribeMigrateTasks](~~64563~~)接口查询。
        * @example `5625458541`
        */ "MigrateTaskId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "DBInstanceId": string;
        "MigrateTaskId": string;
        "Items": {
            "FileName": string;
            "CreateTime": string;
            "FileSize": string;
            "IsAvailable": string;
            "Status": string;
            "BackupMode": string;
            "Description": string;
        };
    }>;
    /**
    * 调用CopyDatabaseBetweenInstances接口在实例间复制数据库。
    */ CopyDatabaseBetweenInstances(query: {
        "RegionId"?: string;
        /**
        * 源实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 目标实例ID，不能与源实例ID相同。
        * @example `rm-ut5ajk3xxxxxxx`
        */ "TargetDBInstanceId": string;
        /**
        * 复制数据库名称列表，格式：{"源实例数据库名称":"目标实例数据库名称"}。
        * @example `{"test1":"test2"}`
        */ "DbNames": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "PayType"?: string;
        /**
        * 源实例备份集ID。按备份集复制数据库时，可以通过查询备份列表接口[DescribeBackups](~~26273~~)获取备份集ID。
        * @example `1065238746521`
        */ "BackupId"?: string;
        /**
        * 按时间点复制数据库，可以选择备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2011-06-11T16:00:00Z`
        */ "RestoreTime"?: string;
        /**
        * 是否复制用户和权限：
        * * **YES**：表示复制用户和权限。如果目标实例中有同名的用户，则该用户将叠加源实例的同名用户的权限；
        * * **NO**：表示不复制用户和权限。
        * 默认值：**NO**。
        * @example `NO`
        */ "SyncUserPrivilege"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ResetAccount接口重置高权限账号的权限。
    */ ResetAccount(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 高权限账号名称。
        * @example `test1`
        */ "AccountName": string;
        /**
        * 设置新的高权限账号的密码。
        * >* 长度为8~32个字符；
        * * 由大写字母、小写字母、数字、特殊字符中的任意三种组成；
        * * 特殊字符为!@#$&amp;%^*()_+-=
        * @example `Test123456`
        */ "AccountPassword": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CancelImport接口用于取消RDS实例迁移任务。
    */ CancelImport(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 迁移任务ID。
        * >发起迁移任务时会返回此参数，参见[ImportDatabaseBetweenInstances](~~26301~~)。
        * @example `8562584`
        */ "ImportId": number;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UpgradeDBInstanceEngineVersion接口升级实例数据库版本。
    */ UpgradeDBInstanceEngineVersion(query: {
        "RegionId"?: string;
        /**
        * 待升级的实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 目标数据库版本，取值：**5.6**。
        * @example `5.6`
        */ "EngineVersion": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 生效时间，取值：
        * * **Immediate**：立即生效；
        * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~26249~~)。
        * 默认值：**Immediate**。
        * @example `Immediate`
        */ "EffectiveTime"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskId": string;
    }>;
    /**
    * 调用DescribeSQLLogFiles接口查询SQL审计文件列表。
    */ DescribeSQLLogFiles(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 审计文件名称。
        * @example `custinsxxxxx.csv`
        */ "FileName"?: string;
        /**
        * 每页记录数，取值：**1-50**。
        * 默认值：**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 页码，取值：**1-100000**。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "items": {
            "FileID": string;
            "LogStatus": string;
            "LogStartTime": string;
            "LogEndTime": string;
            "LogDownloadURL": string;
            "LogSize": string;
        }[];
        "pageRecordCount": number;
        "requestId": string;
        "totalRecordCount": number;
    }>;
    /**
    * 调用DescribeAccounts接口查看实例的帐号信息。
    */ DescribeAccounts(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 数据库账号名称。
        * @example `test1`
        */ "AccountName"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Accounts": {
            "DBInstanceAccount": {
                "DatabasePrivileges": {
                    "DatabasePrivilege": {
                        "AccountPrivilege": string;
                        "AccountPrivilegeDetail": string;
                        "DBName": string;
                    }[];
                };
                "AccountStatus": string;
                "AccountDescription": string;
                "DBInstanceId": string;
                "AccountName": string;
                "PrivExceeded": string;
                "AccountType": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用SwitchDBInstanceHA接口切换RDS实例的主备实例。
    */ SwitchDBInstanceHA(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 备实例的唯一标识，通过接口[DescribeDBInstanceHAConfig](~~26244~~)可查询该值。
        * @example `349054`
        */ "NodeId": string;
        "OwnerId"?: number;
        "Operation"?: string;
        /**
        * 切换方式，取值：
        * * **Yes**：强制；
        * * **No**：非强制。
        * 默认值：**No**。
        * @example `No`
        */ "Force"?: string;
        /**
        * 生效时间，取值：
        * * **Immediate**：立即执行；
        * * **MaintainTime**：可维护时间内执行。
        * 默认值：**Immediate**。
        * @example `Immediate`
        */ "EffectiveTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    DescribePrice(query: {
        /**
        * 地域名称的ID，例如：cn-hangzhou
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 数据库类型，取值范围为：MySQL/SQLServer/PostgreSQL/PPAS。
        * @example `MySQL`
        */ "Engine": string;
        /**
        * 数据库版本号，取值如下： <ul><li>MySQL：5.5/5.6/5.7</li><li>SQLServer：2008r2/2012</li><li>PostgreSQL：9.4</li><li>PPAS：9.3</li></ul>
        * @example `5.5`
        */ "EngineVersion": string;
        /**
        * 实例规格代码。
        * @example `rds.mys2.small`
        */ "DBInstanceClass": string;
        /**
        * 自定义存储空间，单位为GB每，5GB进行递增。取值范围如下，详情请参见<a href="~~26312~~">实例规格表</a>： <ul><li>MySQL/PostgreSQL/PPAS双机高可用版为[5,2000]。</li><li>MySQL 5.7单机基础版为[20,1000]。</li><li>SQL Server 2008 R2为[10,2000]。</li><li>SQL Server 2012 单机基础版为 [20,2000]。</li></ul>
        * @example `20`
        */ "DBInstanceStorage": number;
        /**
        * 订购实例数量，取值范围是[0,30]。
        * @example `10`
        */ "Quantity": number;
        "OwnerId"?: number;
        /**
        * 用于保证幂等性。
        * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
        */ "ClientToken"?: string;
        /**
        * 商品规格，取值如下，默认是rds：<ul><li>包月：rds</li><li>按量：bards</li></ul>
        * @example `bards`
        */ "CommodityCode"?: string;
        /**
        * 付费类型，取值如下：
        * Postpaid:按量付费；
        * Prepaid：预付费。
        * @example `Prepaid`
        */ "PayType"?: string;
        /**
        * 可用区id，通过函数DescribeRegions查看可用的可用区
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * 购买时长，取值：Year [1,3]，Month [1,10]。
        * @example `1`
        */ "UsedTime"?: string;
        /**
        * 时间类型，取值如下：<ul><li>包月：Year，Month，Day</li><li>按量：Hour</li></ul>
        * @example `Year`
        */ "TimeType"?: string;
        /**
        * 无
        * @example `0`
        */ "InstanceUsedType"?: number;
        /**
        * 无
        * @example `无`
        */ "OrderType"?: string;
    }): Promise<{
        "priceInfo": {
            "activityInfo": {};
            "coupons": any[];
            "currency": string;
            "discountPrice": number;
            "originalPrice": number;
            "ruleIds": string[];
            "tradePrice": number;
        };
        "requestId": string;
        "rules": {
            "name": string;
            "ruleId": number;
        }[];
    }>;
    /**
    * 调用AllocateReadWriteSplittingConnection接口申请读写分离地址。
    */ AllocateReadWriteSplittingConnection(query: {
        "RegionId"?: string;
        /**
        * 主实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 读写分离地址前缀名，不可重复，由小写字母和中划线组成，需以字母开头，长度不超过30个字符。
        * >默认以“实例名+rw”字符串组成前缀。
        * @example `rr-m5exxxxx-rw.mysql.rds.aliyuncs.com`
        */ "ConnectionStringPrefix"?: string;
        /**
        * 读写分离端口，取值：
        * * MySQL：范围为3001~3999，默认为3306；
        * * SQL Server：范围为1000~5999，默认为1433。
        * @example `3306`
        */ "Port"?: string;
        /**
        * 延迟阈值，范围是0~7200，单位：秒，默认为30。
        * >当只读实例延迟超过该阈值时，读取流量不发往该实例。
        * @example `30`
        */ "MaxDelayTime"?: string;
        /**
        * 读写分离连接串的网络类型，取值：
        * * **Internet**：外网；
        * * **Intranet**：内网。
        * 默认为内网，且内网类型与主实例保持一致。
        * @example `Intranet`
        */ "NetType"?: string;
        /**
        * 读权重分配模式，取值：
        * * **Standard**：按规格权重自动分配；
        * * **Custom**：自定义分配权重。
        * @example `Standard`
        */ "DistributionType"?: string;
        /**
        * 读权重分配，即传入主实例和只读实例的读请求比例。以100进行递增，最大值为10000，格式：{“Instanceid1“:”Weight”,”Instanceid2”:”Weight”...}。
        * >* 当DistributionType为Custom时，必须传入该参数；
        * * 当DisrtibutionType为Standard时，传入该参数无效。
        * @example `{“Instanceid1“:”100”,”Instanceid2”:”200”}`
        */ "Weight"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeTags接口查询RDS实例的标签。
    */ DescribeTags(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 代理模式ID。
        * @example `API`
        */ "proxyId"?: string;
        /**
        * 实例ID。
        * >传入该参数，其他过滤条件失效。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId"?: string;
        /**
        * 需要查询的标签，包括TagKey和TagValue。格式：{“key1”:”value1”}。
        * @example `{“key1”:”value1”}`
        */ "Tags"?: string;
    }): Promise<{
        "items": any[];
        "requestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceIpHostname接口查询RDS实例的底层ECS实例的hostname。
    */ DescribeDBInstanceIpHostname(query: {
        /**
        * RDS实例的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * RDS实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "IpHostnameInfos": string;
        "DBInstanceId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDTCSecurityIpHostsForSQLServer接口查询RDS实例的分布式事务白名单信息。
    */ DescribeDTCSecurityIpHostsForSQLServer(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "Items": {
            "WhiteListGroups": {
                "WhitelistGroupName": string;
                "SecurityIpHosts": string;
            }[];
        };
        "IpHostPairNum": number;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDTCSecurityIpHostsForSQLServer接口设置分布式事务白名单。
    */ ModifyDTCSecurityIpHostsForSQLServer(query: {
        /**
        * RDS实例的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * ECS实例的IP地址和Windows系统的计算机名。格式：ip,hostname。多个实例之间以英文分号（;）隔开。
        * >计算机名查看方式请参见[设置分布式事务白名单](~~124321~~)。
        * @example `192.168.1.100,k3ecstest`
        */ "SecurityIpHosts": string;
        /**
        * 白名单分组名称。
        * @example `test1`
        */ "WhiteListGroupName": string;
        /**
        * RDS实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "DBInstanceId": string;
        "DTCSetResult": string;
        "TaskId": number;
    }>;
    /**
    * 调用DescribeInstanceCrossBackupPolicy接口查询跨地域备份设置。
    */ DescribeInstanceCrossBackupPolicy(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "DBInstanceStatusDesc": string;
        "LockMode": string;
        "BackupEnabledTime": string;
        "CrossBackupType": string;
        "LogBackupEnabled": string;
        "BackupEnabled": string;
        "RetentType": number;
        "DBInstanceId": string;
        "DBInstanceDescription": string;
        "Retention": number;
        "Engine": string;
        "LogBackupEnabledTime": string;
        "CrossBackupRegion": string;
        "StorageOwner": string;
        "RegionId": string;
        "RequestId": string;
        "EngineVersion": string;
        "StorageType": string;
        "Endpoint": string;
        "DBInstanceStatus": string;
    }>;
    /**
    * 调用DescribeAvailableCrossRegion接口查询所选地域当前可以进行跨地域备份的目的地域。
    */ DescribeAvailableCrossRegion(query: {
        /**
        * 地域ID。可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Regions": {
            "Region": string[];
        };
    }>;
    /**
    * 调用ModifyDBInstanceAutoUpgradeMinorVersion接口修改RDS实例升级小版本的方式。
    */ ModifyDBInstanceAutoUpgradeMinorVersion(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxx`
        */ "DBInstanceId": string;
        /**
        * 实例升级小版本的方式，取值：
        * * **Auto**：自动升级小版本；
        * * **Manual**：不自动升级，仅在当前版本下线时才强制升级。
        * @example `Auto`
        */ "AutoUpgradeMinorVersion": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceCrossBackupPolicy接口修改RDS跨地域备份设置。
    */ ModifyInstanceCrossBackupPolicy(query: {
        /**
        * 源实例地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 跨地域备份保存类型。默认值：**1**，表示每个备份都保存。
        * @example `1`
        */ "CrossBackupType"?: string;
        /**
        * 跨地域日志备份开关，取值：
        * * **0**：关闭；
        * * **1**：开启。
        * @example `1`
        */ "LogBackupEnabled"?: string;
        /**
        * 跨地域备份总开关（数据备份+日志备份），取值：
        * * **0**：关闭；
        * * **1**：开启。
        * @example `1`
        */ "BackupEnabled"?: string;
        /**
        * 跨地域备份的目的地域ID。
        * @example `cn-shanghai`
        */ "CrossBackupRegion"?: string;
        "StorageOwner"?: string;
        "StorageType"?: string;
        "Endpoint"?: string;
        /**
        * 跨地域备份保留方式。默认值：**1**，表示按时长保留。
        * @example `1`
        */ "RetentType"?: number;
        /**
        * 跨地域备份保留天数，取值：**7~1825**。
        * @example `7`
        */ "Retention"?: number;
        "RelService"?: string;
    }): Promise<{
        "CrossBackupType": string;
        "LogBackupEnabled": string;
        "BackupEnabled": string;
        "CrossBackupRegion": string;
        "RetentType": number;
        "RequestId": string;
        "DBInstanceId": string;
        "RegionId": string;
        "StorageType": string;
        "Endpoint": string;
        "Retention": number;
    }>;
    /**
    * 调用DescribeAvailableRecoveryTime接口查询某跨地域备份文件可恢复哪个时间段的数据。
    */ DescribeAvailableRecoveryTime(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 跨地域备份文件ID。可以通过接口[DescribeCrossRegionBackups](~~121733~~)查看备份集ID。
        * @example `14377`
        */ "CrossBackupId": number;
    }): Promise<{
        "RecoveryEndTime": string;
        "RecoveryBeginTime": string;
        "RequestId": string;
        "RegionId": string;
        "CrossBackupId": number;
    }>;
    /**
    * 调用DescribeCrossRegionLogBackupFiles接口查看跨地域日志备份文件列表。
    */ DescribeCrossRegionLogBackupFiles(query: {
        /**
        * 实例所在地域ID。可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-05-30T12:10Z`
        */ "StartTime": string;
        /**
        * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-06-15T12:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 跨地域备份目的地域ID。可以通过接口[DescribeCrossRegionBackupDBInstance](~~121737~~)查看地域ID。
        * @example `cn-shanghai`
        */ "CrossBackupRegion"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：30。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "Item": {
                "LinkExpiredTime": string;
                "CrossBackupRegion": string;
                "LogEndTime": string;
                "LogBeginTime": string;
                "InstanceId": number;
                "CrossLogBackupSize": number;
                "CrossDownloadLink": string;
                "CrossIntranetDownloadLink": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "DBInstanceId": string;
        "RegionId": string;
        "RequestId": string;
        "EndTime": string;
        "StartTime": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DescribeCrossRegionBackups接口查看某RDS实例跨地域数据备份文件列表。
    */ DescribeCrossRegionBackups(query: {
        /**
        * 实例所在地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 跨地域备份目的地域ID。
        * @example `cn-shanghai`
        */ "CrossBackupRegion"?: string;
        /**
        * 跨地域备份文件ID。
        * >**CrossBackupId**和起止时间参数（**StartTime**、**EndTime**）必须传入其中一组。
        * @example `14562`
        */ "CrossBackupId"?: number;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-05-30T12:10Z`
        */ "StartTime"?: string;
        /**
        * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-06-15T12:10Z`
        */ "EndTime"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：30。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "Item": {
                "CrossBackupSetFile": string;
                "BackupSetScale": number;
                "BackupType": string;
                "InstanceId": number;
                "CrossBackupId": number;
                "BackupEndTime": string;
                "BackupMethod": string;
                "CrossBackupSetLocation": string;
                "CrossBackupSetSize": number;
                "Engine": string;
                "BackupStartTime": string;
                "CrossBackupDownloadLink": string;
                "Category": string;
                "CrossBackupRegion": string;
                "RestoreRegions": {
                    "RestoreRegion": string[];
                };
                "EngineVersion": string;
                "DBInstanceStorageType": string;
            }[];
        };
        "TotalRecordCount": number;
        "PageNumber": number;
        "RequestId": string;
        "RegionId": string;
        "EndTime": string;
        "StartTime": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用CreateDdrInstance接口跨地域恢复数据到新实例。
    */ CreateDdrInstance(query: {
        /**
        * 目的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目的数据库类型，取值：**MySQL**。
        * @example `MySQL`
        */ "Engine": string;
        /**
        * 目的数据库版本，取值：
        * * **5.6**；
        * * **5.7**。
        * @example `5.6`
        */ "EngineVersion": string;
        /**
        * 目的实例规格，详见[实例规格表](~~26312~~)。
        * @example `rds.mysql.s1.small`
        */ "DBInstanceClass": string;
        /**
        * 目的实例存储空间，取值： **5~2000**。
        * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
        * @example `20`
        */ "DBInstanceStorage": number;
        /**
        * 目的实例的网络连接类型，取值：
        * * **Internet**：公网连接；
        * * **Intranet**：内网连接。
        * @example `Intranet`
        */ "DBInstanceNetType": string;
        /**
        * 目的实例的[IP白名单](~~43185~~)，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
        * * IP地址形式，例如：10.23.12.24；
        * * CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
        * @example `127.0.0.1`
        */ "SecurityIPList": string;
        /**
        * 目的实例的付费类型，取值：
        * * **Postpaid**：后付费（按量付费）；
        * * **Prepaid**：预付费（包年包月）。
        * @example `Prepaid`
        */ "PayType": string;
        /**
        * 恢复方式，取值：
        * * **0**：基于备份集恢复，您还需要传入参数**BackupSetID**；
        * * **1**：基于时间点恢复，您还需要传入参数**RestoreTime**、**SourceRegion**、**SourceDBInstanceName**。
        * @example `0`
        */ "RestoreType": string;
        "OwnerId"?: number;
        /**
        * 目的实例的字符集，取值：
        * * **utf8**；
        * * **gbk**；
        * * **latin1**；
        * * **utf8mb4**。
        * @example `uft8`
        */ "SystemDBCharset"?: string;
        /**
        * 目的实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * >不能以 http:// 和 https:// 开头。
        * @example `测试数据库`
        */ "DBInstanceDescription"?: string;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 目的实例的可用区ID。多可用区用英文冒号（:）分隔。
        * > 指定了VPC和交换机时，为匹配交换机对应的可用区，该参数必填。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * 目的实例的网络类型，取值：
        * * **VPC**：VPC网络；
        * * **Classic**：经典网络。
        * 默认创建经典网络类型的实例。
        * >当本参数值为 **VPC**时，还需要传入参数**VpcId**、**VSwitchId**。
        * @example `Classic`
        */ "InstanceNetworkType"?: string;
        /**
        * 目的实例的访问模式，取值：
        * * **Standard**：标准访问模式；
        * * **Safe**：数据库代理模式。
        * 默认值：**Standard**。
        * @example `Standard`
        */ "ConnectionMode"?: string;
        /**
        * 目的实例的VPC ID。当**InstanceNetworkType**=**VPC**时，本参数可用。
        * >如果传入此参数，您还需要传入参数**ZoneId**。
        * @example `vpc-xxxxxxxxxxxx`
        */ "VPCId"?: string;
        /**
        * 目的实例的VSwitch ID，多个值用英文逗号（,）隔开。当**InstanceNetworkType**=**VPC**时，本参数可用。
        * >如果传入此参数，您还需要传入参数**ZoneId**。
        * @example `vsw-xxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 设置目的实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
        * @example `172.16.201.69`
        */ "PrivateIpAddress"?: string;
        /**
        * 指定购买时长，取值：
        * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
        * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `2`
        */ "UsedTime"?: string;
        /**
        * 指定预付费目的实例为包年或者包月类型，取值：
        * * **Year**：包年；
        * * **Month**：包月。
        * > 若付费类型为**Prepaid**则该参数必须传入。
        * @example `Year`
        */ "Period"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmyxxxxxxxxxx	`
        */ "ResourceGroupId"?: string;
        "TunnelId"?: string;
        /**
        * 基于备份集恢复时，使用的备份集的ID。可以通过接口[DescribeCrossRegionBackups](~~121733~~)查看备份集ID。
        * >**RestoreTyp**e=**0**时必传。
        * @example `14358`
        */ "BackupSetId"?: string;
        "BackupSetType"?: string;
        "BackupSetRegion"?: string;
        /**
        * 基于时间点恢复时，要恢复的时间节点，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >**RestoreType**=**1**时必传 。
        * @example `2019-05-30T03:29:10Z`
        */ "RestoreTime"?: string;
        /**
        * 基于时间点恢复时，源地域的ID。
        * >**RestoreType**=**1**时必传。
        * @example `cn-hangzhou`
        */ "SourceRegion"?: string;
        /**
        * 基于时间点恢复时，源实例的ID。
        * >**RestoreType**=**1**时必传。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "SourceDBInstanceName"?: string;
        "UserBakSetURL"?: string;
        "BakSetName"?: string;
        "HostType"?: string;
        /**
        * 目的实例存储类型，当前仅支持SSD本地盘，默认值：**local_ssd**。
        * @example `local_ssd`
        */ "DBInstanceStorageType"?: string;
    }): Promise<{
        "ConnectionString": string;
        "Port": string;
        "RequestId": string;
        "DBInstanceId": string;
        "OrderId": string;
    }>;
    /**
    * 调用CheckCreateDdrDBInstance接口预检查某RDS实例是否可以用跨地域备份集进行跨地域恢复。
    */ CheckCreateDdrDBInstance(query: {
        /**
        * 目的实例地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目的数据库类型，取值：**MySQL**。
        * >当前仅RDS for MySQL支持跨地域备份。
        * @example `MySQL`
        */ "Engine": string;
        /**
        * 目的数据库版本，取值：
        * * **5.6**；
        * * **5.7**。
        * @example `5.6`
        */ "EngineVersion": string;
        /**
        * 目的实例规格，详见[实例规格表](~~26312~~)。
        * @example `rds.mysql.s1.small`
        */ "DBInstanceClass": string;
        /**
        * 目的实例存储空间，取值： **5~2000**。
        * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
        * @example `20`
        */ "DBInstanceStorage": number;
        /**
        * 恢复方式，取值：
        * * **0**：基于备份集恢复，您还需要传入参数**BackupSetID**；
        * * **1**：基于时间点恢复，您还需要传入参数**RestoreTime**、**SourceRegion**、**SourceDBInstanceName**。
        * 默认值：**0**。
        * @example `0`
        */ "RestoreType": string;
        "OwnerId"?: number;
        /**
        * 基于备份集恢复时，使用的备份集的ID。可以通过接口[DescribeCrossRegionBackups](~~121733~~)查看备份集ID。
        * >**RestoreTyp**e=**0**时必传。
        * @example `14358`
        */ "BackupSetId"?: string;
        "BackupSetType"?: string;
        "BackupSetRegion"?: string;
        /**
        * 基于时间点恢复时，要恢复的时间节点，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >**RestoreType**=**1**时必传 。
        * @example `2019-05-30T03:29:10Z`
        */ "RestoreTime"?: string;
        /**
        * 基于时间点恢复时，源地域的ID。
        * >**RestoreType**=**1**时必传。
        * @example `cn-hangzhou`
        */ "SourceRegion"?: string;
        /**
        * 基于时间点恢复时，源实例的ID。
        * >**RestoreType**=**1**时必传。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "SourceDBInstanceName"?: string;
        "UserBakSetURL"?: string;
        "BakSetName"?: string;
        "HostType"?: string;
    }): Promise<{
        "IsValid": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeBackupTasks接口查询实例的备份任务列表。
    */ DescribeBackupTasks(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 备用参数。
        * @example `-`
        */ "Flag"?: string;
        /**
        * 备份任务ID。
        * @example `4762614`
        */ "BackupJobId"?: string;
        /**
        * 备份模式，取值：
        * * **Automated**：系统自动备份；
        * * **Manual**：手动备份。
        * @example `Automated`
        */ "BackupMode"?: string;
        /**
        * 备份任务状态，取值：
        * * **0**：未开始；
        * * **1**：正在进行中。
        * 默认为所有状态。
        * @example `0`
        */ "BackupJobStatus"?: string;
    }): Promise<{
        "Items": {
            "BackupJob": {
                "JobMode": string;
                "BackupProgressStatus": string;
                "TaskAction": string;
                "BackupStatus": string;
                "BackupJobId": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 在备份数据上云时调用CreateOnlineDatabaseTask接口打开数据库。
    */ CreateOnlineDatabaseTask(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 数据库名称。
        * @example `testDB`
        */ "DBName": string;
        /**
        * 迁移任务ID。
        * @example `5652255443`
        */ "MigrateTaskId": string;
        /**
        * 打开数据库后的一致性检查方法，取值：
        * * **SyncExecuteDBCheck**：同步执行DB检查；
        * * **AsyncExecuteDBCheck**：异步执行DB检查。
        * >兼容SQL Server 2008 R2版本。
        * @example `AsyncExecuteDBCheck`
        */ "CheckDBMode": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用DescribeEvents接口查询RDS事件记录列表。
    */ DescribeEvents(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2019-06-11T15:00:00Z`
        */ "StartTime"?: string;
        /**
        * 查询结束时间，需要晚于开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2019-06-12T15:00:00Z`
        */ "EndTime"?: string;
        /**
        * 每页记录数，取值：
        * * **30**；
        * * **50**；
        * * **100**。
        * 默认值：**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值：大于0且不超过Integer的最大值。
        * 默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "EventItems": {
            "EventItems": {
                "EventName": string;
                "EventUserType": string;
                "ResourceType": string;
                "EventPayload": string;
                "EventTime": string;
                "RegionId": string;
                "EventRecordTime": string;
                "EventReason": string;
                "EventId": number;
                "ResourceName": string;
                "EventType": string;
            }[];
        };
        "TotalRecordCount": number;
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyActionEventPolicy接口开启或关闭RDS历史事件功能。
    */ ModifyActionEventPolicy(query: {
        /**
        * 需要开启或关闭历史事件功能的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 是否开启历史事件记录功能。取值：**True | False**
        * @example `True`
        */ "EnableEventLog": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "RegionId": string;
        "EnableEventLog": string;
    }>;
    /**
    * 调用RestoreTable接口恢复RDS实例的某个数据库或表到原实例上。
    */ RestoreTable(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 备份集ID。
        * 您可以通过[DescribeBackups](~~26273~~)接口获取备份集列表。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `9026262`
        */ "BackupId"?: string;
        /**
        * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >**BackupId**和**RestoreTime**两者至少传入一个。
        * @example `2011-06-11T16:00:00Z`
        */ "RestoreTime"?: string;
        /**
        * 进行库表恢复时，指定恢复的库表信息。格式：
        * ```[{"type":"db","name":"<数据库1名称>","newname":"<新数据库1名称>","tables":[{"type":"table","name":"<数据库1内的表1名称>","newname":"<新的表1名称>"},{"type":"table","name":"<数据库1内的表2名称>","newname":"<新的表2名称>"}]},{"type":"db","name":"<数据库1名称>","newname":"<新数据库2名称>","tables":[{"type":"table","name":"<数据库2内的表3名称>","newname":"<新的表3名称>"},{"type":"table","name":"<数据库2内的表4名称>","newname":"<新的表4名称>"}]}]```
        * @example `[{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]`
        */ "TableMeta"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeActionEventPolicy接口查看RDS历史事件功能开启情况。
    */ DescribeActionEventPolicy(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "RegionId": string;
        "EnableEventLog": string;
    }>;
    /**
    * 调用ModifyHASwitchConfig接口开启或关闭RDS实例的主备切换功能。
    */ ModifyHASwitchConfig(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
        /**
        * 主备切换设置，取值：
        * * **Auto**：出现故障时自动切换主备实例；
        * * **Manual**：临时关闭自动切换。
        * 默认值：**Auto**。
        * >取值为**Manual**时，必须传入参数**ManualHATime**。
        * @example `Manual`
        */ "HAConfig"?: string;
        /**
        * 临时关闭的截止时间。最晚可设置为7天后的23:59:59。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * >仅当参数**HAConfig**取值为**Manual**时，本参数有效。
        * @example `2019-08-29T15:00:00Z`
        */ "ManualHATime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeHASwitchConfig接口查看RDS实例主备自动切换设置。
    */ DescribeHASwitchConfig(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `rm-uf6wjk5xxxxxxxxxx`
        */ "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "ManualHATime": string;
        "RequestId": string;
        "HAConfig": string;
    }>;
    /**
    * 调用DescribeAvailableResource接口查询某地域可售卖资源信息。
    */ DescribeAvailableResource(query: {
        /**
        * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 付费类型，取值：
        * * **Prepaid**：包年包月；
        * * **Postpaid**：按量付费。
        * @example `Postpaid`
        */ "InstanceChargeType": string;
        /**
        * 可用区ID。多可用区用英文冒号（:）分隔。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * 数据库类型，取值：
        * * **MySQL**；
        * * **SQLServer**；
        * * **PostgreSQL**；
        * * **PPAS**；
        * * **MariaDB**。
        * @example `MySQL`
        */ "Engine"?: string;
        /**
        * 数据库版本，取值：
        * * MySQL：**5.5/5.6/5.7/8.0**；
        * * SQL Server：**2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_ent**；
        * * PostgreSQL：**9.4/10.0**；
        * * PPAS：**9.3/10.0**；
        * * MariaDB：**10.3**。
        * @example `5.7`
        */ "EngineVersion"?: string;
        /**
        * 实例规格，详情请参见[实例规格表](~~26312~~)。
        * @example `rds.mysql.s1.small`
        */ "DBInstanceClass"?: string;
        "DBInstanceId"?: string;
        /**
        * 订单类型。仅唯一取值：**BUY**。
        * @example `BUY`
        */ "OrderType"?: string;
        "DBInstanceStorageType"?: string;
    }): Promise<{
        "RequestId": string;
        "AvailableZones": {
            "AvailableZone": {
                "Status": string;
                "RegionId": string;
                "ZoneId": string;
                "SupportedEngines": {
                    "SupportedEngine": {
                        "SupportedEngineVersions": {
                            "SupportedEngineVersion": {
                                "Version": string;
                                "SupportedCategorys": {
                                    "SupportedCategory": {
                                        "Category": string;
                                        "SupportedStorageTypes": {
                                            "SupportedStorageType": {
                                                "AvailableResources": {
                                                    "AvailableResource": {
                                                        "StorageRange": string;
                                                        "DBInstanceClass": string;
                                                        "DBInstanceStorageRange": {
                                                            "Step": number;
                                                            "Max": number;
                                                            "Min": number;
                                                        };
                                                    }[];
                                                };
                                                "StorageType": string;
                                            }[];
                                        };
                                    }[];
                                };
                            }[];
                        };
                        "Engine": string;
                    }[];
                };
            }[];
        };
    }>;
    DescribeInstanceVpcMigrateInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId": string;
        "VpcId"?: string;
    }): Promise<{}>;
    AllocateInstancePrivateConnection(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "ConnectionStringPrefix": string;
        "Port": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    AllocateInstanceVpcNetworkType(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "TargetRegionId": string;
        "TargetZoneId": string;
        "TargetVpcId": string;
        "TargetVSwitchId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CheckAccountNameAvailable(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "AccountName": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    CheckInstanceExist(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CheckRecoveryConditions(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
        "BackupId"?: string;
        "BackupFile"?: string;
        "RestoreTime"?: string;
    }): Promise<{}>;
    CheckResource(query: {
        "RegionId": string;
        "EngineVersion": string;
        "DBInstanceClass": string;
        "ZoneId": string;
        "Engine": string;
        "OwnerId"?: number;
        "DBInstanceId"?: string;
        "DBInstanceUseType"?: string;
        "SpecifyCount"?: string;
    }): Promise<{}>;
    CreateDBInstanceReplica(query: {
        "RegionId": string;
        "SourceDBInstanceId": string;
        "Engine": string;
        "OwnerId"?: number;
        "EngineVersion"?: string;
        "DBInstanceClass"?: string;
        "DBInstanceStorage"?: number;
        "SystemDBCharset"?: string;
        "DBInstanceNetType"?: string;
        "DBInstanceDescription"?: string;
        "SecurityIPList"?: string;
        "ClientToken"?: string;
        "PayType"?: string;
        "ZoneId"?: string;
        "InstanceNetworkType"?: string;
        "ConnectionMode"?: string;
        "VPCId"?: string;
        "VSwitchId"?: string;
        "PrivateIpAddress"?: string;
        "ReplicaDescription"?: string;
        "UsedTime"?: string;
        "Period"?: string;
        "ReplicaMode"?: string;
        "DomainMode"?: string;
    }): Promise<{}>;
    CreateMigrateTaskForSQLServer(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "DBName": string;
        "TaskType": string;
        "IsOnlineDB": string;
        "OSSUrls": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescibeImportsFromDatabase(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "Engine": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "ImportId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeAvailableInstanceClass(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "InstanceChargeType"?: string;
        "Engine"?: string;
        "EngineVersion"?: string;
        "DBInstanceId"?: string;
        "OrderType"?: string;
    }): Promise<{}>;
    DescribeCharacterSetName(query: {
        "RegionId": string;
        "Engine": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeCloudDbExpertService(query: {
        "RegionId"?: string;
        "ServiceRequestType": string;
        "ServiceRequestParam": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeCrossRegionBackupDBInstance(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "DBInstanceId"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeDBInstanceByTags(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "proxyId"?: string;
        "DBInstanceId"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeDBInstancesAsCsv(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "DBInstanceId"?: string;
    }): Promise<{}>;
    DescribeDBInstancesByExpireTime(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "proxyId"?: string;
        "ExpirePeriod"?: number;
        "Expired"?: boolean;
        "PageSize"?: number;
        "PageNumber"?: number;
        "Tags"?: string;
    }): Promise<{}>;
    DescribeDBInstancesByPerformance(query: {
        "RegionId"?: string;
        "ClientToken"?: string;
        "proxyId"?: string;
        "DBInstanceId"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
        "SortMethod"?: string;
        "SortKey"?: string;
        "Tags"?: string;
        "Tag.1.key"?: string;
        "Tag.2.key"?: string;
        "Tag.3.key"?: string;
        "Tag.4.key"?: string;
        "Tag.5.key"?: string;
        "Tag.1.value"?: string;
        "Tag.2.value"?: string;
        "Tag.3.value"?: string;
        "Tag.4.value"?: string;
        "Tag.5.value"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeMetaList(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "RestoreType"?: string;
        "BackupSetID"?: string;
        "RestoreTime"?: string;
        "GetDbName"?: string;
        "Pattern"?: string;
        "PageSize"?: string;
        "PageIndex"?: string;
    }): Promise<{}>;
    DescribeMigrateTasksForSQLServer(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeModifyParameterLog(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeOssDownloadsForSQLServer(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "MigrateTaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeProxyFunctionSupport(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeReadDBInstanceDelay(query: {
        "RegionId"?: string;
        "ReadInstanceId": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeSQLLogReportList(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeSQLLogReports(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeSQLReports(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeSecurityGroupConfiguration(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeTaskInfo(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "TaskId": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DescribeTasks(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
        "Status"?: string;
        "TaskAction"?: string;
    }): Promise<{}>;
    DescribeTemplatesList(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "MaxRecordsPerPage": number;
        "PageNumbers": number;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "MinAvgConsume"?: number;
        "MaxAvgConsume"?: number;
        "MinAvgScanRows"?: number;
        "MaxAvgScanRows"?: number;
        "PagingId"?: string;
        "SortKey"?: string;
        "SortMethod"?: string;
        "SqType"?: string;
    }): Promise<{}>;
    EvaluateSupportByokShow(query: {
        "RegionId": string;
        "TargetRegionId": string;
        "Engine": string;
        "EngineVersion": string;
        "NodeType": string;
        "DbInstanceStorageType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    GrantOperatorPermission(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "ExpiredTime": string;
        "Privileges": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ImportDataForSQLServer(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "FileName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    MigrateToOtherRegion(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "TargetRegionId": string;
        "TargetZoneId": string;
        "TargetVpcId": string;
        "TargetVSwitchId": string;
        "OwnerId"?: number;
        "SwitchTime"?: string;
        "EffectiveTime"?: string;
    }): Promise<{}>;
    ModifyMySQLDBInstanceDelay(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "SqlDelay": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyReadonlyInstanceDelayReplicationTime(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "ReadSQLReplicationTime": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyReplicaDescription(query: {
        "RegionId"?: string;
        "ReplicaDescription": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    ModifyResourceGroup(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "ResourceGroupId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    ModifySecurityGroupConfiguration(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "SecurityGroupId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    PreCheckCreateOrder(query: {
        "RegionId": string;
        "CommodityCode": string;
        "Engine": string;
        "EngineVersion": string;
        "DBInstanceClass": string;
        "DBInstanceStorage": number;
        "DBInstanceNetType": string;
        "Quantity": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId"?: string;
        "SystemDBCharset"?: string;
        "DBInstanceDescription"?: string;
        "SecurityIPList"?: string;
        "PayType"?: string;
        "ZoneId"?: string;
        "InstanceNetworkType"?: string;
        "UsedTime"?: string;
        "TimeType"?: string;
        "AutoPay"?: boolean;
        "InstanceUsedType"?: number;
        "Resource"?: string;
        "ConnectionMode"?: string;
        "VPCId"?: string;
        "VSwitchId"?: string;
        "PrivateIpAddress"?: string;
        "CountryCode"?: string;
        "CurrencyCode"?: string;
        "AutoRenew"?: string;
        "AgentId"?: string;
        "PromotionCode"?: string;
        "BusinessInfo"?: string;
        "BackupId"?: string;
        "RestoreTime"?: string;
        "DBInstanceStorageType"?: string;
        "NodeType"?: string;
        "ResourceGroupId"?: string;
        "Category"?: string;
        "ZoneIdSlave1"?: string;
        "ZoneIdSlave2"?: string;
        "EncryptionKey"?: string;
        "RoleARN"?: string;
    }): Promise<{}>;
    PreCheckCreateOrderForClone(query: {
        "RegionId"?: string;
        "CommodityCode": string;
        "DBInstanceClass": string;
        "DBInstanceStorage": number;
        "Quantity": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId"?: string;
        "DBInstanceStorageType"?: string;
        "PayType"?: string;
        "InstanceNetworkType"?: string;
        "UsedTime"?: string;
        "TimeType"?: string;
        "AutoPay"?: boolean;
        "InstanceUsedType"?: number;
        "Resource"?: string;
        "VPCId"?: string;
        "VSwitchId"?: string;
        "PrivateIpAddress"?: string;
        "CountryCode"?: string;
        "CurrencyCode"?: string;
        "AutoRenew"?: string;
        "AgentId"?: string;
        "ZoneId"?: string;
        "PromotionCode"?: string;
        "BusinessInfo"?: string;
        "CloneInstanceDefaultValue"?: string;
        "DBInstanceDescription"?: string;
        "DBNames"?: string;
        "BackupId"?: string;
        "RestoreTime"?: string;
        "ResourceGroupId"?: string;
        "TableMeta"?: string;
        "RestoreTable"?: string;
        "NodeType"?: string;
    }): Promise<{}>;
    PreCheckCreateOrderForDefer(query: {
        "RegionId": string;
        "CommodityCode": string;
        "UsedTime": string;
        "TimeType": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId"?: string;
        "DBInstanceStorage"?: number;
        "Resource"?: string;
        "AutoPay"?: boolean;
        "PayType"?: string;
        "RenewChange"?: boolean;
        "DBInstanceStorageType"?: string;
        "DBInstanceClass"?: string;
        "BusinessInfo"?: string;
    }): Promise<{}>;
    PreCheckCreateOrderForDegrade(query: {
        "RegionId"?: string;
        "DBInstanceClass": string;
        "DBInstanceStorage": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId"?: string;
        "CommodityCode": string;
        "ZoneId"?: string;
        "UsedTime"?: string;
        "TimeType"?: string;
        "PayType"?: string;
        "EffectiveTime"?: string;
        "Resource"?: string;
        "AutoPay"?: boolean;
        "PromotionCode"?: string;
        "BusinessInfo"?: string;
    }): Promise<{}>;
    PreCheckCreateOrderForModify(query: {
        "RegionId"?: string;
        "DBInstanceClass": string;
        "DBInstanceStorage": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId"?: string;
        "CommodityCode": string;
        "ZoneId"?: string;
        "UsedTime"?: string;
        "TimeType"?: string;
        "PayType"?: string;
        "EffectiveTime"?: string;
        "Resource"?: string;
        "AutoPay"?: boolean;
        "PromotionCode"?: string;
        "EngineVersion"?: string;
        "InstanceNetworkType"?: string;
        "DBInstanceStorageType"?: string;
        "NodeType"?: string;
        "BusinessInfo"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "SwitchTime"?: string;
    }): Promise<{}>;
    PreCheckCreateOrderForRebuild(query: {
        "RegionId": string;
        "CommodityCode": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceId"?: string;
        "ZoneId"?: string;
        "DBInstanceClass"?: string;
        "PayType"?: string;
        "InstanceNetworkType"?: string;
        "UsedTime"?: string;
        "TimeType"?: string;
        "AutoPay"?: boolean;
        "Resource"?: string;
        "VPCId"?: string;
        "VSwitchId"?: string;
        "AutoRenew"?: string;
        "AgentId"?: string;
        "PromotionCode"?: string;
        "BusinessInfo"?: string;
        "DBInstanceDescription"?: string;
        "ResourceGroupId"?: string;
        "RebuildInstanceFlag"?: boolean;
    }): Promise<{}>;
    PreCheckCreateOrderForTempUpgrade(query: {
        "RegionId": string;
        "CommodityCode": string;
        "DBInstanceId": string;
        "UsedTime": string;
        "DBInstanceStorage": number;
        "DBInstanceClass": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "DBInstanceStorageType"?: string;
        "NodeType"?: string;
        "Resource"?: string;
        "AutoPay"?: boolean;
        "BusinessInfo"?: string;
        "EffectiveTime"?: string;
    }): Promise<{}>;
    PreCheckDBInstanceOperation(query: {
        "RegionId": string;
        "DBInstanceId": string;
        "Operation": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    RequestServiceOfCloudDBExpert(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "ServiceRequestType": string;
        "ServiceRequestParam": string;
    }): Promise<{}>;
    ResetAccountForPG(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "AccountName": string;
        "AccountPassword": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    RevokeOperatorPermission(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SwitchDBInstanceVpc(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
        "VPCId"?: string;
        "VSwitchId"?: string;
        "PrivateIpAddress"?: string;
    }): Promise<{}>;
    UpgradeDBInstanceKernelVersion(query: {
        "RegionId"?: string;
        "DBInstanceId": string;
        "OwnerId"?: number;
        "UpgradeTime"?: string;
        "SwitchTime"?: string;
    }): Promise<{}>;
    CloneParameterGroup(query: {
        "RegionId": string;
        "TargetRegionId": string;
        "ParameterGroupId": string;
        "ParameterGroupName": string;
        "ParameterGroupDesc"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateParameterGroup(query: {
        "RegionId": string;
        "ParameterGroupName": string;
        "Engine": string;
        "EngineVersion": string;
        "Parameters": string;
        "OwnerId"?: number;
        "ParameterGroupDesc"?: string;
    }): Promise<{}>;
    DeleteParameterGroup(query: {
        "RegionId": string;
        "ParameterGroupId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeParameterGroup(query: {
        "RegionId": string;
        "ParameterGroupId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeParameterGroups(query: {
        "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyParameterGroup(query: {
        "RegionId": string;
        "ParameterGroupId": string;
        "OwnerId"?: number;
        "ParameterGroupName"?: string;
        "ParameterGroupDesc"?: string;
        "Parameters"?: string;
    }): Promise<{}>;
    DescribeDBProxy(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeDBProxyEndpoint(query: {
        "RegionId": string;
        "DBInstanceId": string;
        "OwnerId"?: number;
        "DBProxyEndpointId"?: string;
        "DBProxyConnectString"?: string;
    }): Promise<{}>;
    DescribeDBProxyPerformance(query: {
        "RegionId": string;
        "StartTime": string;
        "EndTime": string;
        "DBInstanceId": string;
        "MetricsName": string;
        "OwnerId"?: number;
        "DBProxyInstanceType"?: string;
    }): Promise<{}>;
    ModifyDBProxy(query: {
        "RegionId"?: string;
        "ConfigDBProxyService": string;
        "OwnerId"?: number;
        "DBProxyInstanceNum"?: string;
        "DBInstanceId": string;
        "InstanceNetworkType"?: string;
        "VPCId"?: string;
        "VSwitchId"?: string;
        "CloudInstanceId"?: string;
    }): Promise<{}>;
    ModifyDBProxyEndpoint(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBProxyEndpointId"?: string;
        "ConfigDBProxyFeatures"?: string;
        "DBInstanceId": string;
        "ReadOnlyInstanceMaxDelayTime"?: string;
        "ReadOnlyInstanceDistributionType"?: string;
        "ReadOnlyInstanceWeight"?: string;
    }): Promise<{}>;
    ModifyDBProxyInstance(query: {
        "RegionId"?: string;
        "DBProxyInstanceType": string;
        "DBProxyInstanceNum": string;
        "OwnerId"?: number;
        "EffectiveTime"?: string;
        "EffectiveSpecificTime"?: string;
        "DBInstanceId": string;
    }): Promise<{}>;
}
export default RDS;
