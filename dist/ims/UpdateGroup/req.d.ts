export interface UpdateGroupRequest {
    /**
     * 新的备注。
     * 最大长度128个字符。
     * @example `测试团队`
     */
    "NewComments"?: string;
    /**
     * 新的用户组显示名称。
     * 最大长度24个字符。
     * @example `Test-Team`
     */
    "NewDisplayName"?: string;
    /**
     * 新的用户组名称。
     * 最大长度64个字符，可包含英文字母、数字、英文句点（.）、下划线（_）和短划线（-）。
     * @example `Test-Team`
     */
    "NewGroupName"?: string;
    /**
     * 用户组名称。
     * @example `Dev-Team`
     */
    "GroupName"?: string;
}
