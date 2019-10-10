interface ModifyFileSystemRequest {
    "RegionId"?: string;
    /**
    * 文件系统 ID
    * @example `1ca404a666`
    */ "FileSystemId": string;
    /**
    * 文件系统描述，长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
    * @example `空`
    */ "Description"?: string;
}
export { ModifyFileSystemRequest };