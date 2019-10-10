interface ListTranscodeTemplateGroupRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 列表大小。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 应用ID。取值如：**app-1000000**。
    * @example `app-xxxxx`
    */ "AppId"?: string;
}
export { ListTranscodeTemplateGroupRequest };