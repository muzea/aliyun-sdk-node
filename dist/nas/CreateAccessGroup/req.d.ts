interface CreateAccessGroupRequest {
    "RegionId"?: string;
    /**
    * 权限组类型，包括 Vpc和 Classic
    * @example `Classic`
    */ "AccessGroupType": string;
    /**
    * 权限组名称，长度为3-64个字符，必须以大小字母开头，可以包含英文字母、数字、下划线（_）或者连字符（-）。
    * 系统预置两个内建权限组："DEFAULT_VPC_GROUP_NAME"和 "DEFAULT_CLASSIC_GROUP_NAME"，命名不能与两个内建权限组冲突。
    * @example `classic-test`
    */ "AccessGroupName": string;
    /**
    * 权限组描述，默认和名称相同，长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
    * @example `classictestaccessgroup`
    */ "Description"?: string;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
}
export { CreateAccessGroupRequest };