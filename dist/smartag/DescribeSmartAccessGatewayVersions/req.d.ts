interface DescribeSmartAccessGatewayVersionsRequest {
    /**
    *  智能接入网关的所属区域。取值： cn-shanghai：中国大陆
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 智能接入网关实例ID。
    * @example `sag-d3m51apgw4po5*****`
    */ "SmartAGId"?: string;
}
export { DescribeSmartAccessGatewayVersionsRequest };