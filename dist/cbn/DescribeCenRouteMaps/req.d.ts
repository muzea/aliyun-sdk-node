interface DescribeCenRouteMapsRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 路由策略的ID。
    * @example `cenrmap-abcdedfghij****`
    */ "RouteMapId"?: string;
    /**
    * 云企业网所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-beijing`
    */ "CenRegionId"?: string;
    /**
    * 路由策略应用的方向，取值：
    * - **RegionIn**：路由传入云企业网地域网关的方向。
    *  例如路由从本地域网络实例发布到本地域网关，或其他地域的路由发布到本地域网关。
    * - **RegionOut**：路由传出云企业网地域网关的方向。
    *  例如路由从本地域网关发布到本地域下其他网络实例，或发布到其他地域网关。
    * @example `RegionIn`
    */ "TransmitDirection"?: string;
}
export { DescribeCenRouteMapsRequest };