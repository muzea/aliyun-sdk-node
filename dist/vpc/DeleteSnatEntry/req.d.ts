interface DeleteSnatEntryRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  SNAT表ID。
    * @example `stb-bp190wu8io1vgev80kec7`
    */ "SnatTableId": string;
    /**
    *  SNAT条目ID。
    * @example `snat-bp1vcgcf8tm0plqcgfl04`
    */ "SnatEntryId": string;
    "OwnerId"?: number;
}
export { DeleteSnatEntryRequest };