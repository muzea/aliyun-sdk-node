interface DeleteCenRouteMapRequest {
    "RegionId"?: string;
    /**
    * 云企业网的ID。
    * @example `cen-7qthudw0ll6jm****`
    */ "CenId": string;
    /**
    * 云企业网所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "CenRegionId": string;
    /**
    * 路由策略的ID。
    * @example `cenrmap-abcdedfghij****`
    */ "RouteMapId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
}
export { DeleteCenRouteMapRequest };