interface PutGroupMetricRuleRequest {
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
}
export { PutGroupMetricRuleRequest };