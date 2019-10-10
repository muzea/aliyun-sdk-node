interface DescribeAlarmEventListRequest {
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
}
export { DescribeAlarmEventListRequest };