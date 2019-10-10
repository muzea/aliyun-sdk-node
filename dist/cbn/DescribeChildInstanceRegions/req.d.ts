interface DescribeChildInstanceRegionsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例类型，取值：
    * - **VPC**：专有网络。
    * - **VBR**：边界路由器。
    * - **CCN**：云连接网。
    * @example `VPC`
    */ "ProductType"?: string;
}
export { DescribeChildInstanceRegionsRequest };