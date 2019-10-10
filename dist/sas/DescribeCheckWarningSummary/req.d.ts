interface DescribeCheckWarningSummaryRequest {
    "RegionId"?: string;
    /**
    * 来源IP。
    * @example `127.0.0.1`
    */ "SourceIp"?: string;
    /**
    * 语言。
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 基线一级类型。
    * @example `database`
    */ "TypeName"?: string;
    /**
    * 检查项状态。
    * - 1：未通过
    * - 2：验证中
    * - 3：已通过
    * - 5：已失效
    * - 6：已忽略
    * @example `1`
    */ "Status"?: string;
    /**
    * 基线检查的状态。
    * - 1：未通过
    * - 3：已通过
    * @example `1`
    */ "RiskStatus"?: number;
    /**
    * 基线检查风险项名称。
    * @example `Redis安全基线检查`
    */ "RiskName"?: string;
    /**
    * 策略ID。
    * @example `1`
    */ "StrategyId"?: number;
    /**
    * 机器ID。
    * @example `f03259d8-1e81-4fae-bcbb-275fb5******`
    */ "Uuids"?: string;
    /**
    * 分页大小。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 分页页码。
    * @example `1`
    */ "CurrentPage"?: number;
}
export { DescribeCheckWarningSummaryRequest };