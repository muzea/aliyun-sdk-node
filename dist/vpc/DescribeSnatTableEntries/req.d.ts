interface DescribeSnatTableEntriesRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  SNAT表ID。
    * @example `stb-8vbczigrhop8x5u3twlhd`
    */ "SnatTableId": string;
    "OwnerId"?: number;
    /**
    *  SNAT条目ID。
    * @example `snat-8vbae8uqh7rjpk7d2kuwt`
    */ "SnatEntryId"?: string;
    /**
    * 通过SNAT功能进行公网访问的交换机ID。
    * @example `vsw-3xbxxxxx`
    */ "SourceVSwitchId"?: string;
    /**
    *  SNAT条目的源网段。
    * @example `116.62.222.28/33`
    */ "SourceCIDR"?: string;
    /**
    *   SNAT条目的公网IP。
    * @example `116.62.222.28`
    */ "SnatIp"?: string;
    /**
    * SNAT条目的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `SnatEntry-1`
    */ "SnatEntryName"?: string;
    /**
    *  列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSnatTableEntriesRequest };