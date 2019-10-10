interface DescribeVSwitchAttributesRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    *  要查询的交换机ID。
    * @example `vsw-25naue4g****`
    */ "VSwitchId": string;
    "DryRun"?: boolean;
}
export { DescribeVSwitchAttributesRequest };