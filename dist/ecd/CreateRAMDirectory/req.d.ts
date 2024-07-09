export interface CreateRAMDirectoryRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目录名称。长度为2~255个英文或中文字符。必须以大小字母或中文字符开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。
     * @example `testDirectoryName`
     */
    "DirectoryName": string;
    /**
     * 是否开通公网访问功能。
     * @example `false`
     */
    "EnableInternetAccess"?: boolean;
    /**
     * 是否为使用云电脑的用户赋予本地管理员权限。
     * @example `true`
     */
    "EnableAdminAccess"?: boolean;
    /**
     * 连接云电脑时允许使用的方式。
     * @example `Internet`
     */
    "DesktopAccessType"?: string;
    /**
     * 交换机ID。目前仅支持配置一个。
     */
    "VSwitchId": string[];
}
