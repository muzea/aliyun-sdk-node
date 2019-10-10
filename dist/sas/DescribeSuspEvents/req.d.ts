interface DescribeSuspEventsRequest {
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
}
export { DescribeSuspEventsRequest };