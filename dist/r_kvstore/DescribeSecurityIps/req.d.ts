interface DescribeSecurityIpsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { DescribeSecurityIpsRequest };