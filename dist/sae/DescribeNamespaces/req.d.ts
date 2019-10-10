interface DescribeNamespacesRequest {
    "RegionId"?: string;
    /**
    * 页码
    * @example `1`
    */ "CurrentPage": number;
    /**
    * 翻页大小
    * @example `10`
    */ "PageSize": number;
}
export { DescribeNamespacesRequest };