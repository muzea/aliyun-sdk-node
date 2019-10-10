interface GrantSagInstanceToCcnRequest {
    /**
    * 智能接入网关实例所属的实例ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-hdh************`
    */ "SmartAGId": string;
    /**
    * 云连接网实例ID。
    * @example `ccn-jdh**********`
    */ "CcnInstanceId": string;
    /**
    * 云连接网实例所属的用户ID。
    * @example `123535455445666`
    */ "CcnUid": number;
    "OwnerId"?: number;
}
export { GrantSagInstanceToCcnRequest };