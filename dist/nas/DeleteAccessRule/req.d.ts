export interface DeleteAccessRuleRequest {
    /**
     * 权限组名称。
     * @example `vpc-test`
     */
    "AccessGroupName": string;
    /**
     * 权限组规则ID。
     * @example `1`
     */
    "AccessRuleId": string;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * @example `standard`
     */
    "FileSystemType"?: string;
}
