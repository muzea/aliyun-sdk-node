interface RebootSmartAccessGatewayRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-w9unmktmupcde*****`
    */ "SmartAGId": string;
    "OwnerId"?: number;
    /**
    * 硬件序列号。
    * @example `a1b2c3d4e5f6g7h8f9`
    */ "SerialNumber"?: string;
}
export { RebootSmartAccessGatewayRequest };