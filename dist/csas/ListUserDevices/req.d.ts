export interface ListUserDevicesRequest {
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
     * 终端设备归属。取值：
     * - **Personal**：个人设备。
     * - **Company**：公司设备。
     * @example `Company`
     */
    "DeviceBelong"?: string;
    /**
     * 终端设备MAC地址。
     * @example `00:16:XX:XX:7c:46`
     */
    "Mac"?: string;
    /**
     * 设备是否开启共享。取值：
     * - **true**：开启共享。
     * - **false**：关闭共享。
     * @example `true`
     */
    "SharingStatus"?: boolean;
    /**
     * 终端设备状态集合。
     */
    "DeviceStatuses"?: string[];
    /**
     * 客户端状态集合。
     */
    "AppStatuses"?: string[];
    /**
     * 内网访问状态集合。
     */
    "PaStatuses"?: string[];
    /**
     * 互联网访问状态集合。
     */
    "IaStatuses"?: string[];
    /**
     * 办公数据保护状态集合。
     */
    "DlpStatuses"?: string[];
    /**
     * 网络准入状态集合。
     */
    "NacStatuses"?: string[];
    /**
     * 终端设备操作系统类型集合。
     */
    "DeviceTypes"?: string[];
    /**
     * 终端设备ID集合。
     */
    "DeviceTags"?: string[];
    /**
     * 排序参数。取值：
     * - **Username**：按Username升序排列。
     * - **AppVersion**：按AppVersion降序排列。
     * - **UpdateTime**：按UpdateTime降序排列。
     * - **CreateTime**：按CreateTime降序排列。
     * @example `UpdateTime`
     */
    "SortBy"?: string;
    /**
     * 终端设备内网IP地址。
     * @example `192.168.XX.XX`
     */
    "InnerIp"?: string;
}
