interface SAS {
    /**
    * 查看云产品检测结果汇总。
    */ DescribeRiskCheckSummary(query: {
        "RegionId"?: string;
        /**
        * 请求源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 调用接口返回的内容的语种类型，支持中文和英文。
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "RiskCheckSummary": {
            "RiskCount": number;
            "RiskRate": number;
            "PreviousTime": number;
            "ItemCount": number;
            "AffectedAssetCount": number;
            "RiskLevelCount": {
                "Count": number;
                "Key": string;
            }[];
            "Groups": {
                "Status": string;
                "CountByStatus": {
                    "Status": string;
                    "Count": number;
                }[];
                "RemainingTime": number;
                "Sort": number;
                "Title": string;
                "Id": number;
            }[];
            "PreviousCount": number;
        };
    }>;
    /**
    * 调用本接口执行基线检测任务。
    */ StartBaselineSecurityCheck(query: {
        "RegionId"?: string;
        /**
        * 访问者源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 调用参数返回的内容的语言种类。支持中文（CN）和英文（EN）。
        * @example `cn`
        */ "Lang"?: string;
        "ItemIds"?: number[];
        "Assets"?: string[];
        /**
        * 任务类型。
        * @example `check`
        */ "Type"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 获取异常事件详情。
    */ DescribeSuspEventDetail(query: {
        "RegionId"?: string;
        /**
        * 请求来源，固定为sas。
        * @example `sas`
        */ "From": string;
        /**
        * 接口访问者源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 异常事件的语言类型。
        * - zh：中文
        * - cn：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 要查询的异常告警ID。
        * @example `1`
        */ "SuspiciousEventId"?: number;
    }): Promise<{
        "RequestId": string;
        "HostId": string;
        "Code": string;
        "Message": string;
        "EventDesc": string;
        "EventTypeDesc": string;
        "EventStatus": number;
        "EventName": string;
        "SaleVersion": string;
        "IntranetIp": string;
        "DataSource": string;
        "InstanceName": string;
        "Type": string;
        "CanBeDealOnLine": boolean;
        "OperateMsg": string;
        "Uuid": string;
        "Details": {
            "Type": string;
            "Value": string;
            "InfoType": string;
            "Name": string;
        }[];
        "InternetIp": string;
        "Level": string;
        "Id": number;
        "LastTime": string;
        "SasId": string;
    }>;
    /**
    * 查看所有云产品配置检测项的类型。
    */ DescribeRiskItemType(query: {
        "RegionId"?: string;
        /**
        * 请求源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 调用该接口返回的内容的语言种类。支持中文（CN）和英文（EN）。
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "List": {
            "Title": string;
            "Id": number;
        }[];
    }>;
    /**
    * 获取告警事件的详细信息。
    */ DescribeAlarmEventDetail(query: {
        "RegionId"?: string;
        /**
        * 告警事件的唯一标识。
        * @example `8df914418f4211fbf756efe7a6f40cbc`
        */ "AlarmUniqueInfo": string;
        /**
        * 请求来源标识，固定为sas。
        * @example `sas`
        */ "From": string;
        /**
        * 请求源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 告警事件显示的语言类型。
        * - zh：中文
        * - cn：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "Data": {
            "Uuid": string;
            "AlarmEventAliasName": string;
            "Type": string;
            "InternetIp": string;
            "AlarmEventDesc": string;
            "IntranetIp": string;
            "CauseDetails": {
                "Value": {
                    "Type": string;
                    "Value": string;
                    "Name": string;
                }[];
                "Key": string;
            }[];
            "Level": string;
            "EndTime": number;
            "StartTime": number;
            "CanBeDealOnLine": boolean;
            "InstanceName": string;
        };
        "RequestId": string;
    }>;
    /**
    * 查询异常事件列表。
    */ DescribeSuspEvents(query: {
        "RegionId"?: string;
        /**
        * 请求来源标识，固定为sas。
        * @example `sas`
        */ "From": string;
        /**
        * 接口访问者源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 异常事件状态。
        * - N：待处理告警
        * - Y：已处理告警
        * @example `N`
        */ "Dealed"?: string;
        /**
        * 异常事件名称或者是主机名称，模糊匹配。
        * @example `矿`
        */ "Name"?: string;
        /**
        * 告警事件的危险等级，多个危险等级用逗号分隔。以下危险等级严重程度依次递减。
        * - serious：紧急
        * - suspicious：可疑
        * - remind：提醒
        * @example `serious`
        */ "Levels"?: string;
        /**
        * 异常事件分类名称。
        * @example `网站后门`
        */ "ParentEventTypes"?: string;
        /**
        * 主机IP或者名称。
        * @example `测试机器`
        */ "Remark"?: string;
        /**
        * 分页查询时设置的每页行数，默认值为20。
        * @example `20`
        */ "PageSize"?: string;
        /**
        * 当前页码。
        * @example `1`
        */ "CurrentPage"?: string;
        /**
        * 异常事件的语言类型。
        * - zh：中文
        * - cn：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 告警事件的唯一标识。
        * @example `8df914418f4211fbf756efe7a6f40cbc`
        */ "AlarmUniqueInfo"?: string;
    }): Promise<{
        "TotalCount": number;
        "Count": number;
        "PageSize": number;
        "RequestId": string;
        "CurrentPage": number;
        "SuspEvents": {
            "EventStatus": number;
            "SaleVersion": string;
            "IntranetIp": string;
            "EventSubType": string;
            "Name": string;
            "DataSource": string;
            "OccurrenceTime": string;
            "InstanceName": string;
            "Desc": string;
            "CanBeDealOnLine": boolean;
            "Uuid": string;
            "InternetIp": string;
            "Level": string;
            "Id": number;
            "LastTime": string;
        }[];
    }>;
    /**
    * 获取态势感知安全告警模块的安全事件的列表。
    */ DescribeAlarmEventList(query: {
        "RegionId"?: string;
        /**
        * 请求来源标识，固定为sas。
        * @example `sas`
        */ "From": string;
        /**
        * 告警事件列表的页码。起始值为1，默认值为1。
        * @example `1`
        */ "CurrentPage": number;
        /**
        * 分页查询时设置的每页行数。默认值为20。
        * @example `20`
        */ "PageSize": string;
        /**
        * 请求源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 告警的语言类型。
        * - zh：中文
        * - cn：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 告警事件状态。
        * - N：待处理告警
        * - Y：已处理告警
        * @example `Y`
        */ "Dealed"?: string;
        /**
        * 告警事件的危险等级，多个严重等级用逗号分隔（严重等级递减）。
        * - serious：紧急
        * - suspicious：可疑
        * - remind：提醒
        * @example `serious`
        */ "Levels"?: string;
        /**
        * 告警名称/资产信息。
        * @example `database_server`
        */ "Remark"?: string;
        "GroupId"?: string;
        /**
        * 告警事件名称。
        * @example `DDOS木马`
        */ "AlarmEventName"?: string;
        /**
        * 告警事件类型。
        * @example `恶意进程（云查杀）`
        */ "AlarmEventType"?: string;
        "OperateErrorCodeList"?: string[];
    }): Promise<{
        "RequestId": string;
        "PageInfo": {
            "Count": number;
            "TotalCount": number;
            "PageSize": number;
            "CurrentPage": number;
        };
        "SuspEvents": {
            "Uuid": string;
            "Description": string;
            "CanCancelFault": boolean;
            "InternetIp": string;
            "SuspiciousEventCount": number;
            "AlarmUniqueInfo": string;
            "AlarmEventName": string;
            "AlarmEventType": string;
            "IntranetIp": string;
            "Level": string;
            "EndTime": number;
            "StartTime": number;
            "SaleVersion": string;
            "CanBeDealOnLine": boolean;
            "InstanceName": string;
        }[];
    }>;
    /**
    * 调用本接口获取账号信息列表。
    */ DescribePropertyUserItem(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 是否强制刷新待查询数据。
        * @example `true`
        */ "ForceFlush"?: boolean;
        /**
        * 指定待查询的账号信息。
        * @example `adm`
        */ "User"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数 。
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PropertyItems": {
                "Count": number;
                "User": string;
            }[];
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口修改标签与服务器或云产品的关系。
    */ ModifyTagWithUuid(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 指定待修改机器列表。
        * @example `111-xx,aa-bb`
        */ "UuidList"?: string;
        /**
        * 指定待修改标签列表。
        * @example `ac,ad`
        */ "TagList"?: string;
        /**
        * 指定待修改标签ID。
        * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
        */ "TagId"?: string;
        /**
        * 指定待修改的资产类型。
        * @example `ecs`
        */ "MachineTypes"?: string;
    }): Promise<{
        "code": number;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口获取软件列表.。
    */ DescribePropertySoftwareItem(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 是否强制刷新待查询数据。
        * @example `true`
        */ "ForceFlush"?: boolean;
        /**
        * 指定待查询的软件名称。
        * @example `xxx`
        */ "Name"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数 。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PropertyItems": {
                "Name": string;
                "Count": number;
            }[];
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口获取资产指纹，即进程、端口、软件、账户4种类型的统计数量。
    */ DescribePropertyCount(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 指定待查询的指纹类型。可选：
        * - **user**：账户
        * - **software**：软件
        * - **process**：进程
        * - **port**：端口
        * > 类型不填表示获取所有类型信息。
        * @example `port`
        */ "Type"?: string;
        /**
        * 指定待查询的资产UUID。
        * @example `[]`
        */ "UuidList"?: string;
    }): Promise<{
        "data": {
            "Process": number;
            "Software": number;
            "Port": number;
            "User": number;
        };
    }>;
    /**
    * 调用该接口获取云产品统计信息。
    */ DescribeCloudProductFieldStatistics(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
    }): Promise<{
        "code": number;
        "data": {
            "GroupedFields": {
                "InstanceCount": number;
                "RiskInstanceCount": number;
                "categoryCount": {
                    "MachineType": number;
                    "Count": number;
                }[];
            };
        };
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口域名资产列表。
    */ DescribeDomainList(query: {
        "RegionId"?: string;
        /**
        * 指定访问源IP地址。
        * @example `127.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 指定的域名模糊匹配搜索信息。
        * @example `sas`
        */ "FuzzyDomain"?: string;
        /**
        * 指定待查询的域名类型。
        * @example `root`
        */ "DomainType"?: string;
        /**
        * 指定列表每页显示数据条数。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
    }): Promise<{
        "code": number;
        "data": {
            "PageInfo": {
                "TotalCount": number;
                "PageSize": number;
                "CurrentPage": number;
                "Count": number;
            };
            "DomainListResponseList": {
                "Domain": string;
            }[];
        };
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口获取软件列表中一个软件的详细信息。
    */ DescribePropertySoftwareDetail(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 服务器名称或IP。
        * @example `0.0.0.0`
        */ "Remark"?: string;
        /**
        * 指定待查询的软件名称。
        * @example `xxxx`
        */ "Name"?: string;
        /**
        * 指定待查询的软件安装路径。
        * @example `/etc/test`
        */ "Path"?: string;
        /**
        * 指定待查询的软件版本信息。
        * @example `11`
        */ "SoftwareVersion"?: string;
        /**
        * 指定待查询的资产UUID。
        * @example `50d213b4-3a35-427a-b8a5-04b0c7e1f4d2"`
        */ "Uuid"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        *  指定列表每页显示数据条数 。
        * @example `5`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "Propertys": {
                "Path": string;
                "InstanceName": any;
                "Ip": any;
                "Name": string;
                "Create": number;
                "InstallTime": string;
                "Version": string;
                "Uuid": string;
            }[];
            "pageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口获取域名资产数量。
    */ DescribeDomainCount(query: {
        "RegionId"?: string;
        /**
        * 指定的访问源IP地址。
        * @example `127.1.1.1`
        */ "SourceIp"?: string;
    }): Promise<{
        "code": number;
        "data": {
            "TotalDomainsCount": number;
            "RootDomainsCount": number;
        };
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口获取域名资产详情。
    */ DescribeDomainDetail(query: {
        "RegionId"?: string;
        /**
        * 指定待查询的域名名称或网站名称。
        * @example `0.0.0.0`
        */ "DomainName": string;
        /**
        * 指定访问源IP地址。
        * @example `127.1.1.1`
        */ "SourceIp"?: string;
    }): Promise<{
        "code": number;
        "data": {
            "DomainDetailItems": {
                "InstanceName": string;
                "AssetType": string;
                "Uuid": string;
                "InternetIp": string;
                "InstanceId": string;
                "IntranetIp": string;
            }[];
            "RootDomain": string;
            "Domain": string;
        };
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口修改资产与分组的关系。
    */ CreateOrUpdateAssetGroup(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * UUIDS列表信息。
        * @example `[]`
        */ "Uuids"?: string;
        /**
        * 指定待修改分组名称。
        * @example `test`
        */ "GroupName"?: string;
        /**
        * 指定待修改分组ID。
        * @example `111111`
        */ "GroupId"?: number;
    }): Promise<{
        "code": number;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口获取进程列表中一个进程的详细信息。
    */ DescribePropertyProcDetail(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 服务器名称或IP。
        * @example `0.0.0.0`
        */ "Remark"?: string;
        /**
        * 指定待查询进程名称。
        * @example `8888`
        */ "Name"?: string;
        /**
        * 指定待查询运行用户信息。
        * @example `root`
        */ "User"?: string;
        /**
        * 指定待查询启动参数。
        * @example `./8888`
        */ "Cmdline"?: string;
        /**
        * 指定待查询的资产UUID。
        * @example `c4678332-ef35-4ad4-8358-681ebbc0ccab`
        */ "Uuid"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。
        * @example `5`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
            "Propertys": {
                "InstanceName": any;
                "Pname": string;
                "Euidname": string;
                "Ip": any;
                "Pid": string;
                "Uuid": string;
                "Path": string;
                "Cmdline": string;
                "Name": string;
                "Create": number;
                "StartTime": string;
                "User": string;
                "Md5": string;
            }[];
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口获取机器的统计信息。
    */ DescribeInstanceStatistics(query: {
        "RegionId"?: string;
        /**
        * 指定待查询的机器列表。
        * @example `["ff675afd-703e-40dc-809b-0fad8b0ded28"]`
        */ "Uuid": string;
        /**
        * 指定数据请求来源。固定为sas。
        * @example `sas`
        */ "From": string;
        /**
        * 指定访问源IP地址。
        * @example `127.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 指定返回结果语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "code": number;
        "requestId": string;
        "success": boolean;
        "data": {
            "EntEntityListity": {
                "Uuid": string;
                "Health": number;
                "Suspicious": number;
                "Vul": number;
            }[];
        };
    }>;
    /**
    * 调用该接口获取标签的统计信息。
    */ DescribeGroupedTags(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 指定待查询的资产类型。
        * @example `ecs`
        */ "MachineTypes"?: string;
    }): Promise<{
        "code": number;
        "data": {
            "GroupedFileds": {
                "Name": string;
                "Count": number;
                "TagId": number;
            }[];
        };
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口获取进程信息列表。
    */ DescribePropertyProcItem(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 是否强制刷新待查询数据。
        * @example `true`
        */ "ForceFlush"?: boolean;
        /**
        * 指定待查询的进程名称。
        * @example `test`
        */ "Name"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PropertyItems": {
                "Name": string;
                "Count": number;
            }[];
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口获取账号列表中一个账号的详细信息。
    */ DescribePropertyUserDetail(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 服务器名称或IP。
        * @example `0.0.0.0`
        */ "Remark"?: string;
        /**
        * 指定待查询的账户名称。
        * @example `test`
        */ "User"?: string;
        /**
        * 是否ROOT权限。
        * - **0**：否
        * - **1**：是
        * @example `0`
        */ "IsRoot"?: string;
        /**
        * 指定待查询的资产UUID。
        * @example `50d213b4-3a35-427a-b8a5-04b0c7e1f4d2`
        */ "Uuid"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数 。
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
            "Propertys": {
                "LastLoginTime": string;
                "GroupName": string[];
                "IsRoot": string;
                "InstanceName": any;
                "AccountsExpirationDate": string;
                "PasswordExpirationDate": string;
                "Ip": any;
                "Create": number;
                "User": string;
                "Uuid": string;
                "LastLoginIp": string;
            }[];
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口查询端口列表中一个端口的详细信息。
    */ DescribePropertyPortDetail(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 服务器名称或IP。
        * @example `0.0.0.0`
        */ "Remark"?: string;
        /**
        * 指定待查询的端口信息。
        * @example `22`
        */ "Port"?: string;
        /**
        * 指定待查询的进程名称。
        * @example `sshd`
        */ "ProcName"?: string;
        /**
        * 指定待查询的资产UUID。
        * @example `50d213b4-3a35-427a-b8a5-04b0c7e1f4d2`
        */ "Uuid"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        *  指定列表每页显示数据条数。
        * @example `6`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "Propertys": {
                "BindIp": string;
                "Port": string;
                "InstanceName": any;
                "Proto": string;
                "Ip": any;
                "Create": number;
                "ProcName": string;
                "Uuid": string;
            }[];
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 调用该接口删除服务器分组。
    */ DeleteGroup(query: {
        "RegionId"?: string;
        /**
        * 指定待删除的服务器分组ID。
        * @example `11111`
        */ "GroupId": number;
        /**
        * 指定访问源IP地址。
        * @example `127.1.1.1`
        */ "SourceIp"?: string;
    }): Promise<{
        "code": number;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用该接口获取所有的分组信息。
    */ DescribeAllGroups(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 指定返回结果语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "code": number;
        "requestId": string;
        "success": boolean;
        "data": {
            "Groups": {
                "GroupId": number;
                "GroupName": string;
            };
        };
    }>;
    /**
    * 调用该接口检索资产实例列表。
    */ DescribeFieldStatistics(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 指定待检索的资产类型。
        * @example `ecs`
        */ "MachineTypes"?: string;
    }): Promise<{
        "code": number;
        "data": {
            "GroupedFields": {
                "InstanceCount": number;
                "RiskInstanceCount": number;
                "UnProtectedInstanceCount": number;
                "GroupCount": number;
                "RegionCount": number;
                "VpcCount": number;
            };
        };
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 查询漏洞列表。
    */ DescribeVulList(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 语言。
        * 取值：
        * - zh：中文
        * - en：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 查询标记，可以为资产内网IP、外网IP或资产名称。
        * @example `192.168.1.1`
        */ "Remark"?: string;
        /**
        * 漏洞类型，包括以下几类：
        * -  cve：Linux软件漏洞
        * -  sys：Windows系统漏洞
        * -  cms：Web-CMS漏洞
        * -  app：应用漏洞
        * -  emg：应急漏洞
        * @example `cve`
        */ "Type"?: string;
        /**
        * 服务器UUID列表，多个用英文逗号分隔。
        * @example `1587bedb-fdb4-48c4-9330-************`
        */ "Uuids"?: string;
        /**
        * 漏洞别名。
        * @example `RHSA-2019:0230-Important: polkit security update`
        */ "AliasName"?: string;
        /**
        * 漏洞修复必要性等级。多个等级用英文逗号分隔。
        * 取值：
        * - asap：高
        * - later：中
        * - nntf：低
        * @example `asap,later,nntf`
        */ "Necessity"?: string;
        /**
        * 漏洞是否处理。
        * 取值：
        * - y：已处理
        * - n：未处理
        * @example `n`
        */ "Dealed"?: string;
        /**
        * 漏洞列表分页页码。
        * 起始值：1
        * 默认值：1
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 漏洞列表分页大小。
        * 默认值：20
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "CurrentPage": number;
        "VulRecords": {
            "Necessity": string;
            "Uuid": string;
            "Ip": string;
            "ModifyTs": number;
            "Type": string;
            "FirstTs": number;
            "InstanceId": string;
            "InternetIp": string;
            "ResultMessage": string;
            "Related": string;
            "GroupId": number;
            "OsVersion": string;
            "ExtendContentJson": {
                "Necessity": {
                    "Status": string;
                };
                "Os": string;
                "cveList": string[];
                "RpmEntityList": {
                    "Name": string;
                    "Version": string;
                    "FullVersion": string;
                    "MatchDetail": string;
                    "UpdateCmd": string;
                    "Path": string;
                }[];
                "OsRelease": string;
            };
            "Name": string;
            "Status": number;
            "LastTs": number;
            "NeedReboot": string;
            "AliasName": string;
            "Tag": string;
            "IntranetIp": string;
            "PrimaryId": number;
            "ResultCode": string;
            "Level": string;
            "InstanceName": string;
        }[];
    }>;
    /**
    * 调用该接口获取端口信息列表。
    */ DescribePropertyPortItem(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 是否强制刷新待查询数据。
        * @example `true`
        */ "ForceFlush"?: boolean;
        /**
        * 指定待查询端口。
        * @example `22`
        */ "Port"?: string;
        /**
        * 指定返回结果的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。
        * @example `5`
        */ "PageSize"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "PageInfo": {
                "Count": number;
                "PageSize": number;
                "TotalCount": number;
                "CurrentPage": number;
            };
            "PropertyItems": {
                "Port": string;
                "Proto": string;
                "Count": number;
            }[];
        };
        "success": boolean;
        "requestId": any;
        "message": string;
    }>;
    /**
    * 查看基线检查结果统计。
    */ DescribeCheckWarningSummary(query: {
        "RegionId"?: string;
        /**
        * 来源IP。
        * @example `127.0.0.1`
        */ "SourceIp"?: string;
        /**
        * 语言。
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 基线一级类型。
        * @example `database`
        */ "TypeName"?: string;
        /**
        * 检查项状态。
        * - 1：未通过
        * - 2：验证中
        * - 3：已通过
        * - 5：已失效
        * - 6：已忽略
        * @example `1`
        */ "Status"?: string;
        /**
        * 基线检查的状态。
        * - 1：未通过
        * - 3：已通过
        * @example `1`
        */ "RiskStatus"?: number;
        /**
        * 基线检查风险项名称。
        * @example `Redis安全基线检查`
        */ "RiskName"?: string;
        /**
        * 策略ID。
        * @example `1`
        */ "StrategyId"?: number;
        /**
        * 机器ID。
        * @example `f03259d8-1e81-4fae-bcbb-275fb5******`
        */ "Uuids"?: string;
        /**
        * 分页大小。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 分页页码。
        * @example `1`
        */ "CurrentPage"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "CurrentPage": number;
        "Count": number;
        "WarningSummarys": {
            "RiskId": number;
            "LastFoundTime": string;
            "MediumWarningCount": number;
            "WarningMachineCount": number;
            "CheckCount": number;
            "HighWarningCount": number;
            "Level": string;
            "TypeAlias": string;
            "SubTypeAlias": string;
            "LowWarningCount": number;
            "RiskName": string;
        }[];
    }>;
    DescribeRiskCheckResult(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "GroupId"?: number;
        "CurrentPage"?: number;
        "RiskLevel"?: string;
        "Status"?: string;
        "ItemIds"?: string[];
        "Name"?: string;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeUserLayoutAuthorization(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    ModifyGroupProperty(query: {
        "RegionId"?: string;
        "Data": string;
        "SourceIp"?: string;
    }): Promise<{}>;
    DescribeAutoDelConfig(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
    }): Promise<{}>;
    DescribeCheckWarningDetail(query: {
        "RegionId"?: string;
        "CheckWarningId": number;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeCheckWarnings(query: {
        "RegionId"?: string;
        "Uuid": string;
        "RiskId": number;
        "SourceIp"?: string;
        "Lang"?: string;
        "PageSize"?: number;
        "CurrentPage"?: number;
    }): Promise<{}>;
    DescribeConcernNecessity(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeEmgVulGroup(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeGroupedVul(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "Type"?: string;
        "Uuids"?: string;
        "AliasName"?: string;
        "Necessity"?: string;
        "Dealed"?: string;
        "CurrentPage"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeRiskCheckItemResult(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "ItemId"?: number;
        "CurrentPage"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeSecurityCheckScheduleConfig(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeStrategyExecDetail(query: {
        "RegionId"?: string;
        "StrategyId": number;
        "SourceIp"?: string;
    }): Promise<{}>;
    DescribeStratety(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "StrategyIds"?: string;
    }): Promise<{}>;
    DescribeVulDetails(query: {
        "RegionId"?: string;
        "Type": string;
        "Name": string;
        "SourceIp"?: string;
        "Lang"?: string;
        "AliasName"?: string;
    }): Promise<{}>;
    DescribeVulWhitelist(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "CurrentPage"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeWarningMachines(query: {
        "RegionId"?: string;
        "RiskId": number;
        "SourceIp"?: string;
        "Lang"?: string;
        "MachineName"?: string;
        "Uuids"?: string;
        "StrategyId"?: number;
        "PageSize"?: number;
        "CurrentPage"?: number;
    }): Promise<{}>;
    ModifyCreateVulWhitelist(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Whitelist"?: string;
        "Reason"?: string;
    }): Promise<{}>;
    ModifyOperateVul(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Info"?: string;
        "OperateType"?: string;
        "Type"?: string;
        "Reason"?: string;
    }): Promise<{}>;
    ModifyRiskCheckStatus(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "ItemId"?: number;
        "TaskId"?: number;
        "Status"?: string;
    }): Promise<{}>;
    ModifyRiskSingleResultStatus(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "Ids"?: string[];
        "Status"?: string;
        "TaskId"?: number;
    }): Promise<{}>;
    DescribeCloudCenterInstances(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Criteria"?: string;
        "MachineTypes"?: string;
        "LogicalExp"?: string;
        "NoPage"?: boolean;
        "PageSize"?: number;
        "CurrentPage"?: number;
    }): Promise<{}>;
}
export default SAS;
