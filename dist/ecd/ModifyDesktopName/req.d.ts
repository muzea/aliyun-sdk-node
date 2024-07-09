export interface ModifyDesktopNameRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 修改后的云电脑名称。格式要求如下：
     * - 不超过64个字符。
     * - 必须以大小字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者短划线（-）。
     * @example `DemoComputer01`
     */
    "NewDesktopName": string;
    /**
     * 云电脑ID。
     * @example `ecd-gx2x1dhsmucyy****	`
     */
    "DesktopId": string;
}
