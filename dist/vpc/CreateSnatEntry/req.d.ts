interface CreateSnatEntryRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  SNAT表ID。
    * @example `stb-bp190wu8io1vgev****`
    */ "SnatTableId": string;
    /**
    * 公网IP地址，多个IP之间用逗号隔开。
    * @example `47.XX.XX.98`
    */ "SnatIp": string;
    "OwnerId"?: number;
    /**
    * 需要公网访问的交换机的ID。
    * @example `vsw-bp1nhx2s9ui5o****`
    */ "SourceVSwitchId"?: string;
    /**
    * 交换机或ECS实例的网段。
    * - 交换机粒度：指定交换机的网段（如192.168.1.0/24），当交换机下的ECS实例发起互联网访问请求时，NAT网关会为其提供SNAT服务（代理上网服务）。如果**SnatIp**仅指定了一个公网IP，ECS实例使用指定的公网IP访问互联网；如果**SnatIp**指定了多个公网IP，ECS实例随机使用**SnatIp**中的公网IP访问互联网。
    * - ECS粒度：指定ECS实例的地址（如192.168.1.1/32），当ECS实例发起互联网访问请求时，NAT网关会为其提供SNAT服务（代理上网服务）。如果**SnatIp**仅指定了一个公网IP，ECS实例使用指定的公网IP访问互联网；如果**SnatIp**指定了多个公网IP，ECS实例随机使用**SnatIp**中的公网IP访问互联网。
    * > 此参数和**SourceVSwtichId**参数互斥，不能同时出现。如果指定了**SourceVSwitchId**，则不能指定**SourceCIDR**参数。如果指定了**SourceCIDR**参数，则不能指定**SourceVSwitchId**参数。
    * @example `10.1.1.0/24`
    */ "SourceCIDR"?: string;
    /**
    * SNAT条目的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `SnatEntry-1`
    */ "SnatEntryName"?: string;
}
export { CreateSnatEntryRequest };