interface EMR {
    /**
    * 调用 ModifyFlowJob 接口修改数据开发作业
    */ ModifyFlowJob(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 作业ID。
        * @example `FJ-BCCAE48B90CCB37B`
        */ "Id": string;
        /**
        * 作业的名称。
        * @example `my_shell_job`
        */ "Name"?: string;
        /**
        * 作业的描述。
        * @example `这是一个数据开发作业描述`
        */ "Description"?: string;
        /**
        * 失败策略，支持：
        * - CONTINUE（跳过）。
        * - STOP（停止工作流）。
        * @example `CONTINUE`
        */ "FailAct"?: string;
        /**
        * 最大重试次数，0 - 5。
        * @example `5`
        */ "MaxRetry"?: number;
        /**
        * 重试间隔 0-300（秒）。
        * @example `200`
        */ "RetryInterval"?: number;
        /**
        * 作业内容。
        * @example `ls -l`
        */ "Params"?: string;
        /**
        * 参数设置。
        * @example `{"date":"${yyyy-MM-dd}"}`
        */ "ParamConf"?: string;
        "CustomVariables"?: string;
        /**
        * 环境变量设置。
        * @example `{"key":"value"}`
        */ "EnvConf"?: string;
        /**
        * 运行配置：
        * - priority：优先级。
        * - userName：提交作业的Linux用户。
        * - memory：内存，单位为MB。
        * - cores：核数。
        * @example `{"priority":1,"userName":"hadoop","memory":2048,"cores":1}`
        */ "RunConf"?: string;
        /**
        * 监控配置，只有**SPARK_STREAMING**类型作业支持。
        * @example `{"inputs":[{"type":"KAFKA","clusterId":"C-1234567","topics":"kafka_topic","consumer.group":"kafka_consumer_group"}],"outputs":[{"type":"KAFKA","clusterId":"C-1234567","topics":"kafka_topic"}]}`
        */ "MonitorConf"?: string;
        /**
        * 模型模式，支持：YARN、LOCAL。
        * - YARN：将作业包装成一个launcher提交至YARN中执行。
        *  - LOCAL：作业直接在机器上以进程方式运行。
        * @example `YARN`
        */ "Mode"?: string;
        "ResourceList"?: string[];
        /**
        * 集群ID。
        * @example `C-A23BD131A862F184`
        */ "ClusterId"?: string;
        "AlertConf"?: string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 ModifyFlowProject 接口修改数据开发项目
    */ ModifyFlowProject(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 项目名称。
        * @example `my_project`
        */ "Name"?: string;
        /**
        * 项目描述。
        * @example `my flow description`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "Data": string;
    }>;
    /**
    * 调用 SuspendFlow 接口暂停工作流
    */ SuspendFlow(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 工作流实例ID。
        * @example `FI-9DDAAA3ADA5F6FA2`
        */ "FlowInstanceId": string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 SubmitFlow 接口提交运行工作流。
    */ SubmitFlow(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `257A173659F59685`
        */ "ProjectId": string;
        /**
        * 工作流ID。
        * @example `F-7A39731FE7196358`
        */ "FlowId": string;
        /**
        * 配置信息 {"key":"value"} 格式，其中 cyctime 表示实际调度运行的时间（长整型时间戳）。
        * @example `{"cyctime":"1542783967503"}`
        */ "Conf"?: string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 RerunFlow 接口重跑工作流实例，要求工作流实例已经结束。
    */ RerunFlow(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 工作流实例ID。
        * @example `FI-9DDAAA3ADA5F6FA2`
        */ "FlowInstanceId": string;
        /**
        * 是否只重跑失败节点。
        * @example `true`
        */ "ReRunFail"?: boolean;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 ResumeFlow 接口恢复暂停的工作流
    */ ResumeFlow(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 工作流实例ID。
        * @example `FI-9DDAAA3ADA5F6FA2`
        */ "FlowInstanceId": string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 ListFlowClusterAllHosts 接口查询给定集群可在项目设置中设置到白名单中的主机列表， 目前支持 master 和 gateway 节点。
    */ ListFlowClusterAllHosts(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目 ID
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 集群 ID
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
    }): Promise<{
        "RequestId": string;
        "HostList": {
            "Host": {
                "Status": string;
                "Role": string;
                "SerialNumber": string;
                "PublicIp": string;
                "PrivateIp": string;
                "Memory": number;
                "Cpu": number;
                "HostInstanceId": string;
                "HostId": string;
                "HostName": string;
            }[];
        };
    }>;
    /**
    * 调用 ModifyFlowForWeb 接口，修改带有图形信息的工作流
    */ ModifyFlowForWeb(query: {
        /**
        * 区域 ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目 ID。
        * @example `FP-257A173659F5****`
        */ "ProjectId": string;
        /**
        * 工作流 ID。
        * @example `F-7A39731FE719****`
        */ "Id": string;
        /**
        * 图形信息。
        * @example `{"nodes":[{"id":"48d474ea","index":0,"spmAnchorId":"0.0.0.i0.766645eb2cmNtQ","attribute":{"type":"START"},"shape":"startControlNode","type":"node","y":250,"size":"80*34","x":500},{"id":"7ba480b3","index":1,"spmAnchorId":"5176.8250060.0.i19.771e28d0IPNQGE","attribute":{"jobType":"SHELL","jobId":"FJ-7BE1062897B19D25","type":"JOB"},"config":{"hostName":""},"label":"fail_job","shape":"shellJobNode","type":"node","y":398.5,"size":"170*34","x":470.5},{"id":"33202d60","index":2,"spmAnchorId":"5176.8250060.0.i23.771e28d0IPNQGE","attribute":{"type":"END"},"shape":"endControlNode","type":"node","y":562.5,"size":"80*34","x":430.5}],"edges":[{"id":"28167ea0","index":3,"source":"48d474ea","sourceAnchor":0,"target":"7ba480b3","targetAnchor":0},{"id":"e8d5ff52","index":4,"source":"7ba480b3","sourceAnchor":1,"target":"33202d60","targetAnchor":0}]}`
        */ "Graph": string;
        /**
        * 工作流名称， 长度限制为 64 个字符 同一个项目中不允许重名。
        * @example `my_flow`
        */ "Name"?: string;
        /**
        * 工作流状态， 支持STOP_SCHEDULE、UNDER_SCHEDULE。
        * @example `STOP_SCHEDULE`
        */ "Status"?: string;
        /**
        * 工作流描述，长度限制为 256 个字符。
        * @example `这是一个工作流描述`
        */ "Description"?: string;
        /**
        * 是否周期调度。
        * @example `true`
        */ "Periodic"?: boolean;
        /**
        * 调度生效时间， 长整型时间戳， 例如：System.currentTimeMillis() 必须小于 EndSchedule；当 CronExpr 不为空时， 此项必填。
        * @example `1538017814000`
        */ "StartSchedule"?: number;
        /**
        * 调度失效时间，长整型时间戳，例如: System.currentTimeMillis()。
        * @example `1538018814000`
        */ "EndSchedule"?: number;
        /**
        * 时间周期调度的 cron 表达式，请参考  [A Cron Expressions](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm)。
        * @example `0 0 0-23/1 * * ?`
        */ "CronExpr"?: string;
        /**
        * 是否通过集群模板创建集群， true 表示通过集群模板创建集群， ClusterId 为集群模板 ID(CT-xxx)，否则为已有集群 ID（C-xxx）。
        * @example `false`
        */ "CreateCluster"?: boolean;
        /**
        * 集群 ID。
        * @example `A23BD131A862****`
        */ "ClusterId"?: string;
        /**
        * 指定运行的机器信息，格式为 emr-header-1.cluster-123456。
        * @example `emr-header-1.cluster-123456`
        */ "HostName"?: string;
        /**
        * 报警通知配置， eventId 目前支持 EMR-210401001(工作流失败报警)， EMR-110401002(工作流成功通知)，EMR-110401015(工作流节点失败报警)。
        * @example `{"items":[{"enable":true,"eventId":"EMR-210401001","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401015","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401002","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]}]}`
        */ "AlertConf"?: string;
        /**
        * 报警用户组信息。
        * @example `已过期`
        */ "AlertUserGroupBizId"?: string;
        /**
        * 报警钉钉群信息。
        * @example `已过期`
        */ "AlertDingDingGroupBizId"?: string;
        /**
        * 依赖的父工作流列表。
        * @example `[F-123456]`
        */ "ParentFlowList"?: string;
        /**
        * 父目录 ID。
        * @example `FC-F2495319DA05****`
        */ "ParentCategory"?: string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 ListFlowProject 接口查询项目列表
    */ ListFlowProject(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-7A1018ADE9179EE1`
        */ "ProjectId"?: string;
        /**
        * 名称。
        * @example `my_project`
        */ "Name"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "Projects": {
            "Project": {
                "GmtCreate": number;
                "Description": string;
                "UserId": string;
                "GmtModified": number;
                "Id": string;
                "Name": string;
            }[];
        };
    }>;
    /**
    * 调用 ListFlowCluster 接口查询项目中可用的集群列表
    */ ListFlowCluster(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-5D55DA9DEDF22ED3`
        */ "ProjectId": string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "PageNumber": number;
        "Clusters": {
            "ClusterInfo": {
                "Status": string;
                "Type": string;
                "CreateResource": string;
                "ChargeType": string;
                "OrderTaskInfo": {};
                "CreateTime": number;
                "FailReason": {};
                "Id": string;
                "HasUncompletedOrder": boolean;
                "RunningTime": number;
                "Name": string;
            }[];
        };
    }>;
    /**
    * 调用 ListFlowClusterAll 接口查询数据开发可用的集群列表
    */ ListFlowClusterAll(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "PageNumber": number;
        "Clusters": {
            "ClusterInfo": {
                "Status": string;
                "Type": string;
                "CreateResource": string;
                "ChargeType": string;
                "OrderTaskInfo": {};
                "CreateTime": number;
                "FailReason": {};
                "Id": string;
                "HasUncompletedOrder": boolean;
                "RunningTime": number;
                "Name": string;
            }[];
        };
    }>;
    /**
    * 调用 SubmitFlowJob 接口提交运行作业，每次只允许存在一个正在运行的实例。
    */ SubmitFlowJob(query: {
        /**
        * 集群ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 作业ID。
        * @example `FJ-1A2FB31D82954C64`
        */ "JobId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 工作流运行所在的机器**hostName**。支持**Master**和**Gateway**机器。**hostname**格式为**emr-header-1.cluster-12345**。可登陆机器用**hostname**命令查看对应的值。
        * @example `emr-header-1.cluster-12345`
        */ "HostName"?: string;
        /**
        * 配置参数信息：{"key1":"value1"}。**key**为**params**的参数值会覆盖实际作业中运行的内容。
        * @example `{"key":"value"}`
        */ "Conf"?: string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 ListFlowProjectUser 接口查询项目用户列表
    */ ListFlowProjectUser(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "Users": {
            "User": {
                "UserName": string;
                "OwnerId": string;
                "ProjectId": string;
            }[];
        };
    }>;
    /**
    * 调用 ListFlowNodeInstanceContainerStatus 接口查询节点实例的容器状态详情
    */ ListFlowNodeInstanceContainerStatus(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目 ID
        * @example `7A1018ADE9179EE1`
        */ "ProjectId": string;
        /**
        * 节点实例 ID
        * @example `FNI-FE4BD156E939CF1F`
        */ "NodeInstanceId": string;
        /**
        * 页码
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "ContainerStatusList": {
            "ContainerStatus": {
                "Status": string;
                "ContainerId": string;
                "ApplicationId": string;
                "HostName": string;
            }[];
        };
    }>;
    /**
    * 调用 ListFlowNodeSqlResult 接口，查询节点实例 sql 结果
    */ ListFlowNodeSqlResult(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-7A1018ADE917****`
        */ "ProjectId": string;
        /**
        * 节点实例ID。
        * @example `FE4BD156E939****`
        */ "NodeInstanceId": string;
        /**
        * 第几个SQL结果。
        * @example `0`
        */ "SqlIndex"?: number;
        /**
        * 偏移。
        * @example `0`
        */ "Offset"?: number;
        /**
        * 长度。
        * @example `100`
        */ "Length"?: number;
    }): Promise<{
        "RowList": {
            "Row": {
                "RowItemList": {
                    "rowItem": string[];
                };
                "RowIndex": number;
            }[];
        };
        "RequestId": string;
        "HeaderList": {
            "Header": string[];
        };
        "End": boolean;
    }>;
    /**
    * 调用 ListFlowProjectClusterSetting 接口查询项目集群设置列表
    */ ListFlowProjectClusterSetting(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-ED2F3E844FE383AA`
        */ "ProjectId": string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "ClusterSettings": {
            "ClusterSetting": {
                "DefaultUser": string;
                "GmtCreate": number;
                "ClusterId": string;
                "ProjectId": string;
                "GmtModified": number;
                "ClusterName": string;
                "HostList": {
                    "Host": any[];
                };
                "UserList": {
                    "User": any[];
                };
                "QueueList": {
                    "Queue": any[];
                };
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
    }>;
    /**
    * 调用 ListFlowClusterHost 接口查询集群可提交作业的客户端列表
    */ ListFlowClusterHost(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
    }): Promise<{
        "RequestId": string;
        "HostList": {
            "Host": {
                "Status": string;
                "Role": string;
                "SerialNumber": string;
                "PublicIp": string;
                "PrivateIp": string;
                "Memory": number;
                "Cpu": number;
                "HostInstanceId": string;
                "HostId": string;
                "HostName": string;
            }[];
        };
    }>;
    /**
    * 调用 DescribeFlowProject 接口，查询项目详情
    */ DescribeFlowProject(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-5D55DA9DEDF2****`
        */ "ProjectId": string;
    }): Promise<{
        "code": string;
        "data": {
            "GmtCreate": number;
            "Description": string;
            "RequestId": string;
            "UserId": string;
            "GmtModified": number;
            "Id": string;
            "Name": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ListFlow 接口查询工作流列表
    */ ListFlow(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目 ID
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId"?: string;
        /**
        * 作业 ID
        * @example `FJ-F32FB31D82954C64`
        */ "JobId"?: string;
        /**
        * 工作流名称
        * @example `my_flow`
        */ "Name"?: string;
        /**
        * 工作流 ID
        * @example `F-A32FB31D82954C64`
        */ "Id"?: string;
        /**
        * 集群 ID
        * @example `C-F32FB31D82954C64`
        */ "ClusterId"?: string;
        /**
        * 状态：STOP_SCHEDULE(停止调度)，UNDER_SCHEDULE(调度中)
        * @example `STOP_SCHEDULE`
        */ "Status"?: string;
        /**
        * 是否调度
        * @example `true`
        */ "Periodic"?: boolean;
        /**
        * 页码
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页查询数量
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "Flow": {
            "Flow": {
                "StartSchedule": number;
                "Status": string;
                "CategoryId": string;
                "Description": string;
                "ClusterId": string;
                "GmtModified": number;
                "ProjectId": string;
                "Periodic": boolean;
                "CronExpr": string;
                "Name": string;
                "Type": string;
                "GmtCreate": number;
                "Id": string;
                "EndSchedule": number;
                "HostName": string;
                "CreateCluster": boolean;
            }[];
        };
    }>;
    /**
    * 调用ListFlowJob接口查询作业列表。
    */ ListFlowJob(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F5****`
        */ "ProjectId": string;
        /**
        * 作业ID。
        * @example `FJ-BCCAE48B90CCB37B`
        */ "Id"?: string;
        /**
        * 作业名称。
        * @example `my_shell_job`
        */ "Name"?: string;
        /**
        * 作业类型。目前支持：MR、SPARK、HIVE_SQL、HIVE、PIG、SQOOP、SPARK_SQL、SPARK_STREAMING、SHELL。
        * @example `SHELL`
        */ "Type"?: string;
        /**
        * 是否为临时查询。
        * @example `false`
        */ "Adhoc"?: boolean;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "JobList": {
            "Job": {
                "FailAct": string;
                "CategoryId": string;
                "Description": string;
                "GmtModified": number;
                "Params": string;
                "MaxRetry": number;
                "Name": string;
                "ResourceList": {
                    "Resource": any[];
                };
                "Type": string;
                "GmtCreate": number;
                "Adhoc": boolean;
                "RetryInterval": number;
                "Id": string;
            }[];
        };
    }>;
    /**
    * 调用 KillFlowJob 接口停止作业实例
    */ KillFlowJob(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-3535FE0BE5224A47`
        */ "ProjectId": string;
        /**
        * 节点实例ID。
        * @example `FJI-9DDAAA3ADA5F6FA2`
        */ "JobInstanceId": string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 DescribeFlowProjectClusterSetting 接口，查询项目集群设置详情
    */ DescribeFlowProjectClusterSetting(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-ED2F3E844FE3****`
        */ "ProjectId": string;
        /**
        * 集群ID。
        * @example `C-DCEE11B49C8F****`
        */ "ClusterId": string;
    }): Promise<{
        "code": string;
        "data": {
            "DefaultUser": string;
            "GmtCreate": number;
            "RequestId": string;
            "DefaultQueue": string;
            "ClusterId": string;
            "ProjectId": string;
            "GmtModified": number;
            "HostList": {
                "Host": string[];
            };
            "UserList": {
                "User": any[];
            };
            "QueueList": {
                "Queue": any[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ListFlowJobHistory 接口查询作业的运行实例列表
    */ ListFlowJobHistory(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 作业ID。
        * @example `FJ-BCCAE48B90CCB37B`
        */ "Id"?: string;
        "StatusList"?: string[];
        /**
        * 作业类型。
        * @example `SHELL`
        */ "JobType"?: string;
        /**
        * 作业实例ID。
        * @example `FJI-BCCAE48B90CCB37B`
        */ "InstanceId"?: string;
        /**
        * 查询时间范围。
        * @example `{"type":"range","from":1564416000000,"to":1567008000000}`
        */ "TimeRange"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页查询数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "NodeInstances": {
            "NodeInstance": {
                "FailAct": string;
                "Status": string;
                "EndTime": number;
                "ClusterId": string;
                "ExternalId": string;
                "pending": boolean;
                "JobName": string;
                "GmtModified": number;
                "StartTime": number;
                "ProjectId": string;
                "MaxRetry": number;
                "ParamConf": string;
                "ExternalStatus": string;
                "GmtCreate": number;
                "JobType": string;
                "ExternalInfo": string;
                "Retries": number;
                "RetryInterval": number;
                "Id": string;
                "HostName": string;
                "JobId": string;
            }[];
        };
    }>;
    /**
    * 调用 DescribeFlowJob 接口查询作业信息
    */ DescribeFlowJob(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 作业ID。
        * @example `FJ-BCCAE48B90CCB37B`
        */ "Id": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
    }): Promise<{
        "FailAct": string;
        "CategoryId": string;
        "Description": string;
        "RequestId": string;
        "GmtCreate": number;
        "GmtModified": number;
        "Params": string;
        "MaxRetry": number;
        "Name": string;
        "Type": string;
        "ResourceList": {
            "Resource": any[];
        };
        "RetryInterval": number;
        "Id": string;
    }>;
    /**
    * 调用 ListFlowInstance 接口查询工作流实例列表。
    */ ListFlowInstance(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-7A1018ADE9179EE1`
        */ "ProjectId": string;
        /**
        * 已过期。
        * @example `x`
        */ "Id"?: string;
        /**
        * 工作流ID。
        * @example `F-1B4018ADE9179EE1`
        */ "FlowId"?: string;
        /**
        * 工作流名称。
        * @example `my_flow`
        */ "FlowName"?: string;
        /**
        * 责任人ID。
        * @example `1230404****`
        */ "Owner"?: string;
        /**
        * 工作流实例ID。
        * @example `FI-7CAF9709CD328EBE`
        */ "InstanceId"?: string;
        /**
        * 查询时间范围。
        * @example `{"type":"date","date":"ALL"}`
        */ "TimeRange"?: string;
        "StatusList"?: string[];
        /**
        * 排序字段名称。
        * @example `id`
        */ "OrderBy"?: string;
        /**
        * 排序方向：ASC/DESC。
        * @example `asc`
        */ "OrderType"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "FlowInstances": {
            "FlowInstance": {
                "Status": string;
                "FlowId": string;
                "Owner": string;
                "GmtCreate": number;
                "EndTime": number;
                "ClusterId": string;
                "FlowName": string;
                "StartTime": number;
                "ProjectId": string;
                "GmtModified": number;
                "Duration": number;
                "Id": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
    }>;
    /**
    * 调用 DescribeFlowNodeInstanceContainerLog 接口，查询节点实例容器日志
    */ DescribeFlowNodeInstanceContainerLog(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 作业的Application ID。
        * @example `application_1542620905989_0010`
        */ "AppId": string;
        /**
        * Conintainer ID。
        * @example `container_1542620905989_0010_01_000001`
        */ "ContainerId": string;
        /**
        * Log 名称：
        * - stderr
        * - syslog
        * - stdout
        * @example `stderr`
        */ "LogName": string;
        /**
        * 项目ID。
        * @example `FP-BECB9D35CB12****`
        */ "ProjectId": string;
        /**
        * 节点实例ID。
        * @example `FNI-0D2534B3AB67****`
        */ "NodeInstanceId": string;
        /**
        * 偏移。
        * @example `0`
        */ "Offset"?: number;
        /**
        * 长度，最大1000。
        * @example `200`
        */ "Length"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "LogEnd": boolean;
            "LogEntrys": {
                "LogEntry": {
                    "Content": string;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeFlowNodeInstanceLauncherLog 接口，查询节点实例启动器日志。
    */ DescribeFlowNodeInstanceLauncherLog(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-BECB9D35CB12****`
        */ "ProjectId": string;
        /**
        * 节点实例ID。
        * @example `FNI-0D2534B3AB67****`
        */ "NodeInstanceId": string;
        /**
        * 起始偏移。
        * @example `200`
        */ "Start"?: number;
        /**
        * 长度，最大限制为1000。
        * @example `100`
        */ "Lines"?: number;
        /**
        * 已过期。
        * @example `200`
        */ "Offset"?: number;
        /**
        * 已过期。
        * @example `100`
        */ "Length"?: number;
        /**
        * 是否倒序。
        * @example `true`
        */ "Reverse"?: boolean;
        /**
        * 查询开始时间。
        * @example `1540796236000`
        */ "StartTime"?: number;
        /**
        * 查询结束时间。
        * @example `1540796248000`
        */ "EndTime"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "LogEnd": boolean;
            "LogEntrys": {
                "LogEntry": {
                    "Content": string;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeFlowCategory 接口，查询目录详细信息
    */ DescribeFlowCategory(query: {
        /**
        * 地域ID。
        * @example `区域ID`
        */ "RegionId": string;
        /**
        * 目录ID。
        * @example `FC-075AB9477DAE****`
        */ "Id": string;
        /**
        * 项目ID。
        * @example `FP-ABD24A6163D3****`
        */ "ProjectId": string;
    }): Promise<{
        "code": string;
        "data": {
            "ParentId": string;
            "ObjectType": string;
            "Type": string;
            "GmtCreate": number;
            "RequestId": string;
            "ObjectId": string;
            "ProjectId": string;
            "GmtModified": number;
            "CategoryType": string;
            "Id": string;
            "Name": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeFlowNodeInstance 接口，查询节点实例详情（工作流节点实例, 作业运行节点实例）
    */ DescribeFlowNodeInstance(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 节点实例ID。
        * @example `FNI-FE4BD156E939****`
        */ "Id": string;
        /**
        * 项目ID。
        * @example `FP-7A1018ADE917****`
        */ "ProjectId": string;
    }): Promise<{
        "code": string;
        "data": {
            "FailAct": string;
            "EndTime": number;
            "NodeName": string;
            "GmtModified": number;
            "JobName": string;
            "ExternalStatus": string;
            "FlowId": string;
            "ParamConf": {
                "cyctime": string;
            };
            "ExternalInfo": string;
            "Retries": number;
            "ClusterName": string;
            "JobId": string;
            "HostName": string;
            "JobParams": string;
            "Status": string;
            "RequestId": string;
            "ClusterId": string;
            "ExternalId": string;
            "StartTime": number;
            "ProjectId": string;
            "FlowInstanceId": string;
            "Duration": number;
            "ExternalSubId": string;
            "MaxRetry": string;
            "Type": string;
            "GmtCreate": number;
            "JobType": string;
            "RetryInterval": string;
            "Id": string;
            "Pending": boolean;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DeleteFlowProjectClusterSetting 接口删除项目集群设置
    */ DeleteFlowProjectClusterSetting(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-E3F1523F8FC1D2E6`
        */ "ProjectId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 DescribeFlowCategoryTree 接口，获取目录树
    */ DescribeFlowCategoryTree(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-ABD24A6163D3****`
        */ "ProjectId": string;
        /**
        * 目录类型：
        * - FLOW
        * - JOB
        * - ADHOC
        * @example `FLOW`
        */ "Type": string;
        "Mode"?: string;
        "Keyword"?: string;
        "CategoryId"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "node": {
                "categoryType": string;
                "gmtModified": number;
                "name": string;
                "id": string;
                "gmtCreate": number;
                "type": string;
                "projectId": string;
                "parentId": string;
            };
            "children": {
                "node": {
                    "categoryType": string;
                    "gmtModified": number;
                    "name": string;
                    "id": string;
                    "gmtCreate": number;
                    "type": string;
                    "projectId": string;
                    "parentId": string;
                    "objectId": string;
                    "objectType": string;
                };
                "children": any[];
                "childrenMap": {};
            }[];
            "childrenMap": {
                "FC-D30AC9A7795F03A1": {
                    "node": {
                        "categoryType": string;
                        "gmtModified": number;
                        "name": string;
                        "id": string;
                        "gmtCreate": number;
                        "type": string;
                        "projectId": string;
                        "parentId": string;
                        "objectId": string;
                        "objectType": string;
                    };
                    "children": any[];
                    "childrenMap": {};
                };
                "FC-296E3BB9491E39F2": {
                    "node": {
                        "categoryType": string;
                        "gmtModified": number;
                        "name": string;
                        "id": string;
                        "gmtCreate": number;
                        "type": string;
                        "projectId": string;
                        "parentId": string;
                        "objectId": string;
                        "objectType": string;
                    };
                    "children": any[];
                    "childrenMap": {};
                };
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeFlowInstance 接口，获取工作流实例信息。
    */ DescribeFlowInstance(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 工作流实例ID。
        * @example `FI-7CAF9709CD32****`
        */ "Id": string;
        /**
        * 项目ID。
        * @example `FP-7A1018ADE917****`
        */ "ProjectId": string;
    }): Promise<{
        "code": string;
        "data": {
            "Status": string;
            "RequestId": string;
            "EndTime": number;
            "ClusterId": string;
            "GmtModified": number;
            "StartTime": number;
            "ProjectId": string;
            "Duration": number;
            "FlowId": string;
            "GmtCreate": number;
            "Graph": {
                "nodes": {
                    "shape": string;
                    "size": string;
                    "spmAnchorId": string;
                    "x": number;
                    "y": number;
                    "index": number;
                    "id": string;
                    "attribute": {
                        "type": string;
                    };
                    "type": string;
                }[];
                "edges": {
                    "sourceAnchor": number;
                    "targetAnchor": number;
                    "index": number;
                    "source": string;
                    "id": string;
                    "target": string;
                }[];
            };
            "FlowName": string;
            "Id": string;
            "NodeInstance": {
                "NodeInstance": {
                    "FailAct": string;
                    "Status": string;
                    "EndTime": number;
                    "ClusterId": string;
                    "NodeName": string;
                    "GmtModified": number;
                    "StartTime": number;
                    "ProjectId": string;
                    "Duration": number;
                    "MaxRetry": string;
                    "Type": string;
                    "GmtCreate": number;
                    "Retries": number;
                    "Id": string;
                    "HostName": string;
                    "Pending": boolean;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeFlow 接口查询工作流信息
    */ DescribeFlow(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 工作流ID。
        * @example `F-7A39731FE7196358`
        */ "Id": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
    }): Promise<{
        "alertUserGroupBizId": string;
        "Description": string;
        "Type": string;
        "CreateCluster": boolean;
        "GmtCreate": number;
        "GmtModified": number;
        "HostName": string;
        "Name": string;
        "Status": string;
        "ParentFlowList": {
            "ParentFlow": any[];
        };
        "CategoryId": string;
        "alertDingDingGroupBizId": string;
        "ClusterId": string;
        "Periodic": boolean;
        "RequestId": string;
        "Graph": {
            "edges": {
                "id": string;
                "index": number;
                "sourceAnchor": number;
                "source": string;
                "target": string;
                "targetAnchor": number;
            }[];
            "nodes": {
                "id": string;
                "index": number;
                "spmAnchorId": string;
                "config": {
                    "clusterId": string;
                };
                "attribute": {
                    "jobType": string;
                    "jobId": string;
                    "type": string;
                };
                "label": string;
                "shape": string;
                "type": string;
                "y": number;
                "x": number;
                "size": string;
            }[];
        };
        "Id": string;
    }>;
    /**
    * 调用 DeleteFlow 接口删除工作流
    */ DeleteFlow(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 工作流ID。
        * @example `F-7A39731FE7196358`
        */ "Id": string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 DeleteFlowCategory 接口删除工作流目录。
    */ DeleteFlowCategory(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目录ID。
        * @example `FC-075AB9477DAE9AAC`
        */ "Id": string;
        /**
        * 项目ID。
        * @example `FP-ABD24A6163D3****`
        */ "ProjectId": string;
    }): Promise<{
        "RequestId": string;
        "Data": string;
    }>;
    /**
    * 调用 DeleteFlowProjectUser 接口删除项目用户
    */ DeleteFlowProjectUser(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 子账号名称。
        * @example `subuser1`
        */ "UserName": string;
    }): Promise<{
        "RequestId": string;
        "Data": string;
    }>;
    /**
    * 调用 DeleteFlowProject 接口删除数据开发项目
    */ DeleteFlowProject(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
    }): Promise<{
        "RequestId": string;
        "Data": string;
    }>;
    /**
    * 调用 CreateFlowProject 接口创建数据开发项目
    */ CreateFlowProject(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目名称。
        * @example `my_project`
        */ "Name": string;
        /**
        * 项目描述。
        * @example `这是一个项目描述`
        */ "Description": string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 CreateFlowProjectUser 接口添加项目用户
    */ CreateFlowProjectUser(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        "User": string[];
    }): Promise<{
        "RequestId": string;
        "Data": string;
    }>;
    /**
    * 调用 DeleteFlowJob 接口删除作业
    */ DeleteFlowJob(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 作业ID。
        * @example `FJ-BBCAE48B90CCB37B`
        */ "Id": string;
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 CreateFlowForWeb 接口创建自定义图形工作流
    */ CreateFlowForWeb(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目 ID
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 工作流名称
        * @example `my_flow_demo`
        */ "Name": string;
        /**
        * 工作流描述
        * @example `这是一个创建工作流描述`
        */ "Description": string;
        /**
        * 开始调度时间开始时间, 长整型时间戳, 例如: System.currentTimeMillis(). 1. 必须小于EndSchedule 2. 当CronExpr不为空时, 此项必填
        * @example `1538017814000`
        */ "StartSchedule"?: number;
        /**
        * 调度失效时间, 长整型时间戳, 例如: System.currentTimeMillis().
        * @example `1538018814000`
        */ "EndSchedule"?: number;
        /**
        * 时间周期调度的cron表达式, 请参考https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm
        * @example `0 0 0-23/1 * * ?`
        */ "CronExpr"?: string;
        /**
        * 是否通过集群模板创建集群，ture 表示通过集群模板创建集群ClusterId应设置为集群模板 ID(CT-xxx)，否则为已有集群 ID（C-xxx）
        * @example `false`
        */ "CreateCluster"?: boolean;
        /**
        * 集群 ID
        * @example `C-A23BD131A862F184`
        */ "ClusterId"?: string;
        /**
        * 工作流运行所在的机器hostName, 支持master和gateway机器. hostname格式为emr-header-1.cluster-12345，可登陆机器用hostname命令查看对应的值.
        * @example `emr-header-1.cluster-123456`
        */ "HostName"?: string;
        /**
        * dag 图形信息, 参考示例
        * @example `{"nodes":[{"id":"48d474ea","index":0,"spmAnchorId":"0.0.0.i0.766645eb2cmNtQ","attribute":{"type":"START"},"shape":"startControlNode","type":"node","y":250,"size":"80*34","x":500},{"id":"7ba480b3","index":1,"spmAnchorId":"5176.8250060.0.i19.771e28d0IPNQGE","attribute":{"jobType":"SHELL","jobId":"FJ-7BE1062897B19D25","type":"JOB"},"config":{"hostName":""},"label":"fail_job","shape":"shellJobNode","type":"node","y":398.5,"size":"170*34","x":470.5},{"id":"33202d60","index":2,"spmAnchorId":"5176.8250060.0.i23.771e28d0IPNQGE","attribute":{"type":"END"},"shape":"endControlNode","type":"node","y":562.5,"size":"80*34","x":430.5}],"edges":[{"id":"28167ea0","index":3,"source":"48d474ea","sourceAnchor":0,"target":"7ba480b3","targetAnchor":0},{"id":"e8d5ff52","index":4,"source":"7ba480b3","sourceAnchor":1,"target":"33202d60","targetAnchor":0}]}`
        */ "Graph"?: string;
        /**
        * 报警通知配置, eventId目前支持EMR-210401001(工作流失败报警), EMR-110401002(工作流成功通知), EMR-110401015(工作流节点失败报警)
        * @example `{"items":[{"enable":true,"eventId":"EMR-210401001","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401015","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401002","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]}]}`
        */ "AlertConf"?: string;
        /**
        * 报警用户组信息
        * @example `已过期`
        */ "AlertUserGroupBizId"?: string;
        /**
        * 报警钉钉群信息
        * @example `已过期`
        */ "AlertDingDingGroupBizId"?: string;
        /**
        * 依赖的上游工作流列表，以逗号分隔。
        * @example `F-62ECFC6E1BF6EAD2,F-1E6528634E67B615,F-7E0A84332E9D9A89`
        */ "ParentFlowList"?: string;
        /**
        * 父目录ID，空则默认为 root 目录。
        * @example `FC-F2495319DA05CEE5`
        */ "ParentCategory"?: string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 CreateFlowProjectClusterSetting 接口创建项目集群设置
    */ CreateFlowProjectClusterSetting(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-ED2F3E844FE383AA`
        */ "ProjectId": string;
        /**
        * 集群ID。
        * @example `C-DCEE11B49C8F42B4`
        */ "ClusterId": string;
        /**
        * 默认**linux**提交用户, 默认值为**hadoop**。
        * @example `hadoop`
        */ "DefaultUser"?: string;
        /**
        * 默认提交队列, 默认值为**default**。
        * @example `default`
        */ "DefaultQueue"?: string;
        "UserList"?: string[];
        "QueueList"?: string[];
        "HostList"?: string[];
    }): Promise<{
        "RequestId": string;
        "Data": boolean;
    }>;
    /**
    * 调用 CloneFlowJob 借口克隆作业
    */ CloneFlowJob(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 克隆的目标作业 ID
        * @example `FJ-244582F1934CFC77`
        */ "Id": string;
        /**
        * 克隆的目标作业所属项目
        * @example `FP-C62EEC30F773B1A7`
        */ "ProjectId": string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 CreateFlowJob 接口创建数据开发作业
    */ CreateFlowJob(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `FP-257A173659F59685`
        */ "ProjectId": string;
        /**
        * 作业的名称。
        * @example `my_shell_job`
        */ "Name": string;
        /**
        * 作业的描述。
        * @example `这是一个数据开发作业描述`
        */ "Description": string;
        /**
        * 作业类型，目前支持：MR、SPARK、HIVE_SQL、HIVE、PIG、SQOOP、SPARK_SQL、SPARK_STREAMING、SHELL。
        * @example `SHELL`
        */ "Type": string;
        /**
        * 失败策略，支持：
        * - CONTINUE（跳过）。
        * - STOP（停止工作流）。
        * @example `CONTINUE`
        */ "FailAct"?: string;
        /**
        * 最大重试次数，0 - 5。
        * @example `5`
        */ "MaxRetry"?: number;
        /**
        * 重试间隔 0-300（秒）。
        * @example `200`
        */ "RetryInterval"?: number;
        /**
        * 作业内容。
        * @example `ls -l`
        */ "Params"?: string;
        /**
        * 参数设置。
        * @example `{"date":"${yyyy-MM-dd}"}`
        */ "ParamConf"?: string;
        /**
        * 环境变量设置。
        * @example `{"key":"value"}`
        */ "EnvConf"?: string;
        /**
        * 运行配置 ：
        * - priority： 优先级。
        * - userName： 任务linux提交用户。
        * - memory： 内存，单位为MB。
        * - cores：核数。
        * @example `{"priority":1,"userName":"hadoop","memory":2048,"cores":1}`
        */ "RunConf"?: string;
        /**
        * 监控配置，只有**SPARK_STREAMING**类型作业支持。
        * @example `{"inputs":[{"type":"KAFKA","clusterId":"C-1234567","topics":"kafka_topic","consumer.group":"kafka_consumer_group"}],"outputs":[{"type":"KAFKA","clusterId":"C-1234567","topics":"kafka_topic"}]}`
        */ "MonitorConf"?: string;
        /**
        * 模型模式，支持：YARN、LOCAL。
        * - YARN: 将作业包装成一个launcher提交至YARN中执行。
        * - LOCAL: 作业直接在机器上以进程方式运行。
        * @example `YARN`
        */ "Mode"?: string;
        /**
        * 父目录ID。
        * @example `FC-5BD9575E34623940`
        */ "ParentCategory"?: string;
        "ResourceList"?: string[];
        /**
        * 是否临时查询。
        * @example `false`
        */ "Adhoc"?: boolean;
        /**
        * 集群ID。
        * @example `C-A23BD131A862F184`
        */ "ClusterId"?: string;
        "AlertConf"?: string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 CreateFlowCategory 接口创建目录文件夹
    */ CreateFlowCategory(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 项目ID。
        * @example `F-48EB68215AEAE28D`
        */ "ProjectId": string;
        /**
        * 目录名称。
        * @example `myFolder`
        */ "Name": string;
        /**
        * 类型:
        * - FLOW（工作流）。
        * - JOB（作业）。
        * - ADHOC（临时查询）()
        * @example `FLOW`
        */ "Type": string;
        /**
        * 父目录ID, 为空时则默认为**root**目录。
        * @example `FC-AF08490649B8FD5E`
        */ "ParentId"?: string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 CloneFlow 接口克隆工作流
    */ CloneFlow(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 克隆的目标工作流ID。
        * @example `F-8C1EB0C6452A82A1`
        */ "Id": string;
        /**
        * 克隆的目标工作流所属的项目ID。
        * @example `FP-53C4D36FC7310AC0`
        */ "ProjectId": string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
    }>;
    /**
    * 调用 ModifyResourceQueue 接口修改资源队列。
    */ ModifyResourceQueue(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源池队列ID。
        * @example `116`
        */ "Id": string;
        /**
        * 集群ID。
        * @example `C-0E995C0EE7E5****`
        */ "ClusterId": string;
        /**
        * 资源池ID。
        * @example `115`
        */ "ResourcePoolId": number;
        "Config": string[];
        /**
        * 队列名称。
        * @example `pool2`
        */ "Name"?: string;
        /**
        * 无需填写。
        * @example `test`
        */ "QualifiedName"?: string;
        /**
        * 父资源池ID。
        * @example `115`
        */ "ParentQueueId"?: number;
        /**
        * 是否叶子节点。
        * @example `false`
        */ "Leaf"?: boolean;
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 RefreshClusterResourcePool 接口同步资源池配置到集群。
    */ RefreshClusterResourcePool(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-0E995C0EE7E5ECB3`
        */ "ClusterId": string;
        /**
        * 资源池ID。
        * @example `115`
        */ "ResourcePoolId": number;
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 RunClusterServiceAction 接口对集群的指定服务，运行指定的操作。
    */ RunClusterServiceAction(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D8295****`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `TEZ`
        */ "ServiceName": string;
        /**
        * Action名。
        * @example `STOP`
        */ "ServiceActionName": string;
        "HostGroupIdList"?: string[];
        /**
        * 主机ID列表，以英文半角逗号（,）分割。
        * @example `""`
        */ "HostIdList"?: string;
        /**
        * 在Action为**CUSTOM_COMMAND**时，需要指定，例如，**refreshQueues**。
        * @example `""`
        */ "CustomCommand"?: string;
        /**
        * 组件名称列表，用英文半角逗号（,）分割。
        * @example `Tomcat`
        */ "ComponentNameList"?: string;
        /**
        * 本次操作的备注信息。
        * @example `test run action`
        */ "Comment"?: string;
        /**
        * 是否滚动操作。
        * @example `true`
        */ "IsRolling"?: boolean;
        /**
        * 任务执行策略，枚举值：
        * - FAILED_BLOCK
        * - FAILED_CONTINUE
        * @example `FAILED_BLOCK`
        */ "ExecuteStrategy"?: string;
        /**
        * 运行自定义Action时的可选配置参数，目前只支持**kafka的innode_disks_balance**。
        * @example `""`
        */ "CustomParams"?: string;
        /**
        * 每个任务的执行时间间隔，IsRolling为**true**时可以指定。
        * @example `60`
        */ "Interval"?: number;
        /**
        * 每个批次在多少个主机上执行，IsRolling为**true**时可以指定。
        * @example `2`
        */ "NodeCountPerBatch"?: number;
        /**
        * 预留字段。
        * @example `5`
        */ "TotlerateFailCount"?: number;
        /**
        * 为**true**时，只对修改了配置项的主机执行命令。
        * @example `true`
        */ "OnlyRestartStaleConfigNodes"?: boolean;
        /**
        * 开启维护模式。
        * @example `false`
        */ "TurnOnMaintenanceMode"?: boolean;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用 ListClusterServiceConfigHistory 接口查询集群指定服务的配置修改历史信息的接口。
    */ ListClusterServiceConfigHistory(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `TEZ`
        */ "ServiceName"?: string;
        /**
        * 配置的版本。
        * @example `0`
        */ "ConfigVersion"?: string;
        /**
        * 分页查询的查询页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "ConfigHistoryList": {
            "ConfigHistory": {
                "ConfigFileName": string;
                "Comment": string;
                "ServiceName": string;
                "OldValue": string;
                "ConfigVersion": string;
                "CreateTime": number;
                "Author": string;
                "NewValue": string;
                "Applied": boolean;
                "ConfigItemName": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
    }>;
    /**
    * 调用 ModifyResourcePoolSchedulerType  接口修改资源池调度类型。
    */ ModifyResourcePoolSchedulerType(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-EBD62A703A430E23`
        */ "ClusterId": string;
        /**
        * 资源调度类型。
        * @example `CAPACITY_SCHEDULER`
        */ "SchedulerType": string;
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ListClusterServiceComponentHealthInfo 接口获取集群指定服务对应的组件健康信息列表。
    */ ListClusterServiceComponentHealthInfo(query: {
        /**
        * 地域ID。
        * @example `ccn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `TEZ`
        */ "ServiceName"?: string;
    }): Promise<{
        "RequestId": string;
        "ClusterId": string;
        "HealthInfoList": {
            "HealthInfo": {
                "StoppedNum": number;
                "NormalNum": number;
                "TotalNum": number;
                "HealthDetailList": {
                    "HealthDetail": any[];
                };
                "ServiceName": string;
                "ManualStoppedNum": number;
                "HealthLevel": string;
                "AgentHeartBeatLostNum": number;
            }[];
        };
    }>;
    /**
    * 调用 ModifyResourcePool 接口更新资源池。
    */ ModifyResourcePool(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源池 ID
        * @example `116`
        */ "Id": string;
        /**
        * 集群 ID
        * @example `C-0E995C0EE7E5ECB3`
        */ "ClusterId": string;
        /**
        * 是否激活
        * @example `true`
        */ "Active"?: boolean;
        /**
        * 资源池名称
        * @example `custompool`
        */ "Name"?: string;
        /**
        * YARN 配置列表
        * @example `Yarnsiteconfig`
        */ "Yarnsiteconfig"?: string;
        "Config"?: string[];
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ModifyClusterServiceConfig 接口，修改集群指定服务的配置信息。
    */ ModifyClusterServiceConfig(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-xxx`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `TEZ`
        */ "ServiceName": string;
        /**
        * 本次修改的具体内容，JSON格式的字符串。
        * @example `{"tez-site":{"tez.am.resource.memory.mb":"640"}}`
        */ "ConfigParams": string;
        /**
        * 本次修改的备注信息。
        * @example `modify tez config`
        */ "Comment"?: string;
        /**
        * 自定义配置项的修改内容。
        * @example `{"tez-site":{"key1":{"Value":"value1"}}}`
        */ "CustomConfigParams"?: string;
        /**
        * 主机组ID。
        * @example `G-xxx`
        */ "GroupId"?: string;
        /**
        * 主机实例ID，一般是**ecsID**。
        * @example `i-xxx`
        */ "HostInstanceId"?: string;
        /**
        * 配置项类型。
        * @example `""`
        */ "ConfigType"?: string;
        "GatewayClusterIdList"?: string[];
        /**
        * 修改完成后是否立刻执行configure
        * @example `false`
        */ "RefreshHostConfig"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用 ListResourcePool 接口，查询资源池列表。
    */ ListResourcePool(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-EBD62A703A43****`
        */ "ClusterId": string;
        /**
        * 资源池类型，合法值：CAPACITY_SCHEDULER、FAIR_SCHEDULER。
        * @example `CAPACITY_SCHEDULER`
        */ "PoolType"?: string;
        /**
        * 分页查询的页码。
        * @example `100`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `50`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PoolInfoList": {
                "PoolInfo": {
                    "EcmResourcePoolConfigList": {
                        "EcmResourcePoolConfig": any[];
                    };
                    "EcmResourcePool": {
                        "Name": string;
                        "YarnSiteConfig": string;
                        "PoolType": string;
                        "Active": boolean;
                        "Id": number;
                        "Note": string;
                        "UserId": string;
                    };
                    "QueueList": {
                        "Queue": {
                            "EcmResourcePoolConfigList": {
                                "EcmResourcePoolConfig": {
                                    "Status": string;
                                    "Category": string;
                                    "ConfigKey": string;
                                    "ConfigValue": string;
                                    "Id": number;
                                    "Note": string;
                                    "ConfigType": string;
                                }[];
                            };
                            "EcmResourceQueue": {
                                "Name": string;
                                "Status": string;
                                "QualifiedName": string;
                                "Id": number;
                                "QueueType": string;
                                "ResourcePoolId": number;
                                "UserId": string;
                                "Leaf": boolean;
                                "ParentQueueId": number;
                            };
                        }[];
                    };
                }[];
            };
            "RequestId": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用ListClusterOperationHost接口查询操作历史的操作机器列表。
    */ ListClusterOperationHost(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `DF202AC2-5D5D-4288-B608-B7B1595B5C7C`
        */ "ClusterId": string;
        /**
        * 操作历史ID。
        * @example `111`
        */ "OperationId": string;
        /**
        * 状态。
        * @example `SUCCESS`
        */ "Status"?: string;
        /**
        * 分页查询的查询页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "ClusterOperationHostList": {
            "ClusterOperationHost": {
                "Status": string;
                "Percentage": string;
                "HostId": string;
                "HostName": string;
            }[];
        };
    }>;
    /**
    * 调用 DescribeClusterServiceConfigTag 接口，查询集群指定服务的配置标签列表。
    */ DescribeClusterServiceConfigTag(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D8295****`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `TEZ`
        */ "ServiceName": string;
        /**
        * 标签名。
        * @example `FILE_NAME`
        */ "ConfigTag"?: string;
    }): Promise<{
        "ConfigTagList": {
            "ConfigTag": {
                "ValueList": {
                    "Value": {
                        "ValueDesc": string;
                        "Value": string;
                    }[];
                };
                "TagDesc": string;
                "Tag": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用 ListClusterOperation 接口查询集群的操作历史列表。
    */ ListClusterOperation(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D8295****`
        */ "ClusterId": string;
        /**
        * 服务名。
        * @example `YARN`
        */ "ServiceName"?: string;
        /**
        * 状态。
        * @example `SUCCESS`
        */ "Status"?: string;
        /**
        * 分页查询的查询页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "ClusterOperationList": {
            "ClusterOperation": {
                "Status": string;
                "Comment": string;
                "Percentage": string;
                "OperationName": string;
                "OperationId": string;
                "StartTime": string;
                "Duration": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
    }>;
    /**
    * 调用 DeleteResourceQueue 接口删除资源队列。
    */ DeleteResourceQueue(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-EBD62A703A430E23`
        */ "ClusterId": string;
        /**
        * 资源队列ID。
        * @example `248`
        */ "ResourceQueueId": string;
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ListClusterOperationHostTask 接口查询指定的操作历史中主机对应的任务列表信息。
    */ ListClusterOperationHostTask(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 操作历史ID。
        * @example `11`
        */ "OperationId": string;
        /**
        * 主机ID。
        * @example `11`
        */ "HostId": string;
        /**
        * 执行状态。
        * @example `SUCCESS`
        */ "Status"?: string;
        /**
        * 分页查询的查询页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "ClusterOperationHostTaskList": {
            "ClusterOperationHostTask": {
                "Status": string;
                "TaskId": string;
                "Percentage": string;
                "TaskName": string;
            }[];
        };
    }>;
    /**
    * 调用 DescribeClusterResourcePoolSchedulerType 接口查看资源池策略类型。
    */ DescribeClusterResourcePoolSchedulerType(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-EBD62A703A430E23`
        */ "ClusterId": string;
    }): Promise<{
        "code": string;
        "data": {
            "SupportSchedulerType": string;
            "RequestId": string;
            "CurrentSchedulerType": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeClusterOperationHostTaskLog 接口获取集群操作历史中，指定主机上的指定 task 的执行日志详情。
    */ DescribeClusterOperationHostTaskLog(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群 ID
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 操作历史的 ID，可从 ListClusterOperation 接口的返回值中获取
        * @example `11123`
        */ "OperationId": string;
        /**
        * 待查询日志的主机 ID，可从 ListClusterOperationHost 接口的返回值中获取
        * @example `41008`
        */ "HostId": string;
        /**
        * 待查询的task的ID信息，可从ListClusterOperationHostTask接口的返回中获取
        * @example `1098803`
        */ "TaskId": string;
        /**
        * Task 的状态信息
        * @example `SUCCESS`
        */ "Status"?: string;
    }): Promise<{
        "requestId": string;
        "stderr": string;
        "stdout": string;
    }>;
    /**
    * 调用 CreateResourceQueue 接口创建资源队列。
    */ CreateResourceQueue(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 队列名称。
        * @example `DefaultQueue`
        */ "Name": string;
        /**
        * 集群ID。
        * @example `C-0E995C0EE7E5ECB3`
        */ "ClusterId": string;
        /**
        * 资源池ID。
        * @example `115`
        */ "ResourcePoolId": number;
        /**
        * 无需填写。
        * @example `test`
        */ "QualifiedName"?: string;
        /**
        * 父资源池ID。
        * @example `225`
        */ "ParentQueueId"?: number;
        /**
        * 是否叶子节点。
        * @example `false`
        */ "Leaf"?: boolean;
        "Config"?: string[];
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 DescribeClusterServiceConfig 接口查询集群指定服务的配置详情信息。
    */ DescribeClusterServiceConfig(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `TEZ`
        */ "ServiceName"?: string;
        /**
        * 配置的版本信息，可通过** DescribeClusterServiceConfigHistory **接口获取。
        * @example `0`
        */ "ConfigVersion"?: string;
        /**
        * 当前配置组的ID信息。
        * @example `0`
        */ "GroupId"?: string;
        /**
        * 主机的**instanceId**信息，一般是对应的** ecsId **信息。
        * @example `ecsId`
        */ "HostInstanceId"?: string;
        /**
        * 待查询的配置的标签信息，可通过**DescribeClusterServiceConfigTag**接口获取。
        * @example `tez-site`
        */ "TagValue"?: string;
    }): Promise<{
        "RequestId": string;
        "Config": {
            "Comment": string;
            "ServiceName": string;
            "PropertyInfoList": {
                "PropertyInfo": {
                    "PropertyTypes": {
                        "propertyType": any[];
                    };
                    "Description": string;
                    "PropertyValueAttributes": {
                        "ReadOnly": boolean;
                        "Type": string;
                        "Maximum": string;
                        "Mimimum": string;
                        "Hidden": boolean;
                        "IncrememtStep": string;
                        "Entries": {
                            "ValueEntryInfo": any[];
                        };
                        "Unit": string;
                    };
                    "ServiceName": string;
                    "EffectWay": {};
                    "FileName": string;
                    "Value": string;
                    "DisplayName": string;
                    "Name": string;
                }[];
            };
            "ConfigVersion": string;
            "CreateTime": string;
            "Author": string;
            "Applied": boolean;
            "ConfigValueList": {
                "ConfigValue": {
                    "ConfigName": string;
                    "AllowCustom": boolean;
                    "ConfigItemValueList": {
                        "ConfigItemValue": {
                            "Value": string;
                            "ItemName": string;
                        }[];
                    };
                }[];
            };
        };
    }>;
    /**
    * 调用 ListClusterHostComponent 接口获取集群各个主机上安装的组件列表。
    */ ListClusterHostComponent(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 主机实例ID，一般是** ecsId**。
        * @example `i-xxx`
        */ "HostInstanceId"?: string;
        /**
        * 主机名。
        * @example `emr-worker-1`
        */ "HostName"?: string;
        /**
        * 服务名。
        * @example `TEZ`
        */ "ServiceName"?: string;
        /**
        * 待查询的组件名称。
        * @example `TezInit`
        */ "ComponentName"?: string;
        /**
        * 待查询的组件状态。
        * @example `STARTED`
        */ "ComponentStatus"?: string;
        /**
        * 主机角色。
        * @example `CORE`
        */ "HostRole"?: string;
        /**
        * 分页查询的查询页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "Total": number;
        "ComponentList": {
            "Component": {
                "Status": string;
                "ComponentDisplayName": string;
                "PublicIp": string;
                "HostInstanceId": string;
                "HostId": string;
                "ServiceDisplayName": string;
                "Role": string;
                "SerialNumber": string;
                "PrivateIp": string;
                "ServiceName": string;
                "NeedRestart": boolean;
                "ComponentName": string;
                "InstanceType": string;
                "HostName": string;
            }[];
        };
    }>;
    /**
    * 调用 AddClusterService 接口，为指定的集群添加当前集群的主版本支持的某项服务。
    */ AddClusterService(query: {
        /**
        * 集群对应的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "Service": string[];
        /**
        * 待添加服务的集群ID。
        * @example `C-F32FB31D8295****`
        */ "ClusterId": string;
        /**
        * 本次添加服务的备注信息。
        * @example `addService`
        */ "Comment"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用 ListClusterService 接口查询集群的服务列表信息。
    */ ListClusterService(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-F32FB31D82954C64`
        */ "ClusterId": string;
        /**
        * 分页查询的查询页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页记录数。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
        "ClusterServiceList": {
            "ClusterService": {
                "ClientType": boolean;
                "ServiceActionList": {
                    "ServiceAction": {
                        "ActionName": string;
                        "ServiceName": string;
                        "DisplayName": string;
                        "ComponentName": string;
                    }[];
                };
                "HealthStatus": string;
                "NotStartInfo": string;
                "ServiceDisplayName": string;
                "StoppedNum": number;
                "ServiceName": string;
                "ServiceStatus": string;
                "AbnormalNum": number;
                "ServiceVersion": string;
                "NeedRestartInfo": string;
                "InstallStatus": boolean;
                "NeedRestartNum": number;
            }[];
        };
    }>;
    /**
    * 调用 DeleteResourcePool 接口删除指定资源池。
    */ DeleteResourcePool(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-EBD62A703A430E23`
        */ "ClusterId": string;
        /**
        * 资源池ID。
        * @example `115`
        */ "ResourcePoolId": string;
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ReleaseCluster 接口释放集群所有节点。
    */ ReleaseCluster(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-D7958B72E59BAB88`
        */ "Id": string;
        /**
        * 正常释放时，如果您打开了日志保存，系统会花费几分钟时间将作业的日志都保存到您的OSS空间中。
        * 您也可以勾选强制释放选项，放弃日志的保存，立即释放。
        * @example `true`
        */ "ForceRelease"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用 ModifyClusterName 接口修改集群名称。
    */ ModifyClusterName(query: {
        /**
        * 区域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群 ID
        * @example `C-D7958B72E59BAB88`
        */ "Id": string;
        /**
        * 集群新的名称，要求和创建集群时一致。长度限制为1-64个字符，只允许包含中文、字母、数字、-、_。
        * @example `bi_hadoop`
        */ "Name": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用 ListEmrMainVersion 接口查询 E-MapReduce 版本列表。
    */ ListEmrMainVersion(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * EMR版本。
        * @example `EMR-3.15.0`
        */ "EmrVersion"?: string;
        /**
        * 软件栈名字：EMR。
        * @example `EMR`
        */ "StackName"?: string;
        /**
        * 软件栈版本。
        * @example `3.15.1.1.0`
        */ "StackVersion"?: string;
        /**
        * 分页页数，从1开始。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页大小。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "emrMainVersionList": {
            "clusterTypeInfoList": any[];
            "display": boolean;
            "ecmVersion": boolean;
            "emrVersion": string;
            "imageId": string;
            "regionId": string;
            "stackName": string;
            "stackVersion": string;
            "whiteUserList": any[];
        }[];
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "totalCount": number;
    }>;
    /**
    * 调用 CreateResourcePool 接口创建 YARN 资源池。
    */ CreateResourcePool(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源池名称。
        * @example `default`
        */ "Name": string;
        /**
        * 集群ID。
        * @example `C-0E995C0EE7E5ECB3`
        */ "ClusterId": string;
        /**
        * 资源池类型，枚举值：CAPACITY_SCHEDULER、FAIR_SCHEDULER。
        * @example `CAPACITY_SCHEDULER`
        */ "PoolType": string;
        /**
        * 是否激活。
        * @example `true`
        */ "Active": boolean;
        /**
        * 备注信息。
        * @example `默认资源池`
        */ "Note"?: string;
        /**
        * YarnSite配置参数。
        * @example `configList`
        */ "YarnSiteConfig"?: string;
        "Config"?: string[];
    }): Promise<{
        "code": string;
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ListEmrAvailableConfig 接口，获取可用的 EMR 集群创建配置。
    */ ListEmrAvailableConfig(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
    }): Promise<{
        "code": string;
        "data": {
            "EmrMainVersionList": {
                "EmrMainVersion": {
                    "ClusterTypeInfoList": {
                        "ClusterTypeInfo": {
                            "ClusterServiceInfoList": {
                                "ClusterServiceInfo": {
                                    "Mandatory": boolean;
                                    "ServiceDisplayName": string;
                                    "ServiceName": string;
                                    "ServiceVersion": string;
                                }[];
                            };
                            "ClusterType": string;
                        }[];
                    };
                    "EcmVersion": boolean;
                    "MainVersionName": string;
                    "RegionId": string;
                }[];
            };
            "KeyPairNameList": {
                "KeyPairName": string[];
            };
            "RequestId": string;
            "SecurityGroupList": {
                "SecurityGroup": {
                    "CreationTime": string;
                    "Description": string;
                    "SecurityGroupId": string;
                    "SecurityGroupName": string;
                    "VpcId": string;
                }[];
            };
            "VpcInfoList": {
                "VpcInfo": {
                    "CidrBlock": string;
                    "CreationTime": string;
                    "Description": string;
                    "VpcId": string;
                    "VpcName": string;
                    "VswitchInfoList": {
                        "VswitchInfo": {
                            "AvailableIpAddressCount": number;
                            "CidrBlock": string;
                            "CreationTime": string;
                            "Description": string;
                            "VpcId": string;
                            "VswitchId": string;
                            "VswitchName": string;
                            "ZoneId": string;
                        }[];
                    };
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ModifyClusterTemplate 接口，修改集群模版。
    */ ModifyClusterTemplate(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群模版名。
        * @example `new_template_name`
        */ "TemplateName": string;
        /**
        * 集群模版ID。
        * @example `CT-4A6799A79D73****`
        */ "BizId": string;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId": string;
        /**
        * EMR版本。
        * @example `EMR-3.15.0`
        */ "EmrVer": string;
        /**
        * 集群类型。
        * @example `HADOOP`
        */ "ClusterType": string;
        "HostGroup": string[];
        /**
        * OSS日志路径。
        * @example `oss//bucketname/path`
        */ "LogPath"?: string;
        /**
        * 安全组ID。
        * @example `sg-bp1id7ajv83kmqwq****`
        */ "SecurityGroupId"?: string;
        /**
        * 是否使用公网IP。
        * @example `true`
        */ "IsOpenPublicIp"?: boolean;
        /**
        * 安全组名字。
        * @example `emr_sg`
        */ "SecurityGroupName"?: string;
        /**
        * 付费类型。
        * @example `PostPaid`
        */ "ChargeType"?: string;
        /**
        * 机器组的包年包月时间（包月数有1、2、3、4、5、6、7、8、9、12、24、36）。
        * @example `36`
        */ "Period"?: number;
        /**
        * 包年包月集群是否自动续费。
        * @example `false`
        */ "AutoRenew"?: boolean;
        /**
        * VPC ID。
        * @example `vpc-bp1l4urd87xlh7i4b****`
        */ "VpcId"?: string;
        /**
        * 交换机ID。
        * @example `vsw-bp10tvjyc77psy0z5****`
        */ "VSwitchId"?: string;
        /**
        * 网络类型。
        * @example `vpc`
        */ "NetType"?: string;
        /**
        * 用于ECS调用的EMR权限名。
        * @example `AliyunEmrEcsDefaultRole`
        */ "UserDefinedEmrEcsRole"?: string;
        "OptionSoftWareList"?: string[];
        /**
        * 是否高可用集群。
        * @example `true`
        */ "HighAvailabilityEnable"?: boolean;
        /**
        * 是否使用本地Hive元数据库。
        * @example `true`
        */ "UseLocalMetaDb"?: boolean;
        /**
        * 是否I/O优化。
        * @example `true`
        */ "IoOptimized"?: boolean;
        /**
        * 是否打开SSH访问。
        * @example `true`
        */ "SshEnable"?: boolean;
        /**
        * ECS实例分代。
        * @example `ecs-3`
        */ "InstanceGeneration"?: string;
        /**
        * Master节点SSH访问密码。
        * @example `pwd`
        */ "MasterPwd"?: string;
        /**
        * 密钥对。
        * @example `yourKeyPair****`
        */ "KeyPairName"?: string;
        /**
        * local, unified, user_rds 分别代表集群默认元数据，E-MapReduce统一元数据，用户自定义RDS作为元数据。
        * @example `local`
        */ "MetaStoreType"?: string;
        /**
        * MetaStoreType设置为user_rds时有效。元数据RDS的设置。
        * @example `{"dbUrl":"jdbc:mysql://yourhost:3306/instance","dbUserName":"db1","dbPassword":"pwd"}`
        */ "MetaStoreConf"?: string;
        "BootstrapAction"?: string[];
        /**
        * 软件自定义配置。（集群启动前，可以指定一个json文件修改软件配置。）
        * @example `[{"classification": "core-site","properties": {"fs.trash.interval": "61"}},{"classification": "hadoop-log4j","properties": {"hadoop.log.file": "hadoop1.log","hadoop.root.logger": "INFO","a.b.c": "ABC"}}]`
        */ "Configurations"?: string;
        /**
        * 是否高安全集群。
        * @example `true`
        */ "EasEnable"?: boolean;
        /**
        * 托管类型。
        * @example `HALF_MANAGED`
        */ "DepositType"?: string;
        /**
        * 机器类型。
        * @example `ECS`
        */ "MachineType"?: string;
        /**
        * 保留字段，无需填写。
        * @example `false`
        */ "UseCustomHiveMetaDb"?: boolean;
        /**
        * 保留字段，无需填写。
        * @example `false`
        */ "InitCustomHiveMetaDb"?: boolean;
        "Config"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用 DescribeClusterService 接口，查询集群当前安装服务的详情信息。
    */ DescribeClusterService(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 待查询的集群ID。
        * @example `C-F32FB31D8295****`
        */ "ClusterId": string;
        /**
        * 待查询的服务名称，例如：HDFS、YARN。
        * @example `HDFS`
        */ "ServiceName": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "ServiceInfo": {
                "NeedRestartHostIdList": {
                    "Service": any[];
                };
                "ServiceActionList": {
                    "ServiceAction": {
                        "ActionName": string;
                        "ServiceName": string;
                        "DisplayName": string;
                        "ComponentName": string;
                    }[];
                };
                "ServiceName": string;
                "NeedRestartInfo": string;
                "NeedRestartNum": number;
                "ClusterServiceSummaryList": {
                    "ClusterServiceSummary": {
                        "Status": string;
                        "Value": string;
                        "Key": string;
                        "Type": string;
                        "DisplayName": string;
                        "AlertInfo": string;
                    }[];
                };
                "ServiceVersion": string;
                "NeedRestartComponentNameList": {
                    "Service": any[];
                };
                "ServiceStatus": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 CreateClusterTemplate 接口创建一个 E-MapReduce 集模板，可用于数据开发初始化新集群。
    */ CreateClusterTemplate(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 模版名称。
        * @example `templateName2`
        */ "TemplateName": string;
        /**
        * 集群版本。
        * @example `EMR-3.15.0`
        */ "EmrVer": string;
        /**
        * 集群类型。
        * @example `HADOOP`
        */ "ClusterType": string;
        "HostGroup": string[];
        /**
        * 区域ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * OSS文件路径。
        * @example `oss://bucket/path`
        */ "LogPath"?: string;
        /**
        * 安全组ID。
        * @example `sg-bp1id7ajv83kmqwq****`
        */ "SecurityGroupId"?: string;
        /**
        * 是否开放公网IP。
        * @example `true`
        */ "IsOpenPublicIp"?: boolean;
        /**
        * 需要新创建的安全组的名字。
        * @example `sg-name`
        */ "SecurityGroupName"?: string;
        /**
        * 包年包月集群的过期时间。
        * @example `36`
        */ "Period"?: number;
        /**
        * 自动续费。
        * @example `false`
        */ "AutoRenew"?: boolean;
        /**
        * VPC ID。
        * @example `vpc-bp1l4urd87xlh7i4bju4h`
        */ "VpcId"?: string;
        /**
        * 虚拟交换机的ID。
        * @example `vsw-bp10tvjyc77psy0z5h0ni`
        */ "VSwitchId"?: string;
        /**
        * 网络类型。
        * @example `vpc`
        */ "NetType"?: string;
        /**
        * 调用ECS接口使用的权限名。
        * @example `AliyunEmrEcsDefaultRole`
        */ "UserDefinedEmrEcsRole"?: string;
        "OptionSoftWareList"?: string[];
        /**
        * 是否启用高可用。
        * @example `true`
        */ "HighAvailabilityEnable"?: boolean;
        /**
        * 使用本地Hive元数据库。
        * @example `false`
        */ "UseLocalMetaDb"?: boolean;
        /**
        * 是否I/O优化。
        * @example `true`
        */ "IoOptimized"?: boolean;
        /**
        * 是否开启集群机器的SSH服务。
        * @example `true`
        */ "SshEnable"?: boolean;
        /**
        * ECS实例分代。
        * @example `ecs-3`
        */ "InstanceGeneration"?: string;
        /**
        * Master机器密码。
        * @example `pwd`
        */ "MasterPwd"?: string;
        "KeyPairName"?: string;
        "MetaStoreType"?: string;
        "MetaStoreConf"?: string;
        "BootstrapAction"?: string[];
        /**
        * 软件自定义配置（集群启动前，可以指定一个JSON文件修改软件配置）。
        * @example `[{"classification": "core-site","properties": {"fs.trash.interval": "61"}},{"classification": "hadoop-log4j","properties": {"hadoop.log.file": "hadoop1.log","hadoop.root.logger": "INFO","a.b.c": "ABC"}}]`
        */ "Configurations"?: string;
        /**
        * 是否启用高安全。
        * @example `true`
        */ "EasEnable"?: boolean;
        /**
        * 集群托管类型。
        * @example `HALF_MANAGED`
        */ "DepositType"?: string;
        /**
        * 无需设置，总是为ECS。
        * @example `ECS`
        */ "MachineType"?: string;
        /**
        * 是否使用Hive统一元数据。
        * @example `false`
        */ "UseCustomHiveMetaDb"?: boolean;
        /**
        * 如果指定为**true**，Hive 的**hive-site**配置项**init.meta.db**会被设置为 **true**。
        * @example `true`
        */ "InitCustomHiveMetaDb"?: boolean;
        "Config"?: string[];
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "ClusterTemplateId": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用 ResizeClusterV2 接口根据配置扩容集群。
    */ ResizeClusterV2(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-D7958B72E59BAB88`
        */ "ClusterId": string;
        "HostGroup": string[];
        /**
        * 是否自动付费。
        * @example `true`
        */ "AutoPayOrder"?: boolean;
        /**
        * 虚拟交换机ID。
        * @example `vsw-bp10tvjyc77psy0z5h0ni`
        */ "VswitchId"?: string;
        /**
        * 是否开通公网IP。
        * @example `false`
        */ "IsOpenPublicIp"?: boolean;
        "HostComponentInfo"?: string[];
    }): Promise<{
        "ClusterId": string;
        "RequestId": string;
    }>;
    /**
    * 调用 ListClusters 接口分页查询集群列表。
    */ ListClusters(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "ClusterTypeList"?: string[];
        /**
        * 集群创建类型。可选值：
        * - ON-DEMAND。
        * - MANUAL。
        * @example `ON-DEMAND`
        */ "CreateType"?: string;
        /**
        * 机器类型。
        * @example `ECS`
        */ "MachineType"?: string;
        "StatusList"?: string[];
        /**
        * 是否倒序排列。
        * @example `false`
        */ "IsDesc"?: boolean;
        /**
        * 托管类型，标识集群是全托管还是半托管。枚举值：
        * - HALF_MANAGED。
        * - FULLY_MANAGED。
        * @example `HALF_MANAGED`
        */ "DepositType"?: string;
        /**
        * 分页分数，从1开始。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页大小。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 是否查询默认状态为初始化中、等待构建、空闲、运行中、释放中、创建失败的集群。
        * @example `true`
        */ "DefaultStatus"?: boolean;
    }): Promise<{
        "clusters": {
            "chargeType": string;
            "createResource": string;
            "createTime": number;
            "failReason": {};
            "hasUncompletedOrder": boolean;
            "id": string;
            "name": string;
            "orderTaskInfo": {};
            "runningTime": number;
            "status": string;
            "type": string;
        }[];
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "totalCount": number;
    }>;
    /**
    * 调用 ListEmrAvailableResource 接口查询可用资源列表。
    */ ListEmrAvailableResource(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目标资源。
        * @example `Zone`
        */ "DestinationResource": string;
        /**
        * 集群类型。
        * @example `HADOOP`
        */ "ClusterType": string;
        /**
        * 付费类型。
        * @example `PostPaid`
        */ "InstanceChargeType": string;
        /**
        * 实例竞价策略：
        * - NoSpot
        * - SpotWithPriceLimit
        * - SpotAsPriceGo
        * @example `SpotWithPriceLimit`
        */ "SpotStrategy"?: string;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        /**
        * 网络类型。
        * @example `vpc`
        */ "NetType"?: string;
        /**
        * 实例类型。
        * @example `ecs.g5.xlarge`
        */ "InstanceType"?: string;
        /**
        * 系统盘类型。
        * @example `cloud_ssd`
        */ "SystemDiskType"?: string;
        /**
        * 数据盘类型。
        * @example `cloud_ssd`
        */ "DataDiskType"?: string;
        /**
        * 托管类型。
        * @example `HALF_MANAGED`
        */ "DepositType"?: string;
        /**
        * 集群ID。
        * @example `C-D7958B72E59BAB88`
        */ "ClusterId"?: string;
    }): Promise<{
        "emrZoneInfoList": {
            "emrResourceInfoList": {
                "supportedResourceList": {
                    "emrInstanceType": {
                        "cpuCoreCount": number;
                        "eniQuantity": number;
                        "gPUAmount": number;
                        "gPUSpec": string;
                        "instanceBandwidthRx": number;
                        "instanceBandwidthTx": number;
                        "instancePpsRx": number;
                        "instancePpsTx": number;
                        "instanceType": string;
                        "instanceTypeFamily": string;
                        "localStorageCategory": string;
                        "memorySize": number;
                    };
                    "supportNodeTypeList": string[];
                    "value": string;
                    "value1": string;
                }[];
                "type": string;
            }[];
            "zoneId": string;
        }[];
        "regionId": string;
        "requestId": string;
    }>;
    /**
    * 调用ListClusterHostGroup接口查询集群机器组列表。
    */ ListClusterHostGroup(query: {
        /**
        * 区域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-D7958B72E59B****`
        */ "ClusterId": string;
        /**
        * 机器组ID。
        * @example `G-76D09CF110A3****`
        */ "HostGroupId"?: string;
        /**
        * 待查询的机器组名称。
        * @example `core_group`
        */ "HostGroupName"?: string;
        /**
        * 待查询的机器组类型，枚举值：**MASTER**、**CORE**和**TASK**。
        * @example `CORE`
        */ "HostGroupType"?: string;
        "StatusList"?: string[];
        /**
        * 分页查询的页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询的每页数据量。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "hostList": any[];
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
    }>;
    /**
    * 调用 CreateClusterWithTemplate 接口，通过集群模版创建集群。
    */ CreateClusterWithTemplate(query: {
        "RegionId"?: string;
        /**
        * 模版ID。
        * @example `CT-35498C56B3F1****`
        */ "TemplateBizId": string;
        /**
        * 用户自定义的业务标识，此字段的值对集群模版创建无影响。
        * @example `60a632f0-5909-430d-b65c-1b0f248e4947`
        */ "UniqueTag"?: string;
        /**
        * 自定义集群名称。
        * @example `hadoop_cluster_name_1`
        */ "ClusterName"?: string;
    }): Promise<{
        "ClusterId": string;
        "RequestId": string;
    }>;
    /**
    * 调用 ListClusterTemplates 接口查询集群模版列表。
    */ ListClusterTemplates(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 分页大小。
        * @example `10`
        */ "PageSize": number;
        /**
        * 页数，从 1 开始。
        * @example `1`
        */ "PageNumber": number;
        /**
        * 集群模版ID。
        * @example `CT-4A6799A79D73385B`
        */ "BizId"?: string;
    }): Promise<{
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "templateInfoList": {
            "bootstrapActionList": any[];
            "clusterType": string;
            "configList": any[];
            "createSource": string;
            "depositType": string;
            "easEnable": boolean;
            "gmtCreate": number;
            "gmtModified": number;
            "highAvailabilityEnable": boolean;
            "hostGroupList": {
                "chargeType": string;
                "diskCapacity": number;
                "diskCount": number;
                "diskType": string;
                "hostGroupId": string;
                "hostGroupName": string;
                "hostGroupType": string;
                "instanceType": string;
                "nodeCount": number;
            }[];
            "id": string;
            "ioOptimized": boolean;
            "isOpenPublicIp": boolean;
            "logEnable": boolean;
            "machineType": string;
            "masterNodeTotal": number;
            "netType": string;
            "securityGroupId": string;
            "securityGroupName": string;
            "softwareInfoList": string[];
            "sshEnable": boolean;
            "templateName": string;
            "useLocalMetaDb": boolean;
            "userDefinedEmrEcsRole": string;
            "userId": string;
            "vSwitchId": string;
            "vpcId": string;
            "zoneId": string;
        }[];
        "totalCount": number;
    }>;
    /**
    * 调用 ListClusterServiceQuickLink 查询集群快捷链接列表。
    */ ListClusterServiceQuickLink(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-4DBD656F20CE****`
        */ "ClusterId": string;
        /**
        * 服务名称。
        * @example `SPARK`
        */ "ServiceName"?: string;
    }): Promise<{
        "quickLinkList": {
            "port": string;
            "protocol": string;
            "quickLinkAddress": string;
            "serviceDisplayName": string;
            "serviceName": string;
            "type": string;
        }[];
        "requestId": string;
    }>;
    /**
    * 调用 DescribeClusterTemplate 接口查询集群模版详情。
    */ DescribeClusterTemplate(query: {
        "RegionId"?: string;
        /**
        * 集群模版ID。
        * @example `CT-35498C56B3F1****`
        */ "BizId": string;
    }): Promise<{
        "requestId": string;
        "templateInfo": {
            "bootstrapActionList": any[];
            "clusterType": string;
            "configList": any[];
            "createSource": string;
            "depositType": string;
            "easEnable": boolean;
            "emrVer": string;
            "gmtCreate": number;
            "gmtModified": number;
            "highAvailabilityEnable": boolean;
            "hostGroupList": {
                "chargeType": string;
                "diskCapacity": number;
                "diskCount": number;
                "diskType": string;
                "hostGroupId": string;
                "hostGroupName": string;
                "hostGroupType": string;
                "instanceType": string;
                "nodeCount": number;
            }[];
            "id": string;
            "ioOptimized": boolean;
            "isOpenPublicIp": boolean;
            "logEnable": boolean;
            "machineType": string;
            "masterNodeTotal": number;
            "netType": string;
            "securityGroupId": string;
            "securityGroupName": string;
            "softwareInfoList": string[];
            "sshEnable": boolean;
            "templateName": string;
            "useLocalMetaDb": boolean;
            "userDefinedEmrEcsRole": string;
            "userId": string;
            "vSwitchId": string;
            "vpcId": string;
            "zoneId": string;
        };
    }>;
    /**
    * 调用 DeleteClusterTemplate 接口删除集群模版。
    */ DeleteClusterTemplate(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群模版ID。
        * @example `CT-35498C56B3F1****`
        */ "BizId": string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用ListClusterHost接口查询集群主机列表，包括磁盘、CPU内存配置等。
    */ ListClusterHost(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-D7CA98AAA96A****`
        */ "ClusterId": string;
        /**
        * ECS实例ID。
        * @example `i-bp11vdyh3l6xvmnl****`
        */ "HostInstanceId"?: string;
        /**
        * 机器组ID。
        * @example `G-A5EA210E15FCFF8E`
        */ "HostGroupId"?: string;
        /**
        * 主机名。
        * @example `emr-header-1`
        */ "HostName"?: string;
        /**
        * 主机内网IP。
        * @example `192.***.***.***`
        */ "PrivateIp"?: string;
        /**
        * 主机公网IP。
        * @example `47.***.***.***`
        */ "PublicIp"?: string;
        /**
        * 机器组类型。
        * @example `MASTER`
        */ "GroupType"?: string;
        /**
        * 安装了指定组件名称的主机。
        * @example `HiveServer2`
        */ "ComponentName"?: string;
        "StatusList"?: string[];
        /**
        * 分页页数，从1开始。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页大小。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "hostList": {
            "chargeType": string;
            "cpu": number;
            "diskList": {
                "diskId": string;
                "diskSize": number;
                "diskType": string;
                "type": string;
            }[];
            "expiredTime": number;
            "hostInstanceId": string;
            "hostName": string;
            "instanceType": string;
            "memory": number;
            "privateIp": string;
            "publicIp": string;
            "role": string;
            "serialNumber": string;
            "status": string;
        }[];
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "total": number;
    }>;
    /**
    * 调用CreateClusterV2接口，创建一个E-MapReduce集群。
    */ CreateClusterV2(query: {
        /**
        * 地域ID。目前支持华东 1、华东 2、华南 1、华北 2、华北 3、美西、新加坡、德国。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群的名字。长度限制为 1-64 个字符，只允许包含中文、字母、数字、-、_。
        * @example `bi_hadoop`
        */ "Name": string;
        /**
        * 可用区ID。
        * - 华东 1（杭州）支持：cn-hangzhou-b。
        * -  华北 2（北京）支持：cn-beijing-a、cn-beijing-b,cn-beijing-c。
        * @example `cn-hangzhou-b`
        */ "ZoneId": string;
        /**
        * EMR版本。
        * @example `EMR-3.15.0`
        */ "EmrVer": string;
        /**
        * 集群类型。
        * @example `HADOOP`
        */ "ClusterType": string;
        "HostGroup": string[];
        /**
        * OSS日志路径。
        * @example `oss//bucketname/path`
        */ "LogPath"?: string;
        /**
        * 安全组 ID。可以在ECS中创建一个然后使用。需要确认的是，如果使用已有的安全组，会被增加上默认安全组策略：入只开放22端口，出开放所有端口。
        * @example `sg-bp1id7ajv83kmqwq****`
        */ "SecurityGroupId"?: string;
        /**
        * 是否开启公网IP。如果开启，默认会带有8MB的带宽。
        * @example `true`
        */ "IsOpenPublicIp"?: boolean;
        /**
        * 需要新建的安全组名称。如果不指定安全组ID，那么将使用这个名字创建一个新的安全组。当集群创建完成以后，可以在集群详情中看到创建的安全组ID。这个安全组将会有带有默认的安全组策略：入只开放22端口，出开放所有端口。
        * @example `emr-sg`
        */ "SecurityGroupName"?: string;
        /**
        * 付费类型：
        * - PostPaid：按量付费。
        * - PrePaid：包年包月。
        * @example `PostPaid`
        */ "ChargeType"?: string;
        /**
        * 包年包月时间（包月数有：1、2、3、4、5、6、7、8、9、12、24、36）。ChargeType=PrePaid 时，必填。
        * @example `30`
        */ "Period"?: number;
        /**
        * 包年包月集群是否自动续费。
        * @example `false`
        */ "AutoRenew"?: boolean;
        /**
        * 是否自动付费。
        * @example `true`
        */ "AutoPayOrder"?: boolean;
        /**
        * VPC ID，NetType=vpc时必填。
        * @example `vpc-bp1l4urd87xlh7i4b****`
        */ "VpcId"?: string;
        /**
        * 交换机ID，NetType=vpc时必填。
        * @example `vsw-bp10tvjyc77psy0z5****`
        */ "VSwitchId"?: string;
        /**
        * 网络类型。
        * @example `vpc`
        */ "NetType"?: string;
        /**
        * 用于ECS调用的EMR权限名。
        * @example `AliyunEmrEcsDefaultRole`
        */ "UserDefinedEmrEcsRole"?: string;
        "OptionSoftWareList"?: string[];
        /**
        * 是否开启高可用集群。如果开启高可用，需要两台Master节点。
        * @example `true`
        */ "HighAvailabilityEnable"?: boolean;
        /**
        * 是否使用本地Hive元数据库。
        * @example `true`
        */ "UseLocalMetaDb"?: boolean;
        /**
        * 是否开启I/O优化，默认**true**。
        * @example `true`
        */ "IoOptimized"?: boolean;
        /**
        * 是否开启SSH。
        * @example `true`
        */ "SshEnable"?: boolean;
        /**
        * ECS实例分代。
        * @example `ecs-3`
        */ "InstanceGeneration"?: string;
        /**
        * Master节点SSH访问密码。需要满足ECS的密码规则：8 - 30 个字符，且同时包含任意三项（大、小写字母、数字和特殊符号）。
        * @example `pwd`
        */ "MasterPwd"?: string;
        /**
        * 密钥对。
        * @example `test_pair`
        */ "KeyPairName"?: string;
        /**
        * 可选值：local, unified, user_rds 分别代表集群内部元数据、统一元数据和用户自建RDS作为元数据。
        * @example `local`
        */ "MetaStoreType"?: string;
        /**
        * 一个JSON字段，包含dbUrl, dbUserName, dbPassword分别代表RDS的连接串、用户名和密码。dbUrl 中要带上库名
        * @example `{"dbUrl":"jdbc:mysql://rm-xxxxx.mysql.rds.aliyuncs.com:3306/hivemeta3?createDatabaseIfNotExist=true&characterEncoding=UTF-8","dbUserName":"user","dbPassword":"password"}`
        */ "MetaStoreConf"?: string;
        "UserInfo"?: string[];
        "HostComponentInfo"?: string[];
        /**
        * 托管类型。
        * @example `HALF_MANAGED`
        */ "DepositType"?: string;
        /**
        * 机器类型。
        * @example `ECS`
        */ "MachineType"?: string;
        "BootstrapAction"?: string[];
        /**
        * 保留字段，无需填写。
        * @example `false`
        */ "UseCustomHiveMetaDB"?: boolean;
        /**
        * 保留字段，无需填写。
        * @example `false`
        */ "InitCustomHiveMetaDB"?: boolean;
        "Config"?: string[];
        /**
        * 无需填写。
        * @example `0`
        */ "Configurations"?: string;
        /**
        * 是否高安全集群。
        * @example `false`
        */ "EasEnable"?: boolean;
        /**
        * 当前集群是gateway时，其关联的主集群ID。
        * @example `C-D7958B72E59B****`
        */ "RelatedClusterId"?: string;
        /**
        * 暂时无需填写。
        * @example `""`
        */ "WhiteListType"?: string;
        /**
        * 暂时无需填写。
        * @example `0`
        */ "AuthorizeContent"?: string;
    }): Promise<{
        "ClusterId": string;
        "RequestId": string;
    }>;
    /**
    * 调用 DescribeEmrMainVersion 接口查询集群 EMR 版本详情。
    */ DescribeEmrMainVersion(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * EMR版本。
        * @example `EMR-3.15.0`
        */ "EmrVersion"?: string;
    }): Promise<{
        "emrMainVersion": {
            "clusterTypeInfoList": {
                "clusterType": string;
                "serviceInfoList": {
                    "display": boolean;
                    "mandatory": boolean;
                    "serviceDisplayName": string;
                    "serviceDisplayVersion": string;
                    "serviceName": string;
                    "serviceVersion": string;
                }[];
            }[];
            "display": boolean;
            "ecmVersion": boolean;
            "emrVersion": string;
            "imageId": string;
            "regionId": string;
            "stackName": string;
            "stackVersion": string;
            "whiteUserList": string[];
        };
        "requestId": string;
    }>;
    /**
    * 调用 DescribeClusterV2接口，查询集群的基本信息，包括：付费、ECS机器概况、E-MapReduce服务服务列表等。
    */ DescribeClusterV2(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 集群ID。
        * @example `C-E331B8AC12BF****`
        */ "Id": string;
    }): Promise<{
        "code": string;
        "data": {
            "ClusterInfo": {
                "AutoScalingAllowed": boolean;
                "AutoScalingEnable": boolean;
                "AutoScalingSpotWithLimitAllowed": boolean;
                "BootstrapActionList": {
                    "BootstrapAction": any[];
                };
                "BootstrapFailed": boolean;
                "ChargeType": string;
                "Configurations": string;
                "CoreNodeInService": number;
                "CoreNodeTotal": number;
                "CreateResource": string;
                "CreateType": string;
                "EasEnable": boolean;
                "GatewayClusterInfoList": {
                    "GatewayClusterInfo": any[];
                };
                "HighAvailabilityEnable": boolean;
                "HostGroupList": {
                    "HostGroup": {
                        "ChargeType": string;
                        "CpuCore": number;
                        "DiskCapacity": number;
                        "DiskCount": number;
                        "DiskType": string;
                        "HostGroupId": string;
                        "HostGroupName": string;
                        "HostGroupType": string;
                        "InstanceType": string;
                        "MemoryCapacity": number;
                        "NodeCount": number;
                        "Nodes": {
                            "Node": {
                                "CreateTime": string;
                                "DaemonInfos": {
                                    "DaemonInfo": any[];
                                };
                                "DiskInfos": {
                                    "DiskInfo": {
                                        "Device": string;
                                        "DiskId": string;
                                        "Size": number;
                                        "Type": string;
                                    }[];
                                };
                                "EmrExpiredTime": string;
                                "ExpiredTime": string;
                                "InnerIp": string;
                                "InstanceId": string;
                                "PubIp": string;
                                "Status": string;
                                "ZoneId": string;
                            }[];
                        };
                    }[];
                };
                "Id": string;
                "ImageId": string;
                "IoOptimized": boolean;
                "LocalMetaDb": boolean;
                "MasterNodeInService": number;
                "MasterNodeTotal": number;
                "Name": string;
                "NetType": string;
                "RegionId": string;
                "ResizeDiskEnable": boolean;
                "RunningTime": number;
                "SecurityGroupId": string;
                "SecurityGroupName": string;
                "ShowSoftwareInterface": boolean;
                "SoftwareInfo": {
                    "ClusterType": string;
                    "EmrVer": string;
                    "Softwares": {
                        "Software": {
                            "DisplayName": string;
                            "Name": string;
                            "OnlyDisplay": boolean;
                            "StartTpe": number;
                            "Version": string;
                        }[];
                    };
                };
                "StartTime": number;
                "Status": string;
                "TaskNodeInService": number;
                "TaskNodeTotal": number;
                "UserDefinedEmrEcsRole": string;
                "UserId": string;
                "VSwitchId": string;
                "VpcId": string;
                "ZoneId": string;
            };
            "RequestId": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用DescribeClusterBasicInfo接口查询已创建的集群实例。
    */ DescribeClusterBasicInfo(query: {
        /**
        * 集群实例所在的地域，您可以通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * 目标集群的业务ID。
        * @example `C-0EF9B0EC8564****`
        */ "ClusterId": string;
    }): Promise<{
        "ClusterInfo": {
            "ImageId": string;
            "SecurityGroupId": string;
            "DepositType": string;
            "CoreNodeInService": number;
            "ZoneId": string;
            "AutoScalingSpotWithLimitAllowed": boolean;
            "IoOptimized": boolean;
            "TaskNodeInService": number;
            "MachineType": string;
            "AutoScalingAllowed": boolean;
            "ShowSoftwareInterface": boolean;
            "ResizeDiskEnable": boolean;
            "SecurityGroupName": string;
            "BootstrapActionList": {
                "BootstrapAction": any[];
            };
            "CreateResource": string;
            "RegionId": string;
            "GatewayClusterInfoList": {
                "GatewayClusterInfo": any[];
            };
            "NetType": string;
            "MasterNodeInService": number;
            "AutoScalingByLoadAllowed": boolean;
            "SoftwareInfo": {
                "Softwares": {
                    "Software": {
                        "Name": string;
                        "OnlyDisplay": boolean;
                        "Version": string;
                        "DisplayName": string;
                        "StartTpe": number;
                    }[];
                };
                "EmrVer": string;
                "ClusterType": string;
            };
            "CreateType": string;
            "VSwitchId": string;
            "VpcId": string;
            "TaskNodeTotal": number;
            "BootstrapFailed": boolean;
            "CoreNodeTotal": number;
            "StartTime": number;
            "MasterNodeTotal": number;
            "ChargeType": string;
            "Configurations": string;
            "UserId": string;
            "Name": string;
            "EasEnable": boolean;
            "AutoScalingEnable": boolean;
            "Status": string;
            "LocalMetaDb": boolean;
            "HighAvailabilityEnable": boolean;
            "ClusterId": string;
            "RunningTime": number;
            "UserDefinedEmrEcsRole": string;
        };
        "RequestId": string;
    }>;
    CreateBackupPlan(query: {
        "RegionId": string;
        "Name"?: string;
        "Description"?: string;
        "ClusterId"?: string;
        "RootPath"?: string;
    }): Promise<{}>;
    DeleteUserResourceRole(query: {
        "RegionId": string;
        "AliyunUserId": string;
        "ResourceType": string;
        "ResourceId": string;
        "RoleId": number;
    }): Promise<{}>;
    CreateBatchUsers(query: {
        "RegionId": string;
        "UserBaseParamList": string[];
        "RoleId"?: number[];
        "GroupId"?: number[];
        "Description"?: string;
    }): Promise<{}>;
    CreateUser(query: {
        "RegionId": string;
        "UserName": string;
        "AliyunUserId"?: string;
        "UserType"?: string;
        "Status"?: string;
        "Description"?: string;
        "RoleIdList"?: number[];
        "GroupIdList"?: number[];
        "UserAccountParamList"?: string[];
    }): Promise<{}>;
    DeleteExecutionPlan(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    ListClusterInstalledService(query: {
        "RegionId": string;
        "ClusterId": string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListExecutionPlanInstances(query: {
        "RegionId": string;
        "ExecutionPlanIdList": string[];
        "OnlyLastInstance"?: boolean;
        "StatusList"?: string[];
        "IsDesc"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ModifyScalingRule(query: {
        "RegionId": string;
        "ScalingRuleId": string;
        "ClusterId": string;
        "HostGroupId": string;
        "RuleName": string;
        "AdjustmentType"?: string;
        "AdjustmentValue"?: number;
        "Cooldown"?: number;
        "LaunchTime"?: string;
        "LaunchExpirationTime"?: number;
        "RecurrenceType"?: string;
        "RecurrenceValue"?: string;
        "RecurrenceEndTime"?: string;
        "SchedulerTrigger"?: string[];
        "CloudWatchTrigger"?: string[];
    }): Promise<{}>;
    AddResourceToUsers(query: {
        "RegionId": string;
        "UserIdList": string[];
        "ResourceType": string;
        "ResourceId": string;
        "RoleIdList": number[];
    }): Promise<{}>;
    CreateParagraph(query: {
        "RegionId": string;
        "NoteId": string;
        "Text"?: string;
    }): Promise<{}>;
    CreateUserGroup(query: {
        "RegionId": string;
        "Name": string;
        "Type"?: string;
        "Description"?: string;
        "RoleIdList"?: number[];
    }): Promise<{}>;
    DeleteBatchResourceUsers(query: {
        "RegionId": string;
        "UserIdList": string[];
        "ResourceType": string;
        "ResourceId": string;
    }): Promise<{}>;
    DeleteResourceUser(query: {
        "RegionId": string;
        "AliyunUserId": string;
        "ResourceType": string;
        "ResourceId": string;
    }): Promise<{}>;
    DescribeClusterServiceConfigHistory(query: {
        "RegionId": string;
        "ClusterId": string;
        "ServiceName": string;
        "ConfigVersion": string;
    }): Promise<{}>;
    DescribeJob(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    DescribeScalingRule(query: {
        "RegionId": string;
        "ScalingRuleId": string;
        "ClusterId"?: string;
        "HostGroupId"?: string;
    }): Promise<{}>;
    DescribeUser(query: {
        "RegionId": string;
        "AliyunUserId": string;
    }): Promise<{}>;
    GetQueueSubmissionStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
        "ApplicationType"?: string;
        "FinalStatus"?: string;
    }): Promise<{}>;
    GetUserInputStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
    }): Promise<{}>;
    GetUserOutputStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
    }): Promise<{}>;
    ListApmApplication(query: {
        "RegionId": string;
        "StartTimeFrom": number;
        "StartTimeTo": number;
        "EndTimeFrom"?: number;
        "EndTimeTo"?: number;
        "ClusterId"?: string;
        "AppId"?: string;
        "State"?: string;
        "FinalStatus"?: string;
        "User"?: string;
        "Queue"?: string;
        "Name"?: string;
        "JobType"?: string;
        "OrderBy"?: string;
        "DiagnoseResult"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListFlowNodeInstance(query: {
        "RegionId": string;
        "ProjectId"?: string;
        "StartTime"?: number;
        "StatusList"?: string[];
        "OrderBy"?: string;
        "OrderType"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListJobInstanceWorkers(query: {
        "RegionId": string;
        "JobInstanceId": string;
    }): Promise<{}>;
    ListNotes(query: {
        "RegionId": string;
    }): Promise<{}>;
    ListUsers(query: {
        "RegionId": string;
        "ClusterId"?: string;
        "Type"?: string;
    }): Promise<{}>;
    ModifyFlowProjectClusterSetting(query: {
        "RegionId": string;
        "ProjectId": string;
        "ClusterId": string;
        "DefaultUser"?: string;
        "DefaultQueue"?: string;
        "UserList"?: string[];
        "QueueList"?: string[];
        "HostList"?: string[];
    }): Promise<{}>;
    ModifyJob(query: {
        "RegionId": string;
        "Id": string;
        "Name"?: string;
        "Type"?: string;
        "RunParameter"?: string;
        "FailAct"?: string;
        "MaxRetry"?: number;
        "RetryInterval"?: number;
    }): Promise<{}>;
    QueryUserPolicies(query: {
        "RegionId": string;
        "ResourceType"?: string;
        "ResourceId"?: string;
    }): Promise<{}>;
    SaveUserAccountInfo(query: {
        "RegionId": string;
        "AliyunUserId": string;
        "AccountType": string;
        "AccountPassword": string;
        "GroupName"?: string;
        "AuthType"?: string;
    }): Promise<{}>;
    AddUserResourceRole(query: {
        "RegionId": string;
        "AliyunUserId": string;
        "ResourceType": string;
        "ResourceId": string;
        "RoleId": number;
    }): Promise<{}>;
    AuthorizeSecurityGroup(query: {
        "RegionId": string;
        "ClusterId": string;
        "BizType": string;
        "BizContent"?: string;
    }): Promise<{}>;
    CancelOrder(query: {
        "RegionId": string;
        "ClusterId": string;
    }): Promise<{}>;
    CreateBackup(query: {
        "RegionId": string;
        "BackupPlanId": string;
        "MetadataType"?: string;
    }): Promise<{}>;
    CreateDataSource(query: {
        "RegionId": string;
        "Name": string;
        "SourceType": string;
        "Description"?: string;
        "Conf"?: string;
        "ClusterId"?: string;
        "NavParentId"?: string;
    }): Promise<{}>;
    CreateExecutionPlan(query: {
        "RegionId": string;
        "Name": string;
        "Strategy": string;
        "JobIdList": string[];
        "TimeInterval"?: number;
        "StartTime"?: number;
        "TimeUnit"?: string;
        "DayOfWeek"?: string;
        "DayOfMonth"?: string;
        "ClusterId"?: string;
        "CreateClusterOnDemand"?: boolean;
        "ClusterName"?: string;
        "ZoneId"?: string;
        "LogEnable"?: boolean;
        "LogPath"?: string;
        "SecurityGroupId"?: string;
        "IsOpenPublicIp"?: boolean;
        "EmrVer"?: string;
        "OptionSoftWareList"?: string[];
        "ClusterType"?: string;
        "HighAvailabilityEnable"?: boolean;
        "UseLocalMetaDb"?: boolean;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "NetType"?: string;
        "UserDefinedEmrEcsRole"?: string;
        "IoOptimized"?: boolean;
        "InstanceGeneration"?: string;
        "EcsOrder"?: string[];
        "BootstrapAction"?: string[];
        "UseCustomHiveMetaDB"?: boolean;
        "InitCustomHiveMetaDB"?: boolean;
        "Config"?: string[];
        "Configurations"?: string;
        "EasEnable"?: boolean;
        "WorkflowDefinition"?: string;
    }): Promise<{}>;
    CreateFlow(query: {
        "RegionId": string;
        "ProjectId": string;
        "Name": string;
        "Description": string;
        "StartSchedule"?: number;
        "EndSchedule"?: number;
        "CronExpr"?: string;
        "CreateCluster"?: boolean;
        "ClusterId"?: string;
        "HostName"?: string;
        "Application"?: string;
        "AlertConf"?: string;
        "AlertUserGroupBizId"?: string;
        "AlertDingDingGroupBizId"?: string;
        "ParentFlowList"?: string;
        "ParentCategory"?: string;
    }): Promise<{}>;
    CreateJob(query: {
        "RegionId": string;
        "Name": string;
        "Type": string;
        "RunParameter": string;
        "FailAct": string;
        "MaxRetry"?: number;
        "RetryInterval"?: number;
    }): Promise<{}>;
    CreateNote(query: {
        "RegionId": string;
        "Name": string;
        "Type": string;
        "ClusterId"?: string;
    }): Promise<{}>;
    CreateScalingRule(query: {
        "RegionId": string;
        "ClusterId": string;
        "HostGroupId": string;
        "RuleCategory": string;
        "RuleName": string;
        "AdjustmentType": string;
        "AdjustmentValue": number;
        "Cooldown"?: number;
        "LaunchTime"?: string;
        "LaunchExpirationTime"?: number;
        "RecurrenceType"?: string;
        "RecurrenceValue"?: string;
        "RecurrenceEndTime"?: string;
        "SchedulerTrigger"?: string[];
        "CloudWatchTrigger"?: string[];
    }): Promise<{}>;
    CreateUsers(query: {
        "RegionId": string;
        "UserInfo": string[];
        "ClusterId"?: string;
    }): Promise<{}>;
    DeleteJob(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteNote(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteScalingRule(query: {
        "RegionId": string;
        "ScalingRuleId": string;
        "ClusterId"?: string;
        "HostGroupId"?: string;
    }): Promise<{}>;
    DeleteUser(query: {
        "RegionId": string;
        "ClusterId": string;
        "UserId": string;
        "Type": string;
    }): Promise<{}>;
    DeleteUserGroup(query: {
        "RegionId": string;
        "GroupId": number;
    }): Promise<{}>;
    DescribeDataSource(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    DescribeExecutionPlan(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    DescribeScalingActivity(query: {
        "RegionId": string;
        "ScalingActivityId": string;
        "ClusterId"?: string;
        "HostGroupId"?: string;
    }): Promise<{}>;
    DescribeSecurityGroupAttribute(query: {
        "RegionId": string;
        "ClusterId": string;
    }): Promise<{}>;
    DescribeUserGroup(query: {
        "RegionId": string;
        "GroupId": number;
    }): Promise<{}>;
    GetHdfsCapacityStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
    }): Promise<{}>;
    GetJobInputStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    GetJobOutputStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    GetJobRunningTimeStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    GetQueueInputStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
    }): Promise<{}>;
    GetQueueOutputStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
    }): Promise<{}>;
    GetUserSubmissionStatisticInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "FromDatetime": string;
        "ToDatetime": string;
        "ApplicationType"?: string;
        "FinalStatus"?: string;
    }): Promise<{}>;
    KillExecutionJobInstance(query: {
        "RegionId": string;
        "JobInstanceId": string;
    }): Promise<{}>;
    ListBackups(query: {
        "RegionId": string;
        "Limit"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "CurrentSize"?: number;
        "PageCount"?: number;
        "OrderField"?: string;
        "OrderMode"?: string;
        "Id"?: number;
        "BizId"?: string;
        "MetadataType"?: string;
        "ServiceName"?: string;
        "BackupPlanId"?: string;
        "ClusterId"?: string;
        "Status"?: string;
        "BackupId"?: string[];
    }): Promise<{}>;
    ListClusterSupportService(query: {
        "RegionId": string;
        "ClusterId": string;
    }): Promise<{}>;
    ListDataSource(query: {
        "RegionId": string;
        "PageSize"?: number;
        "PageNumber"?: number;
        "Id"?: string;
        "ProjectId"?: string;
        "Name"?: string;
        "SourceType"?: string;
        "CreateFrom"?: string;
    }): Promise<{}>;
    ListExecutionPlans(query: {
        "RegionId": string;
        "ClusterId"?: string;
        "JobId"?: string;
        "Strategy"?: string;
        "StatusList"?: string[];
        "IsDesc"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
        "QueryType"?: string;
        "QueryString"?: string;
    }): Promise<{}>;
    ListFlowCategory(query: {
        "RegionId": string;
        "ProjectId": string;
        "ParentId"?: string;
        "Root"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListJobExecutionInstances(query: {
        "RegionId": string;
        "ExecutionPlanInstanceId": string;
        "IsDesc"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListJobs(query: {
        "RegionId": string;
        "IsDesc"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
        "QueryType"?: string;
        "QueryString"?: string;
    }): Promise<{}>;
    ListRoles(query: {
        "RegionId": string;
        "ResourceType"?: string;
    }): Promise<{}>;
    ListStack(query: {
        "RegionId": string;
        "StackName"?: string;
        "StackVersion"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListUserGroups(query: {
        "RegionId": string;
        "FuzzyName"?: string;
    }): Promise<{}>;
    ListUsersByCondition(query: {
        "RegionId": string;
        "SearchKey"?: string;
    }): Promise<{}>;
    ModifyExecutionPlan(query: {
        "RegionId": string;
        "Id": string;
        "Name": string;
        "Strategy": string;
        "JobIdList": string[];
        "ClusterName"?: string;
        "ClusterId"?: string;
        "ZoneId"?: string;
        "LogEnable"?: boolean;
        "LogPath"?: string;
        "SecurityGroupId"?: string;
        "IsOpenPublicIp"?: boolean;
        "CreateClusterOnDemand"?: boolean;
        "EmrVer"?: string;
        "OptionSoftWareList"?: string[];
        "ClusterType"?: string;
        "HighAvailabilityEnable"?: boolean;
        "UseLocalMetaDb"?: boolean;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "NetType"?: string;
        "UserDefinedEmrEcsRole"?: string;
        "IoOptimized"?: boolean;
        "InstanceGeneration"?: string;
        "EasEnable"?: boolean;
        "WorkflowDefinition"?: string;
        "EcsOrder"?: string[];
        "BootstrapAction"?: string[];
        "UseCustomHiveMetaDB"?: boolean;
        "InitCustomHiveMetaDB"?: boolean;
        "Config"?: string[];
        "Configurations"?: string;
        "ExecutionPlanVersion"?: number;
        "TimeInterval"?: number;
        "StartTime"?: number;
        "TimeUnit"?: string;
        "DayOfWeek"?: string;
        "DayOfMonth"?: string;
    }): Promise<{}>;
    ModifyFlow(query: {
        "RegionId": string;
        "ProjectId": string;
        "Id": string;
        "Name"?: string;
        "Status"?: string;
        "Description"?: string;
        "Periodic"?: boolean;
        "StartSchedule"?: number;
        "EndSchedule"?: number;
        "CronExpr"?: string;
        "CreateCluster"?: boolean;
        "ClusterId"?: string;
        "HostName"?: string;
        "Application"?: string;
        "AlertConf"?: string;
        "AlertUserGroupBizId"?: string;
        "AlertDingDingGroupBizId"?: string;
        "ParentFlowList"?: string;
        "ParentCategory"?: string;
    }): Promise<{}>;
    ModifyFlowCategory(query: {
        "RegionId": string;
        "ProjectId": string;
        "Id": string;
        "Name"?: string;
        "ParentId"?: string;
    }): Promise<{}>;
    PageListResourceUsers(query: {
        "RegionId": string;
        "ResourceType": string;
        "ResourceId": string;
        "PageNumber": number;
        "SearchKey"?: string;
        "PageSize"?: number;
    }): Promise<{}>;
    PageListUserGroups(query: {
        "RegionId": string;
        "PageNumber": number;
        "PageSize"?: number;
        "FuzzyName"?: string;
    }): Promise<{}>;
    PageListUsers(query: {
        "RegionId": string;
        "PageNumber": number;
        "PageSize"?: number;
        "FuzzyName"?: string;
    }): Promise<{}>;
    QueryAlarmHistory(query: {
        "RegionId": string;
        "ClusterId": string;
        "StartTimeStamp": number;
        "EndTimeStamp": number;
        "Cursor"?: string;
        "Size"?: number;
    }): Promise<{}>;
    QueryUserActionsPolicy(query: {
        "RegionId": string;
        "ActionNameList": string[];
        "AliyunUserId"?: string;
        "ResourceType"?: string;
        "ResourceId"?: string;
    }): Promise<{}>;
    RestoreBackup(query: {
        "RegionId": string;
        "BackupPlanId": string;
        "BackupId": string;
    }): Promise<{}>;
    ResumeExecutionPlanScheduler(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    RetrySyncUserAccount(query: {
        "RegionId": string;
        "AliyunUserIdList": string[];
        "AccountType": string;
        "ResourceType": string;
        "ResourceId": string;
    }): Promise<{}>;
    RunExecutionPlan(query: {
        "RegionId": string;
        "Id": string;
        "Arguments"?: string;
    }): Promise<{}>;
    SaveBatchUserAccountInfo(query: {
        "RegionId": string;
        "AliyunUserIdList": string[];
        "AccountType": string;
        "AccountPassword": string;
        "ResourceType": string;
        "ResourceId": string;
        "GroupName"?: string;
        "AuthType"?: string;
    }): Promise<{}>;
    SearchLog(query: {
        "RegionId": string;
        "ClusterId": string;
        "LogstoreName": string;
        "FromTimestamp": number;
        "ToTimestamp": number;
        "SlsQueryString": string;
        "Offset": number;
        "Line": number;
        "Reverse": boolean;
        "HostInnerIp"?: string;
        "HostName"?: string;
    }): Promise<{}>;
    StartFlow(query: {
        "RegionId": string;
        "ProjectId": string;
        "FlowInstanceId": string;
    }): Promise<{}>;
    SuspendExecutionPlanScheduler(query: {
        "RegionId": string;
        "Id": string;
    }): Promise<{}>;
    UpdateDataSource(query: {
        "RegionId": string;
        "Id": string;
        "Name": string;
        "Description": string;
        "Conf": string;
    }): Promise<{}>;
    UpdateUser(query: {
        "RegionId": string;
        "UserName": string;
        "AliyunUserId"?: string;
        "UserType"?: string;
        "Status"?: string;
        "Description"?: string;
        "RoleIdList"?: number[];
        "GroupIdList"?: number[];
        "UserAccountParamList"?: string[];
    }): Promise<{}>;
    UpdateUserGroup(query: {
        "RegionId": string;
        "Id": number;
        "Name": string;
        "Type"?: string;
        "Description"?: string;
        "RoleId"?: number[];
    }): Promise<{}>;
    UpdateUserStatus(query: {
        "RegionId": string;
        "AliyunUserId": string;
        "UpdateStatus": string;
    }): Promise<{}>;
}
export default EMR;
