export interface CreateGroupRequest {
    /**
     * 用户组名称。
     * 长度为1~64个字符，可包含英文字母、数字、英文句点（.）、下划线（_）和短划线（-）。
     * @example `Dev-Team`
     */
    "GroupName"?: string;
    /**
     * 备注信息。
     * 最大长度128个字符。
     * @example `开发团队`
     */
    "Comments"?: string;
}
