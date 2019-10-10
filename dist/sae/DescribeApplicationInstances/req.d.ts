interface DescribeApplicationInstancesRequest {
    "RegionId"?: string;
    /**
    * 应用ID
    * @example `00000000-0000-0000-0000-000000000000`
    */ "AppId": string;
    /**
    * 应用分组ID。请通过 DescribeApplicationGroups 接口获得
    * @example `00000000-0000-0000-0000-000000000000`
    */ "GroupId": string;
    /**
    * 页码
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 页面大小
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeApplicationInstancesRequest };