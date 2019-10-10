interface UnlockSmartAccessGatewayRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 智能接入网关实例ID。
    * @example `sag-w9unmktmupcde*****`
    */ "SmartAGId": string;
}
export { UnlockSmartAccessGatewayRequest };