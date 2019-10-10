interface DescribeInstanceTypesRequest {
    "RegionId"?: string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例规格所属的规格族。更多详情，请参见[实例规格族](~~25378~~)。
    * @example `ecs.t1`
    */ "InstanceTypeFamily"?: string;
}
export { DescribeInstanceTypesRequest };