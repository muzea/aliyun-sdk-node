interface DescribeDomainAttackSurfacesFacetsRequest {
    "RegionId"?: string;
    /**
    * 任务ID。获取指定任务ID数据。
    * @example `12345`
    */ "TaskId": number;
    /**
    * 域名。
    * @example `test.com`
    */ "Domain": string;
    "SourceIp"?: string;
}
export { DescribeDomainAttackSurfacesFacetsRequest };