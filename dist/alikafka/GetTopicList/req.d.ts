interface GetTopicListRequest {
    /**
    * 地域 ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * @example `当前页面。`
    */ "CurrentPage"?: string;
    /**
    * @example `页面大小。`
    */ "PageSize"?: string;
    /**
    * 实例 ID。
    * @example `alikafka_pre-cn-0pp1954n2003 `
    */ "InstanceId": string;
}
export { GetTopicListRequest };