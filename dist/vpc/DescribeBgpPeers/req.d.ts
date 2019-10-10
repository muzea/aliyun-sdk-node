interface DescribeBgpPeersRequest {
    /**
    * BGP组所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 所有者ID。
    * @example `1333738069500000`
    */ "OwnerId"?: number;
    /**
    * 路由器的ID。
    * @example `vrt-acfmxazb4ph6aiy`
    */ "RouterId"?: string;
    /**
    *  BGP邻居的ID。
    * @example `bgp-2ze3un0ft1jd1xdppusul`
    */ "BgpPeerId"?: string;
    /**
    * 指定BGP组的ID。
    * @example `bgpg-2zev8h2wo414sfhjgdlhh`
    */ "BgpGroupId"?: string;
    /**
    * 是否是默认BGP组。
    * @example `false`
    */ "IsDefault"?: boolean;
    /**
    *  列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `1`
    */ "PageSize"?: number;
}
export { DescribeBgpPeersRequest };