interface R_KVSTORE {
    /**
    * 调用CreateInstance创建一个Redis实例。
    */ CreateInstance(query: {
        /**
        * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
        * @example `AAAAAAAAAAAAAAAAAAAAAAAAAA`
        */ "Token"?: string;
        /**
        * 实例名称。 名称为2-128个字符，以大小写字母或中文开头，不支持字符`@/:=”<>{[]}`和空格。
        * @example `apitest`
        */ "InstanceName"?: string;
        /**
        * 实例密码。 长度为8－32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
        * @example `Acfr5xxx,.xxx`
        */ "Password"?: string;
        /**
        * 实例的存储容量，单位为MB。
        * > 调用此接口需至少传递Capacity或InstanceClass中的一个参数。
        * @example `16384`
        */ "Capacity"?: number;
        /**
        * 实例的规格，详细信息请参见[实例规格表](~~107984~~)。
        * > 调用此接口需至少传递Capacity或InstanceClass中的一个参数。
        * @example `redis.master.small.default`
        */ "InstanceClass"?: string;
        /**
        * 可用区ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的可用区。
        * @example `cn-hangzhou-e`
        */ "ZoneId"?: string;
        /**
        * 实例的详细配置，为JSON格式的字符串，参见[参数配置](~~43885~~)。
        * @example `{\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64}`
        */ "Config"?: string;
        /**
        * 付费类型：
        * * PrePaid（预付费）
        * * PostPaid（按量付费）
        * > 默认为PostPaid。
        * @example `PostPaid`
        */ "ChargeType"?: string;
        /**
        * 节点类型：
        * * STAND_ALONE（单节点）；
        * * MASTER_SLAVE（多节点）；
        * > 默认值为MASTER_SLAVE。
        * @example `MASTER_SLAVE`
        */ "NodeType"?: string;
        /**
        * 网络类型：
        * * CLASSIC（经典网络）
        * * VPC（专有网络）
        * > 默认为经典网络。
        * @example `VPC`
        */ "NetworkType"?: string;
        /**
        * VPC网络的ID。
        * @example `vpc-bp1oxxxxxxxxxxgzv26cf`
        */ "VpcId"?: string;
        /**
        * 虚拟交换机的ID。
        * @example `vsw-oqscxxxxxxxxxxxxx5e8c`
        */ "VSwitchId"?: string;
        /**
        * 付费周期，ChargeType（付费类型）为PrePaid时为必选参数，单位为月，可选值：1-9，12，24，36 。
        * > 付费类型为PostPaid时不支持传入此参数。
        * @example `12`
        */ "Period"?: string;
        /**
        * 活动ID、业务信息。
        * @example `000000000`
        */ "BusinessInfo"?: string;
        /**
        * 优惠码，默认值为：`youhuiquan_promotion_option_id_for_blank`。
        * @example `youhuiquan_promotion_option_id_for_blank`
        */ "CouponNo"?: string;
        /**
        * 如需基于某个实例的备份集创建新实例，则在此参数中传递源实例的ID。
        * @example `r-bp1xxxxxxxxxxxxxx`
        */ "SrcDBInstanceId"?: string;
        /**
        * 如需基于某个实例的备份集创建新实例，则在此参数中传递源实例的备份集ID。通过调用[DescribeBackups](~~61081~~)可查询BackupId。
        * @example `111111111`
        */ "BackupId"?: string;
        /**
        * 实例类型，取值：
        * * Redis
        * * Memcache
        * > 默认为Redis。
        * @example `Redis`
        */ "InstanceType"?: string;
        /**
        * 版本类型，取值：
        * * 2.8
        * * 4.0
        * * 5.0
        * > 默认值为2.8。
        * @example `4.0`
        */ "EngineVersion"?: string;
        /**
        * 指定新实例的内网IP地址。
        * > 内网IP需在实例所属的交换机网段内。
        * @example `172.16.0.10`
        */ "PrivateIpAddress"?: string;
        /**
        * 是否使用代金券，可选值：
        * * true（使用）
        * * false（不使用）
        * > 默认值：false。
        * @example `false`
        */ "AutoUseCoupon"?: string;
        /**
        * 是否开启自动续费，可选值：
        * * true（开启）
        * * false（不开启）
        * > 默认值：false。
        * @example `true`
        */ "AutoRenew"?: string;
        /**
        * 自动续费周期，单位为月，可选值：
        * * 1
        * * 2
        * * 3
        * * 6
        * * 12
        * > 当**AutoRenew**为`true`时该参数必选。
        * @example `3`
        */ "AutoRenewPeriod"?: string;
    }): Promise<{
        "ChargeType": string;
        "Config": string;
        "InstanceId": string;
        "UserName": string;
        "ZoneId": string;
        "InstanceStatus": string;
        "Port": number;
        "QPS": number;
        "RequestId": string;
        "RegionId": string;
        "Capacity": number;
        "ConnectionDomain": string;
        "InstanceName": string;
        "Bandwidth": number;
        "Connections": number;
    }>;
    /**
    * 调用DescribeAuditRecords查看Redis实例的审计日志。
    */ DescribeAuditRecords(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间，格式：YYYY-MM-DDTHH:mm:ssZ。
        * @example `2019-03-24T12:10:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式：YYYY-MM-DDTHH:mm:ssZ。
        * @example `2019-03-25T12:10:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 需要查询的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 集群实例的子节点ID。
        * @example `r-bp1xxxxxxxxxxxxx-db-0`
        */ "NodeId"?: string;
        /**
        * 账号名称，默认为所有账号。
        * @example `demo`
        */ "AccountName"?: string;
        /**
        * 数据库名称。
        * @example `demo`
        */ "DatabaseName"?: string;
        /**
        * 根据指定的命令查询审计日志，默认查询所有执行过的命令。
        * > 只能传入单个关键词。
        * @example `maxclients`
        */ "QueryKeywords"?: string;
        /**
        * 客户端IP，默认为显示所有地址。
        * @example `127.0.0.1`
        */ "HostAddress"?: string;
        /**
        * 每页显示的最大记录数。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 当前显示的页码。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "SQL": {
                "TotalExecutionTimes": string;
                "DatabaseName": string;
                "HostAddress": string;
                "ExecuteTime": string;
                "SQLText": string;
                "AccountName": string;
                "SQLType": string;
            }[];
        };
        "TotalRecordCount": number;
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "EndTime": string;
        "StartTime": string;
        "InstanceName": string;
    }>;
    /**
    * 调用DescribeRunningLogRecords查询运行日志列表，查询集群实例需传入要查询的子节点ID。
    */ DescribeRunningLogRecords(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
        * @example `2018-12-03T07:01Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须大于查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
        * @example `2018-12-03T08:01Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 需要查询的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 集群子节点ID，查询集群实例的特定子节点时需传入此参数。
        * @example `r-bp1xxxxxxxxxxxxx-db-0`
        */ "NodeId"?: string;
        "SQLId"?: number;
        /**
        * 数据库名称。
        * @example `demo`
        */ "DBName"?: string;
        /**
        * 节点角色，默认为master。
        * @example `master`
        */ "RoleType"?: string;
        /**
        * 每页显示的最大日志条目数。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 当前显示的页码。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "LogRecords": {
                "CreateTime": string;
                "Level": string;
                "Content": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "PageSize": number;
        "InstanceId": string;
        "RequestId": string;
        "StartTime": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DeleteInstance释放实例。
    */ DeleteInstance(query: {
        "RegionId"?: string;
        /**
        * 要删除的实例的ID。
        * @example `r-j6cxxxxxxxxxx3d4`
        */ "InstanceId": string;
        /**
        * @example `5464564564564564`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceSpec变更Redis实例的规格。
    */ ModifyInstanceSpec(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-j6cxxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 变更后的实例规格，各规格的InstanceClass值请参见[实例规格表](~~107984~~)。
        * @example `redis.master.small.default`
        */ "InstanceClass"?: string;
        "FromApp"?: string;
        /**
        * 活动ID、业务信息。
        * @example `000000000`
        */ "BusinessInfo"?: string;
        /**
        * 优惠码，默认值：`youhuiquan_promotion_option_id_for_blank`。
        * @example `youhuiquan_promotion_option_id_for_blank`
        */ "CouponNo"?: string;
        /**
        * 是否强制变配，可选值：
        * * false（否）；
        * * true（是）。
        * > 默认值：true。
        * @example `true`
        */ "ForceUpgrade"?: boolean;
        /**
        * 变更执行时间，可选值：
        * * Immediately（立即执行）
        * * MaintainTime（运维时间执行）
        * 默认值：Immediately。
        * @example `Immediately`
        */ "EffectiveTime"?: string;
        /**
        * 是否自动付款，可选值：
        * * true（是）
        * * false（否）
        * 默认值：false。
        * > 当值为`false`时，请在实例即将到期时到控制台[手动续费](~~26352~~)。
        * @example `true`
        */ "AutoPay"?: boolean;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSlowLogRecords查询Redis实例在指定时间内产生的慢日志。
    */ DescribeSlowLogRecords(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
        * @example `2019-03-10T14:11Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
        * @example `2019-03-22T14:11Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 需要查询的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 集群子节点ID，查询集群实例的特定子节点时需传入此参数。
        * @example `r-bp1xxxxxxxxxxxxx-db-0`
        */ "NodeId"?: string;
        "SQLId"?: number;
        /**
        * 数据库名称。
        * @example `redisdemo`
        */ "DBName"?: string;
        /**
        * 每页显示的日志数上限。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 当前显示的页码。
        * @example `1`
        */ "PageNumber"?: number;
        "SlowLogRecordType"?: string;
        "QueryKeyword"?: string;
        "OrderType"?: string;
        "OrderBy"?: string;
    }): Promise<{
        "Items": {
            "LogRecords": {
                "Command": string;
                "ExecuteTime": string;
                "ElapsedTime": number;
                "IPAddress": string;
                "Account": string;
                "AccountName": string;
                "DataBaseName": string;
                "DBName": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "PageSize": number;
        "InstanceId": string;
        "RequestId": string;
        "StartTime": string;
        "Engine": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DescribeParameters查询Redis实例的配置参数和运行参数。
    */ DescribeParameters(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 查询集群实例中单个节点配置时需要传入该节点的ID。
        * @example `r-bp1xxxxxxxxxxxxx-db-0#6889415`
        */ "NodeId"?: string;
    }): Promise<{
        "ConfigParameters": {
            "Parameter": any[];
        };
        "RequestId": string;
        "RunningParameters": {
            "Parameter": {
                "ParameterDescription": string;
                "ParameterValue": string;
                "CheckingCode": string;
                "ForceRestart": string;
                "ModifiableStatus": string;
                "ParameterName": string;
            }[];
        };
        "EngineVersion": string;
        "Engine": string;
    }>;
    /**
    * 调用ModifyInstanceAutoRenewalAttribute开启或者关闭Redis实例的到期前自动续费功能。
    */ ModifyInstanceAutoRenewalAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。多个实例ID用半角逗号（‘,’）拼接，最多允许传入30个实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 自动续费周期，当AutoRenew=True时，该值有效且必传，取值范围为1-12。实例到期时，将以月为单位进行自动续费，月数等于该值。
        * @example `3`
        */ "Duration"?: string;
        /**
        * 开启或关闭自动续费，可选值：
        * * True（开启）
        * * False（关闭）
        * > 默认值：False。
        * @example `True`
        */ "AutoRenew"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySecurityIps设置Redis实例的IP白名单。
    */ ModifySecurityIps(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * IP白名单分组下的IP列表，最多1000个。IP之间以逗号隔开，格式如下：0.0.0.0/0,10.23.12.24，或者10.23.12.24/24（CIDR模式，无类域间路由，/24表示地址中前缀的长度，范围1-32）。
        * @example `100.xxx.xxx.xxx/24,10.xxx.xxx.xxx`
        */ "SecurityIps": string;
        "OwnerId"?: number;
        /**
        * 需要修改设置的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * IP白名单分组的名称。
        * @example `default`
        */ "SecurityIpGroupName"?: string;
        /**
        * 默认为空。用于区分不同的属性值，控制台将不显示该值为hidden的白名单分组。
        * @example `hidden`
        */ "SecurityIpGroupAttribute"?: string;
        /**
        * 修改方式：
        * * Cover（覆盖原白名单）
        * * Append（追加白名单）
        * * Delete（删除该白名单 ）
        * @example `Append`
        */ "ModifyMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAccounts查找指定Redis实例的帐户列表信息或实例中某个账号的信息。
    */ DescribeAccounts(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 账号所属实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 账号名。以小写字母开头，由小写字母、数字或下划线组成，长度不超过16个字符。
        * @example `demoaccount`
        */ "AccountName"?: string;
    }): Promise<{
        "Accounts": {
            "Account": {
                "DatabasePrivileges": {
                    "DatabasePrivilege": {
                        "AccountPrivilege": string;
                    }[];
                };
                "AccountStatus": string;
                "InstanceId": string;
                "AccountName": string;
                "PrivExceeded": string;
                "AccountType": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyIntranetAttribute临时调整Redis实例的内网带宽。
    */ ModifyIntranetAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSecurityIps查询允许访问Redis实例的IP名单。
    */ DescribeSecurityIps(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "SecurityIpGroups": {
            "SecurityIpGroup": {
                "SecurityIpList": string;
                "SecurityIpGroupAttribute": string;
                "SecurityIpGroupName": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用TransformToPrePaid将按量付费的Redis实例转换为包年包月（预付费）实例。
    */ TransformToPrePaid(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 预付费时长，单位是月。取值范围：1-9、12、24、36。
        * @example `12`
        */ "Period": number;
        "OwnerId"?: number;
        /**
        * 需要转换付费类型的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 是否自动付款，可选值：
        * * true（是）
        * * false（否）
        * 默认值：false。
        * > 当值为`false`时，请在实例即将到期时到控制台[手动续费](~~26352~~)。
        * @example `true`
        */ "AutoPay"?: boolean;
        "FromApp"?: string;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
        "EndTime": string;
    }>;
    /**
    * 调用ModifyInstanceVpcAuthMode开启或关闭免密访问。开启免密访问后，同一VPC内的云服务器不使用密码就可以访问Redis，同时仍然支持通过用户名及密码的方式连接Redis。
    */ ModifyInstanceVpcAuthMode(query: {
        "RegionId"?: string;
        /**
        * VPC认证模式：
        * * Open（需要密码认证）
        * * Close（关闭密码认证，即VPC免密）
        * > 默认为Open。
        * @example `Close`
        */ "VpcAuthMode": string;
        "OwnerId"?: number;
        /**
        * 需要修改设置的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceSSL设置Redis实例的SSL加密模式。
    */ ModifyInstanceSSL(query: {
        "RegionId"?: string;
        /**
        * 修改SSL状态：
        * * Disable（关闭）
        * * Enable（开启）
        * * Update（更新证书）
        * @example `Enable`
        */ "SSLEnabled": string;
        "OwnerId"?: number;
        /**
        * 需要修改设置的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "InstanceId": string;
        "RequestId": string;
        "TaskId": string;
    }>;
    /**
    * 调用RestoreInstance将备份文件中的数据恢复到指定的Redis实例中。
    */ RestoreInstance(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 备份文件ID。您可以调用[DescribeBackups](~~61081~~)查询。
        * @example `111111111`
        */ "BackupId": string;
        "OwnerId"?: number;
        /**
        * 需要进行数据恢复的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeMonitorItems查询Redis监控项列表。
    */ DescribeMonitorItems(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "MonitorItems": {
            "KVStoreMonitorItem": {
                "Unit": string;
                "MonitorKey": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeHistoryMonitorValues查看Redis实例的历史监控信息。
    */ DescribeHistoryMonitorValues(query: {
        "RegionId"?: string;
        /**
        * 历史监控开始时间点；采用ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2018-10-18T12:00:00Z`
        */ "StartTime": string;
        /**
        * 历史监控结束时间点；采用ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。结束时间必须晚于开始时间。
        * @example `2018-10-19T12:00:00Z`
        */ "EndTime": string;
        /**
        * 历史监控数据间隔，单位m（分钟），唯一值`01m`。
        * @example `01m`
        */ "IntervalForHistory": string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 监控项。可调用[DescribeMonitorItems](~~61106~~)查询。
        * @example `hscan`
        */ "MonitorKeys"?: string;
        /**
        * 传入集群实例中特定子节点的ID查询该节点的监控信息。
        * @example `r-bp1xxxxxxxxxxxxx-db-0#6xxxxx5`
        */ "NodeId"?: string;
    }): Promise<{
        "monitorHistory": {
            "2018-07-09T12:00:13Z": {
                "quotaMemory": number;
                "UsedMemory": number;
            };
            "2018-07-09T12:13:15Z": {
                "quotaMemory": number;
                "UsedMemory": number;
            };
            "2018-07-09T12:14:15Z": {
                "quotaMemory": number;
                "UsedMemory": number;
            };
        };
        "requestId": string;
    }>;
    /**
    * 调用ModifyBackupPolicy修改Redis实例的自动备份策略。
    */ ModifyBackupPolicy(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 备份时间，格式：`HH:mmZ-HH:mmZ`。
        * @example `00:00Z-04:00Z`
        */ "PreferredBackupTime": string;
        /**
        * 备份周期：
        * * Monday（周一）
        * * Tuesday（周二）
        * * Wednesday（周三）
        * * Thursday（周四）
        * * Friday（周五）
        * * Saturday（周六）
        * * Sunday（周日）
        * @example `Tuesday`
        */ "PreferredBackupPeriod": string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceMajorVersion升级Redis实例的大版本。
    */ ModifyInstanceMajorVersion(query: {
        "RegionId"?: string;
        /**
        * 要升级到的大版本号，当前支持`4.0`。
        * @example `4.0`
        */ "MajorVersion": string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 升级执行时间：
        * * 0（立即执行）
        * * 1（在可维护时间段执行）
        * > 默认为0。
        * @example `0`
        */ "EffectTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RestartInstance重启运行中的Redis实例。
    */ RestartInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 重启时间：
        * * 0（立即重启）
        * * 1（可运维时间段重启）
        * > 默认为0。
        * @example `1`
        */ "EffectiveTime"?: string;
    }): Promise<{
        "RequestId": string;
        "InstanceId": string;
        "TaskId": string;
    }>;
    /**
    * 调用CreateAccount可以在Redis实例中创建有特定权限的账号。
    */ CreateAccount(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 账号名。需以字母开头，由小写字母、数字或下划线组成，长度不超过16个字符。
        * @example `demoaccount`
        */ "AccountName": string;
        /**
        * 账号的密码。长度为8－32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
        * @example `uWonno233`
        */ "AccountPassword": string;
        "OwnerId"?: number;
        /**
        * 需要创建账号的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 账号权限：
        * * RoleReadOnly（只读）
        * * RoleReadWrite（读写，默认值）
        * * RoleRepl（复制）
        * > 复制权限支持读写，且开放SYNC/PSYNC命令。目前仅支持在4.0标准版实例中创建有复制权限的账号。
        * @example `RoleReadOnly`
        */ "AccountPrivilege"?: string;
        /**
        * 账号描述。
        * * 需以中文、英文字母开头，不能以http: //或https: //开头；
        * * 可以包含中文、英文字母、“_”、“ -”和数字；
        * * 长度为2~256个字符。
        * @example `this is a test account`
        */ "AccountDescription"?: string;
        /**
        * 账号类型，取值为Normal（普通账号）。
        * @example `Normal`
        */ "AccountType"?: string;
    }): Promise<{
        "RequestId": string;
        "AcountName": string;
    }>;
    /**
    * 调用CreateBackup为Redis实例创建数据备份。
    */ CreateBackup(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
        "BackupJobID": string;
    }>;
    /**
    * 调用ModifyInstanceMinorVersion升级Redis实例的小版本。
    */ ModifyInstanceMinorVersion(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 要升级到的版本，默认值：latest_version，即最新版本。
        * @example `latest_version`
        */ "Minorversion"?: string;
        /**
        * 升级执行时间，取值：
        * * 0（立即执行）
        * * 1（可维护时间内执行）
        * 默认值：0。
        * @example `0`
        */ "EffectTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateCacheAnalysisTask手动发起缓存分析任务。
    */ CreateCacheAnalysisTask(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeBackupPolicy查询Redis实例的备份策略，包括备份周期、备份时间等。
    */ DescribeBackupPolicy(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "PreferredBackupPeriod": string;
        "RequestId": string;
        "PreferredNextBackupTime": string;
        "PreferredBackupTime": string;
        "BackupRetentionPeriod": string;
    }>;
    /**
    * 调用DescribeDBInstanceNetInfo查看Redis实例的网络信息。
    */ DescribeDBInstanceNetInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
        "InstanceNetworkType": string;
        "NetInfoItems": {
            "InstanceNetInfo": {
                "DBInstanceNetType": string;
                "Port": string;
                "ConnectionString": string;
                "VPCInstanceId": string;
                "VPCId": string;
                "IPAddress": string;
                "IPType": string;
                "Upgradeable": string;
                "ExpiredTime": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeCacheAnalysisReportList查看Redis实例的缓存分析报告列表。
    */ DescribeCacheAnalysisReportList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 查询最近几天内的分析结果，默认查询最近7天的分析结果。
        * > 如果查询时当日的自动分析尚未开始，且没有手动发起缓存分析，则本日没有记录。
        * @example `7`
        */ "Days"?: number;
        /**
        * 每页返回的记录数，可选值：
        * * 30
        * * 50
        * * 100
        * 默认值：30。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 需要返回的页码。
        * @example `1`
        */ "PageNumbers"?: number;
        /**
        * 集群版Redis实例的子节点ID。
        * > 如果不设置将返回所有子节点的分析结果。
        * @example `r-bp1xxxxxxxxxxxxx-db-0`
        */ "NodeId"?: string;
        "Date"?: string;
    }): Promise<{
        "InstanceId": string;
        "RequestId": string;
        "DailyTasks": {
            "DailyTask": {
                "Date": string;
                "Tasks": {
                    "Task": {
                        "Status": string;
                        "NodeId": string;
                        "StartTime": string;
                        "TaskId": string;
                    }[];
                };
            }[];
        };
    }>;
    /**
    * 调用ModifyInstanceConfig修改Redis实例的配置参数。
    */ ModifyInstanceConfig(query: {
        "RegionId"?: string;
        /**
        * 实例的配置参数（JSON String），详情请参见[实例规格表](~~107984~~)。
        * @example `{"EvictionPolicy":"volatile-lru","list-max-ziplist-entries":512,"zset-max-ziplist-entries":128,"hash-max-ziplist-entries":512,"hash-max-ziplist-value":64,"list-max-ziplist-value":64,"set-max-intset-entries":512,"zset-max-ziplist-value":64}`
        */ "Config": string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用ModifyAuditLogConfig设置审计日志的保留天数。
    */ ModifyAuditLogConfig(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 审计日志保留的天数，取值范围：7-30。
        * @example `15`
        */ "Retention": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        "AuditCommand"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceMaintainTime修改Redis实例的可维护时间段，阿里云将在您设定的可维护时间段内对Redis实例进行例行维护。
    */ ModifyInstanceMaintainTime(query: {
        "RegionId"?: string;
        /**
        * 可维护时间段的开始时间，格式：`HH:mmZ`。
        * @example `03:00Z`
        */ "MaintainStartTime": string;
        /**
        * 可维护时间段的结束时间，格式：`HH:mmZ`。
        * > 开始时间和结束时间的间隔应为1小时，如：MaintainStartTime为`01:00Z`，MaintainEndTime为`02:00Z`。
        * @example `02:00Z`
        */ "MaintainEndTime": string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCacheAnalysisReport查看Redis实例在指定日期中的缓存分析报告。
    */ DescribeCacheAnalysisReport(query: {
        "RegionId"?: string;
        /**
        * 需要查询的日期，每次可查询一天的缓存分析结果，格式：`2019-08-05Z`。
        * @example `2019-08-05Z`
        */ "Date": string;
        /**
        * 分析类型，当前唯一值：`BigKey`。
        * @example `BigKey`
        */ "AnalysisType": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 每页返回的记录数，可选值：
        * * 30
        * * 50
        * * 100
        * 默认值：30。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 需要返回的页码。
        * > 如果该值大于返回结果的最大页数，则返回的大key结果为空。
        * @example `1`
        */ "PageNumbers"?: number;
        /**
        * 集群版Redis实例的子节点ID。
        * > 如果不设置将返回所有子节点的分析结果。
        * @example `r-bp1xxxxxxxxxxxxx-db-0`
        */ "NodeId"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalRecordCount": number;
        "HotKeys": any[];
        "PageSize": number;
        "RequestId": string;
        "BigKeys": {
            "db": string;
            "qps": number;
            "keyType": string;
            "isExpired": string;
            "analysisType": string;
            "key": string;
            "memory": number;
            "size": number;
        }[];
        "PageRecordCount": number;
    }>;
    /**
    * 调用GrantAccountPrivilege修改Redis账号的权限。
    */ GrantAccountPrivilege(query: {
        "RegionId"?: string;
        /**
        * 账号名。以字母开头，由小写字母、数字、下划线组成，长度不超过16个字符。
        * @example `demoaccount`
        */ "AccountName": string;
        /**
        * 账号权限：
        * * RoleReadOnly（只读）
        * * RoleReadWrite（读写，默认值）
        * * RoleRepl（复制）
        * > 复制权限支持读写，且开放SYNC/PSYNC命令。目前仅支持在4.0标准版实例中赋予账号复制权限。
        * @example `RoleReadWrite`
        */ "AccountPrivilege": string;
        "OwnerId"?: number;
        /**
        * 账号所属实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceAttribute修改Redis实例的属性，包括名称和密码。
    */ ModifyInstanceAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-j6cxxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 新的实例名称。名称为2-80个字符，以大小写英文字母或中文开头，不支持字符`@/:=”<>{[]}`和空格。
        * @example `newinstancename`
        */ "InstanceName"?: string;
        /**
        * 新的实例密码。长度为8-32位，需包含大写字母、小写字母、数字、特殊字符（支持`!@#$%^&*()_+-=`）中至少三种。
        * @example `uW8+nsrp`
        */ "NewPassword"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SwitchNetwork切换Redis实例的网络类型，支持从经典网络切换为VPC网络。
    */ SwitchNetwork(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要切换网络类型的实例的ID。
        * @example `r-j6cxxxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 需要切换到的网络类型，当前仅支持经典网络切换到VPC，因此该参数仅有默认值VPC。
        * @example `VPC`
        */ "TargetNetworkType"?: string;
        /**
        * 实例切换到VPC网络后所属的VPC ID。
        * @example `vpc-bp1xxxxxxxxxxxxxxxxxx`
        */ "VpcId"?: string;
        /**
        * 实例切换网络类型后VPC内的交换机ID，如果传入了VpcId则此参数为必选。
        * @example `vsw-sdrxxxxxxxxxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 是否保留经典网络 IP：
        * * True（保留）
        * * False（不保留）
        * > 默认值为False。
        * @example `True`
        */ "RetainClassic"?: string;
        /**
        * 保留经典网络IP的时间，单位：天。 可选值：14、30、60、120。若选择保留经典网络地址，则该参数必选。
        * > 切换到VPC网络后，如需修改经典网络IP的保留时间请参见[ModifyInstanceNetExpireTime](~~61010~~)。
        * @example `30`
        */ "ClassicExpiredDays"?: string;
    }): Promise<{
        "TaskId": string;
        "requestId": string;
    }>;
    /**
    * 若Redis实例之前执行过由经典网络向VPC网络切换，并保留了经典网络连接地址，则可调用ModifyInstanceNetExpireTime延长经典网络连接地址的保存时间。
    */ ModifyInstanceNetExpireTime(query: {
        "RegionId"?: string;
        /**
        * 实例的经典网络连接地址。
        * @example `r-bp1xxxxxxxxxxxxx.redis.rds.aliyuncs.com`
        */ "ConnectionString": string;
        /**
        * 延长经典网络连接地址的保留时间。取值：14、30、60或120，单位为天。
        * @example `14`
        */ "ClassicExpiredDays": number;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "InstanceId": string;
        "RequestId": string;
        "NetInfoItems": {
            "NetInfoItem": {
                "ConnectionString": string;
                "Port": string;
                "DBInstanceNetType": string;
                "IPAddress": string;
                "ExpiredTime": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeIntranetAttribute查询Redis实例当前的内网带宽。如果使用了临时调整带宽功能，还可查询临时带宽的过期时间。
    */ DescribeIntranetAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "IntranetBandwidth": number;
        "ExpireTime": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyAccountDescription修改Redis账号的描述。
    */ ModifyAccountDescription(query: {
        "RegionId"?: string;
        /**
        * 账号名。以字母开头，由小写字母、数字、下划线组成，长度不超过16个字符。
        * @example `demoaccount`
        */ "AccountName": string;
        /**
        * 账号描述。
        * * 需以中文、英文字母开头，不能以http: //或https: //开头；
        * * 可以包含中文、英文字母、“_”、“ -”、数字；
        * * 长度为2~256个字符。
        * @example `this is a test account`
        */ "AccountDescription": string;
        "OwnerId"?: number;
        /**
        * 账号所属实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLogicInstanceTopology查询Redis实例的逻辑拓扑结构。
    */ DescribeLogicInstanceTopology(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 目的实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RedisShardList": {
            "NodeInfo": {
                "NodeId": string;
                "NodeType": string;
                "Capacity": string;
                "Connection": string;
                "Bandwidth": number;
            }[];
        };
        "InstanceId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeZones查询支持Redis的可用区。
    */ DescribeZones(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 返回值的语言，取值：
        * * zh-CN（中文）
        * * en-US（英文）
        * * ja（日文）
        * > 默认值：zh-CN。
        * @example `en-US`
        */ "AcceptLanguage"?: string;
    }): Promise<{
        "RequestId": string;
        "Zones": {
            "KVStoreZone": {
                "ZoneName": string;
                "IsRds": boolean;
                "Disabled": boolean;
                "RegionId": string;
                "ZoneId": string;
                "SwitchNetwork": boolean;
            }[];
        };
    }>;
    /**
    * 调用DescribeInstanceAttribute查询Redis实例的详细信息。
    */ DescribeInstanceAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
        "Instances": {
            "DBInstanceAttribute": {
                "Config": string;
                "HasRenewChangeOrder": string;
                "InstanceId": string;
                "ArchitectureType": string;
                "ZoneId": string;
                "PrivateIp": string;
                "VSwitchId": string;
                "VpcId": string;
                "Engine": string;
                "NetworkType": string;
                "PackageType": string;
                "QPS": number;
                "ReplicaId": string;
                "IsRds": boolean;
                "MaintainStartTime": string;
                "VpcAuthMode": string;
                "ConnectionDomain": string;
                "EngineVersion": string;
                "InstanceName": string;
                "Bandwidth": number;
                "ChargeType": string;
                "AuditLogRetention": string;
                "MaintainEndTime": string;
                "ReplicationMode": string;
                "InstanceType": string;
                "Tags": {
                    "Tag": any[];
                };
                "InstanceStatus": string;
                "Port": number;
                "InstanceClass": string;
                "AvailabilityValue": string;
                "RegionId": string;
                "NodeType": string;
                "CreateTime": string;
                "Capacity": number;
                "SecurityIPList": string;
                "Connections": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeBackups查询Redis实例的备份文件信息。
    */ DescribeBackups(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间，例如：`2018-12-21T18:10Z`。
        * @example `2019-03-11T10:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，例如：`2018-12-28T18:10Z`。
        * @example `2019-03-14T18:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 目标实例的ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 备份文件的ID。
        * @example `111111111`
        */ "BackupId"?: number;
        /**
        * 每页最大记录数。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，大于0，且不超过Integer的最大值。
        * @example `1`
        */ "PageNumber"?: number;
        "NeedAof"?: string;
    }): Promise<{
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "RequestId": string;
        "Backups": {
            "Backup": {
                "BackupIntranetDownloadURL": string;
                "BackupType": string;
                "BackupEndTime": string;
                "BackupMethod": string;
                "BackupId": string;
                "BackupStartTime": string;
                "BackupDownloadURL": string;
                "BackupDBNames": string;
                "NodeInstanceId": string;
                "BackupMode": string;
                "BackupStatus": string;
                "BackupSize": string;
                "EngineVersion": string;
            }[];
        };
    }>;
    /**
    * 调用ListTagResources查询绑定了指定标签的Redis实例或者查询指定实例绑定的标签。
    */ ListTagResources(query: {
        /**
        * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型，唯一值：INSTANCE。
        * @example `INSTANCE`
        */ "ResourceType": string;
        "OwnerId"?: number;
        "ResourceId"?: string[];
        "Tag"?: string[];
        /**
        * 用来返回更多结果。第一次查询不需要提供这个参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
        * @example `212db86sca4384811e0b5e8707ec21345`
        */ "NextToken"?: string;
    }): Promise<{
        "TagResources": {
            "TagResource": {
                "ResourceType": string;
                "TagValue": string;
                "ResourceId": string;
                "TagKey": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用UntagResources将标签从Redis实例解绑。
    */ UntagResources(query: {
        /**
        * 地域ID，可调用[DescribeRegions](~~61012~~)查询。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型，唯一值：INSTANCE。
        * @example `INSTANCE`
        */ "ResourceType": string;
        "ResourceId": string[];
        "OwnerId"?: number;
        "TagKey"?: string[];
        /**
        * 解绑实例上的所有标签。可选值：
        * * true
        * * false
        * > * 默认值：false。
        * * 如果同时设置了**TagKey.N**和该参数，该参数不生效。
        * @example `false`
        */ "All"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用TagResources为一个或多个Redis实例绑定标签。
    */ TagResources(query: {
        /**
        * 地域ID，可调用[DescribeRegions](~~61012~~)查询。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型，唯一值：INSTANCE。
        * @example `INSTANCE`
        */ "ResourceType": string;
        "ResourceId": string[];
        "Tag": string[];
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceSSL查看Redis实例是否开启了SSL加密认证。
    */ DescribeInstanceSSL(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `r-bp1xxxxxxxxxxxxx`
        */ "InstanceId": string;
    }): Promise<{
        "SSLEnabled": string;
        "SSLExpiredTime": string;
        "InstanceId": string;
        "RequestId": string;
        "CertCommonName": string;
    }>;
    DescribeActiveOperationTaskType(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "IsHistory"?: number;
    }): Promise<{}>;
    DescribeMonthlyServiceStatus(query: {
        "RegionId"?: string;
        "Month": string;
        "OwnerId"?: number;
        "InstanceIds": string;
    }): Promise<{}>;
    DescribeReplicaInitializeProgress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId"?: string;
    }): Promise<{}>;
    DescribeReplicaPerformance(query: {
        "RegionId"?: string;
        "SourceDBInstanceId": string;
        "Key": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "ReplicaId": string;
        "DestinationDBInstanceId"?: string;
    }): Promise<{}>;
    DescribeVerificationList(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "ReplicaId": string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    MigrateToOtherZone(query: {
        "RegionId"?: string;
        "ZoneId": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "VSwitchId"?: string;
        "EffectiveTime"?: string;
    }): Promise<{}>;
    AllocateInstancePublicConnection(query: {
        "RegionId"?: string;
        "ConnectionStringPrefix": string;
        "Port": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    CreateShardingInstance(query: {
        "RegionId": string;
        "ShardReplicaClass": string;
        "ArchitectureType": string;
        "OwnerId"?: number;
        "Token"?: string;
        "InstanceName"?: string;
        "Password"?: string;
        "Capacity"?: number;
        "InstanceClass"?: string;
        "ZoneId"?: string;
        "Config"?: string;
        "ChargeType"?: string;
        "NodeType"?: string;
        "NetworkType"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "Period"?: string;
        "BusinessInfo"?: string;
        "CouponNo"?: string;
        "SrcDBInstanceId"?: string;
        "BackupId"?: string;
        "InstanceType"?: string;
        "EngineVersion"?: string;
        "PrivateIpAddress"?: string;
        "IncrementalBackupMode"?: string;
        "ProxyMode"?: string;
        "RedisManagerClass"?: string;
        "ShardReplicaQuantity"?: number;
        "ShardStorageQuantity"?: number;
        "ProxyQuantity"?: number;
        "ShardQuantity"?: number;
        "SecurityIPList"?: string;
    }): Promise<{}>;
    CreateSnapshot(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
        "SnapshotName"?: string;
    }): Promise<{}>;
    CreateStaticVerification(query: {
        "RegionId"?: string;
        "SourceInstanceId": string;
        "DestinationInstanceId": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    CreateTempInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
        "SnapshotId": string;
    }): Promise<{}>;
    DeleteAccount(query: {
        "RegionId"?: string;
        "AccountName": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DeleteSnapshot(query: {
        "RegionId"?: string;
        "SnapshotId": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DeleteSnapshotSettings(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DeleteTempInstance(query: {
        "RegionId"?: string;
        "TempInstanceId": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DescribeActiveOperationTask(query: {
        "RegionId"?: string;
        "TaskType": string;
        "OwnerId"?: number;
        "Region": string;
        "IsHistory"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeActiveOperationTaskCount(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeActiveOperationTaskRegion(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "TaskType": string;
        "IsHistory"?: number;
    }): Promise<{}>;
    DescribeAvailableResource(query: {
        "RegionId": string;
        "ZoneId"?: string;
        "OwnerId"?: number;
        "InstanceChargeType"?: string;
        "OrderType"?: string;
    }): Promise<{}>;
    DescribeCertification(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
        "Parameters"?: string;
    }): Promise<{}>;
    DescribeDBInstanceMonitor(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeErrorLogRecords(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "InstanceId": string;
        "NodeId"?: string;
        "SQLId"?: number;
        "RoleType"?: string;
        "DBName"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeInstanceAutoRenewalAttribute(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "proxyId"?: string;
        "DBInstanceId"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeInstanceConfig(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DescribeInstances(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceIds"?: string;
        "InstanceStatus"?: string;
        "ChargeType"?: string;
        "NetworkType"?: string;
        "EngineVersion"?: string;
        "InstanceClass"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "InstanceType"?: string;
        "SearchKey"?: string;
        "ArchitectureType"?: string;
        "Expired"?: string;
        "ZoneId"?: string;
        "Tag"?: string[];
        "VpcCloudInsInfo"?: number;
    }): Promise<{}>;
    DescribeInstancesByExpireTime(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ExpirePeriod": number;
        "HasExpiredRes"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
        "InstanceType"?: string;
    }): Promise<{}>;
    DescribeMonthlyServiceStatusDetail(query: {
        "RegionId"?: string;
        "Month": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DescribeParameterModificationHistory(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "NodeId"?: string;
    }): Promise<{}>;
    DescribeParameterTemplates(query: {
        "RegionId"?: string;
        "Engine": string;
        "EngineVersion": string;
        "OwnerId"?: number;
        "CharacterType": string;
    }): Promise<{}>;
    DescribeRdsVSwitchs(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VpcId"?: string;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeRdsVpcs(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "AcceptLanguage"?: string;
    }): Promise<{}>;
    DescribeReplicaConflictInfo(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "ReplicaId": string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeReplicaUsage(query: {
        "RegionId"?: string;
        "SourceDBInstanceId": string;
        "OwnerId"?: number;
        "ReplicaId": string;
        "DestinationDBInstanceId"?: string;
    }): Promise<{}>;
    DescribeReplicas(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId"?: string;
        "AttachDbInstanceData"?: boolean;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeShardingInstances(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceIds"?: string;
    }): Promise<{}>;
    DescribeSnapshots(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
        "SnapshotIds"?: string;
        "BeginTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    DescribeStaticVerificationList(query: {
        "RegionId"?: string;
        "SourceInstanceId": string;
        "DestinationInstanceId": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    DescribeStrategy(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    DescribeTags(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "ResourceType"?: string;
        "NextToken"?: string;
    }): Promise<{}>;
    DescribeTempInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId"?: string;
    }): Promise<{}>;
    DestroyInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    EvaluateFailOverSwitch(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    FlushInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    GetSnapshotSettings(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    ModifyActiveOperationTask(query: {
        "RegionId"?: string;
        "SwitchTime": string;
        "OwnerId"?: number;
        "Ids": string;
    }): Promise<{}>;
    ModifyCertification(query: {
        "RegionId"?: string;
        "NoCertification": boolean;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    ModifyDBInstanceConnectionString(query: {
        "RegionId"?: string;
        "NewConnectionString": string;
        "CurrentConnectionString": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "Port"?: string;
        "IPType"?: string;
    }): Promise<{}>;
    ModifyDBInstanceMonitor(query: {
        "RegionId"?: string;
        "Interval": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    ModifyGuardDomainMode(query: {
        "RegionId"?: string;
        "DomainMode": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    ModifyInstanceSpecPreCheck(query: {
        "RegionId"?: string;
        "TargetInstanceClass": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    ModifyReplicaDescription(query: {
        "RegionId"?: string;
        "ReplicaDescription": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    ModifyReplicaMode(query: {
        "RegionId"?: string;
        "ReplicaMode": string;
        "OwnerId"?: number;
        "ReplicaId": string;
        "PrimaryInstanceId"?: string;
        "DomainMode"?: string;
    }): Promise<{}>;
    ModifyReplicaRecoveryMode(query: {
        "RegionId"?: string;
        "RecoveryMode": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    ModifyReplicaRelation(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    ModifyReplicaVerificationMode(query: {
        "RegionId"?: string;
        "VerificationMode": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    QueryTask(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    ReleaseInstancePublicConnection(query: {
        "RegionId"?: string;
        "CurrentConnectionString": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    ReleaseReplica(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    RenewInstance(query: {
        "RegionId"?: string;
        "Period": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "Capacity"?: string;
        "InstanceClass"?: string;
        "AutoPay"?: boolean;
        "FromApp"?: string;
        "BusinessInfo"?: string;
        "CouponNo"?: string;
        "ForceUpgrade"?: boolean;
    }): Promise<{}>;
    RenewMultiInstance(query: {
        "RegionId"?: string;
        "Period": number;
        "OwnerId"?: number;
        "InstanceIds": string;
        "FromApp"?: string;
        "AutoPay"?: boolean;
        "BusinessInfo"?: string;
        "CouponNo"?: string;
    }): Promise<{}>;
    ResetAccount(query: {
        "RegionId"?: string;
        "AccountName": string;
        "AccountPassword": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    ResetAccountPassword(query: {
        "RegionId"?: string;
        "AccountName": string;
        "AccountPassword": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    RestoreSnapshot(query: {
        "RegionId"?: string;
        "SnapshotId": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    RevokeAccountPrivilege(query: {
        "RegionId"?: string;
        "AccountName": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    SetSnapshotSettings(query: {
        "RegionId"?: string;
        "DayList": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "BeginHour"?: number;
        "EndHour"?: number;
        "RetentionDay"?: number;
        "MaxAutoSnapshots"?: number;
        "MaxManualSnapshots"?: number;
    }): Promise<{}>;
    SwitchTempInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
        "TempInstanceId": string;
    }): Promise<{}>;
    UnlinkReplicaInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    VerifyPassword(query: {
        "RegionId"?: string;
        "Password": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
}
export default R_KVSTORE;
