interface DescribeBgpGroupsRequest {
    /**
    * BGP组所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 用户ID。
    * @example `1333738069500000`
    */ "OwnerId"?: number;
    /**
    *  BGP组关联的VBR的ID。
    * @example `vrt-kojok19x3j0q6kx`
    */ "RouterId"?: string;
    /**
    *  BGP组的ID。
    * @example `bgpg-wz9f62v4fbg2gxxxxxxxx`
    */ "BgpGroupId"?: string;
    /**
    * 是否为为默认BGP组。
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
export { DescribeBgpGroupsRequest };