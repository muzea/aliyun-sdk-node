export interface ListClientUsersRequest {
    /**
     * 自定义身份源配置ID。
     * @example `1071`
     */
    "IdpConfigId": string;
    /**
     * 部门ID。
     * @example `10785`
     */
    "DepartmentId"?: string;
    /**
     * 用户名称。
     * @example `张三`
     */
    "Username"?: string;
    /**
     * 电子邮件地址。
     * @example `johndoe@example.com`
     */
    "Email"?: string;
    /**
     * 手机号码，不需要带国家编码。
     * @example `18980976559`
     */
    "MobileNumber"?: string;
    /**
     * 用户启用状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
}
