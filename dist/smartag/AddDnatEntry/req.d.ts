interface AddDnatEntryRequest {
    /**
    * 智能接入网关实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * > 目前只支持硬件版实例。
    * @example `sag-kdhg*******`
    */ "SagId": string;
    /**
    * 公网端口。
    * 取值范围：**1-65535**。
    * @example `80`
    */ "ExternalPort": string;
    /**
    * 目标私网IP地址。
    * @example `192.168.0.1`
    */ "InternalIp": string;
    /**
    * 协议类型，包含以下选项：
    * * TCP：转发TCP协议的报文。
    * * UDP：转发UDP协议的报文。
    * * Any：转发所有协议的报文。
    * @example `TCP`
    */ "IpProtocol": string;
    /**
    * 目标私网端口号。
    * 取值范围：**1-65535**。
    * @example `80`
    */ "InternalPort": string;
    /**
    * DNAT类型，包括以下选项：
    * * Intranet：缺省值，表示私网DNAT。
    * * Internet：公网DNAT。
    * @example `Intranet`
    */ "Type"?: string;
    /**
    * 外部的公网IP地址。
    * @example `10.10.**.**`
    */ "ExternalIp"?: string;
    "OwnerId"?: number;
}
export { AddDnatEntryRequest };