interface AddSnatEntryRequest {
    /**
    * 智能接入网关实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-hgke*************`
    */ "SmartAGId": string;
    /**
    * 目标网段。
    * @example `192.168.0.1/24`
    */ "CidrBlock": string;
    /**
    * 公网IP地址。
    * @example `10.0.**.**`
    */ "SnatIp": string;
    "OwnerId"?: number;
}
export { AddSnatEntryRequest };