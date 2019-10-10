interface ModifySnatEntryRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  SNAT表ID。
    * @example `stb-8vbczigrhop8x5u3twlhd`
    */ "SnatTableId": string;
    /**
    *  SNAT条目ID。
    * @example `snat-bp1vcgcf8tm0plqcgfl04`
    */ "SnatEntryId": string;
    "OwnerId"?: number;
    /**
    * 公网IP地址。多个IP之间逗号隔开。
    * @example `47.XXX.XXX.98`
    */ "SnatIp"?: string;
    /**
    * SNAT条目的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `SnatEntry-1`
    */ "SnatEntryName"?: string;
}
export { ModifySnatEntryRequest };