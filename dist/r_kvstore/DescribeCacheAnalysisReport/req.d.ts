interface DescribeCacheAnalysisReportRequest {
    "RegionId"?: string;
    /**
    * 需要查询的日期，每次可查询一天的缓存分析结果，格式：`2019-08-05Z`。
    * @example `2019-08-05Z`
    */ "Date": string;
    /**
    * 分析类型，当前唯一值：`BigKey`。
    * @example `BigKey`
    */ "AnalysisType": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 每页返回的记录数，可选值：
    * * 30
    * * 50
    * * 100
    * 默认值：30。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 需要返回的页码。
    * > 如果该值大于返回结果的最大页数，则返回的大key结果为空。
    * @example `1`
    */ "PageNumbers"?: number;
    /**
    * 集群版Redis实例的子节点ID。
    * > 如果不设置将返回所有子节点的分析结果。
    * @example `r-bp1xxxxxxxxxxxxx-db-0`
    */ "NodeId"?: string;
}
export { DescribeCacheAnalysisReportRequest };