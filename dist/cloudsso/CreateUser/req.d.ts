export interface CreateUserRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 用户名称。目录内必须唯一。不支持修改。
     * 格式：包含数字、英文字母和特殊符号`@_-.`。
     * 长度：最大64个字符。
     * @example `Alice`
     */
    "UserName": string;
    /**
     * 用户的名。
     * 长度：最大64个字符。
     * @example `Alice`
     */
    "FirstName"?: string;
    /**
     * 用户的姓。
     * 长度：最大64个字符。
     * @example `Lee`
     */
    "LastName"?: string;
    /**
     * 用户的显示名称。
     * 长度：最大256个字符。
     * @example `Alice`
     */
    "DisplayName"?: string;
    /**
     * 用户的描述。
     * 长度：最大1024个字符。
     * @example `This is a user.`
     */
    "Description"?: string;
    /**
     * 用户的电子邮箱。目录内必须唯一。
     * 长度：最大128个字符。
     * @example `Alice@example.com`
     */
    "Email"?: string;
    /**
     * 用户的状态。取值：
     * - Enabled（默认值）：启用。
     * - Disabled：禁用。
     * @example `Enabled`
     */
    "Status"?: string;
}
