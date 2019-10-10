interface DescribeSiteMonitorAttributeRequest {
    "RegionId"?: string;
    /**
    * 要查询的任务ID。
    * @example `a1ecd34a-8157-44d9-b065-14950837****`
    */ "TaskId": string;
    /**
    * 任务详情的返回是否包含报警规则。
    * @example `false`
    */ "IncludeAlert"?: boolean;
}
export { DescribeSiteMonitorAttributeRequest };