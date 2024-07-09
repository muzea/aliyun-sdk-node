export interface ModifyAccessGroupRequest {
    /**
     * 权限组名称。
     * 限制：
     * - 长度为3~64个字符。
     * - 必须以大小写字母开头，可以包含英文字母、数字、下划线（_）或者短划号（-）。
     * @example `vpc-test`
     */
    "AccessGroupName": string;
    /**
     * 权限组描述。
     * 限制：
     * - 默认和权限组名称相同，长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划号（-）。
     * @example `vpc-test`
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
