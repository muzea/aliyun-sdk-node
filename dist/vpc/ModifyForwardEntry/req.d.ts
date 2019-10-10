interface ModifyForwardEntryRequest {
    /**
    * NAT网关所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example ` cn-hangzhou`
    */ "RegionId": string;
    /**
    *  DNAT条目的ID。
    * @example `fwd-8vbn3bc8roygjp0gy3xk7`
    */ "ForwardEntryId": string;
    /**
    *  DNAT列表的ID。
    * @example `ftb-8vbx8xu2lqj9qb334h0ow`
    */ "ForwardTableId": string;
    "OwnerId"?: number;
    /**
    *  公网IP地址。
    * @example `116.62.222.28`
    */ "ExternalIp"?: string;
    /**
    * 公网端口。取值范围：1-65535。
    * @example `80`
    */ "ExternalPort"?: string;
    /**
    * 目标私网IP。
    * @example `10.34.56.78`
    */ "InternalIp"?: string;
    /**
    * 目标私网端口。取值范围：1-65535。
    * @example `80`
    */ "InternalPort"?: string;
    /**
    * 协议类型。取值：
    *
    * - **TCP**：转发TCP协议的报文。
    *
    * - **UDP**：转发UDP协议的报文。
    *
    * - **Any**：转发所有协议的报文。
    * @example `TCP`
    */ "IpProtocol"?: string;
    "ForwardEntryName"?: string;
}
export { ModifyForwardEntryRequest };