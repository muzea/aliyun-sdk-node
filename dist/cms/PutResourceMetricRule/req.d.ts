interface PutResourceMetricRuleRequest {
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
}
export { PutResourceMetricRuleRequest };