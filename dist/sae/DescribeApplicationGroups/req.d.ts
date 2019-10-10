interface DescribeApplicationGroupsRequest {
    "RegionId"?: string;
    /**
    * 应用ID
    * @example `00000000-0000-0000-0000-000000000000`
    */ "AppId": string;
    /**
    * 页码
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 页面大小
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeApplicationGroupsRequest };