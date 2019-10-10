interface CreateAppInfoRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ResourceRealOwnerId"?: number;
    /**
    * 应用名称，不能重复。最多包含128个字符或汉字，UTF-8编码。格式：`^[a-zA-Z0-9.@-\u4e00-\u9fa5]+$`。
    * @example `test`
    */ "AppName"?: string;
    /**
    * 应用描述，最多支持512个字符或汉字，UTF-8编码。
    * @example `myfirstapp`
    */ "Description"?: string;
}
export { CreateAppInfoRequest };