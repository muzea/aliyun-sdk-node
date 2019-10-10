interface ListApplicationsRequest {
    "RegionId"?: string;
    /**
    * 当前页数
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 页大小
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 应用名
    * @example `demo-app`
    */ "AppName"?: string;
}
export { ListApplicationsRequest };