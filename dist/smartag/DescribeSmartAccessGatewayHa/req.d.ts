interface DescribeSmartAccessGatewayHaRequest {
    /**
    * 智能接入网关实例的地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 要查询的智能接入网关实例ID。
    * @example `sag-pno62188piyc6txxxxx`
    */ "SmartAGId": string;
    "OwnerId"?: number;
}
export { DescribeSmartAccessGatewayHaRequest };