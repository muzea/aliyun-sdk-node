interface CreateDnatEntryRequest {
    "RegionId"?: string;
    /**
    * 指定Uis的节点ID
    * @example `UISNODE-xxxpucur6tfhpzok5u2mi`
    */ "UisNodeId": string;
    /**
    * DNAT后的IP地址
    * @example `3.3.3.3`
    */ "DestinationIp": string;
    /**
    * DNAT后的端口，-1代表所有端口
    * @example `8080`
    */ "DestinationPort": number;
    /**
    * DNAT前的原始IP
    * @example `2.2.2.2`
    */ "OriginalIp": string;
    /**
    * DNAT前的原始Port。-1代表所有端口
    * @example `80`
    */ "OriginalPort": number;
    /**
    * 指定DNAT的协议，支持tcp、udp、any。当协议为any时，指定端口无效。
    * @example `tcp`
    */ "IpProtocol": string;
    /**
    * DNAT规则的名字
    * @example `dnatEntry1`
    */ "Name": string;
    "OwnerId"?: number;
}
export { CreateDnatEntryRequest };