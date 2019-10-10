interface DescribeBgpNetworksRequest {
    /**
    * BGP组所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 路由表所在路由器的ID。
    * @example `vrt-2zeazning6tbzkm5c0jj2`
    */ "RouterId"?: string;
    /**
    * 列表的页码，默认值为1。
    * @example `2`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeBgpNetworksRequest };