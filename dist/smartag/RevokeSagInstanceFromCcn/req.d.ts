interface RevokeSagInstanceFromCcnRequest {
    /**
    * 智能接入网关实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-hd**************`
    */ "SmartAGId": string;
    /**
    * 云连接网实例ID。
    * @example `ccn-jf********`
    */ "CcnInstanceId": string;
    "OwnerId"?: number;
}
export { RevokeSagInstanceFromCcnRequest };