interface UnbindSmartAccessGatewayRequest {
    /**
    * 智能接入网关的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关的ID。
    * @example `sag-0ovhf732a********`
    */ "SmartAGId": string;
    /**
    * 云连接网ID。
    * @example `ccn-kygbldwikz********`
    */ "CcnId": string;
    "OwnerId"?: number;
    "SmartAGUid"?: number;
}
export { UnbindSmartAccessGatewayRequest };