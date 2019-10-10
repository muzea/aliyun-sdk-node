interface DescribeAlertHistoryListRequest {
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
}
export { DescribeAlertHistoryListRequest };