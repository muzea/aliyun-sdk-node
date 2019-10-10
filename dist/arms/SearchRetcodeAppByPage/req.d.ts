interface SearchRetcodeAppByPageRequest {
    /**
    * 地域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 前端监控应用名称
    * @example `App1`
    */ "RetcodeAppName"?: string;
    /**
    * 当前查询页码
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数据行数
    * @example `5`
    */ "PageSize"?: number;
}
export { SearchRetcodeAppByPageRequest };