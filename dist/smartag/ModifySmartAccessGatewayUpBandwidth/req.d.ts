interface ModifySmartAccessGatewayUpBandwidthRequest {
    /**
    * 智能接入网关实例所在的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 智能接入网关实例ID。
    * @example `sag-jsy******************`
    */ "SmartAGId": string;
    /**
    * 智能接入网关WAN口最大上行带宽。
    * @example `2`
    */ "UpBandwidthWan"?: number;
    /**
    * 智能接入网关4G公网最大上行带宽。
    * @example `3`
    */ "UpBandwidth4G"?: number;
}
export { ModifySmartAccessGatewayUpBandwidthRequest };