interface DDS {
    /**
    * 调用DescribeBackups接口查询MongoDB实例的备份列表。
    */ DescribeBackups(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-03-12T12:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-03-13T12:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        /**
        * 备份ID。
        * @example `5664xxxx`
        */ "BackupId"?: string;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页记录数，取值： **30、50、100**，默认值为**30**。
        * @example `30`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Backups": {
            "Backup": {
                "BackupDownloadURL": string;
                "BackupIntranetDownloadURL": string;
                "BackupType": string;
                "BackupDBNames": string;
                "BackupEndTime": string;
                "BackupMethod": string;
                "BackupMode": string;
                "BackupSize": number;
                "BackupStatus": string;
                "BackupStartTime": string;
                "BackupId": number;
            }[];
        };
    }>;
    /**
    * 调用ModifyDBInstanceNetworkType接口切换MongoDB实例的网络类型。
    */ ModifyDBInstanceNetworkType(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 实例要切换的目标网络类型，取值：
        * - **VPC**：将网络类型切换为专有网络。
        * - **Classic**：将网络类型切换为经典网络。
        * @example `VPC`
        */ "NetworkType": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 专有网络ID。
        * > 当**NetworkType**参数取值为**VPC**时，本参数必须传入。
        * @example `vpc-bpxxxxxxxx`
        */ "VpcId"?: string;
        /**
        * 专有网络中的交换机ID。
        * > 当**NetworkType**参数取值为**VPC**时，本参数必须传入。
        * @example `vsw-bpxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 切换网络类型为VPC时，设置是否保留原经典网络地址，取值：
        * - **True**：保留原经典网络地址。
        * - **False**：不保留原经典网络地址。
        * > - 当**NetworkType**参数取值为**VPC**时，才可以传入本参数。
        * - 当本参数取值为**True**时，还需要传入**ClassicExpiredDays**参数。
        * @example `True`
        */ "RetainClassic"?: string;
        /**
        * 切换网络类型为VPC时，设置保留原经典网络地址的时长。 取值：**14**、**30**、**60**、**120**，单位为天。
        * > - 当**NetworkType**参数取值为**VPC**时，才可以传入本参数。
        * - 当**RetainClassic**参数取值为**True**时，本参数必须传入。
        * @example `30`
        */ "ClassicExpiredDays"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyBackupPolicy接口修改MongoDB实例的备份策略。
    */ ModifyBackupPolicy(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 执行备份的时间，格式为<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
        * > 时间范围限制为1小时。
        * @example `03:00Z-04:00Z`
        */ "PreferredBackupTime": string;
        /**
        * 备份周期，取值：
        * - **Monday**：周一。
        * - **Tuesday**：周二。
        * - **Wednesday**：周三。
        * - **Thursday**：周四。
        * - **Friday**：周五。
        * - **Saturday**：周六。
        * - **Sunday**：周日。
        * > 如需传入多个值，多个值用英文逗号（,）隔开。
        * @example `Monday,Wednesday,Friday,Sunday`
        */ "PreferredBackupPeriod": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeBackupPolicy接口查询MongoDB实例的备份策略。
    */ DescribeBackupPolicy(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "PreferredBackupPeriod": string;
        "RequestId": string;
        "BackupRetentionPeriod": string;
        "PreferredBackupTime": string;
    }>;
    /**
    * 调用ModifyParameters接口修改MongoDB实例的参数。
    */ ModifyParameters(query: {
        "RegionId"?: string;
        /**
        * 需要修改的参数及参数的取值，格式为JSON串，例如：{“name”:”value”,”name”:”value2”}。
        * > 您可以通过调用[DescribeParameterTemplates](~~67618~~)接口查询默认的参数模板列表。
        * @example `{"operationProfiling.slowOpThresholdMs":"300"}`
        */ "Parameters": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中的Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeParameterTemplates接口查询MongoDB实例默认的参数模板列表。
    */ DescribeParameterTemplates(query: {
        "RegionId"?: string;
        /**
        * 数据库版本号，取值：**3.2**、**3.4**、**4.0**。
        * @example `4.0`
        */ "EngineVersion": string;
        "OwnerId"?: number;
        /**
        * 数据库引擎，取值：**mongodb**。
        * @example `mongodb`
        */ "Engine": string;
    }): Promise<{
        "Parameters": {
            "TemplateRecord": {
                "ForceModify": boolean;
                "ParameterDescription": string;
                "ParameterValue": string;
                "CheckingCode": string;
                "ForceRestart": boolean;
                "ParameterName": string;
            }[];
        };
        "RequestId": string;
        "ParameterCount": string;
        "EngineVersion": string;
        "Engine": string;
    }>;
    /**
    * 调用DescribeAvailableTimeRange接口查询MongoDB实例索引分析报告的分析时间段和生成状态。
    */ DescribeAvailableTimeRange(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 分片集群实例中Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "TimeRange": {
            "TimeRange": {
                "Status": string;
                "EndTime": string;
                "TaskId": string;
                "StartTime": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateRecommendationTask接口为MongoDB实例创建索引分析任务。
    */ CreateRecommendationTask(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH</i>Z（UTC时间）。
        * > **StartTime**参数取值必须晚于审计日志的开启时间。
        * @example `2019-01-01T12Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH</i>Z（UTC时间）。
        * > 查询的时间范围为7天内。
        * @example `2019-01-01T18Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 分片集群实例中Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeErrorLogRecords接口查询MongoDB实例的错误日志。
    */ DescribeErrorLogRecords(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        *  查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-01-01T12:10Z`
        */ "StartTime": string;
        /**
        *  查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-01-02T12:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        "SQLId"?: number;
        /**
        * 实例中节点的角色。取值：
        * - **primary**：主节点。
        * - **secondary**：从节点。
        * > 当**NodeId**参数传入的是Mongos节点ID时，本参数取值只能为**primary**。
        * @example `primary`
        */ "RoleType"?: string;
        /**
        * 数据库名。
        * @example `mongodbtest`
        */ "DBName"?: string;
        /**
        *  每页记录数，取值范围：**30**~**100**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "LogRecords": {
                "Category": string;
                "CreateTime": string;
                "ConnInfo": string;
                "Content": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeParameterModificationHistory接口查询MongoDB实例参数的修改记录。
    */ DescribeParameterModificationHistory(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-01-01T12:10Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-01-02T12:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "HistoricalParameters": {
            "HistoricalParameter": {
                "OldParameterValue": string;
                "ModifyTime": string;
                "NewParameterValue": string;
                "ParameterName": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeIndexRecommendation接口查询MongoDB实例的索引推荐详情。
    */ DescribeIndexRecommendation(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "InstanceId": string;
        "OwnerId"?: number;
        /**
        * 任务ID，您可以通过调用[DescribeAvailableTimeRange](~~95534~~)接口查询。
        * @example `3223069`
        */ "TaskId"?: string;
        /**
        * 分片集群实例中Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        /**
        * 数据库名。
        * @example `mongodbtest`
        */ "Database"?: string;
        /**
        * 集合名。
        * @example `customer`
        */ "Collection"?: string;
        /**
        * 查询开始时间，格式为<i>HH:mm</i>Z-<i>HH</i>Z（UTC时间）。
        * > **StartTime**取值必须晚于审计日志的开启时间。
        * @example `2019-01-01T12Z`
        */ "StartTime"?: string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式为<i>HH:mm</i>Z-<i>HH</i>Z（UTC时间）。
        * @example `2019-01-02T13Z`
        */ "EndTime"?: string;
        /**
        * 操作类型，例如**query**、**delete**、**update**等。
        * @example `query`
        */ "OperationType"?: string;
        /**
        * 每页记录数，取值： **30**、**50**、**100**，默认值为**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Analyzations": {
            "Analyzation": {
                "InMemorySort": boolean;
                "Sort": string;
                "Operation": string;
                "Count": number;
                "AverageKeysExaminedCount": number;
                "Database": string;
                "Query": string;
                "AverageExecutionTime": number;
                "AverageReturnRowCount": number;
                "IndexRecommendations": {
                    "Recommendation": {
                        "RecmdType": string;
                        "Content": string;
                    }[];
                };
                "TotalExecutionTime": number;
                "LastExecutionTime": string;
                "ExecutionPlan": string;
                "Namespace": string;
                "AverageDocsExaminedCount": number;
                "IndexCombines": {
                    "IndexCombine": string[];
                };
            }[];
        };
        "TotalRecordCount": number;
        "PageNumber": number;
        "RequestId": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DescribeParameters接口查询MongoDB实例的参数配置信息。
    */ DescribeParameters(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中的Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "ConfigParameters": {
            "Parameter": {
                "ParameterDescription": string;
                "ParameterValue": string;
                "CheckingCode": string;
                "ForceRestart": boolean;
                "ModifiableStatus": boolean;
                "ParameterName": string;
            }[];
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
    * 调用DescribeDBInstancePerformance接口查询MongoDB实例性能数据。
    */ DescribeDBInstancePerformance(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 性能指标，取值详情请参见[性能参数表](~~64048~~)。
        * >如需传入多个指标使用英文逗号（,）分隔。
        * @example `MongoDB_DetailedSpaceUsage`
        */ "Key": string;
        /**
        * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-03-11T12:30Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-03-11T12:30Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID或Shard节点ID，可用于查询单个节点的性能情况。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        /**
        * 实例的节点角色ID，可通过[DescribeReplicaSetRole](~~62134~~)接口查询。
        * > 当**DBInstanceId**参数传入的是单节点实例ID或副本集实例ID时，本参数才可用。
        * @example `60xxxxx`
        */ "RoleId"?: string;
        /**
        * 节点角色，取值：
        * - Primary：主节点。
        * - Secondary：从节点。
        * > 当**DBInstanceId**参数传入的是单节点实例，本参数的取值仅支持**Primary**。
        * @example `Primary`
        */ "ReplicaSetRole"?: string;
    }): Promise<{
        "RequestId": string;
        "PerformanceKeys": {
            "PerformanceKey": {
                "Key": string;
                "PerformanceValues": {
                    "PerformanceValue": {
                        "Value": string;
                        "Date": string;
                    }[];
                };
                "Unit": string;
                "ValueFormat": string;
            }[];
        };
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeDBInstanceSSL接口查询MongoDB实例的SSL设置详情。
    */ DescribeDBInstanceSSL(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "SSLExpiredTime": string;
        "RequestId": string;
        "SSLStatus": string;
        "CertCommonName": string;
    }>;
    /**
    * 调用DescribeSlowLogRecords接口查询MongoDB实例运行出现的慢操作日志明细。
    */ DescribeSlowLogRecords(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        *  查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-02-24T12:10Z`
        */ "StartTime": string;
        /**
        *  查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-02-26T12:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        *  实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        *  Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        "SQLId"?: number;
        /**
        * 数据库名。
        * @example `mongodbtest`
        */ "DBName"?: string;
        /**
        *  每页记录数，取值范围：**30**~**100**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "LogRecords": {
                "ReturnRowCounts": number;
                "KeysExamined": string;
                "HostAddress": string;
                "SQLText": string;
                "ExecutionStartTime": string;
                "AccountName": string;
                "QueryTimes": number;
                "DocsExamined": string;
                "DBName": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
        "Engine": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DescribeRunningLogRecords接口查询MongoDB实例的运行日志。
    */ DescribeRunningLogRecords(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        *  查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-01-01T12:10Z`
        */ "StartTime": string;
        /**
        *  查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
        * @example `2019-01-02T12:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        "SQLId"?: number;
        /**
        * 数据库名。
        * @example `mongodbtest`
        */ "DBName"?: string;
        /**
        * 实例中节点的角色。取值：
        * - **primary**：主节点。
        * - **secondary**：从节点。
        * > 当**NodeId**参数传入的是Mongos节点ID时，**RoleType**取值只能为**primary**。
        * @example `primary`
        */ "RoleType"?: string;
        /**
        *  每页记录数，取值范围为**30**~**100**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "LogRecords": {
                "Category": string;
                "CreateTime": string;
                "ConnInfo": string;
                "Content": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAuditFiles接口查询MongoDB实例的审计日志文件。
    */ DescribeAuditFiles(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        *  分片集群实例中Mongos节点ID或Shard节点ID。
        * > 如不传入则返回所有Mongos节点和Shard节点的审计日志。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        /**
        * 每页记录数，取值： **30、50、100**，默认值为**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "LogFile": {
                "LogStartTime": string;
                "LogEndTime": string;
                "LogStatus": string;
                "FileID": number;
                "LogDownloadURL": string;
                "LogSize": number;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用AllocatePublicNetworkAddress接口为MongoDB实例申请公网连接地址。
    */ AllocatePublicNetworkAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID、Shard节点ID或ConfigServer节点ID。
        * > - 当**DBInstanceId**传入的是分片集群实例ID时，本参数才可用。
        * - 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Mongos/Shard/ConfigServer节点ID。
        * @example `s-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UpgradeDBInstanceKernelVersion接口升级MongoDB实例的数据库小版本。
    */ UpgradeDBInstanceKernelVersion(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceMaintainTime接口修改MongoDB实例的可维护时间。
    */ ModifyDBInstanceMaintainTime(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 实例可运维时间段的开始时间，格式为<i>HH:mm</i>Z（UTC时间）。
        * @example `01:00Z`
        */ "MaintainStartTime": string;
        /**
        * 实例可运维时间段的结束时间，格式为<i>HH:mm</i>Z（UTC时间）。
        * > 开始时间至结束时间的范围须为1小时，例如**MaintainStartTime**为**01:00Z**，则**MaintainEndTime**必须为**02:00Z**。
        * @example `02:00Z`
        */ "MaintainEndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAuditRecords接口查询MongoDB实例的审计日志。
    */ DescribeAuditRecords(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2019-03-13T12:11:14Z`
        */ "StartTime": string;
        /**
        * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * @example `2019-03-13T13:11:14Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID或Shard节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
        /**
        * 数据库名，默认为所有数据库。
        * @example `testdatabase`
        */ "Database"?: string;
        /**
        * 数据库账号，默认为所有账号。
        * @example `root`
        */ "User"?: string;
        /**
        * 审计记录返回的展示类型，取值：
        * - **File**：触发审计日志文件的生成，若传入这个值，只返回公共参数，需再调用[DescribeAuditFiles](~~62162~~)获取文件的下载地址。
        * - **Stream**：返回数据流。
        * 默认为**Stream**。
        * @example `Stream`
        */ "Form"?: string;
        /**
        * 关键字查询，多个关键字以空格分隔，不超过10个关键字。
        * @example `slow`
        */ "QueryKeywords"?: string;
        /**
        * 每页记录数，取值：**30**、**50**、**100**，默认值为**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 页码，大于0，且不超过Integer的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "Items": {
            "SQLRecord": {
                "TotalExecutionTimes": number;
                "Syntax": string;
                "HostAddress": string;
                "ExecuteTime": string;
                "ThreadID": string;
                "AccountName": string;
                "DBName": string;
            }[];
        };
        "PageNumber": number;
        "TotalRecordCount": number;
        "RequestId": string;
        "PageRecordCount": number;
    }>;
    /**
    * 调用DeleteDBInstance接口释放MongoDB实例。
    */ DeleteDBInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateShardingDBInstance接口创建或者克隆MongoDB分片集群实例。
    */ CreateShardingDBInstance(query: {
        /**
        * 地域ID，您可以可调用[DescribeRegions](~~61933~~)查询可用的地域，使用此参数指定实例创建的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 数据库引擎，取值：**MongoDB**。
        * @example `MongoDB`
        */ "Engine": string;
        /**
        * 数据库版本号，取值：**3.4**或**4.0**。
        * > - 关于存储引擎与版本的选择约束请参考[版本与存储引擎](~~61906~~)。
        * - 调用本接口用于克隆实例时，该值必须与源实例保持一致。
        * @example `4.0`
        */ "EngineVersion": string;
        /**
        * root账号的密码。
        * <ul>
        * <li>密码由大写字母、小写字母、数字、特殊字符中的至少三种组成，特殊字符为!#$%^&amp;*()_+-=</li>
        * <li>密码长度为8-32位。</li>
        * </ul>
        * @example `Alitest!159`
        */ "AccountPassword"?: string;
        "OwnerId"?: number;
        /**
        * 可用区ID，您可以通过[DescribeRegions](~~61933~~)查询可用的可用区，使用此参数指定实例创建的可用区。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        "Mongos"?: string[];
        "ReplicaSet"?: string[];
        "ConfigServer"?: string[];
        /**
        * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * @example `测试数据库1`
        */ "DBInstanceDescription"?: string;
        /**
        * - 实例的IP白名单，以逗号隔开，不可重复，最多1000个IP。
        * - 支持格式：%，0.0.0.0/0，10.23.12.24（IP）或者10.23.12.24/24（CIDR模式，无类域间路由，/24表示地址前缀的长度，范围为1~32。
        * > %和0.0.0.0/0表示任何IP地址都可以访问实例的数据库，属于高危设置，请谨慎设置。
        * @example `10.23.12.24/24`
        */ "SecurityIPList"?: string;
        /**
        * 实例的付费类型，取值：
        * - **PostPaid**：后付费（按量付费）。
        * - **PrePaid**：预付费（包年包月）。
        * 默认付费类型为按量付费。
        * > 当本参数值为**PrePaid**时，还需要传入**Period**参数。
        * @example `PrePaid`
        */ "ChargeType"?: string;
        /**
        * 实例的购买时长，单位为月。取值范围为：**1**~**9**，**12**，**24**，**36**。
        * > 当**ChargeType**参数值为**PrePaid**时，本参数才可用。
        * @example `1`
        */ "Period"?: number;
        /**
        * 实例的网络类型。 默认创建经典网络类型的实例。
        * - **CLASSIC**：经典网络。
        * - **VPC**：专有网络。
        * > 当本参数值为**VPC**时，还需要传入**VpcId**参数和**VSwitchId**参数。
        * @example `VPC`
        */ "NetworkType"?: string;
        /**
        * 专有网络（VPC）ID。
        * > 当**NetworkType**参数值为**VPC**时，本参数才可用。
        * @example `vpc-bpxxxxxxxx`
        */ "VpcId"?: string;
        /**
        * 虚拟交换机ID。
        * > 当**NetworkType**参数值为**VPC**时，本参数才可用。
        * @example ` vsw-bpxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 源实例ID，只有调用本接口用于克隆实例时才能传入该参数，且必须和**RestoreTime**参数一同传入。
        * @example `dds-bpxxxxxxxx`
        */ "SrcDBInstanceId"?: string;
        /**
        * 克隆实例时所恢复的时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * 只有调用本接口用于克隆实例时才能传入该参数，且必须和**SrcDBInstanceId**参数一同传入。
        * > 支持选择7天内的任一时间点进行克隆。
        * @example `2019-03-08T02:30:25Z`
        */ "RestoreTime"?: string;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 实例使用的存储引擎，取值为**WiredTiger**，**RocksDB**，**TerarkDB**，默认值为**WiredTiger**。关于存储引擎与版本的选择约束请参考[版本与存储引擎](~~61906~~)。
        * > 调用本接口用于克隆实例时，该值必须与源实例保持一致。
        * @example `WiredTiger`
        */ "StorageEngine"?: string;
        /**
        * 设置实例是否自动续费，取值：
        * - **true**：自动续费。
        * - **false**：不自动续费，即手动续费。
        * 默认为手动续费。
        * > 当**ChargeType**参数值为**PrePaid**时，本参数才可用。
        * @example `true`
        */ "AutoRenew"?: string;
    }): Promise<{
        "DBInstanceId": string;
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用CreateNode接口为MongoDB分片集群实例增加Shard节点或Mongos节点。
    */ CreateNode(query: {
        "RegionId"?: string;
        /**
        * Shard节点或Mongos节点的规格，规格详情请参见[实例规格表](~~57141~~)。
        * @example `dds.shard.mid`
        */ "NodeClass": string;
        /**
        * Node的类型，取值：
        * - **shard**：Shrad节点。
        * - **mongos**：Mongos节点。
        * @example `shard`
        */ "NodeType": string;
        "OwnerId"?: number;
        /**
        * 分片集群实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * Node的磁盘空间，当**NodeType**参数取值为**Shard**时该参数可用，且该参数必须传入。
        * - 取值范围：**10**~**2000**，单位为GB。
        * - 每10GB进行递增。
        * @example `10`
        */ "NodeStorage"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 请求来源，取值：
        * - **OpenApi**：请求来源为OpenApi。
        * - **mongo_buy**：请求来源为控制台。
        * @example `OpenApi`
        */ "FromApp"?: string;
        /**
        * 是否自动付费。取值：
        * - **true**：自动付费，请确保账号有足够的余额。
        * - **false**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用**>**进入费用中心**，在**订单管理**页面找到目标订单进行支付。
        * 默认值为：**true**。
        * > 仅包年包月的实例可传入该参数。
        * @example `true`
        */ "AutoPay"?: boolean;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyNodeSpec接口变更MongoDB分片集群实例中节点的规格和存储空间。
    */ ModifyNodeSpec(query: {
        "RegionId"?: string;
        /**
        * 分片集群实例中Shard节点ID或Mongos节点ID，您可以通过调用[DescribeDBInstanceAttribute](~~61923~~)接口进行查询。
        * > 当传入的值为Shard节点ID时，还需要传入**NodeStorage**参数。
        * @example `d-bpxxxxxxxx`
        */ "NodeId": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * Shard节点或Mongos节点的规格，规格详情请参考[实例规格表](~~57141~~)。
        * > 本参数和**NodeStorage**参数两者必须传入一个。
        * @example `dds.shard.standard`
        */ "NodeClass"?: string;
        /**
        * 设置Shard节点的存储空间。
        * - 取值范围：**10**~**2000**，单位为GB。
        * - 每10GB进行递增。
        * >- 本参数和**NodeClass**参数两者必须传入一个。
        * - 当**NodeId**传入的值为Shard节点ID时，本参数才可用。
        * @example `20`
        */ "NodeStorage"?: number;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
        /**
        * 请求来源，取值：
        * - **OpenApi**：请求来源为OpenApi。
        * - **mongo_buy**：请求来源为控制台。
        * @example `OpenApi`
        */ "FromApp"?: string;
        /**
        * 是否自动付费。取值：
        * - **true**：自动付费，请确保账号有足够的余额。
        * - **false**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用**>进入**费用中心**，在**订单管理**找到目标订单进行支付。
        * 默认值为：**true**。
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 变更配置的生效时间，取值：
        * - **Immediately**：立即生效。
        * - **MaintainTime**：实例可运维时间段内生效。
        * 默认值为**Immediately**。
        * @example `Immediately`
        */ "EffectiveTime"?: string;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeShardingNetworkAddress接口查询MongoDB分片集群实例的连接信息。
    */ DescribeShardingNetworkAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID、Shard节点ID或ConfigServer节点ID。
        * > 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Mongos/Shard/ConfigServer节点ID。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "NetworkAddresses": {
            "NetworkAddress": {
                "NetworkType": string;
                "NodeId": string;
                "Port": string;
                "VPCId": string;
                "IPAddress": string;
                "VswitchId": string;
                "NetworkAddress": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceSpec接口变更MongoDB单节点或副本集实例的规格或存储空间。
    */ ModifyDBInstanceSpec(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例规格，详情请参考[实例规格表](~~57141~~)。
        * > 本参数和**DBInstanceStorage**参数两者中必须传入一项。
        * @example `dds.mongo.standard`
        */ "DBInstanceClass"?: string;
        /**
        * 实例的存储空间。
        * - 取值范围：**10**-**3000**，单位为GB，具体取值受实例规格约束，详情请参考[实例规格表](~~57141~~)。
        * - 每10GB递增。
        * > - 本参数和**DBInstanceClass**参数两者中必须传入一项。
        * - 仅按量付费的副本集实例支持降配存储空间，且存储空间必须大于当前已使用的存储空间。
        * @example `50`
        */ "DBInstanceStorage"?: string;
        /**
        * 变配类型，取值：
        * - **UPGRADE**：升级配置。
        * - **DOWNGRADE**：降级配置，默认为降级配置。
        * > 当实例付费方式为包年包月时，本参数才可用。
        * @example `UPGRADE`
        */ "OrderType"?: string;
        /**
        * 是否自动付费。取值：
        * - **true**：自动付费，请确保账号有足够的余额。
        * - **false**：控制台手动付费。具体操作为：登录控制台，在页面右上角选择**费用**>**进入费用中心**，在**订单管理**找到目标订单进行支付。
        * 默认值为：**true**。
        * @example `true`
        */ "AutoPay"?: boolean;
        "FromApp"?: string;
        /**
        * 业务信息。
        * @example `{“ActivityId":"000000000"}`
        */ "BusinessInfo"?: string;
        /**
        * 设置实例的节点个数。
        * - 副本集实例取值为**3，5，7**。
        * - 单节点实例取值固定为**1**。
        * @example `3`
        */ "ReplicationFactor"?: string;
        /**
        * 只读节点的个数，取值范围为**1**-**5**。
        * @example `1`
        */ "ReadonlyReplicas"?: string;
        /**
        *  优惠码，默认为：**youhuiquan_promotion_option_id_for_blank**。
        * @example `youhuiquan_promotion_option_id_for_blank`
        */ "CouponNo"?: string;
        /**
        * 变更配置的生效时间，取值：
        * - **Immediately**：立即生效。
        * - **MaintainTime**：在实例的可运维时间段内生效。
        * 默认为**Immediately**。
        * @example `Immediately`
        */ "EffectiveTime"?: string;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 该接口用于创建MongoDB副本集实例，同时也可用于克隆MongoDB副本集实例。
    */ CreateDBInstance(query: {
        "RegionId": string;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken": string;
        /**
        * 数据库引擎，取值：**MongoDB**。
        * @example `MongoDB`
        */ "Engine": string;
        /**
        * 数据库版本号，取值：**3.2**、**3.4**或**4.0**。
        * > 调用本接口用于克隆实例时，该值必须与源实例保持一致。
        * @example `4.0`
        */ "EngineVersion": string;
        /**
        * 实例规格，取值详情请参见[实例规格表](~~57141~~)。
        * @example `dds.mongo.standard`
        */ "DBInstanceClass": string;
        /**
        * 实例存储空间。
        * - 取值范围：**10**~**3000**，单位为GB。
        * - 每10GB递增。
        * > 具体取值受实例规格约束，详情请参考[实例规格表](~~57141~~)。
        * @example `10`
        */ "DBInstanceStorage": number;
        "OwnerId"?: number;
        /**
        * 可用区ID，您可以通过[DescribeRegions](~~61933~~)查看可用的可用区，使用此参数指定实例创建的可用区。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
        * @example `测试数据库1`
        */ "DBInstanceDescription"?: string;
        /**
        * - 实例的IP白名单，以逗号隔开，不可重复，最多1000个IP。
        * - 支持格式：%，0.0.0.0/0，10.23.12.24（IP）或者10.23.12.24/24（CIDR模式，无类域间路由，/24表示地址前缀的长度，范围为1~32。
        * > %和0.0.0.0/0表示任何IP地址都可以访问实例的数据库，属于高危设置，请谨慎设置。
        * @example `10.23.12.24/24`
        */ "SecurityIPList"?: string;
        /**
        * root账号的密码。
        * <ul>
        * <li>密码由大写字母、小写字母、数字、特殊字符中的至少三种组成，特殊字符为!#$%^&amp;*()_+-=</li>
        * <li>密码长度为8-32位。</li>
        * </ul>
        * @example `Alitest!159`
        */ "AccountPassword"?: string;
        /**
        * 实例的付费类型，取值：
        * - **PostPaid**：后付费（按量付费）。
        * - **PrePaid**：预付费（包年包月）。
        * 默认付费类型为按量付费。
        * > 当本参数值为**PrePaid**时，还需要传入**Period**参数。
        * @example `PrePaid`
        */ "ChargeType"?: string;
        /**
        * 实例的购买时长，单位为月。取值范围为：**1**~**9**，**12**，**24**，**36**。
        * > 当**ChargeType**参数值为**PrePaid**时，本参数才可用。
        * @example `1`
        */ "Period"?: number;
        /**
        * 实例的网络类型，取值：
        * - **CLASSIC**：经典网络。
        * - **VPC**：专有网络。
        * 默认网络类型为经典网络。
        * > 当本参数值为**VPC**时，还需要传入**VpcId**参数和**VSwitchId**参数。
        * @example `VPC`
        */ "NetworkType"?: string;
        /**
        * 专有网络（VPC）ID。
        * > 当**NetworkType**参数值为**VPC**时，本参数才可用。
        * @example `vpc-bpxxxxxxxx`
        */ "VpcId"?: string;
        /**
        * 虚拟交换机ID。
        * > 当**NetworkType**参数值为**VPC**时，本参数才可用。
        * @example ` vsw-bpxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 源实例ID，只有调用本接口用于克隆实例时才能传入该参数，且必须和**BackupId**或**RestoreTime**参数一同传入。
        * @example `dds-bpxxxxxxxx`
        */ "SrcDBInstanceId"?: string;
        /**
        * 具体的备份集ID，只有调用本接口用于克隆实例时才能传入该参数，且必须和**SrcDBInstanceId**参数一同传入。
        * > 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份集ID。
        * @example `32994xxxx`
        */ "BackupId"?: string;
        /**
        * 克隆实例时所恢复的时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
        * > - 只有调用本接口用于克隆实例时才能传入该参数，且必须和**SrcDBInstanceId**、**BackupId**参数一同传入。
        * - 支持选择7天内的任一时间点进行克隆。
        * @example `2019-03-13T12:11:14Z`
        */ "RestoreTime"?: string;
        /**
        * 附加参数，业务信息。
        * @example `{“ActivityId":"000000000"}`
        */ "BusinessInfo"?: string;
        /**
        * 设置实例是否自动续费，取值：
        * - **true**：自动续费。
        * - **false**：不自动续费，即手动续费。
        * 默认为手动续费。
        * > 当**ChargeType**参数值为**PrePaid**时，本参数才可用。
        * @example `true`
        */ "AutoRenew"?: string;
        /**
        * 数据库名。
        * > 调用本接口用于克隆实例操作时，可传入该参数指定需要克隆的数据库，如不传入，则克隆实例的所有数据库。
        * @example `mongodbtest`
        */ "DatabaseNames"?: string;
        /**
        *  优惠码，默认为：**youhuiquan_promotion_option_id_for_blank**。
        * @example `youhuiquan_promotion_option_id_for_blank`
        */ "CouponNo"?: string;
        /**
        * 实例使用的存储引擎，取值为**WiredTiger**，**RocksDB**，**TerarkDB**，默认值为**WiredTiger**。关于存储引擎与版本的选择约束请参考[版本与存储引擎](~~61906~~)。
        * > 调用本接口用于克隆实例时，该值必须与源实例保持一致。
        * @example `WiredTiger`
        */ "StorageEngine"?: string;
        /**
        * 副本集节点个数，取值：**3**，**5**，**7**。默认值为**3**。
        * @example `3`
        */ "ReplicationFactor"?: string;
        /**
        * 创建只读节点的个数，取值范围为**1**-**5**。
        * > 默认不传入该参数，即默认不创建只读节点。
        * @example `1`
        */ "ReadonlyReplicas"?: string;
        /**
        * 资源组ID。
        * @example `rg-axxxxxxxx`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "DBInstanceId": string;
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyAccountDescription接口修改MongoDB实例中root账号的备注信息。
    */ ModifyAccountDescription(query: {
        "RegionId"?: string;
        /**
        * 待修改备注信息的账号名。
        * @example `root`
        */ "AccountName": string;
        /**
        * 设置账号的备注信息。
        * - 不能以http:// 或者 https:// 开头。
        * - 以中文、英文字母开头。
        * - 可以包含中文、英文字符、下划线（_）、连接号（-）和数字，长度为2~256个字符。
        * @example `superadmin`
        */ "AccountDescription": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ResetAccountPassword接口重置MongoDB实例中root账号的密码。
    */ ResetAccountPassword(query: {
        "RegionId"?: string;
        /**
        * 需要重置密码的账号，取值：**root**。
        * @example `root`
        */ "AccountName": string;
        /**
        * 重置后的密码，即修改后的密码。
        * <ul>
        * <li>密码由大写字母、小写字母、数字、特殊字符中的任意三种组成，特殊字符为!#$%^&amp;*()_+-=</li>
        * <li>密码长度为8-32位</li>
        * </ul>
        * @example `Ali!123456`
        */ "AccountPassword": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceDescription接口修改MongoDB实例名称。
    */ ModifyDBInstanceDescription(query: {
        "RegionId"?: string;
        /**
        * 实例名称。
        * > - 不能 http:// 或者 https:// 开头。
        * - 以中文、英文字母开头。
        * - 可以包含中文、英文字符、下划线（_）、连接号（-）和数字，字符长度2~256个字符。
        * @example `testdata`
        */ "DBInstanceDescription": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 如需修改分片集群实例中的Shard节点或Mongos节点的名称，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Shard节点ID或Mongos节点ID。
        * > 当**DBInstanceId**传入的是分片集群实例ID时，本参数才可用。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RestartDBInstance接口重启MongoDB实例。
    */ RestartDBInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Shard节点ID或Mongos节点ID。
        * > 当实例类型为分片集群实例时，如不传入本参数，则重启分片集群实例。
        * @example `d-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ReleasePublicNetworkAddress接口释放MongoDB实例的公网连接地址。
    */ ReleasePublicNetworkAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中Mongos节点ID、Shard节点ID或ConfigServer节点ID。
        * > - 当**DBInstanceId**传入的是分片集群实例ID时，本参数才可用。
        * - 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Mongos/Shard/ConfigServer节点ID。
        * @example `s-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceTDE接口修改MongoDB实例的透明数据加密TDE（Transparent Data Encryption）状态。
    */ ModifyDBInstanceTDE(query: {
        "RegionId"?: string;
        /**
        * TDE状态，取值： **enabled**，即开启TDE功能。
        * > TDE功能开启后不支持关闭，请谨慎开启。
        * @example `enabled`
        */ "TDEStatus": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 加密方式，取值：**AES-256-CBC**。
        * > 当**TEDStatus**参数取值为**enabled**时，本参数才可用。
        * @example `AES-256-CBC`
        */ "EncryptorName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceConnectionString接口修改MongoDB实例的连接地址。
    */ ModifyDBInstanceConnectionString(query: {
        "RegionId"?: string;
        /**
        * 当前连接地址，即待修改的连接地址。
        * @example `s-bpxxxxxxxx.mongodb.rds.aliyuncs.com`
        */ "CurrentConnectionString": string;
        /**
        * 新的连接地址，以小写字母开头，由字母、数字组成，长度为8~64个字符。
        * > 仅需传入连接地址的前缀部分，前缀以外的部分不可修改。
        * @example `aliyuntest111`
        */ "NewConnectionString": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例中的Mongos节点ID，每次调用仅能传入一个Mongos节点ID。
        * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
        * @example `s-bpxxxxxxxx`
        */ "NodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeKernelReleaseNotes接口查询MongoDB实例的小版本发布日志。
    */ DescribeKernelReleaseNotes(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 数据库小版本号，例如：**mongodb_20180522_0.4.8**。
        * - 如果传入该参数，返回大于该版本的版本号列表。
        * - 如果不传入该参数，返回所有版本号列表。
        * @example `mongodb_20180522_0.4.8`
        */ "KernelVersion"?: string;
    }): Promise<{
        "RequestId": string;
        "ReleaseNotes": {
            "ReleaseNote": {
                "KernelVersion": string;
                "ReleaseNote": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteNode接口删除MongoDB分片集群实例中的Shard节点或Mongos节点。
    */ DeleteNode(query: {
        "RegionId"?: string;
        /**
        * 待删除的Shard节点ID或Mongos节点ID，您可以通过[DescribeDBInstanceAttribute](~~61923~~)接口查询节点ID。
        * @example `s-bpxxxxxxxx`
        */ "NodeId": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskId": number;
    }>;
    /**
    * 调用DescribeReplicaSetRole接口查询MongoDB实例中的角色信息及连接信息。
    */ DescribeReplicaSetRole(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
        "DBInstanceId": string;
        "ReplicaSets": {
            "ReplicaSet": {
                "NetworkType": string;
                "ConnectionPort": string;
                "ReplicaSetRole": string;
                "ConnectionDomain": string;
                "ExpiredTime": string;
                "RoleId": string;
            }[];
        };
    }>;
    /**
    * 调用ModifyInstanceVpcAuthMode接口开启或关闭MongoDB实例的专有网络免密访问功能。
    */ ModifyInstanceVpcAuthMode(query: {
        /**
        * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 分片集群实例的Mongos节点ID。
        * > 实例类型为分片集群实例时，本参数才可用。
        * @example `s-bpxxxxxxxx`
        */ "NodeId"?: string;
        /**
        * 设置专有网络免密访问功能，取值：
        * - **Open**：开启专有网络免密访问。
        * - **Close**：关闭专有网络免密访问。
        * @example `Open`
        */ "VpcAuthMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDBInstanceTDEInfo接口查询MongoDB实例的透明数据加密TDE（Transparent Data Encryption）是否开启。
    */ DescribeDBInstanceTDEInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "TDEStatus": string;
        "RequestId": string;
    }>;
    /**
    * 调用UpgradeDBInstanceEngineVersion接口升级MongoDB实例的数据库版本。
    */ UpgradeDBInstanceEngineVersion(query: {
        "RegionId"?: string;
        /**
        * 升级的目标数据库版本，取值：**3.4**、**4.0**。
        * > 升级的目标数据库版本必须大于实例当前的数据库版本。
        * @example `4.0`
        */ "EngineVersion": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用MigrateAvailableZone接口迁移MongoDB实例的可用区。
    */ MigrateAvailableZone(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * > 如果实例的网络类型为专有网络，您还需要传入**Vswitch**参数。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 迁移的目标可用区ID。
        * > - 迁移的目标可用区和当前实例的可用区处于同一地域。
        * - 您可以通过调用[DescribeRegions](~~61933~~)接口查询可用区ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId": string;
        "OwnerId"?: number;
        /**
        * 迁移的目标可用区虚拟交换机ID。
        * > 当实例的网络类型为专有网络时，本参数才可用。
        * @example `vsw-bpxxxxxxxx`
        */ "Vswitch"?: string;
        /**
        * 迁移可用区的生效时间，取值：
        * - **Immediately**：立即生效。
        * - **MaintainTime**：在实例的可运维时间段内生效。
        * 默认为**Immediately**。
        * @example `Immediately`
        */ "EffectiveTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DestroyInstance接口销毁MongoDB实例。
    */ DestroyInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * > **InstanceId**参数与**DBInstanceId**参数作用相同，只需选择一个传入即可。
        * @example `dds-bpxxxxxxxx`
        */ "InstanceId"?: string;
        /**
        * 实例ID。
        * > **InstanceId**参数与**DBInstanceId**参数作用相同，只需选择一个传入即可。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId"?: string;
        /**
        * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
        * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAuditLogFilter接口查询MongoDB实例审计日志采集的日志类型。
    */ DescribeAuditLogFilter(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例中节点的角色，取值：
        * - **primary**：主节点。
        * - **secondary**：从节点。
        * @example `primary`
        */ "RoleType"?: string;
    }): Promise<{
        "Filter": string;
        "RoleType": string;
        "RequestId": string;
    }>;
    /**
    * 在为MongoDB实例执行单库恢复前，调用DescribeBackupDBs接口，查询指定的时间点或备份集内包含的数据库。
    */ DescribeBackupDBs(query: {
        "RegionId"?: string;
        /**
        * 待恢复数据的源实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "SourceDBInstance": string;
        "OwnerId"?: number;
        /**
        * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页可展示的记录数，取值： **30**、**50**、**100**，默认值为**30**。
        * @example `30`
        */ "PageSize"?: number;
        /**
        * 实例所需恢复的时间点，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
        * >
        * - 本参数可取值为7天内的任意时间，但是须早于当前时间，且晚于实例的创建时间。
        * - 本参数和**BackupId**参数两者中必须传入一项。
        * @example `2019-08-22T12:00:00Z`
        */ "RestoreTime"?: string;
        /**
        * 备份ID。
        * > - 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份ID。
        * - 本参数和**RestoreTime**参数两者中必须传入一项。
        * @example `5664xxxx`
        */ "BackupId"?: string;
    }): Promise<{
        "Databases": {
            "Database": {
                "DBName": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyAuditPolicy接口设置MongoDB实例的审计日志开关或日志存储时长。
    */ ModifyAuditPolicy(query: {
        "RegionId"?: string;
        /**
        * 审计日志状态，取值：
        * - **enable**：开启审计日志。
        * - **disabled**：关闭审计日志。
        * @example `enable`
        */ "AuditStatus": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 审计日志存储的天数。取值范围为**1**~**30**，默认为**30**。
        * @example `30`
        */ "StoragePeriod"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRoleZoneInfo接口查询MongoDB实例的各节点的角色和所属的可用区
    */ DescribeRoleZoneInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "ZoneInfos": {
            "ZoneInfo": {
                "RoleType": string;
                "NodeType": string;
                "InsName": string;
                "ZoneId": string;
                "RoleId": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRenewalPrice接口查询指定MongoDB实例续费一个月的价格。
    */ DescribeRenewalPrice(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 附加参数，业务信息。
        * @example `{“ActivityId":"000000000"}`
        */ "BusinessInfo"?: string;
        /**
        * 优惠码，默认为：**youhuiquan_promotion_option_id_for_blank**。
        * @example `youhuiquan_promotion_option_id_for_blank`
        */ "CouponNo"?: string;
    }): Promise<{
        "SubOrders": {
            "SubOrder": {
                "RuleIds": {
                    "RuleId": number[];
                };
                "OriginalAmount": number;
                "TradeAmount": number;
                "InstanceId": string;
                "DiscountAmount": number;
            }[];
        };
        "RequestId": string;
        "Order": {
            "RuleIds": {
                "RuleId": number[];
            };
            "OriginalAmount": number;
            "TradeAmount": number;
            "Coupons": {
                "Coupon": any[];
            };
            "DiscountAmount": number;
            "Currency": string;
        };
        "Rules": {
            "Rule": {
                "Name": string;
                "RuleDescId": number;
            }[];
        };
    }>;
    /**
    * 调用ModifyAuditLogFilter接口修改MongoDB实例审计日志的采集类型。
    */ ModifyAuditLogFilter(query: {
        "RegionId"?: string;
        /**
        * 设置审计日志的采集类型。
        * - **admin**：运维管控操作。
        * - **slow**：慢日志。
        * - **query**：查询操作。
        * - **insert**：插入操作。
        * - **update**：更新操作。
        * - **delete**：删除操作。
        * - **command**：协议命令。例如aggregate聚合方法。
        * @example `insert,query,update,delete`
        */ "Filter": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例中节点的角色，取值：
        * - **primary**：主节点。
        * - **secondary**：从节点。
        * @example `primary`
        */ "RoleType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSecurityIps接口查询MongoDB实例的IP白名单。
    */ DescribeSecurityIps(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "SecurityIpGroups": {
            "SecurityIpGroup": {
                "SecurityIpList": string;
                "SecurityIpGroupAttribute": string;
                "SecurityIpGroupName": string;
            }[];
        };
        "SecurityIps": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDBInstanceSSL接口修改MongoDB实例的SSL配置。
    */ ModifyDBInstanceSSL(query: {
        "RegionId"?: string;
        /**
        * 对SSL功能执行的操作，取值：
        * - **Open**：开启SSL加密。
        * - **Close**：关闭SSL加密。
        * - **Update**：更新SSL证书。
        *
        * @example `Open`
        */ "SSLAction": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySecurityIps接口修改MongoDB实例的IP白名单。
    */ ModifySecurityIps(query: {
        "RegionId"?: string;
        /**
        * IP白名单分组下的IP列表，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
        * - IP地址形式，例如：10.23.12.24。
        * - CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
        * @example `10.23.12.24/24,10.22.22.22`
        */ "SecurityIps": string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 修改方式，取值：
        * - **Cover**：覆盖原白名单。
        * - **Append**：追加白名单。
        * - **Delete**：删除该白名单。
        * 默认取值为**Cover**。
        * @example `Append`
        */ "ModifyMode"?: string;
        /**
        * 进行修改的IP白名单所属分组名称，默认为**default**分组。
        * @example `allowserver`
        */ "SecurityIpGroupName"?: string;
        /**
        * 白名单分组属性。支持大写字母、小写字母、数字，长度最大为120个字符。
        * 默认为空字符串。
        * @example `test`
        */ "SecurityIpGroupAttribute"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateBackup接口手动备份MongoDB实例。
    */ CreateBackup(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `d-bpxxxxxxxx`
        */ "DBInstanceId": string;
        /**
        * 实例的备份方式，取值：
        * - **Logical**：逻辑备份。
        * - **Physical**：物理备份，默认为物理备份。
        * >仅副本集和分片集群实例支持选择备份方式。单节点实例无需传入本参数，固定为快照备份。
        * @example `Logical`
        */ "BackupMethod"?: string;
    }): Promise<{
        "RequestId": string;
        "BackupId": string;
    }>;
    /**
    * 调用RestoreDBInstance接口恢复数据至当前MongoDB实例。
    */ RestoreDBInstance(query: {
        "RegionId"?: string;
        /**
        * 备份ID。
        * > 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份ID。
        * @example `11111111`
        */ "BackupId": number;
        "OwnerId"?: number;
        /**
        * 实例ID。
        * @example `dds-bpxxxxxxxx`
        */ "DBInstanceId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ZoneId"?: string;
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
    ListTagResources(query: {
        "RegionId": string;
        "ResourceType": string;
        "OwnerId"?: number;
        "ResourceId"?: string[];
        "Tag"?: string[];
        "NextToken"?: string;
    }): Promise<{}>;
    SwithcDBInstanceHA(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "NodeId"?: string;
        "SwitchType"?: number;
        "TargetInstanceId"?: number;
        "SourceInstanceId"?: number;
    }): Promise<{}>;
    TagResources(query: {
        "RegionId": string;
        "ResourceType": string;
        "ResourceId": string[];
        "Tag": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    UntagResources(query: {
        "RegionId": string;
        "ResourceType": string;
        "ResourceId": string[];
        "OwnerId"?: number;
        "TagKey"?: string[];
        "All"?: boolean;
    }): Promise<{}>;
    AllocateNodePrivateNetworkAddress(query: {
        "RegionId"?: string;
        "NodeId": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "ZoneId"?: string;
        "AccountName"?: string;
        "AccountPassword"?: string;
    }): Promise<{}>;
    CheckCloudResourceAuthorized(query: {
        "RegionId"?: string;
        "TargetRegionId": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    CheckRecoveryCondition(query: {
        "RegionId"?: string;
        "SourceDBInstance": string;
        "OwnerId"?: number;
        "DatabaseNames"?: string;
        "RestoreTime"?: string;
        "BackupId"?: string;
    }): Promise<{}>;
    CreateAccount(query: {
        "RegionId"?: string;
        "AccountName": string;
        "AccountPassword": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "AccountDescription"?: string;
    }): Promise<{}>;
    CreateStaticVerification(query: {
        "RegionId"?: string;
        "SourceInstanceId": string;
        "DestinationInstanceId": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    DescribeAccounts(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "AccountName"?: string;
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
    DescribeActiveOperationTaskType(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "IsHistory"?: number;
    }): Promise<{}>;
    DescribeAuditPolicy(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeAvailableEngineVersion(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeAvaliableTimeRange(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
        "NodeId"?: string;
    }): Promise<{}>;
    DescribeDBInstanceAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "Engine"?: string;
    }): Promise<{}>;
    DescribeDBInstanceMonitor(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    DescribeDBInstances(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "DBInstanceId"?: string;
        "ReplicationFactor"?: string;
        "DBInstanceDescription"?: string;
        "ExpireTime"?: string;
        "DBInstanceStatus"?: string;
        "DBInstanceType"?: string;
        "DBInstanceClass"?: string;
        "Engine"?: string;
        "EngineVersion"?: string;
        "NetworkType"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "ChargeType"?: string;
        "ZoneId"?: string;
        "Expired"?: string;
        "Tag"?: string[];
    }): Promise<{}>;
    DescribeInstanceAutoRenewalAttribute(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "DBInstanceId"?: string;
        "DBInstanceType"?: string;
        "PageSize"?: string;
        "PageNumber"?: string;
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
    DescribeReplicationGroup(query: {
        "RegionId"?: string;
        "SourceInstanceId": string;
        "OwnerId"?: number;
        "ReplicationGroupId": string;
        "DestinationInstanceIds"?: string;
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
    DescribeVerificationList(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "ReplicaId": string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    EvaluateFailOverSwitch(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    MigrateToOtherZone(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "ZoneId": string;
        "OwnerId"?: number;
        "EffectiveTime"?: string;
        "VSwitchId"?: string;
    }): Promise<{}>;
    ModifyActiveOperationTask(query: {
        "RegionId"?: string;
        "SwitchTime": string;
        "OwnerId"?: number;
        "Ids": string;
    }): Promise<{}>;
    ModifyDBInstanceMonitor(query: {
        "RegionId"?: string;
        "Granularity": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    ModifyDBInstanceNetExpireTime(query: {
        "RegionId"?: string;
        "ClassicExpendExpiredDays": number;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "ConnectionString"?: string;
    }): Promise<{}>;
    ModifyGuardDomainMode(query: {
        "RegionId"?: string;
        "DomainMode": string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    ModifyInstanceAutoRenewalAttribute(query: {
        "RegionId"?: string;
        "AutoRenew": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "Duration"?: string;
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
    ReleaseNodePrivateNetworkAddress(query: {
        "RegionId"?: string;
        "NodeId": string;
        "NetworkType": string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    ReleaseReplica(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ReplicaId": string;
    }): Promise<{}>;
    RenewDBInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "ClientToken"?: string;
        "Period"?: number;
        "AutoPay"?: boolean;
        "BusinessInfo"?: string;
        "CouponNo"?: string;
    }): Promise<{}>;
    Sample(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
    }): Promise<{}>;
    SwitchDBInstanceHA(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DBInstanceId": string;
        "NodeId"?: string;
        "SwitchType"?: number;
        "TargetInstanceId"?: number;
        "SourceInstanceId"?: number;
        "RoleIds"?: string;
    }): Promise<{}>;
    TransformToPrePaid(query: {
        "RegionId"?: string;
        "Period": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "AutoPay"?: boolean;
        "FromApp"?: string;
        "BusinessInfo"?: string;
        "AutoRenew"?: string;
        "CouponNo"?: string;
    }): Promise<{}>;
}
export default DDS;
