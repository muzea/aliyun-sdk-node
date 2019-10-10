interface DescribeForwardTableEntriesRequest {
    /**
    * NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  DNAT列表的ID。
    * @example `ftb-bp1mbjubq34hlcqpa5u3a`
    */ "ForwardTableId": string;
    "OwnerId"?: number;
    /**
    * 系统分配的DNAT条目ID。
    * @example `fwd-8vbn3bc8roygjp0gy3xk7`
    */ "ForwardEntryId"?: string;
    /**
    * 公网IP地址。
    * @example `116.xx.xx.28`
    */ "ExternalIp"?: string;
    /**
    * 公网端口。取值范围：1-65535。
    * @example `8080`
    */ "ExternalPort"?: string;
    /**
    * 目标私网IP。
    * @example `192.168.xx.xx	`
    */ "InternalIp"?: string;
    /**
    * 目标私网端口。取值范围：1-65535。
    * @example `80`
    */ "InternalPort"?: string;
    /**
    * 协议类型。取值：
    * - TCP：转发TCP协议的报文。
    * - UDP：转发UDP协议的报文。
    * - Any：转发所有协议的报文。
    * @example `TCP`
    */ "IpProtocol"?: string;
    /**
    * DNAT规则的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `ForwardEntry-1`
    */ "ForwardEntryName"?: string;
    /**
    *  列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeForwardTableEntriesRequest };