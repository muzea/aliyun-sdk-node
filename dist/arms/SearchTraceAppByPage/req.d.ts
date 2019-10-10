interface SearchTraceAppByPageRequest {
    /**
    * 地域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 应用名称
    * @example `Demo`
    */ "TraceAppName"?: string;
    /**
    * 当前查询页码
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数据大小
    * @example `2`
    */ "PageSize"?: number;
}
export { SearchTraceAppByPageRequest };