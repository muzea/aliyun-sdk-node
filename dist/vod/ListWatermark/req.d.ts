interface ListWatermarkRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 列表每页大小。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 应用ID。
    * @example `app-xxxxx`
    */ "AppId"?: string;
}
export { ListWatermarkRequest };