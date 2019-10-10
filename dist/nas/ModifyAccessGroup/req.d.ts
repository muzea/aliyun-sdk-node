interface ModifyAccessGroupRequest {
    "RegionId"?: string;
    /**
    * 权限组名称
    * @example `classic-test`
    */ "AccessGroupName": string;
    /**
    * 权限组描述，默认和名称相同，长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
    * @example `classic-test`
    */ "Description"?: string;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
}
export { ModifyAccessGroupRequest };