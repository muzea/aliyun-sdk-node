interface DescribeMetricRuleListRequest {
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
}
export { DescribeMetricRuleListRequest };