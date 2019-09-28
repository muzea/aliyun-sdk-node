interface AEGIS {
    /**
    * 查询异常事件列表。
    */ DescribeSuspEvents(query: {
        "RegionId"?: string;
        /**
        * 接口访问者源IP。
        * @example `2.2.2.2`
        */ "SourceIp"?: string;
        /**
        * 异常事件状态：
        * - N：待处理告警
        * - Y：已处理告警
        * @example `Y`
        */ "Dealed"?: string;
        /**
        * 异常事件名称或者主机名称，支持模糊匹配。
        * @example `挖矿`
        */ "Name"?: string;
        /**
        * 告警事件的危险等级，多个逗号分隔。以下危险等级严重程度依次递减：
        * - serious：紧急
        * - suspicious：可疑
        * - remind：提醒
        * @example `serious,suspicious,remind`
        */ "Levels"?: string;
        /**
        * 异常事件分类名称。
        * @example `网站后门`
        */ "ParentEventTypes"?: string;
        /**
        * 主机IP地址或者名称。
        * @example `8.8.8.8`
        */ "Remark"?: string;
        "Status"?: string;
        /**
        * 分页查询时设置的每页行数。默认值为20。
        * @example `10`
        */ "PageSize"?: string;
        /**
        * 当前页码。
        * @example `1`
        */ "CurrentPage"?: string;
        /**
        * 异常事件的语言类型：
        * - zh：中文
        * - cn：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 告警事件的唯一标识。
        * @example `8df914418f4211fbf756efe7a6f40cbc`
        */ "AlarmUniqueInfo"?: string;
        /**
        * 请求来源标识，固定为aqs。
        * @example `sas`
        */ "From"?: string;
    }): Promise<{}>;
    /**
    * 获取态势感知安全告警模块的安全事件的列表。
    */ DescribeAlarmEventList(query: {
        "RegionId"?: string;
        /**
        * 请求来源标识，固定为aqs。
        * @example `aqs`
        */ "From": string;
        /**
        * 告警事件列表的页码。起始值：1 默认值：1
        * @example `1`
        */ "CurrentPage": number;
        /**
        * 分页查询时设置的每页行数。默认值: 20。
        * @example `20`
        */ "PageSize": string;
        /**
        * 请求源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 语言参数。
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
        * 告警名称/资产。
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
    }): Promise<{}>;
    /**
    * 异常事件详情。
    */ DescribeSuspEventDetail(query: {
        "RegionId"?: string;
        /**
        * 请求来源，固定为aqs。
        * @example `aqs`
        */ "From": string;
        /**
        * 接口访问者源IP。
        * @example `2.2.2.2`
        */ "SourceIp"?: string;
        /**
        * 异常事件的语言类型：
        * - zh：中文
        * - cn：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 要查询的异常告警ID。
        * @example `199988`
        */ "SuspiciousEventId"?: number;
    }): Promise<{}>;
    /**
    * 获取告警事件的详细信息。
    */ DescribeAlarmEventDetail(query: {
        "RegionId"?: string;
        /**
        * 告警事件的唯一标识。
        * @example `8df914418f4211fbf756efe7a6f40cbc`
        */ "AlarmUniqueInfo": string;
        /**
        * 请求来源标识，固定为aqs。
        * @example `aqs`
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
    }): Promise<{}>;
    CreatScreenSetting(query: {
        "RegionId"?: string;
        "ScreenTitle": string;
        "ScreenIdSetting": string;
        "SourceIp"?: string;
    }): Promise<{}>;
    CreateInstance(query: {
        "RegionId"?: string;
        "ClientToken": string;
        "Duration": number;
        "PricingCycle": string;
        "VersionCode": number;
        "VmNumber": number;
        "OwnerId"?: number;
        "IsAutoRenew"?: boolean;
        "AutoRenewDuration"?: number;
    }): Promise<{}>;
    DeleteRule(query: {
        "RegionId"?: string;
        "Id": string;
        "SourceIp"?: string;
        "Lang"?: string;
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
    DescribeCheckWarningSummary(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "TypeName"?: string;
        "Status"?: string;
        "RiskStatus"?: number;
        "RiskName"?: string;
        "StrategyId"?: number;
        "Uuids"?: string;
        "PageSize"?: number;
        "CurrentPage"?: number;
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
    DescribeDataSource(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "ConfigType"?: string;
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
        "GroupId"?: string;
        "CveId"?: string;
        "Uuids"?: string;
        "Name"?: string;
        "AliasName"?: string;
        "PatchId"?: number;
        "Level"?: string;
        "LastTsStart"?: number;
        "LastTsEnd"?: number;
        "StatusList"?: string;
        "OrderBy"?: string;
        "Direction"?: string;
        "Necessity"?: string;
        "Dealed"?: string;
        "CreateTsStart"?: number;
        "CreateTsEnd"?: number;
        "CurrentPage"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeInstanceStatistics(query: {
        "RegionId"?: string;
        "Uuid": string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeMacConfig(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Target"?: string;
        "Types"?: string;
        "Type"?: string;
        "Config"?: string;
        "Extern"?: string;
    }): Promise<{}>;
    DescribeMachineConfig(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Target"?: string;
        "Types"?: string;
        "Type"?: string;
        "Config"?: string;
        "Lang"?: string;
        "CurrentPage"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeScreenScoreThread(query: {
        "RegionId"?: string;
        "StartTime": number;
        "EndTime": number;
        "SourceIp"?: string;
    }): Promise<{}>;
    DescribeScreenSettings(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
    }): Promise<{}>;
    DescribeStrategyExecDetail(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "StrategyId"?: number;
    }): Promise<{}>;
    DescribeStratety(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "StrategyIds"?: string;
    }): Promise<{}>;
    DescribeVulList(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "CveId"?: string;
        "Ids"?: string;
        "Remark"?: string;
        "GroupId"?: string;
        "Type"?: string;
        "Uuids"?: string;
        "Name"?: string;
        "AliasName"?: string;
        "Level"?: string;
        "StatusList"?: string;
        "Necessity"?: string;
        "Dealed"?: string;
        "BatchName"?: string;
        "Resource"?: string;
        "CreateTsStart"?: number;
        "CreateTsEnd"?: number;
        "CurrentPage"?: number;
        "PageSize"?: number;
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
    DownloadLog(query: {
        "RegionId"?: string;
        "Query": string;
        "StartTime": string;
        "EndTime": string;
        "SourceIp"?: string;
    }): Promise<{}>;
    GetAccountStatistics(query: {
        "RegionId"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    GetCrackStatistics(query: {
        "RegionId"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    GetEntityList(query: {
        "RegionId"?: string;
        "CurrentPage": number;
        "GroupId"?: number;
        "Remark"?: string;
        "EventType"?: string;
        "RegionNo"?: string;
        "PageSize"?: number;
    }): Promise<{}>;
    GetStatistics(query: {
        "RegionId"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    GetStatisticsByUuid(query: {
        "RegionId"?: string;
        "Uuid": string;
    }): Promise<{}>;
    ModifyScreenSetting(query: {
        "RegionId"?: string;
        "ScreenTitle": string;
        "ScreenIdSetting": string;
        "SourceIp"?: string;
    }): Promise<{}>;
    OperateResult(query: {
        "RegionId"?: string;
        "Ids": string;
        "Status": number;
        "SourceIp"?: string;
    }): Promise<{}>;
    QueryCrackEvent(query: {
        "RegionId"?: string;
        "CurrentPage": number;
        "Uuid"?: string;
        "Status"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    QueryLoginEvent(query: {
        "RegionId"?: string;
        "CurrentPage": number;
        "Uuid"?: string;
        "Status"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    ReleaseInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    RenewInstance(query: {
        "RegionId"?: string;
        "ClientToken": string;
        "InstanceId": string;
        "VmNumber": string;
        "Duration": number;
        "PricingCycle": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UpgradeInstance(query: {
        "RegionId"?: string;
        "ClientToken": string;
        "InstanceId": string;
        "VersionCode": number;
        "VmNumber": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyProcessWhiteList(query: {
        "RegionId"?: string;
        "StrategyId": number;
        "Md5s": string;
        "Status": number;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
}
export default AEGIS;
