interface DescribeMetricTopRequest {
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
}
export { DescribeMetricTopRequest };