export interface DeleteAccessGroupRequest {
    /**
     * 待删除的权限组名称。
     * @example `vpc-test`
     */
    "AccessGroupName": string;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * @example `standard`
     */
    "FileSystemType"?: string;
}
