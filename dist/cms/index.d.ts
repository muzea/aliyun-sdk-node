interface CMS {
    /**
    * 删除自定义监控上报数据。
    */ DeleteCustomMetric(query: {
        "RegionId"?: string;
        /**
        * 监控项的名称。
        * @example `cpu`
        */ "MetricName": string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": string;
        /**
        * md5校验码， 在查询监控列表的时候会返回。
        * @example `38796C8CFFEB8F89BB2A626C7BD79FD3`
        */ "Md5"?: string;
        /**
        * 用于区分metric唯一性的参数，在查询自定义metric的时候会返回。
        * @example `5497633c-66c5-4eae-abaa-89db5adb****`
        */ "UUID"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 查询各个产品指定时间段内事件的数量。
    */ DescribeSystemEventCount(query: {
        "RegionId"?: string;
        /**
        * 产品的名称缩写，具体都有哪些产品接入的系统事件监控，请调用：DescribeSystemEventMetaList接口。
        * @example `oss`
        */ "Product"?: string;
        /**
        * 事件类型，不同的产品事件有不同的类型，调用：DescribeSystemEventMetaList接口获得产品以及产品的事件类型。
        * @example `Exception`
        */ "EventType"?: string;
        /**
        * 事件的名称。
        * @example `BucketIngressBandwidth`
        */ "Name"?: string;
        /**
        * 事件的级别， CRITICAL（严重), WARN(警告), INFO(信息)。
        * @example `warn`
        */ "Level"?: string;
        /**
        * 状态，多个状态用英文逗号分隔。
        * @example `normal`
        */ "Status"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 搜索事件内容包含的关键字，支持 and 或者 or。
        * - 如果想要搜索事件内容中即包括a也包括b的结果，可以搜索 a and b；
        * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
        * @example `cms`
        */ "SearchKeywords"?: string;
        /**
        * 开始时间，距离1970 年 1 月 1 日 0 点的毫秒数。
        * @example `1552209685596`
        */ "StartTime"?: string;
        /**
        * 结束时间，距离 1970 年 1 月 1 日 0 点的毫秒数。
        * @example `1552220485596`
        */ "EndTime"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Data": string;
        "Code": string;
        "Success": boolean;
    }>;
    /**
    * 启用一个或者多个事件监控报警规则。
    */ EnableEventRules(query: {
        "RegionId"?: string;
        "RuleNames": string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 将报警模板应用到分组，生成报警规则。
    */ ApplyMetricRuleTemplate(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
        /**
        * 报警模板ID。
        * @example `123`
        */ "TemplateIds": string;
        /**
        * 通道沉默周期，单位为秒。默认86400秒（即1天）。监控数据持续超过报警规则阈值时，每个沉默周期内只发送1次报警通知。
        * @example `86400`
        */ "SilenceTime"?: number;
        /**
        * 报警生效的起始时间周期， 选值为00-23，表示00：00 到23：00。
        * @example `00`
        */ "EnableStartTime"?: number;
        /**
        * 报警生效的结束时间周期， 选值为00-23，表示00：59 到23：59。
        * @example `23`
        */ "EnableEndTime"?: number;
        "NotifyLevel"?: number;
        /**
        * - GROUP_INSTANCE_FIRST：实例分组优先， 即应用报警模板的时候，以分组实例优先，如果分组中不存在这种实例则忽略模板中的规则。
        * - ALARM_TEMPLATE_FIRST：模板实例优先，即应用报警模板的时候，不管分组中是否存在这种实例，都创建出这种规则。
        * @example `GROUP_INSTANCE_FIRST`
        */ "ApplyMode"?: string;
        /**
        * 报警发生时会回调指定的URL地址。向URL发送POST请求。
        * @example `http://www.aliyun.com`
        */ "Webhook"?: string;
    }): Promise<{
        "RequestId": string;
        "Resource": {
            "AlertResults": {
                "DisplayName": string;
                "Code": number;
                "Success": boolean;
                "Name": string;
                "GroupId": number;
            }[];
            "GroupId": number;
        };
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 查询云监控插件运行状态。
    */ DescribeMonitoringAgentStatuses(query: {
        "RegionId"?: string;
        /**
        * 要获取状态的实例ID，多个实例ID直接用英文逗号分隔。
        * @example `i-12345w55tr2rcpejp****,i-23456w55tr2rcpejp****`
        */ "InstanceIds": string;
    }): Promise<{
        "NodeStatusList": {
            "NodeStatus": {
                "Status": string;
                "InstanceId": string;
                "AutoInstall": boolean;
            }[];
        };
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 禁用一个可用性监控任务。
    */ DisableHostAvailability(query: {
        "RegionId"?: string;
        "Id": number[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 创建可用性监控任务。
    */ CreateHostAvailability(query: {
        "RegionId"?: string;
        /**
        * 任务名称。
        * @example `我的探测任务`
        */ "TaskName": string;
        /**
        * 任务类型，支持PING、TELNET、HTTP 三种类型。
        * @example `HTTP`
        */ "TaskType": string;
        /**
        * 报警通知类型：
        * + 2：电话+短信+邮件+钉钉机器人,
        * + 1：短信+邮件+钉钉机器人
        * + 0：邮件+钉钉机器人
        * @example `2`
        */ "AlertConfig.NotifyType": number;
        "AlertConfigEscalationList": string[];
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
        /**
        * 任务范围：
        * - GROUP：表示做里的所有ECS作为探测任务的探针。
        * - INSTANCE：如果选择了INSTANCE 则需要设置InstanceList参数。
        * @example `GROUP`
        */ "TaskScope"?: string;
        /**
        * HTTP探测类型的探测URI地址。
        * @example `http://www.aliyun.com`
        */ "TaskOption.HttpURI"?: string;
        /**
        * 如果探测任务是PING或者TELNET，此处写入要探测的域名或者地址。
        * @example `www.aliyun.com`
        */ "TaskOption.TelnetOrPingHost"?: string;
        /**
        * HTTP探测类型响应字符集。
        * @example `UTF-8`
        */ "TaskOption.HttpResponseCharset"?: string;
        /**
        * 匹配响应的内容。
        * @example `ok`
        */ "TaskOption.HttpResponseMatchContent"?: string;
        /**
        * HTTP探测类型的方法，目前支持GET、POST、HEAD 三种方法。
        * @example `GET`
        */ "TaskOption.HttpMethod"?: string;
        /**
        * true：包含内容则报警。
        * false：不包含内容则报警。
        * @example `true`
        */ "TaskOption.HttpNegative"?: boolean;
        /**
        * 报警开始时间，单位是小时，0表示00:00。
        * @example `0`
        */ "AlertConfig.StartTime"?: number;
        /**
        * 报警结束时间，单位是小时，0表示00:59。
        * @example `23`
        */ "AlertConfig.EndTime"?: number;
        /**
        * 通道沉默时间，单位是秒，默认86400（1天）。
        * @example `86400`
        */ "AlertConfig.SilenceTime"?: number;
        /**
        * URL回调地址。
        * @example `http://www.aliyun.com/webhook.json`
        */ "AlertConfig.WebHook"?: string;
        "InstanceList"?: string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "TaskId": number;
        "Code": number;
    }>;
    /**
    * 删除指定应用分组的报警通知暂停策略。
    */ DeleteMonitorGroupNotifyPolicy(query: {
        /**
        * 资源所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 暂停通知类型，目前仅支持PauseNotify。
        * @example `PauseNotify`
        */ "PolicyType": string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
    }): Promise<{
        "Success": boolean;
        "Code": number;
        "Result": number;
        "RequestId": string;
    }>;
    /**
    * 查询系统事件详情。
    */ DescribeSystemEventAttribute(query: {
        "RegionId"?: string;
        /**
        * 产品的名称缩写。
        * @example `oss`
        */ "Product"?: string;
        /**
        * 事件类型，不同的产品事件有不同的类型。
        * @example `Exception`
        */ "EventType"?: string;
        /**
        * 事件的名称。
        * @example `BucketIngressBandwidth`
        */ "Name"?: string;
        /**
        * 事件的级别， CRITICAL（严重), WARN(警告), INFO(信息)。
        * @example `warn`
        */ "Level"?: string;
        /**
        * 状态，多个用逗号分隔。
        * @example `normal`
        */ "Status"?: string;
        /**
        * 组ID。
        * @example `12346`
        */ "GroupId"?: string;
        /**
        * 搜索事件内容包含的关键字，支持 and 或者 or。
        * 如果想要搜索事件内容中即包括a也包括b的结果，可以搜索 a and b；
        * 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
        * @example `cms`
        */ "SearchKeywords"?: string;
        /**
        * 开始时间。
        * @example `1552199984949`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `1552221584949`
        */ "EndTime"?: string;
        /**
        * 页码，默认为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页显示记录条数。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Data": string;
        "Code": string;
        "Success": boolean;
    }>;
    /**
    * 上报自定义事件数据监控数据。
    */ PutCustomEvent(query: {
        "RegionId"?: string;
        "EventInfo"?: string[];
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 对指定ECS安装云监控插件。不适用于非阿里云ECS 的服务器。
    */ InstallMonitoringAgent(query: {
        "RegionId"?: string;
        "InstanceIds": string[];
        /**
        * 是否强制安装，默认值为强制安装。
        * @example `true`
        */ "Force"?: boolean;
    }): Promise<{
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询云监控插件全局配置。
    */ DescribeMonitoringConfig(query: {
        "RegionId"?: string;
    }): Promise<{
        "RequestId": string;
        "ActiveAlertProducts": string;
        "EnableInstallAgentNewECS": boolean;
        "Success": boolean;
        "Code": number;
        "AutoInstall": boolean;
    }>;
    /**
    * 查询应用分组动态规则的列表。
    */ DescribeMonitorGroupDynamicRules(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `123456`
        */ "GroupId": number;
    }): Promise<{
        "Resource": {
            "Resource": {
                "Filters": {
                    "Filter": {
                        "Name": string;
                        "Value": string;
                        "Function": string;
                    }[];
                };
                "Category": string;
                "FilterRelation": string;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 禁用一个或多个报警规则。
    */ DisableMetricRules(query: {
        "RegionId"?: string;
        "RuleId": string[];
    }): Promise<{
        "Code": string;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 查询应用分组列表。
    */ DescribeMonitorGroups(query: {
        "RegionId"?: string;
        /**
        * 返回结果中是否需要包含报警联系人组。
        * @example `true`
        */ "SelectContactGroups"?: boolean;
        /**
        * 分页页码， 默认1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页大小，默认10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 应用分组名称。可根据应用分组名称模糊查询。
        * @example `test`
        */ "Keyword"?: string;
        /**
        * 资源实例ID。查询指定实例所在的应用分组。
        * @example `xxx-1`
        */ "InstanceId"?: string;
        /**
        * 应用分组名称。
        * @example `我的组`
        */ "GroupName"?: string;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
        "Total": number;
        "Resources": {
            "Resource": {
                "GroupName": string;
                "Type": string;
                "ContactGroups": {
                    "ContactGroup": {
                        "Name": string;
                    }[];
                };
                "ServiceId": number;
                "GmtCreate": number;
                "GmtModified": number;
                "GroupId": number;
            }[];
        };
    }>;
    /**
    * 删除报警规则关联的资源。
    */ DeleteMetricRuleResources(query: {
        "RegionId"?: string;
        /**
        * 关联的资源，格式为一个json数组，如：
        * ```
        * [{"instanceId":"*****ixxxId1"}]
        * ```
        * @example `[{"instanceId":"*****ixxxId1"}]`
        */ "Resources": string;
        /**
        * 报警规则ID。
        * @example `i-2ze3w55tr2rcpejpcfap_59******1`
        */ "RuleId"?: string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Message": string;
        "Code": string;
    }>;
    /**
    * 查询系统事件的时段数量分布图（柱状图）。
    */ DescribeSystemEventHistogram(query: {
        "RegionId"?: string;
        /**
        * 产品的名称缩写。
        * @example `oss`
        */ "Product"?: string;
        /**
        * 事件类型，不同的产品事件有不同的类型。
        * @example `Exception`
        */ "EventType"?: string;
        /**
        * 事件名称。
        * @example `BucketIngressBandwidth`
        */ "Name"?: string;
        /**
        * 事件级别， CRITICAL（严重), WARN(警告), INFO(信息)。
        * @example `CRITICAL`
        */ "Level"?: string;
        /**
        * 状态，多个用逗号分隔。
        * @example `normal`
        */ "Status"?: string;
        /**
        * 组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 搜索事件内容包含的关键字，支持 and 或者 or。
        * 如果想要搜索事件内容中即包括a也包括b的结果，可以搜索 a and b；
        * 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
        * @example `cms`
        */ "SearchKeywords"?: string;
        /**
        * 开始时间。
        * @example `1552209685596`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `1552220485596`
        */ "EndTime"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页显示记录条数。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "SystemEventHistograms": {
            "SystemEventHistogram": {
                "Count": number;
                "EndTime": number;
                "StartTime": number;
            }[];
        };
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 修改可用性监控任务。
    */ ModifyHostAvailability(query: {
        "RegionId"?: string;
        /**
        * 任务ID。
        * @example `12345`
        */ "Id": number;
        /**
        * 任务名称。
        * @example `我的探测任务`
        */ "TaskName": string;
        /**
        * 报警通知类型：
        * + 2：电话+短信+邮件+钉钉机器人,
        * + 1：短信+邮件+钉钉机器人
        * + 0：邮件+钉钉机器人
        * @example `2`
        */ "AlertConfig.NotifyType": number;
        "AlertConfigEscalationList": string[];
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
        /**
        * 任务范围：
        * - GROUP：表示做里的所有ECS作为探测任务的探针
        * - INSTANCE：如果选择了INSTANCE 则需要设置InstanceList参数。
        * @example `GROUP`
        */ "TaskScope"?: string;
        /**
        * HTTP探测类型的探测URI地址。
        * @example `http://www.aliyun.com`
        */ "TaskOption.HttpURI"?: string;
        /**
        * 如果探测任务是PING或者TELNET，此处写入要探测的域名或者地址。
        * @example `www.aliyun.com`
        */ "TaskOption.TelnetOrPingHost"?: string;
        /**
        * HTTP探测类型响应字符集。
        * @example `UTF-8`
        */ "TaskOption.HttpResponseCharset"?: string;
        /**
        * 匹配响应的内容。
        * @example `ok`
        */ "TaskOption.HttpResponseMatchContent"?: string;
        /**
        * HTTP探测类型的方法，目前支持GET、POST、HEAD 三种种方法。
        * @example `GET`
        */ "TaskOption.HttpMethod"?: string;
        /**
        * - true：包含内容则报警。
        * - false：不包含内容则报警。
        * @example `true`
        */ "TaskOption.HttpNegative"?: boolean;
        /**
        * 报警开始时间，单位是小时，0表示00:00。
        * @example `0`
        */ "AlertConfig.StartTime"?: number;
        /**
        * 报警结束时间，单位是小时，0表示00:59。
        * @example `23`
        */ "AlertConfig.EndTime"?: number;
        /**
        * 通道沉默时间，单位是秒，默认86400（1天）。
        * @example `86400`
        */ "AlertConfig.SilenceTime"?: number;
        /**
        * URL回调地址。
        * @example `http://www.aliyun.com/webhook.json`
        */ "AlertConfig.WebHook"?: string;
        "InstanceList"?: string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询自定义事件的详情。
    */ DescribeCustomEventAttribute(query: {
        "RegionId"?: string;
        /**
        * 事件名称。
        * @example `BOSS-SYNC`
        */ "Name"?: string;
        /**
        * 事件级别， CRITICAL（严重)、WARN(警告)、 INFO(信息)。
        * @example `WARN`
        */ "Level"?: string;
        /**
        * 事件ID。
        * @example `123`
        */ "EventId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 搜索事件内容包含的关键字，支持 and 或者 or。
        * - 如果想要搜索事件内容中即包括a又包括b的结果，可以搜索 a and b
        * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b
        * @example `cms`
        */ "SearchKeywords"?: string;
        /**
        * 开始时间。
        * @example `1552224365971`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `1552227965971`
        */ "EndTime"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页记录条数。
        * @example `50`
        */ "PageSize"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "CustomEvents": {
            "CustomEvent": {
                "Name": string;
                "Time": number;
                "Id": string;
                "Content": string;
                "GroupId": string;
            }[];
        };
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询一键报警规则的列表详情。
    */ DescribeActiveMetricRuleList(query: {
        "RegionId"?: string;
        /**
        * 产品缩写， 如ecs。目前支持一键告警的产品：
        * * ecs (云服务器 ECS)
        * * rds (云数据库RDS版)
        * * slb (负载均衡)
        * * redis_standard (云数据库Redis标准版)
        * * redis_sharding (云数据库Redis集群版)
        * * redis_splitrw (云数据库Redis读写分离版)
        * * mongodb (云数据库MongoDB版(副本集))
        * * mongodb_sharding (云数据库MongoDB版(分片集群))
        * * hbase (云数据库HBase版)
        * * elasticsearch (Elasticsearch)
        * * opensearch (OpenSearch)
        * @example `ecs`
        */ "Product": string;
    }): Promise<{
        "Code": string;
        "Success": boolean;
        "Datapoints": {
            "Alarm": {
                "Namespace": string;
                "Statistics": string;
                "Uuid": string;
                "ContactGroups": string;
                "Webhook": string;
                "EvaluationCount": number;
                "Period": number;
                "NotifyType": number;
                "State": string;
                "Enable": boolean;
                "StartTime": number;
                "EndTime": number;
                "RuleName": string;
                "Threshold": string;
                "MetricName": string;
                "ComparisonOperator": string;
                "SilenceTime": number;
                "Name": string;
            }[];
        };
    }>;
    /**
    * 查询指定规则的详情。
    */ DescribeEventRuleAttribute(query: {
        "RegionId"?: string;
        /**
        * 报警规则的名称。
        * @example `testRule`
        */ "RuleName": string;
    }): Promise<{
        "Result": {
            "Name": string;
            "State": string;
            "EventPattern": {
                "Product": string;
                "LevelList": {
                    "LevelList": string[];
                };
                "NameList": {
                    "NameList": string[];
                };
            };
            "EventType": string;
        };
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询云监控插件的配置信息。
    */ DescribeMonitoringAgentConfig(query: {
        "RegionId"?: string;
    }): Promise<{
        "UserId": string;
        "EnableInstallAgentNewECS": boolean;
        "Success": boolean;
        "ErrorCode": number;
        "EnableActiveAlert": string;
        "AutoInstall": boolean;
    }>;
    /**
    * 删除报警规则模板。
    */ DeleteMetricRuleTemplate(query: {
        "RegionId"?: string;
        /**
        * 报警模板ID。
        * @example `12345`
        */ "TemplateId": string;
    }): Promise<{
        "Resource": {
            "TemplateId": number;
        };
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 删除可用性监控任务。
    */ DeleteHostAvailability(query: {
        "RegionId"?: string;
        "Id": number[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 删除事件报警通知目标。
    */ DeleteEventRuleTargets(query: {
        "RegionId"?: string;
        "Ids": string[];
        /**
        * 报警规则名称。
        * @example `testRule`
        */ "RuleName": string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 上报自定义监控数据。
    */ PutCustomMetric(query: {
        "RegionId"?: string;
        "MetricList": string[];
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 查询进程监控列表。
    */ DescribeMonitoringAgentProcesses(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `i-xx12****`
        */ "InstanceId": string;
    }): Promise<{
        "NodeProcesses": {
            "NodeProcess": {
                "Command": string;
                "InstanceId": string;
                "ProcessName": string;
                "ProcessId": number;
            }[];
        };
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 启用一个或多个报警规则。
    */ EnableMetricRules(query: {
        "RegionId"?: string;
        "RuleId": string[];
    }): Promise<{
        "Code": number;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 添加资源到应用分组。
    */ CreateMonitorGroupInstances(query: {
        "RegionId"?: string;
        "Instances": string[];
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 禁用一键告警。
    */ DisableActiveMetricRule(query: {
        "RegionId"?: string;
        /**
        * 目前支持一键告警的产品:
        * * ecs (云服务器 ECS)
        * * rds (云数据库RDS版)
        * * slb (负载均衡)
        * * redis_standard (云数据库Redis标准版)
        * * redis_sharding (云数据库Redis集群版)
        * * redis_splitrw (云数据库Redis读写分离版)
        * * mongodb (云数据库MongoDB版(副本集))
        * * mongodb_sharding (云数据库MongoDB版(分片集群))
        * * hbase (云数据库HBase版)
        * * elasticsearch (Elasticsearch)
        * * opensearch (OpenSearch)
        * @example `ecs`
        */ "Product": string;
    }): Promise<{
        "Code": string;
        "Success": boolean;
        "Message": string;
        "RequestId": string;
    }>;
    /**
    * 修改应用分组中的资源。
    */ ModifyMonitorGroupInstances(query: {
        "RegionId"?: string;
        "Instances": string[];
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 启用一键报警产品。
    */ EnableActiveMetricRule(query: {
        "RegionId"?: string;
        /**
        * 目前支持一键告警的产品：
        * * ecs (云服务器 ECS)
        * * rds (云数据库RDS版)
        * * slb (负载均衡)
        * * redis_standard (云数据库Redis标准版)
        * * redis_sharding (云数据库Redis集群版)
        * * redis_splitrw (云数据库Redis读写分离版)
        * * mongodb (云数据库MongoDB版(副本集))
        * * mongodb_sharding (云数据库MongoDB版(分片集群))
        * * hbase (云数据库HBase版)
        * * elasticsearch (Elasticsearch)
        * * opensearch (OpenSearch)
        * @example `ecs`
        */ "Product": string;
    }): Promise<{
        "Code": string;
        "Success": boolean;
        "Message": string;
        "RequestId": string;
    }>;
    /**
    * 删除一个或者多个报警规则。
    */ DeleteMetricRules(query: {
        "RegionId"?: string;
        "Id": string[];
    }): Promise<{
        "Code": string;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 禁用一个或者多个事件报警规则。
    */ DisableEventRules(query: {
        "RegionId"?: string;
        "RuleNames": string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 修改站点监控探测任务。
    */ ModifySiteMonitor(query: {
        "RegionId"?: string;
        /**
        * 站点监控探测任务ID。
        * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
        */ "TaskId": string;
        /**
        * 任务的探测URL地址或IP地址。
        * @example `http://www.aliyun.com`
        */ "Address"?: string;
        /**
        * 站点监控探测任务名称，为4-100位长度的英文字符、数字、下划线以及汉字。
        * @example `网站探测修改`
        */ "TaskName"?: string;
        /**
        * 探测频率，单位为分钟，取值范围1、5、15，单位是分钟，默认值为1分钟。
        * @example `1`
        */ "Interval"?: string;
        /**
        * 探针的信息， 格式为jsonArray，例如`[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`（分别对应北京、杭州、青岛)
        * 可以使用 DescribeISPAreaCity 接口获取探测点信息。如果为空系统则随机选择3个探点探测。
        *
        * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
        */ "IspCities"?: string;
        /**
        * 监控对应协议的高级扩展选项， 不同的探测协议类型，有不同的扩展选项。
        * @example `{"time_out":5000}`
        */ "OptionsJson"?: string;
        /**
        * 关联已存在的报警规则ID。
        * @example `49f7c317-7645-4cc9-94fd-ea42e122****`
        */ "AlertIds"?: string;
    }): Promise<{
        "Data": {
            "count": number;
        };
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询一个报警规则下正在报警的资源。
    */ DescribeAlertingMetricRuleResources(query: {
        "RegionId"?: string;
        /**
        * 报警规则的ID。GroupId字段和RuleId字段至少需要填写1个字段，2个都填写时，查询同时满足两种查询条件。
        * @example `alarm-uuid1234abc****`
        */ "RuleId"?: string;
        /**
        * 应用分组ID。
        * @example `123456`
        */ "GroupId"?: string;
    }): Promise<{
        "Total": number;
        "Resources": {
            "Resource": {
                "Enable": boolean;
                "Resource": string;
                "RuleId": string;
                "RetryTimes": number;
                "LastAlertTime": number;
                "MetricValues": string;
                "LastModifyTime": number;
                "StartTime": number;
                "RuleName": string;
                "Threshold": string;
                "GroupId": string;
            }[];
        };
        "Success": boolean;
    }>;
    /**
    * 查询指定任务一段时间内的平均统计数据。
    */ DescribeSiteMonitorStatistics(query: {
        "RegionId"?: string;
        /**
        * 任务的监控项名称，可选值为：
        * - Availability ：可用率
        * - ErrorRate：错误率
        * - ResponseTime：响应时间
        * @example `Availability`
        */ "MetricName": string;
        /**
        * 任务ID。
        * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
        */ "TaskId": string;
        /**
        * 统计的时间周期， 单位是分钟，最大1440分钟（1天）。
        * @example `60`
        */ "TimeRange"?: string;
        "StartTime"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Data": string;
        "Code": string;
        "Success": boolean;
    }>;
    /**
    * 查询云监控支持的时序类监控项产品列表。
    */ DescribeProjectMeta(query: {
        "RegionId"?: string;
        /**
        * 根据标签过滤，格式为`[{"name":"标签名","value":"标签值"},{"name":"标签名","value":"标签值"}]​`。
        * 支持的标签名包括product、groupFlag。
        * product 标签值为产品英文名称。
        * groupFlag含义为该产品是否支持应用分组，标签值为true或false​ 。
        * @example `[{"groupFlag":true}]`
        */ "Labels"?: string;
        /**
        * 分页参数，默认1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页大小，默认30
        * @example `30`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
        "Total": number;
        "Resources": {
            "Resource": {
                "Description": string;
                "Labels": string;
                "Namespace": string;
            }[];
        };
    }>;
    /**
    * 删除进程监控。
    */ DeleteMonitoringAgentProcess(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `i-KpVny6l****`
        */ "InstanceId": string;
        /**
        * 进程名称。ProcessId和ProcessName 参数必须至少填写其中一个参数。
        * @example `http`
        */ "ProcessName"?: string;
        /**
        * 进程ID。ProcessId和ProcessName 参数必须至少填写其中一个参数。
        * @example `12345`
        */ "ProcessId"?: string;
    }): Promise<{
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询指定应用分组的产品资源列表和每个产品的资源数量。
    */ DescribeMonitorGroupCategories(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
    }): Promise<{
        "MonitorGroupCategories": {
            "MonitorGroupCategory": {
                "Category": string;
                "Count": number;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 删除站点监控的探测任务。
    */ DeleteSiteMonitors(query: {
        "RegionId"?: string;
        /**
        * 要删除的任务ID，多个任务ID之间用英文逗号分隔。
        * @example `01adacc2-ece5-41b6-afa2-3143ab5da7a0,43bd1ead-514f-4524-813e-228ce091****`
        */ "TaskIds": string;
        /**
        * 删除任务的同时是否删除报警规则，默认值为True。
        * @example `true`
        */ "IsDeleteAlarms"?: boolean;
    }): Promise<{
        "Data": {
            "count": number;
        };
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询站点监控的配额以及版本。
    */ DescribeSiteMonitorQuota(query: {
        "RegionId"?: string;
    }): Promise<{
        "Data": {
            "SiteMonitorIdcQuota": number;
            "SiteMonitorVersion": string;
            "SiteMonitorTaskQuota": number;
            "SiteMonitorQuotaTaskUsed": number;
            "SiteMonitorOperatorQuotaQuota": number;
        };
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询自定义上报的事件的分时段数量分布图。
    */ DescribeCustomEventHistogram(query: {
        "RegionId"?: string;
        /**
        * 事件名称。
        * @example `BucketIngressBandwidth`
        */ "Name"?: string;
        /**
        * 事件的级别， CRITICAL（严重)、 WARN(警告)、INFO(信息)。
        * @example `CRITICAL`
        */ "Level"?: string;
        /**
        * 事件ID。
        * @example `123`
        */ "EventId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 搜索事件内容包含的关键字表达式，支持 and 或者 or。
        * - 如果想要搜索事件内容中即包括a又包括b的结果，可以搜索 a and b。
        * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
        * @example `cms`
        */ "SearchKeywords"?: string;
        /**
        * 开始时间。
        * @example `1552209685596`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `1552220485596`
        */ "EndTime"?: string;
    }): Promise<{
        "EventHistograms": {
            "EventHistogram": {
                "Count": number;
                "EndTime": number;
                "StartTime": number;
            }[];
        };
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 创建或者修改一个应用分组的动态规则，满足规则描述的资源会自动添加到应用分组中。
    */ PutMonitorGroupDynamicRule(query: {
        "RegionId"?: string;
        "GroupRules": string[];
        /**
        * 应用分组ID。
        * @example `1234`
        */ "GroupId": number;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询开通一键告警产品列表。
    */ DescribeProductsOfActiveMetricRule(query: {
        "RegionId"?: string;
    }): Promise<{
        "Code": string;
        "Success": boolean;
        "Datapoints": string;
        "RequestId": string;
    }>;
    /**
    * 添加或者修改规则的发送目标。
    */ PutEventRuleTargets(query: {
        "RegionId"?: string;
        /**
        * 报警规则名称。
        * @example `testEventRule`
        */ "RuleName": string;
        "FcParameters"?: string[];
        "ContactParameters"?: string[];
        "MnsParameters"?: string[];
        "WebhookParameters"?: string[];
        "SlsParameters"?: string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 创建或者修改组报警规则。
    */ PutGroupMetricRule(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `123456`
        */ "GroupId": string;
        /**
        * 报警规则ID，调用者统一生成，保证唯一性。
        * @example `bfae2ca5b4e07d2c7278772eccda169808c7b****`
        */ "RuleId": string;
        /**
        * 产品名称或者产品规格缩写，如下：
        * - ECS（包括阿里云和非阿里云主机），
        * - RDS（云数据库RDS版），
        * - ADS（分析型数据库），
        * - SLB（负载均衡），
        * - VPC（弹性IP），
        * - APIGATEWAY（API网关），
        * - CDN，
        * - CS（容器服务Swarm版），
        * - DCDN（全站加速），
        * - DDOS，
        * - EIP（弹性公网IP），
        * - ELASTICSEARCH，
        * - EMR（E-MapReduce），
        * - ESS（弹性伸缩），
        * - HBASE，
        * - IOT_EDGE（iot边缘计算），
        * - K8S_POD（k8s pod），
        * - KVSTORE_SHARDING（Redis集群版），
        * - KVSTORE_SPLITRW（Redis读写分离版），
        * - KVSTORE_STANDARD（Redis标准版），
        * - MEMCACHE，
        * - MNS（消息服务），
        * - MONGODB（MongoDB 副本实例），
        * - MONGODB_CLUSTER（MongoDB集群版本），
        * - MONGODB_SHARDING（MongoDB分片集群），
        * - MQ_TOPIC（消息服务TOPIC），
        * - OCS（旧版云数据库Memcache），
        * - OPENSEARCH（开放搜索），
        * - OSS（对象存储OSS），
        * - POLARDB，
        * - PETADATA（HybridDB for MySQL），
        * - SCDN（安全加速），
        * - SHAREBANDWIDTHPACKAGES（共享带宽包），
        * - SLS（日志服务），
        * - VPN（VPN网关)。
        * @example `ecs`
        */ "Category": string;
        /**
        * 产品的数据命名空间，可查询DescribeMetricMetaList接口或参考[预设监控项参考](~~28619~~)。
        * @example `acs_ecs_dashboard`
        */ "Namespace": string;
        /**
        * 监控项名称。可查询DescribeMetricMetaList接口或参考[预设监控项参考](~~28619~~)。
        * @example `cpu_total`
        */ "MetricName": string;
        /**
        * 报警规则名称。
        * @example `报警规则1`
        */ "RuleName"?: string;
        /**
        * 扩展资源维度。
        * @example `[{"instanceId":"xxxxxx"}]`
        */ "Dimensions"?: string;
        /**
        * 报警规则的生效时间范围。
        * @example `00:00-23:59`
        */ "EffectiveInterval"?: string;
        /**
        * 报警规则非生效时间范围。
        * @example `00:00-05:30`
        */ "NoEffectiveInterval"?: string;
        /**
        * 一直处于报警状态的通知沉默周期，默认86400（1天），单位s，最小1小时。
        * @example `86400`
        */ "SilenceTime"?: number;
        /**
        * 聚合周期，单位秒。
        * @example `60`
        */ "Period"?: string;
        /**
        * 报警的探测周期。
        * @example `60`
        */ "Interval"?: string;
        /**
        * 出现报警时候触发回调URL地址。
        * @example `http://www.aliyun.com`
        */ "Webhook"?: string;
        /**
        * 报警邮件主题。
        * @example `出现报警`
        */ "EmailSubject"?: string;
        /**
        * Critical级别报警统计方法，每种监控项对应不同的统计方法。
        * @example `Average`
        */ "Escalations.Critical.Statistics"?: string;
        /**
        * Critical级别阈值比较符，可以选择如下：
        * * GreaterThanOrEqualToThreshold:大于等于
        * * GreaterThanThreshold:大于
        * * LessThanOrEqualToThreshold:小于等于
        * * LessThanThreshold:小于
        * * NotEqualToThreshold:不等
        * * GreaterThanYesterday:同比昨天时间上涨
        * * LessThanYesterday:同比昨天时间下降
        * * GreaterThanLastWeek:同比上周同一时间上涨
        * * LessThanLastWeek:同比上周同一时间下降
        * * GreaterThanLastPeriod:环比上周期上涨
        * * LessThanLastPeriod:环比上周期下降
        * @example `GreaterThanOrEqualToThreshold`
        */ "Escalations.Critical.ComparisonOperator"?: string;
        /**
        * Critical级别报警阈值。
        * @example `90`
        */ "Escalations.Critical.Threshold"?: string;
        /**
        * Critical级别报警重试次数。
        * @example `3`
        */ "Escalations.Critical.Times"?: number;
        /**
        * Warn级别报警统计方法。
        * @example `Average`
        */ "Escalations.Warn.Statistics"?: string;
        /**
        * Warn级别阈值比较符，可以选择如下：
        * * GreaterThanOrEqualToThreshold:大于等于
        * * GreaterThanThreshold:大于
        * * LessThanOrEqualToThreshold:小于等于
        * * LessThanThreshold:小于
        * * NotEqualToThreshold:不等
        * * GreaterThanYesterday:同比昨天时间上涨
        * * LessThanYesterday:同比昨天时间下降
        * * GreaterThanLastWeek:同比上周同一时间上涨
        * * LessThanLastWeek:同比上周同一时间下降
        * * GreaterThanLastPeriod:环比上周期上涨
        * * LessThanLastPeriod:环比上周期下降
        * @example `GreaterThanOrEqualToThreshold`
        */ "Escalations.Warn.ComparisonOperator"?: string;
        /**
        * Warn级别报警阈值。
        * @example `90`
        */ "Escalations.Warn.Threshold"?: string;
        /**
        * Warn级别报警重试次数。
        * @example `3`
        */ "Escalations.Warn.Times"?: number;
        /**
        * Info级别报警统计方法。
        * @example `Average`
        */ "Escalations.Info.Statistics"?: string;
        /**
        * Info级别阈值比较符，可以选择如下：
        * * GreaterThanOrEqualToThreshold:大于等于
        * * GreaterThanThreshold:大于
        * * LessThanOrEqualToThreshold:小于等于
        * * LessThanThreshold:小于
        * * NotEqualToThreshold:不等
        * * GreaterThanYesterday:同比昨天时间上涨
        * * LessThanYesterday:同比昨天时间下降
        * * GreaterThanLastWeek:同比上周同一时间上涨
        * * LessThanLastWeek:同比上周同一时间下降
        * * GreaterThanLastPeriod:环比上周期上涨
        * * LessThanLastPeriod:环比上周期下降
        * @example `GreaterThanOrEqualToThreshold`
        */ "Escalations.Info.ComparisonOperator"?: string;
        /**
        * Info级别报警阈值。
        * @example `90`
        */ "Escalations.Info.Threshold"?: string;
        /**
        * Info级别报警重试次数。
        * @example `3`
        */ "Escalations.Info.Times"?: number;
    }): Promise<{
        "RequestId": string;
        "Code": number;
        "Success": boolean;
    }>;
    /**
    * 查询报警规则列表。
    */ DescribeMetricRuleList(query: {
        "RegionId"?: string;
        /**
        * 监控项名称，可通过查询DescribeMetricMetaList接口获得或参考[预设监控项参考](~~28619~~)。
        * @example `cpu_total`
        */ "MetricName"?: string;
        /**
        * 启用状态， true：启用， false：禁用，默认为全部状态。
        * @example `true`
        */ "EnableState"?: boolean;
        /**
        * 产品的数据命名空间，可通过查询DescribeMetricMetaList接口获得或参考[预设监控项参考](~~28619~~)。
        * @example `acs_ecs_dashboard`
        */ "Namespace"?: string;
        /**
        * 分页码，默认1。
        * @example `1`
        */ "Page"?: string;
        /**
        * 每页显示记录条数，默认10。
        * @example `10`
        */ "PageSize"?: string;
        /**
        * 报警规则状态：
        * - OK：正常
        * - ALARM：报警
        * - INSUFFICIENT_DATA：无数据
        * @example `ALARM`
        */ "AlertState"?: string;
        /**
        * 规则关联的实例信息，为json object对应的字符串，例如{"instanceId":"name1"}。可用于查询关联该实例的所有规则，应用该字段时必须指定Namespace。
        * @example `{"instanceId":"i-xy123****"}`
        */ "Dimensions"?: string;
        /**
        * 报警规则名称，支持模糊查询。
        * @example `ECSCPU报警规则`
        */ "RuleName"?: string;
        /**
        * 应用分组ID。
        * @example `123456`
        */ "GroupId"?: string;
        /**
        * 报警规则ID，支持一次查询多个，多个ID之间用逗号分隔，一次最多可批量查询20条。
        * @example `a151cd6023eacee2f0978e03863cc1697c8950812****`
        */ "RuleIds"?: string;
    }): Promise<{
        "Alarms": {
            "Alarm": {
                "Period": number;
                "Statistics": string;
                "GroupName": string;
                "Webhook": string;
                "Subject": string;
                "EffectiveInterval": string;
                "RuleName": string;
                "NoEffectiveInterval": string;
                "GroupId": string;
                "EvaluationCount": number;
                "MetricName": string;
                "Threshold": string;
                "State": string;
                "Enable": boolean;
                "SilenceTime": number;
                "Dimensions": string;
                "RuleId": string;
                "Namespace": string;
                "ContactGroups": string;
                "Escalations": {
                    "Critical": {
                        "Statistics": string;
                        "Threshold": string;
                        "Times": number;
                        "ComparisonOperator": string;
                    };
                    "Info": {};
                    "Warn": {};
                };
                "ComparisonOperator": string;
                "Resources": string;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
        "Code": string;
        "Total": number;
    }>;
    /**
    * 查询指定时间段内排序后的云产品时序指标监控数据。
    */ DescribeMetricTop(query: {
        "RegionId"?: string;
        /**
        * 命名空间，表明监控数据所属产品，例如 “acs_ecs_dashboard”,“acs_rds_dashboard”等。
        * @example `acs_ecs_dashboard`
        */ "Namespace": string;
        /**
        * 排序字段，即按所填字段进行排序，必填项。
        * @example `Average`
        */ "Orderby": string;
        /**
        * 时间间隔，统一用秒数来计算，例如 60, 300, 900。 如果不填写,则按照注册监控项时申明的上报周期来查询原始数据。如果填写统计周期，则查询对应的统计数据 。
        * @example `60`
        */ "Period"?: string;
        /**
        * 开始时间，可以传入距离1970年1月1日0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
        * @example `2019-01-30 00:00:00`
        */ "StartTime"?: string;
        /**
        * 结束时间，可以传入距离1970年1月1日 0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
        * @example `2019-01-30 00:10:00`
        */ "EndTime"?: string;
        /**
        * 用于查询指定资源的监控数据，是 key-value 形式的集合。常用的key-value集合为“instanceId：XXXXXX”。需要使用 JSON 字符串表示该 Map 对象，传入时请使用字符串，Dimensions字段必须按顺序传入。
        * @example `[{"instanceId": "i-abcdefgh12****"}]`
        */ "Dimensions"?: string;
        /**
        * 排序方式，可选值：
        * - False，由大到小排序。
        * - True，由小到大排序。
        * @example `False`
        */ "OrderDesc"?: string;
        /**
        * 每次查询大小，用于分页查询，默认值为1000。
        * @example `1000`
        */ "Length"?: string;
        /**
        * 对查询出的现有结果进行时时计算的表达式，例如` {"groupby":["instanceId"]}`
        * @example `{"groupby":["userId","instanceId"]}`
        */ "Express"?: string;
        /**
        * 监控项名称。
        * @example `cpu_idle`
        */ "MetricName": string;
    }): Promise<{
        "Period": string;
        "Datapoints": {
            "order": number;
            "timestamp": number;
            "userId": string;
            "instanceId": string;
            "Maximum": number;
            "Minimum": number;
            "Average": number;
            "_count": number;
        }[];
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 删除报警联系人组。
    */ DeleteContactGroup(query: {
        "RegionId"?: string;
        /**
        * 报警联系组名称。
        * @example `我的报警组`
        */ "ContactGroupName": string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询非阿里云ECS主机安装云监控插件时所需要的AccessKey和AccessSecret。
    */ DescribeMonitoringAgentAccessKey(query: {
        "RegionId"?: string;
    }): Promise<{
        "AccessKey": string;
        "SecretKey": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询指定应用分组内包含的资源列表。
    */ DescribeMonitorGroupInstances(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
        /**
        * 每页显示记录条数，默认值是10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 页码，默认值是1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 产品名称缩写，目前支持的产品有：
        * - ECS(包括阿里云和非阿里云主机),
        * - RDS（云数据库RDS版),
        * - ADS（分析型数据库）,
        * - SLB(负载均衡),
        * - VPC（弹性IP）,
        * - APIGATEWAY(API网关),
        * - CDN,
        * - CS（容器服务Swarm版）,
        * - DCDN(全站加速),
        * - DDOS,
        * - EIP(弹性公网IP),
        * - ELASTICSEARCH,
        * - EMR(E-MapReduce),
        * - ESS(弹性伸缩),
        * - HBASE,
        * - IOT_EDGE(iot边缘计算),
        * - K8S_POD(k8s pod),
        * - KVSTORE_SHARDING(Redis集群版）,
        * - KVSTORE_SPLITRW(Redis读写分离版),
        * - KVSTORE_STANDARD(Redis标准版),
        * - MEMCACHE,MNS(消息服务),
        * - MONGODB(MongoDB 副本实例),
        * - MONGODB_CLUSTER(MongoDB集群版本),
        * - MONGODB_SHARDING(mongodb 分片集群),
        * - MQ_TOPIC(消息服务TOPIC）,
        * - OCS,
        * - OPENSEARCH,OSS(对象存储OSS）,
        * - POLARDB,PETADATA,SCDN(安全加速),
        * - SHAREBANDWIDTHPACKAGES(共享带宽包),
        * - SLS（日志服务),
        * - VPN(VPN网关)。
        * @example `ECS`
        */ "Category"?: string;
        /**
        * 按照实例名称模糊查询。
        * @example `s1`
        */ "Keyword"?: string;
        /**
        * 按照实例ID搜索。
        * @example `i-x1234568`
        */ "InstanceIds"?: string;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
        "Total": number;
        "Resources": {
            "Resource": {
                "Category": string;
                "InstanceId": string;
                "RegionId": string;
                "InstanceName": string;
            }[];
        };
    }>;
    /**
    * 查询报警模板列表。
    */ DescribeMetricRuleTemplateList(query: {
        "RegionId"?: string;
        /**
        * 报警模板名称。
        * @example `模板名`
        */ "Name"?: string;
        /**
        * 按照模板名称模糊搜索。
        * @example `我的模板`
        */ "Keyword"?: string;
        /**
        * 报警模板ID。
        * @example `12345`
        */ "TemplateId"?: number;
        /**
        * 页码，默认1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页显示模板的记录条数。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 是否显示报警模板应用到分组的历史记录。true：显示， false：不显示， 默认不显示。
        * @example `false`
        */ "History"?: boolean;
    }): Promise<{
        "RequestId": string;
        "Templates": {
            "Template": {
                "RestVersion": number;
                "Name": string;
                "Description": string;
                "GmtCreate": number;
                "GmtModified": number;
                "TemplateId": number;
            }[];
        };
        "Success": boolean;
        "Code": number;
        "Total": number;
    }>;
    /**
    * 查询一个报警联系人组下的报警联系人列表。
    */ DescribeContactListByContactGroup(query: {
        "RegionId"?: string;
        /**
        * 报警联系组名。
        * @example `我的组名`
        */ "ContactGroupName": string;
    }): Promise<{
        "RequestId": string;
        "Contacts": {
            "Contact": {
                "Channels": {
                    "AliIM": string;
                    "Mail": string;
                };
                "Name": string;
                "CreateTime": number;
                "UpdateTime": number;
                "Desc": string;
            }[];
        };
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询可用性监控任务列表。
    */ DescribeHostAvailabilityList(query: {
        "RegionId"?: string;
        /**
        * 任务ID。
        * @example `12346`
        */ "Id"?: number;
        /**
        * 任务名称。
        * @example `我的探测`
        */ "TaskName"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页记录条数。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: number;
    }): Promise<{
        "TaskList": {
            "NodeTaskConfig": {
                "GroupName": string;
                "TaskOption": {
                    "HttpMethod": string;
                    "HttpURI": string;
                };
                "Disabled": boolean;
                "Instances": {
                    "Instance": string[];
                };
                "Id": number;
                "AlertConfig": {
                    "EscalationList": {
                        "escalationList": {
                            "Value": string;
                            "MetricName": string;
                            "Operator": string;
                            "Times": number;
                            "Aggregate": string;
                        }[];
                    };
                    "SilenceTime": number;
                    "NotifyType": number;
                    "EndTime": number;
                    "StartTime": number;
                };
                "TaskType": string;
                "TaskName": string;
                "GroupId": number;
                "TaskScope": string;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
        "Code": number;
        "Total": number;
    }>;
    /**
    * 查询探测结果异常的服务器列表。
    */ DescribeUnhealthyHostAvailability(query: {
        "RegionId"?: string;
        "Id"?: number[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 启用可用性监控任务。
    */ EnableHostAvailability(query: {
        "RegionId"?: string;
        "Id": number[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 删除事件报警规则。
    */ DeleteEventRules(query: {
        "RegionId"?: string;
        "RuleNames": string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 批量创建应用分组报警规则。
    */ CreateGroupMetricRules(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `123456`
        */ "GroupId": number;
        "GroupMetricRules"?: string[];
    }): Promise<{
        "RequestId": string;
        "Success": string;
        "Code": string;
        "Resources": {
            "AlertResult": {
                "RuleId": string;
                "Success": string;
                "RuleName": string;
                "Code": string;
            }[];
        };
    }>;
    /**
    * 查询自定义事件的统计结果。
    */ DescribeCustomEventCount(query: {
        "RegionId"?: string;
        /**
        * 事件名称。
        * @example `BABEL_BUY`
        */ "Name"?: string;
        /**
        * 事件级别， CRITICAL（严重)、WARN(警告)、INFO(信息)。
        * @example `CRITICAL`
        */ "Level"?: string;
        /**
        * 事件ID。
        * @example `123`
        */ "EventId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 搜索事件内容包含的关键字，支持 and 或者 or。
        * - 如果想要搜索事件内容中即包括a又包括b的结果，可以搜索 a and b。
        * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
        * @example `cms`
        */ "SearchKeywords"?: string;
        /**
        * 开始时间。
        * @example `1552209685596`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `1552220485596`
        */ "EndTime"?: string;
    }): Promise<{
        "Code": string;
        "Success": boolean;
        "Message": string;
        "RequestId": string;
        "Data": {
            "Time": number;
            "Num": string;
            "Name": string;
        }[];
    }>;
    /**
    * 查询应用分组的资源实例详情。
    */ DescribeMonitorGroupInstanceAttribute(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
        /**
        * 分页页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页显示记录条数。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 总记录条数。
        * @example `true`
        */ "Total"?: boolean;
        /**
        * 资源实例所属的云产品名称缩写，如下：
        * - ECS（包括阿里云和非阿里云主机），
        * - RDS（云数据库RDS版），
        * - ADS（分析型数据库），
        * - SLB（负载均衡），
        * - VPC（弹性IP），
        * - APIGATEWAY（API网关），
        * - CDN，
        * - CS（容器服务Swarm版），
        * - DCDN（全站加速），
        * - DDOS，
        * - EIP（弹性公网IP），
        * - ELASTICSEARCH，
        * - EMR（E-MapReduce），
        * - ESS（弹性伸缩），
        * - HBASE，
        * - IOT_EDGE（iot边缘计算），
        * - K8S_POD（k8s pod），
        * - KVSTORE_SHARDING（Redis集群版），
        * - KVSTORE_SPLITRW（Redis读写分离版），
        * - KVSTORE_STANDARD（Redis标准版），
        * - MEMCACHE，
        * - MNS（消息服务），
        * - MONGODB（MongoDB 副本实例），
        * - MONGODB_CLUSTER（MongoDB集群版本），
        * - MONGODB_SHARDING（MongoDB分片集群），
        * - MQ_TOPIC（消息服务TOPIC），
        * - OCS（旧版云数据库Memcache），
        * - OPENSEARCH（开放搜索），
        * - OSS（对象存储OSS），
        * - POLARDB，
        * - PETADATA（HybridDB for MySQL），
        * - SCDN（安全加速），
        * - SHAREBANDWIDTHPACKAGES（共享带宽包），
        * - SLS（日志服务），
        * - VPN（VPN网关)。
        * @example `ecs`
        */ "Category"?: string;
        /**
        * 按照实例ID模糊搜索
        * @example `i-123`
        */ "Keyword"?: string;
        /**
        * 按照多实例搜索，多个实例之间用逗号分隔。一次最多可以删除20个。
        * @example `rm-bp18j902q1h12****,rm-bp18j902q1h1****`
        */ "InstanceIds"?: string;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
        "Total": number;
        "Resources": {
            "Resource": {
                "Vpc": {
                    "VswitchInstanceId": string;
                    "VpcInstanceId": string;
                };
                "Tags": {
                    "Tag": {
                        "Value": string;
                        "Key": string;
                    }[];
                };
                "NetworkType": string;
                "Category": string;
                "Region": {
                    "RegionId": string;
                    "AvailabilityZone": string;
                };
                "AliUid": string;
                "InstanceId": string;
                "Dimension": string;
                "Desc": string;
                "InstanceName": string;
            }[];
        };
    }>;
    /**
    * 设置云监控插件全局配置，例如开始自动安装插件以及一键报警等。
    */ PutMonitoringConfig(query: {
        "RegionId"?: string;
        /**
        * 自动为现有的ECS安装插件。
        * @example `true`
        */ "AutoInstall"?: boolean;
        /**
        * 开启新购ECS自动安装云监控插件。
        * @example `true`
        */ "EnableInstallAgentNewECS"?: boolean;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 对单个资源的性能指标设置阈值报警规则。
    */ PutResourceMetricRule(query: {
        "RegionId"?: string;
        /**
        * 报警规则ID，调用者统一生成，保证唯一性，已经存在的ID则修改，不存在则创建。
        * @example `a151cd6023eacee2f0978e03863cc1697c89508****`
        */ "RuleId": string;
        /**
        * 产品的数据命名空间，可通过查询DescribeMetricMetaList接口获得或参考[预设监控项参考](~~28619~~)。
        * @example `acs_ecs_dashboard`
        */ "Namespace": string;
        /**
        * 监控项名称。可通过查询DescribeMetricMetaList接口获得或参考[预设监控项参考](~~28619~~)。
        * @example `cpu_total`
        */ "MetricName": string;
        /**
        * 需要报警的资源。
        * @example `[{"instanceId":"xxxxxxx"}]`
        */ "Resources": string;
        /**
        * 报警联系人组，多个联系组之间用英文逗号分隔。
        * @example `默认报警联系组`
        */ "ContactGroups": string;
        /**
        * 报警规则的展示名称。
        * @example `我的报警规则`
        */ "RuleName"?: string;
        /**
        * 报警发生时会回调指定的URL地址。向URL发送POST请求。
        * @example `http://ww.aliyun.com`
        */ "Webhook"?: string;
        /**
        * 报警规则的生效时间范围。
        * @example `00:00-23:59`
        */ "EffectiveInterval"?: string;
        /**
        * 报警规则的不生效时间范围。
        * @example `00:00-06:00`
        */ "NoEffectiveInterval"?: string;
        /**
        * 通道沉默周期，单位为秒。默认86400秒（即1天），最短为3600秒（即1小时）。监控数据持续超过报警规则阈值时，每个沉默周期内只发送1次报警通知。
        * @example `86400`
        */ "SilenceTime"?: number;
        /**
        * 监控数据的聚合周期，单位秒。默认取值为监控项对应的最小频率，通常不需要指定。
        * @example `60`
        */ "Period"?: string;
        /**
        * 报警规则的探测周期，单位为秒。默认为监控项的最小频率。
        * @example `60`
        */ "Interval"?: string;
        /**
        * 报警邮件规则主题。
        * @example `出现告警了`
        */ "EmailSubject"?: string;
        /**
        * Critical级别报警统计方法。
        * @example `Average`
        */ "Escalations.Critical.Statistics"?: string;
        /**
        * Critical级别阈值比较符，可以选择如下：
        * + GreaterThanOrEqualToThreshold:大于等于
        * + GreaterThanThreshold:大于
        * + LessThanOrEqualToThreshold:小于等于
        * + LessThanThreshold:小于
        * + NotEqualToThreshold:不等
        * + GreaterThanYesterday:同比昨天时间上涨
        * + LessThanYesterday:同比昨天时间下降
        * + GreaterThanLastWeek:同比上周同一时间上涨
        * + LessThanLastWeek:同比上周同一时间下降
        * + GreaterThanLastPeriod:环比上周期上涨
        * + LessThanLastPeriod:环比上周期下降
        * @example `GreaterThanOrEqualToThreshold`
        */ "Escalations.Critical.ComparisonOperator"?: string;
        /**
        * Critical级别报警阈值。
        * @example `90`
        */ "Escalations.Critical.Threshold"?: string;
        /**
        * Critical级别报警重试次数。
        * @example `3`
        */ "Escalations.Critical.Times"?: number;
        /**
        * Warn级别报警统计方法。
        * @example `Average`
        */ "Escalations.Warn.Statistics"?: string;
        /**
        * Warn级别阈值比较符，可以选择如下：
        * + GreaterThanOrEqualToThreshold:大于等于
        * + GreaterThanThreshold:大于
        * + LessThanOrEqualToThreshold:小于等于
        * + LessThanThreshold:小于
        * + NotEqualToThreshold:不等
        * + GreaterThanYesterday:同比昨天时间上涨
        * + LessThanYesterday:同比昨天时间下降
        * + GreaterThanLastWeek:同比上周同一时间上涨
        * + LessThanLastWeek:同比上周同一时间下降
        * + GreaterThanLastPeriod:环比上周期上涨
        * + LessThanLastPeriod:环比上周期下降
        * @example `GreaterThanOrEqualToThreshold`
        */ "Escalations.Warn.ComparisonOperator"?: string;
        /**
        * Warn级别报警阈值。
        * @example `90`
        */ "Escalations.Warn.Threshold"?: string;
        /**
        * Warn级别报警重试次数。
        * @example `3`
        */ "Escalations.Warn.Times"?: number;
        /**
        * Info级别报警统计方法。
        * @example `Average`
        */ "Escalations.Info.Statistics"?: string;
        /**
        * Info级别阈值比较符，可以选择如下：
        * + GreaterThanOrEqualToThreshold:大于等于
        * + GreaterThanThreshold:大于
        * + LessThanOrEqualToThreshold:小于等于
        * + LessThanThreshold:小于
        * + NotEqualToThreshold:不等
        * + GreaterThanYesterday:同比昨天时间上涨
        * + LessThanYesterday:同比昨天时间下降
        * + GreaterThanLastWeek:同比上周同一时间上涨
        * + LessThanLastWeek:同比上周同一时间下降
        * + GreaterThanLastPeriod:环比上周期上涨
        * + LessThanLastPeriod:环比上周期下降
        * @example `GreaterThanOrEqualToThreshold`
        */ "Escalations.Info.ComparisonOperator"?: string;
        /**
        * Info级别报警阈值。
        * @example `90`
        */ "Escalations.Info.Threshold"?: string;
        /**
        * Info级别报警重试次数。
        * @example `3`
        */ "Escalations.Info.Times"?: number;
    }): Promise<{
        "Code": string;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 创建一个应用分组。
    */ CreateMonitorGroup(query: {
        "RegionId"?: string;
        /**
        * 应用分组名称。
        * @example `我的应用分组1`
        */ "GroupName": string;
        "Type"?: string;
        "ServiceId"?: number;
        "BindUrl"?: string;
        /**
        * 报警联系人组。应用分组的报警通知会发送给此处指定的报警联系人组。
        * @example `默认报警联系人组`
        */ "ContactGroups"?: string;
        "Options"?: string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "GroupId": number;
        "Code": number;
    }>;
    /**
    * 查询报警规则关联目标。
    */ DescribeMetricRuleTargets(query: {
        "RegionId"?: string;
        /**
        * 报警规则ID。
        * @example `rulIdxxxxx1`
        */ "RuleId": string;
    }): Promise<{
        "Code": string;
        "Message": string;
        "Success": boolean;
        "RequestId": string;
        "Targets": {
            "Arn": string;
            "Id": number;
            "Level": string[];
        }[];
    }>;
    /**
    * 删除一个报警规则的目标。
    */ DeleteMetricRuleTargets(query: {
        "RegionId"?: string;
        /**
        * 关联的报警规则ID。
        * @example `ruleId-xxxxxx`
        */ "RuleId": string;
        "TargetIds"?: string[];
    }): Promise<{
        "Code": string;
        "Message": string;
        "Success": boolean;
        "RequestId": string;
        "FailIds": string[];
    }>;
    /**
    * 查询报警联系人列表。
    */ DescribeContactList(query: {
        "RegionId"?: string;
        /**
        * 每页显示的记录条数，默认100。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 当前页码，默认1.
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 报警联系人姓名。只支持精确查询，暂不支持模糊查询。
        * @example `我的报警联系人`
        */ "ContactName"?: string;
    }): Promise<{
        "RequestId": string;
        "Contacts": {
            "Contact": {
                "Channels": {
                    "SMS": string;
                    "Mail": string;
                };
                "Name": string;
                "CreateTime": number;
                "UpdateTime": number;
            }[];
        };
        "Total": number;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询站点监控详细信息。
    */ DescribeSiteMonitorAttribute(query: {
        "RegionId"?: string;
        /**
        * 要查询的任务ID。
        * @example `a1ecd34a-8157-44d9-b065-14950837****`
        */ "TaskId": string;
        /**
        * 任务详情的返回是否包含报警规则。
        * @example `false`
        */ "IncludeAlert"?: boolean;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "SiteMonitors": {
            "OptionJson": {
                "http_method": string;
                "response_content": string;
                "time_out": number;
            };
            "Interval": number;
            "Address": string;
            "TaskId": string;
            "TaskName": string;
            "TaskState": number;
            "TaskType": string;
            "IspCities": {
                "IspCity": {
                    "Isp": string;
                    "IspName": string;
                    "CityName": string;
                    "City": string;
                }[];
            };
        };
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 添加或者修改报警规则的目标。
    */ PutMetricRuleTargets(query: {
        "RegionId"?: string;
        "Targets": string[];
        /**
        * 对应报警规则的ID。
        * @example `rulexx12346`
        */ "RuleId": string;
    }): Promise<{
        "Code": string;
        "Message": string;
        "Success": boolean;
        "RequestId": string;
        "FailData": {
            "Targets": {
                "Arn": string;
                "Id": number;
                "Level": string[];
            }[];
        };
    }>;
    /**
    * 查询所有的已安装和未安装云监控插件的主机列表。
    */ DescribeMonitoringAgentHosts(query: {
        "RegionId"?: string;
        /**
        * 模糊搜索关键字。
        * @example `host1`
        */ "KeyWord"?: string;
        /**
        * 主机名称。
        * @example `hostNam1`
        */ "HostName"?: string;
        /**
        * 实例ID。
        * @example `i-a3d1q1pm2f9yr29e****`
        */ "InstanceIds"?: string;
        /**
        * 序列号搜索。
        * @example `a1ab31a3-1234-40f2-9e95-c8caa8f0****`
        */ "SerialNumbers"?: string;
        /**
        * 页数。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页显示记录条数。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 实例的regionId。
        * @example `cn-hangzhou`
        */ "InstanceRegionId"?: string;
    }): Promise<{
        "PageTotal": number;
        "PageNumber": number;
        "PageSize": number;
        "Hosts": {
            "Host": {
                "AgentVersion": string;
                "SerialNumber": string;
                "NetworkType": string;
                "Region": string;
                "InstanceTypeFamily": string;
                "isAliyunHost": boolean;
                "IpGroup": string;
                "AliUid": string;
                "InstanceId": string;
                "OperatingSystem": string;
                "HostName": string;
            }[];
        };
        "Success": boolean;
        "Code": number;
        "Total": number;
    }>;
    /**
    * 修改应用分组。
    */ ModifyMonitorGroup(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12346`
        */ "GroupId": string;
        "BindUrls"?: string;
        "ServiceId"?: number;
        /**
        * 应用分组名称。
        * @example `修改组名1`
        */ "GroupName"?: string;
        /**
        * 报警联系人组。
        * @example `报警联系人组`
        */ "ContactGroups"?: string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 触发一个用于调试的系统事件，用于调试事件下游配置的触发逻辑是否符合预期。
    */ SendDryRunSystemEvent(query: {
        "RegionId"?: string;
        /**
        * 事件名称。
        * @example `Agent_Status_Stopped`
        */ "EventName": string;
        /**
        * 产品名称。
        * @example `CloudMonitor`
        */ "Product": string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 事件内容。
        * @example `{"product":"CloudMonitor","resourceId":"acs:ecs:cn-hongkong:173651113438****:instance/{instanceId}","level":"CRITICAL","instanceName":"instanceName","regionId":"cn-hangzhou","name":"Agent_Status_Stopped","content":{"ipGroup":"0.0.0.0,0.0.0.1","tianjimonVersion":"1.2.11"},"status":"stopped"}`
        */ "EventContent"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Success": boolean;
    }>;
    /**
    * 查询可用于创建任务的探测点列表。
    */ DescribeSiteMonitorISPCityList(query: {
        "RegionId"?: string;
        /**
        * 探测的运营商名称或者ID，名称支持模糊查询。
        * @example `移动`
        */ "Isp"?: string;
        /**
        * 探测点的城市名称或者ID，城市名称支持模糊查询。
        * @example `北京`
        */ "City"?: string;
    }): Promise<{
        "Message": string;
        "IspCityList": {
            "IspCity": {
                "IspName.zh_CN": string;
                "Isp": string;
                "Region.en": string;
                "CityName.en": string;
                "IspName.en": string;
                "Country.en": string;
                "Region.zh_CN": string;
                "Country.zh_CN": string;
                "City": string;
                "CityName.zh_CN": string;
            }[];
        };
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 创建报警规则模板。
    */ CreateMetricRuleTemplate(query: {
        "RegionId"?: string;
        /**
        * 报警规则模板名称。
        * @example `我的报警模板`
        */ "Name": string;
        /**
        * 报警规则描述信息。
        * @example `模板描述`
        */ "Description"?: string;
        "AlertTemplates"?: string[];
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询报警联系人组列表。
    */ DescribeContactGroupList(query: {
        "RegionId"?: string;
        /**
        * 每页显示记录条数。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 页码。
        * @example `10`
        */ "PageNumber"?: number;
    }): Promise<{
        "Code": string;
        "ContactGroups": string[];
        "RequestId": string;
        "Success": boolean;
        "Total": number;
    }>;
    /**
    * 创建进程监控。
    */ CreateMonitorAgentProcess(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `i-123****`
        */ "InstanceId": string;
        /**
        * 进程名称。
        * @example `java`
        */ "ProcessName": string;
        /**
        * 执行进程的用户。
        * @example `admin`
        */ "ProcessUser"?: string;
    }): Promise<{
        "RequestId": string;
        "Id": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询上报的自定义监控数据。
    */ DescribeCustomMetricList(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": string;
        /**
        * 监控项名称。
        * @example `cpu`
        */ "MetricName"?: string;
        /**
        * 维度map，key-value都为字符串, 支持字母、数字、连接符“_-./\”，键值对数量最大为10，key长度最大64字节，value长度最大64字节，超过64字节时截取前64字节。
        * @example `xx`
        */ "Dimension"?: string;
        /**
        * Md5校验码。
        * @example `97c25982d9745a231276bff27469fbc8`
        */ "Md5"?: string;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNumber"?: string;
        /**
        * 每页显示记录条数。
        * @example `10`
        */ "PageSize"?: string;
    }): Promise<{
        "Code": string;
        "Data": string;
        "Message": string;
        "Success": boolean;
    }>;
    /**
    * 分类取得报警规则的数量。
    */ DescribeMetricRuleCount(query: {
        "RegionId"?: string;
        /**
        * 产品的数据命名空间，可查询DescribeMetricMetaList接口或参考[预设监控项参考](~~28619~~)。
        * @example `acs_ecs_dashboard`
        */ "Namespace"?: string;
        /**
        * 监控项名称。可查询DescribeMetricMetaList接口或参考[预设监控项参考](~~28619~~)。
        * @example `cpu_total`
        */ "MetricName"?: string;
    }): Promise<{
        "Success": boolean;
        "Code": string;
        "RequestId": string;
        "MetricRuleCount": {
            "Ok": number;
            "Disable": number;
            "Total": number;
            "Nodata": number;
            "Alarm": number;
        };
    }>;
    /**
    * 删除应用分组内的资源实例。
    */ DeleteMonitorGroupInstances(query: {
        "RegionId"?: string;
        /**
        * 需要删除的实例，多个实例之间用英文逗号分隔开。一次最多能够删除20个。
        * @example `i-a2d5q7pm3f912****,i-a2d5q7pm3f222****`
        */ "InstanceIdList": string;
        /**
        * 资源实例所属的云产品名称缩写，如下：
        * - ECS（包括阿里云和非阿里云主机），
        * - RDS（云数据库RDS版），
        * - ADS（分析型数据库），
        * - SLB（负载均衡），
        * - VPC（弹性IP），
        * - APIGATEWAY（API网关），
        * - CDN，
        * - CS（容器服务Swarm版），
        * - DCDN（全站加速），
        * - DDOS，
        * - EIP（弹性公网IP），
        * - ELASTICSEARCH，
        * - EMR（E-MapReduce），
        * - ESS（弹性伸缩），
        * - HBASE，
        * - IOT_EDGE（iot边缘计算），
        * - K8S_POD（k8s pod），
        * - KVSTORE_SHARDING（Redis集群版），
        * - KVSTORE_SPLITRW（Redis读写分离版），
        * - KVSTORE_STANDARD（Redis标准版），
        * - MEMCACHE，
        * - MNS（消息服务），
        * - MONGODB（MongoDB 副本实例），
        * - MONGODB_CLUSTER（MongoDB集群版本），
        * - MONGODB_SHARDING（MongoDB分片集群），
        * - MQ_TOPIC（消息服务TOPIC），
        * - OCS（旧版云数据库Memcache），
        * - OPENSEARCH（开放搜索），
        * - OSS（对象存储OSS），
        * - POLARDB，
        * - PETADATA（HybridDB for MySQL），
        * - SCDN（安全加速），
        * - SHAREBANDWIDTHPACKAGES（共享带宽包），
        * - SLS（日志服务），
        * - VPN（VPN网关)。
        * @example `ecs`
        */ "Category": string;
        /**
        * 应用分组ID。
        * @example `123456`
        */ "GroupId": number;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 创建暂停应用分组报警通知的策略。
    */ CreateMonitorGroupNotifyPolicy(query: {
        /**
        * 资源所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 暂停通知类型， 目前仅支持： PauseNotify。
        * @example `PauseNotify`
        */ "PolicyType": string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": string;
        /**
        * 暂停通知的开始时间，距离1970年1月1日 00:00:00的毫秒数。
        * @example `1551756547863`
        */ "StartTime": number;
        /**
        * 暂停通知的结束时间，距离1970年1月1日 00:00:00的毫秒数。
        * @example `1551757147863`
        */ "EndTime": number;
    }): Promise<{
        "Result": number;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询系统事件的Meta信息。
    */ DescribeSystemEventMetaList(query: {
        "RegionId"?: string;
    }): Promise<{
        "Data": {
            "Resource": {
                "Name": string;
                "Status": string;
                "Product": string;
                "StatusDesc": string;
                "NameDesc": string;
                "Level": string;
                "EventType": string;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 修改报警模板。
    */ ModifyMetricRuleTemplate(query: {
        "RegionId"?: string;
        /**
        * 修改报警模板的版本，从报警模板列表或则详情中获得。没修改过一次，这个字段会被自动更新。
        * @example `0`
        */ "RestVersion": number;
        /**
        * 报警规则模板ID。
        * @example `12346`
        */ "TemplateId": number;
        /**
        * 报警规则模板名称。
        * @example `我的报警模板`
        */ "Name"?: string;
        /**
        * 报警规则描述信息。
        * @example `报警模板描述`
        */ "Description"?: string;
        "AlertTemplates"?: string[];
    }): Promise<{
        "Code": number;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 查询站点监控任务列表。
    */ DescribeSiteMonitorList(query: {
        "RegionId"?: string;
        /**
        * 任务ID。
        * @example `a1ecd34a-8157-44d9-b060-14950837****`
        */ "TaskId"?: string;
        /**
        * 站点监控任务探测类型。
        * @example `HTTP`
        */ "TaskType"?: string;
        /**
        * 支持根据名称或任务地址模糊搜索。
        * @example `site`
        */ "Keyword"?: string;
        /**
        * 分页页码，默认值为1。
        * @example `1`
        */ "Page"?: number;
        /**
        * 每页显示条数，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "SiteMonitors": {
            "SiteMonitor": {
                "Interval": number;
                "CreateTime": string;
                "Address": string;
                "OptionsJson": {
                    "http_method": string;
                    "time_out": number;
                };
                "UpdateTime": string;
                "TaskId": string;
                "TaskName": string;
                "TaskState": number;
                "TaskType": string;
            }[];
        };
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 禁用一个或者多个站点监控探测任务。
    */ DisableSiteMonitors(query: {
        "RegionId"?: string;
        /**
        * 要禁用的任务ID，多个任务ID之间用逗号分隔。
        * @example `49f7b317-7645-4cc9-94fd-ea42e522****,49f7b317-7645-4cc9-94fd-ea42e522****`
        */ "TaskIds": string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Data": string;
        "Code": string;
        "Success": boolean;
    }>;
    /**
    * 查询事件报警的列表。
    */ DescribeEventRuleList(query: {
        "RegionId"?: string;
        /**
        * 报警规则名前缀，支持模糊搜索。
        * @example `test`
        */ "NamePrefix"?: string;
        /**
        * 当前页码，默认1。
        * @example `1`
        */ "PageNumber"?: string;
        /**
        * 每页显示记录条数。
        * @example `10`
        */ "PageSize"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
    }): Promise<{
        "Datapoints": {
            "EventRule": {
                "Name": string;
                "State": string;
                "EventPattern": {
                    "EventTypeList": {
                        "EventTypeList": string[];
                    };
                    "Product": string;
                    "LevelList": {
                        "LevelList": string[];
                    };
                    "NameList": {
                        "NameList": string[];
                    };
                };
                "EventType": string;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
        "Code": string;
        "Total": number;
    }>;
    /**
    * 创建站点监控的探测任务。
    */ CreateSiteMonitor(query: {
        "RegionId"?: string;
        /**
        * 任务的类型，目前站点监控探测的有：HTTP 、PING 、TCP 、UDP 、DNS 、SMTP 、POP3 、FTP。
        * @example `HTTP`
        */ "TaskType": string;
        /**
        * 监控的任务名为4-100位长度的中英文字符数字、下划线以及汉字。
        * @example `网站探测`
        */ "TaskName": string;
        /**
        * 任务的探测URL地址或IP地址。
        * @example `http://www.aliyun.com`
        */ "Address": string;
        /**
        * 探测频率，单位为分钟，取值范围1、5、15，单位是分钟，默认值为1分钟。
        * @example `1`
        */ "Interval"?: string;
        /**
        * 探针的信息， 格式为jsonArray，例如`[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`（分别对应北京、杭州、青岛)
        * 可以使用 DescribeISPAreaCity 接口获取探测点信息。如果为空系统则随机选择3个探点探测。
        *
        * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
        */ "IspCities"?: string;
        /**
        * 监控对应协议的高级扩展选项， 不同的探测协议类型对应不同的扩展选项。
        * @example `{"time_out":5000}`
        */ "OptionsJson"?: string;
        /**
        * 关联已存在的报警规则ID。
        * @example `49f7c317-7645-4cc9-94fd-ea42e122****`
        */ "AlertIds"?: string;
    }): Promise<{
        "Message": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 启用一个或者多个站点监控探测任务。
    */ EnableSiteMonitors(query: {
        "RegionId"?: string;
        /**
        * 要启用的任务ID，多个任务用逗号分隔。
        * @example `49f7b317-7645-4cc9-94fd-ea42e522****,49f7b317-7645-4cc9-94fd-ea42e522****`
        */ "TaskIds": string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Data": string;
        "Code": string;
        "Success": boolean;
    }>;
    /**
    * 删除指定应用分组的动态规则。
    */ DeleteMonitorGroupDynamicRule(query: {
        "RegionId"?: string;
        /**
        * 动态规则对应的云产品类型，目前动态组支持的产品有ECS、RDS、SLB。
        * @example `ecs`
        */ "Category": string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId": number;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 查询应用分组的报警通知暂停策略列表。
    */ DescribeMonitorGroupNotifyPolicyList(query: {
        /**
        * 资源所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 禁用的类型，目前只能选择PauseNotify。
        * @example `PauseNotify`
        */ "PolicyType": string;
        /**
        * 页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页记录条数，默认值为10。
        * @example `100`
        */ "PageSize"?: number;
        /**
        * 应用分组ID。
        * @example `12346`
        */ "GroupId"?: string;
    }): Promise<{
        "NotifyPolicyList": {
            "NotifyPolicy": {
                "Type": string;
                "EndTime": number;
                "Id": number;
                "StartTime": number;
                "GroupId": string;
            }[];
        };
        "Success": boolean;
        "Code": string;
        "Total": number;
    }>;
    /**
    * 卸载非阿里云主机监控插件。
    */ UninstallMonitoringAgent(query: {
        "RegionId"?: string;
        /**
        * 主机实例ID。
        * @example `host-****`
        */ "InstanceId": string;
    }): Promise<{
        "RequestId": string;
        "Code": string;
        "Message": string;
    }>;
    /**
    * 查询报警历史详情。
    */ DescribeAlertHistoryList(query: {
        "RegionId"?: string;
        /**
        * 报警规则ID。
        * @example `aaaabbb123`
        */ "RuleId"?: string;
        /**
        * 报警规则名称。
        * @example `我的报警规则`
        */ "RuleName"?: string;
        /**
        * 产品的数据命名空间，可通过DescribeMetricMetaList接口查询或参考[预设监控项参考](~~28619~~)。
        * @example `acs_ecs_dashboard`
        */ "Namespace"?: string;
        /**
        * 监控项名称。
        * @example `cpu_total`
        */ "MetricName"?: string;
        /**
        * 应用组ID。
        * @example `123456`
        */ "GroupId"?: string;
        /**
        * 报警状态：
        * - ALARM：报警状态
        * - OK：恢复正常
        * @example `ALARM`
        */ "AlertStatus"?: string;
        /**
        * 通道沉默状态：
        * - 2：表示通道沉默。
        * - 0：表示报警或者恢复。
        * @example `2`
        */ "State"?: string;
        /**
        * 排序，正序或者倒序， true表示时间倒序， false表示时间正序。
        * @example `true`
        */ "Ascending"?: boolean;
        /**
        * 开始时间。
        * @example `1554085998000`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `1554085998000`
        */ "EndTime"?: string;
        /**
        * 页面大小。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 页码。
        * @example `1`
        */ "Page"?: number;
    }): Promise<{
        "AlarmHistoryList": {
            "AlarmHistory": {
                "Value": string;
                "LastTime": number;
                "Webhooks": string;
                "ContactSmses": {
                    "ContactSms": any[];
                };
                "RuleName": string;
                "GroupId": string;
                "AlertName": string;
                "EvaluationCount": number;
                "Status": number;
                "AlertState": string;
                "MetricName": string;
                "ContactMails": {
                    "ContactMail": any[];
                };
                "AlertTime": number;
                "Dimensions": string;
                "RuleId": string;
                "Contacts": {
                    "Contact": any[];
                };
                "Namespace": string;
                "ContactALIIMs": {
                    "ContactALIIM": any[];
                };
                "ContactGroups": {
                    "ContactGroup": any[];
                };
                "Expression": string;
                "Level": string;
                "InstanceName": string;
            }[];
        };
        "RequestId": string;
        "Success": boolean;
        "Code": string;
        "Total": number;
    }>;
    /**
    * 查询指定时间段内的云产品时序指标监控数据。
    */ DescribeMetricData(query: {
        "RegionId"?: string;
        /**
        * 监控项名称。
        * @example `cpu_idle`
        */ "MetricName": string;
        /**
        * 时间间隔，统一用秒数来计算，例如 60, 300, 900。 如果不填写，则按照监控项默认的最小周期来查询数据。如果填写统计周期，则查询对应的统计数据 。
        * @example `60`
        */ "Period"?: string;
        /**
        * 开始时间，可以传入距离1970年1月1日0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
        * @example `2019-01-30 00:00:00`
        */ "StartTime"?: string;
        /**
        * 结束时间，可以传入距离1970年1月1日 0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
        * @example `2019-01-30 00:10:00`
        */ "EndTime"?: string;
        /**
        * 用于查询指定资源的监控数据，是 key-value 形式的集合。常用的key-value集合为“instanceId：XXXXXX”。需要使用 JSON 字符串表示该 Map 对象，传入时请使用字符串，Dimensions字段必须按顺序传入。
        * @example `[{"instanceId": "i-abcdefgh12****"}]`
        */ "Dimensions"?: string;
        /**
        * 对查询的现有结果进行实时计算的表达式，例如` {"groupby":["instanceId"]}`。
        * @example `“{"groupby":["userId","instanceId"]}”`
        */ "Express"?: string;
        /**
        * 每次查询大小，用于分页查询，默认值为1000。
        * @example `1000`
        */ "Length"?: string;
        /**
        * 命名空间，表明监控数据所属产品，通常为` acs_产品缩写_dashboard` 或者 `acs_产品缩写`。例如 “acs_ecs_dashboard”,"acs_slb_dashboard",“acs_rds_dashboard”等。具体请以调用DescribeProjectMeta接口查询结果为准。
        * @example `acs_ecs_dashboard`
        */ "Namespace": string;
    }): Promise<{
        "Period": string;
        "Datapoints": {
            "timestamp": number;
            "Maximum": number;
            "userId": string;
            "Minimum": number;
            "instanceId": string;
            "Average": number;
        }[];
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询指定事件报警规则的报警目标。
    */ DescribeEventRuleTargetList(query: {
        "RegionId"?: string;
        /**
        * 报警规则名称。
        * @example `testRule`
        */ "RuleName": string;
    }): Promise<{
        "SlsParameters": {
            "SlsParameter": {
                "Region": string;
                "Project": string;
                "Id": string;
                "LogStore": string;
            }[];
        };
        "ContactParameters": {
            "ContactParameter": {
                "Id": string;
                "Level": string;
                "ContactGroupName": string;
            }[];
        };
        "MnsParameters": {
            "MnsParameter": {
                "Region": string;
                "Id": string;
                "Queue": string;
            }[];
        };
        "RequestId": string;
        "ParameterCount": number;
        "FcParameters": {
            "FCParameter": {
                "Region": string;
                "ServiceName": string;
                "FunctionName": string;
                "Id": string;
            }[];
        };
        "Code": string;
    }>;
    /**
    * 创建一个报警规则关联的资源。
    */ CreateMetricRuleResources(query: {
        "RegionId"?: string;
        /**
        * 关联的资源，格式为一个json数组，如：
        * ```
        * [{"instanceId":"*****ixxxId1"}]
        * ```
        * 每次最多能添加100个资源实例，一个报警规则最多关联3000个实例。
        * @example `[{"instanceId":"i-a2d5q7pm3f9yr29eaqzm"}]`
        */ "Resources": string;
        /**
        * 报警规则ID。
        * @example `i-2ze3w55tr2rcpejpcfap_59c96b85-0339-4f35-ba66-ae4e34d34347`
        */ "RuleId"?: string;
        /**
        * 是否覆盖，默认false。
        * - true：本次提交的将覆盖掉之前的关联资源,原先报警规则里资源将被先清理
        * - false：本次提交不覆盖之前的关联资源
        * @example `false`
        */ "Overwrite"?: string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 创建或者修改事件的报警规则。
    */ PutEventRule(query: {
        "RegionId"?: string;
        "EventPattern": string[];
        /**
        * 报警规则名称。
        * @example `myRuleName`
        */ "RuleName": string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: string;
        /**
        * 事件报警类型，可选值为：
        * - SYSTEM（系统事件），
        * - CUSTOM（自定义事件）。
        * @example `SYSTEM`
        */ "EventType"?: string;
        /**
        * 报警规则描述。
        * @example `我的事件报警测试`
        */ "Description"?: string;
        /**
        * 状态， 可选值为：
        * - ENABLED（启用），
        * - DISABLED（禁用）。
        * @example `ENABLED`
        */ "State"?: string;
    }): Promise<{
        "Data": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 创建或者修改报警联系人组。
    */ PutContactGroup(query: {
        "RegionId"?: string;
        /**
        * 报警联系组的名称。
        * @example `我的报警联系组`
        */ "ContactGroupName": string;
        /**
        * 报警联系组描述信息。
        * @example `报警联系人名称`
        */ "Describe": string;
        "ContactNames": string[];
    }): Promise<{
        "Code": string;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
    }>;
    /**
    * 删除指定的应用分组。
    */ DeleteMonitorGroup(query: {
        "RegionId"?: string;
        /**
        * 应用分组ID。
        * @example `12345`
        */ "GroupId"?: number;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": number;
        "Group": {
            "GroupName": string;
            "ContactGroups": {
                "ContactGroup": {
                    "Name": string;
                }[];
            };
            "GroupId": number;
        };
    }>;
    /**
    * 查询报警模板的详情。
    */ DescribeMetricRuleTemplateAttribute(query: {
        "RegionId"?: string;
        /**
        * 报警模板的名称。
        * @example `我的模板`
        */ "Name"?: string;
        /**
        * 报警模板的ID。
        * @example `123`
        */ "TemplateId"?: string;
    }): Promise<{
        "Resource": {
            "RestVersion": number;
            "Name": string;
            "Description": string;
            "AlertTemplates": {
                "AlertTemplate": {
                    "Category": string;
                    "MetricName": string;
                    "Namespace": string;
                    "RuleName": string;
                    "Escalations": {
                        "Critical": {};
                        "Info": {};
                        "Warn": {
                            "Statistics": string;
                            "Threshold": string;
                            "Times": number;
                            "ComparisonOperator": string;
                        };
                    };
                }[];
            };
            "TemplateId": number;
        };
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    /**
    * 创建或者修改报警联系人信息。
    */ PutContact(query: {
        "RegionId"?: string;
        /**
        * 报警联系人姓名。
        * @example `报警联系人名`
        */ "ContactName": string;
        /**
        * 描述详情。
        * @example `报警描述`
        */ "Describe": string;
        /**
        * 手机号码、短信或者电话联系方式。添加或者修改的手机号码会收到一个激活链接， 激活之后才会被加到联系人中。
        * 手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
        * @example `1333333****`
        */ "Channels.SMS"?: string;
        /**
        * Email地址。添加或者修改Email会收到一个激活链接， 激活之后对应的Email才会被加到联系人中。
        * 手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
        * @example `test@aliyun.com`
        */ "Channels.Mail"?: string;
        /**
        * 旺旺联系方式。手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
        * @example `旺旺`
        */ "Channels.AliIM"?: string;
        /**
        * 钉钉机器人Webhook。手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
        * @example `https://oapi.dingtalk.com/robot/send?access_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565****`
        */ "Channels.DingWebHook"?: string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 删除报警联系人。
    */ DeleteContact(query: {
        "RegionId"?: string;
        /**
        * 报警联系人姓名。
        * @example `关某`
        */ "ContactName": string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 查询任务的细粒度监控数据。
    */ DescribeSiteMonitorData(query: {
        "RegionId"?: string;
        /**
        * 监控项的名称，可选为：
        * - Availability（可用率）
        * - ResponseTime（响应时间)。
        * @example `Availability`
        */ "MetricName": string;
        /**
        * 任务ID。
        * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
        */ "TaskId": string;
        /**
        * 监控的数据类型。
        * @example `metric`
        */ "Type"?: string;
        /**
        * 开始时间，可以传入距离1970年1月1日0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
        * @example `1551579637000`
        */ "StartTime"?: string;
        /**
        * 结束时间，可以传入距离1970年1月1日 0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
        * @example `1551581437000`
        */ "EndTime"?: string;
        /**
        * 统计周期，单位是秒，取60或60的整数倍。默认根据探测频率最小周期返回数据。
        * @example `60`
        */ "Period"?: string;
        /**
        * 分页游标。
        * @example `49f7b317-7645-4cc9-94fd-ea42e5220930ea42e5220930ea42e522****`
        */ "NextToken"?: string;
        /**
        * 返回的数据点数量。
        * @example `1000`
        */ "Length"?: number;
    }): Promise<{
        "Data": {
            "Over5totalTime": number;
            "Error4XXRate": number;
            "UnavailableNumber": number;
            "Over2totalTime": number;
            "timestamp": number;
            "Over100FailureRate": number;
            "Over10FailureRate": number;
            "Availability": number;
            "Over80FailureRate": number;
            "userId": string;
            "AvailableNumber": number;
            "Unavailability": number;
            "ErrorCodeMaximum": number;
            "Over10totalTime": number;
            "taskId": string;
            "Over30FailureRate": number;
            "Error6XXRate": number;
            "Over500NumberRate": number;
            "Over3totalTime": number;
            "Over400NumberRate": number;
            "Error5XXRate": number;
            "Error5XXNumber": number;
            "Over90FailureRate": number;
            "Error4XXNumber": number;
            "Over50FailureRate": number;
            "ErrorCodeMinimum": number;
            "Error6XXNumber": number;
        }[];
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    CreateMonitoringAgentProcess(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "ProcessName"?: string;
        "ProcessUser"?: string;
    }): Promise<{}>;
    DescribeMetricMetaList(query: {
        "RegionId"?: string;
        "Namespace"?: string;
        "Labels"?: string;
        "MetricName"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeMetricList(query: {
        "RegionId"?: string;
        "MetricName": string;
        "Namespace": string;
        "Period"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "Dimensions"?: string;
        "NextToken"?: string;
        "Length"?: string;
        "Express"?: string;
    }): Promise<{}>;
    DescribeMetricLast(query: {
        "RegionId"?: string;
        "MetricName": string;
        "Period"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "Dimensions"?: string;
        "NextToken"?: string;
        "Length"?: string;
        "Express"?: string;
        "Namespace": string;
    }): Promise<{}>;
}
export default CMS;
