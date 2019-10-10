interface DescribeVirtualBorderRoutersRequest {
    /**
    * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    "OwnerId"?: number;
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
export { DescribeVirtualBorderRoutersRequest };