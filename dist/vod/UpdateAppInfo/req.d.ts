interface UpdateAppInfoRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ResourceRealOwnerId"?: number;
    /**
    * 应用ID。
    * @example `app-xxxxxx`
    */ "AppId"?: string;
    /**
    * 应用名称，最多包含128个字符或汉字，UTF-8编码。格式：`^[a-zA-Z0-9.@-\u4e00-\u9fa5]+$`。
    * @example `test`
    */ "AppName"?: string;
    /**
    * 应用描述，最多支持512个字符或汉字，UTF-8编码。
    * @example `my first app.`
    */ "Description"?: string;
    /**
    * 应用状态，可选值：**Normal**(正常启用)，**Disable**(停用)。
    * @example `Disable`
    */ "Status"?: string;
}
export { UpdateAppInfoRequest };