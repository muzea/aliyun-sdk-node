interface ActivateSmartAccessGatewayRequest {
    /**
    * 智能接入网关实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-ke3kq4evpi8p6******`
    */ "SmartAGId": string;
    "OwnerId"?: number;
}
export { ActivateSmartAccessGatewayRequest };