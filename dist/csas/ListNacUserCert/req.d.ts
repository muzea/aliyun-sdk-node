export interface ListNacUserCertRequest {
    /**
     * 分页查询时设置的每页数量。取值：1~1000。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 开始时间。
     * @example `1702260834`
     */
    "StartTime"?: number;
    /**
     * 结束时间。
     * @example `1702770400`
     */
    "EndTime"?: number;
    /**
     * 用户名。
     * @example `zhang**`
     */
    "Username"?: string;
    /**
     * 用户所属部门。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、半角逗号（,）、半角分号（;）、短划线（-）、下划线（_）、分隔号（/）、at（@）和空格。
     * @example `测试部`
     */
    "Department"?: string;
    /**
     * 终端设备操作系统类型。取值：
     * - **windows**：Windows系统。
     * - **macos**：macOS系统。
     * - **linux**：Linux系统。
     * - **android**：Android系统。
     * - **ios**：iOS系统。
     * @example `windows`
     */
    "DeviceType"?: string;
    /**
     * 证书状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
}
