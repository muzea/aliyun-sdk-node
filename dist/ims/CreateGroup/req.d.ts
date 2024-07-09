export interface CreateGroupRequest {
    /**
     * 用户组显示名称。
     * 最大长度24个字符。
     * @example `Dev-Team`
     */
    "DisplayName"?: string;
    /**
     * 备注。
     * 最大长度128个字符。
     * @example `开发团队`
     */
    "Comments"?: string;
    /**
     * 用户组名称。该参数必须指定。
     * 最大长度64个字符，可包含英文字母、数字、英文句点（.）、下划线（_）和短划线（-）。
     * @example `Dev-Team`
     */
    "GroupName"?: string;
}
