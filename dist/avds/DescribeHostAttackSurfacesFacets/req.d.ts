interface DescribeHostAttackSurfacesFacetsRequest {
    "RegionId"?: string;
    /**
    * 任务ID。获取指定任务ID数据。
    * @example `123456`
    */ "TaskId": number;
    /**
    * 主机名。获取指定主机下数据。
    * @example `1.2.3.4`
    */ "Host": string;
    "SourceIp"?: string;
}
export { DescribeHostAttackSurfacesFacetsRequest };