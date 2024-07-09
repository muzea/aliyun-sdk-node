export interface CreateAccessGroupRequest {
    /**
     * 权限组名称。
     * 限制：
     * - 长度为3~64个字符。
     * - 必须以大小写字母开头，可以包含英文字母、数字、下划线（_）或者短划线（-）。
     * - 新创建的权限组名称不能与默认权限组的名称相同。
     * 默认权限组：DEFAULT_VPC_GROUP_NAME（专有网络默认权限组）。
     * @example `vpc-test`
     */
    "AccessGroupName": string;
    /**
     * 权限组类型。取值为**Vpc**，表示专有网络。
     * @example `Vpc`
     */
    "AccessGroupType": string;
    /**
     * 权限组描述。
     * 限制：
     * - 默认和名称相同，长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划号（-）。
     * @example `vpctestaccessgroup`
     */
    "Description"?: string;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * @example `standard`
     */
    "FileSystemType"?: string;
}
