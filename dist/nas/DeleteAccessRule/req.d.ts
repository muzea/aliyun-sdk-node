interface DeleteAccessRuleRequest {
    "RegionId"?: string;
    /**
    * 规则序号
    * @example `1`
    */ "AccessRuleId": string;
    /**
    * 权限组名称
    * @example `classic-test`
    */ "AccessGroupName": string;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
}
export { DeleteAccessRuleRequest };