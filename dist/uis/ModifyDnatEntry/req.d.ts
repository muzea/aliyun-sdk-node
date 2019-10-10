interface ModifyDnatEntryRequest {
    /**
    * Uis实例所属的地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * Uis节点ID
    * @example `UISNODE-xxxi9zyyd8seh8udp5p26`
    */ "UisNodeId": string;
    /**
    * DNAT规则ID
    * @example `UISDNAT-xxxs1yb3gtpxrfbbzixwg`
    */ "UisDnatId"?: string;
    /**
    * DNAT转换后的IP
    * @example `9.8.8.8`
    */ "DestinationIp"?: string;
    /**
    * DNAT转换后的端口
    * @example `51111`
    */ "DestinationPort"?: number;
    /**
    * DNAT转换前的IP
    * @example `9.8.8.4`
    */ "OriginalIp"?: string;
    /**
    * DNAT转换前的端口
    * @example `52222`
    */ "OriginalPort"?: number;
    /**
    * DNAT生效的协议
    * @example `tcp`
    */ "IpProtocol"?: string;
    /**
    * DNAT规则的名字
    * @example `TestModifyDnat`
    */ "Name"?: string;
}
export { ModifyDnatEntryRequest };