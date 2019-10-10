interface GetAuditHistoryRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `93ab850b4f6f44eab54b6e91d24d81d4`
    */ "VideoId": string;
    /**
    * 页号，默认值为**1**。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 分页大小。默认值为**10**，最大值为**100**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 结果排序。取值范围：
    * - **CreationTime:Desc**（默认值）：按创建时间倒序
    * - **CreationTime:Asc**
    * @example `CreationTime:Desc`
    */ "SortBy"?: string;
}
export { GetAuditHistoryRequest };