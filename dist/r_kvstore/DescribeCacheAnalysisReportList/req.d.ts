interface DescribeCacheAnalysisReportListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 查询最近几天内的分析结果，默认查询最近7天的分析结果。
    * > 如果查询时当日的自动分析尚未开始，且没有手动发起缓存分析，则本日没有记录。
    * @example `7`
    */ "Days"?: number;
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
    * @example `1`
    */ "PageNumbers"?: number;
    /**
    * 集群版Redis实例的子节点ID。
    * > 如果不设置将返回所有子节点的分析结果。
    * @example `r-bp1xxxxxxxxxxxxx-db-0`
    */ "NodeId"?: string;
    "Date"?: string;
}
export { DescribeCacheAnalysisReportListRequest };