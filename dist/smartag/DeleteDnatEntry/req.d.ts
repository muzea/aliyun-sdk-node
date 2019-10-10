interface DeleteDnatEntryRequest {
    /**
    * 智能接入网关实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * > 目前只支持硬件版实例。
    * @example `sag-jfh***********`
    */ "SagId": string;
    "OwnerId"?: number;
    /**
    * DNAT实例ID。
    * @example `dnat-jhd*******`
    */ "DnatEntryId"?: string;
}
export { DeleteDnatEntryRequest };