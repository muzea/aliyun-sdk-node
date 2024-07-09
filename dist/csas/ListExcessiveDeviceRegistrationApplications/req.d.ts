export interface ListExcessiveDeviceRegistrationApplicationsRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值范围：1~500。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 用户名。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）、星号（*）、at（@）和空格。
     * @example `王先生`
     */
    "Username"?: string;
    /**
     * 用户ID。取值来源：
     * - [GetUserDevice](~~GetUserDevice~~)：查询用户终端设备详情。
     * - [ListUserDevices](~~ListUserDevices~~)：批量查询用户终端设备。
     * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
     */
    "SaseUserId"?: string;
    /**
     * 用户所属部门。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、半角逗号（,）、半角分号（;）、短划线（-）、下划线（_）、分隔号（/）、at（@）和空格。
     * @example `测试部`
     */
    "Department"?: string;
    /**
     * 终端设备名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、半角逗号（,）、半角分号（;）、短划线（-）、下划线（\_）、分隔号（/）、at（@）和空格。单独输入下划线（\_）将额外查询所有名称中带4字节utf-8字符的终端设备。
     * @example `win10-64bit`
     */
    "Hostname"?: string;
    /**
     * 终端设备MAC地址。
     * @example `00:16:XX:XX:7c:46`
     */
    "Mac"?: string;
    /**
     * 终端设备ID。取值：
     * - [GetUserDevice](~~GetUserDevice~~)：查询用户终端设备详情。
     * - [ListUserDevices](~~ListUserDevices~~)：批量查询用户终端设备。
     * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****
    `
     */
    "DeviceTag"?: string;
    /**
     * 超额注册申请状态集合。
     */
    "Statuses"?: string[];
    /**
     * 超额注册申请ID集合。
     */
    "ApplicationIds"?: string[];
}
