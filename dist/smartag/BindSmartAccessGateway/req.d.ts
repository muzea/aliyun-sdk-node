interface BindSmartAccessGatewayRequest {
    /**
    * 智能接入网关的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 智能接入网关ID。
    * @example `sag-m7ez44zpayma*****`
    */ "SmartAGId": string;
    "OwnerId"?: number;
    /**
    * 要绑定的云连接网ID。
    * @example `ccn-isdjvvkexkrpk*****`
    */ "CcnId": string;
    "SmartAGUid"?: number;
}
export { BindSmartAccessGatewayRequest };