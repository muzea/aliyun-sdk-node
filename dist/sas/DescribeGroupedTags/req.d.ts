interface DescribeGroupedTagsRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 指定待查询的资产类型。
    * @example `ecs`
    */ "MachineTypes"?: string;
}
export { DescribeGroupedTagsRequest };