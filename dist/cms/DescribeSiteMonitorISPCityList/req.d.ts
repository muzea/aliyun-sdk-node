interface DescribeSiteMonitorISPCityListRequest {
    "RegionId"?: string;
    /**
    * 探测的运营商名称或者ID，名称支持模糊查询。
    * @example `移动`
    */ "Isp"?: string;
    /**
    * 探测点的城市名称或者ID，城市名称支持模糊查询。
    * @example `北京`
    */ "City"?: string;
}
export { DescribeSiteMonitorISPCityListRequest };