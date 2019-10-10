interface DescribeRouterInterfacesRequest {
    /**
    *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example ` cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 是否包含续费数据。
    * @example `false`
    */ "IncludeReservationData"?: boolean;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    "Filter"?: string[];
}
export { DescribeRouterInterfacesRequest };