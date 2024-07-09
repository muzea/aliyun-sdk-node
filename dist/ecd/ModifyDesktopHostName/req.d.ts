export interface ModifyDesktopHostNameRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 修改后的云电脑主机名称。主机名称的命名规则如下：
     * - 长度为2\~15个字符。
     * - 支持大小写字母、数字或者短划线（-）。不能以短划线开头或者结尾，不能连续使用短划线，不能只使用数字。
     * @example `NewName`
     */
    "NewHostName": string;
    /**
     * 云电脑ID。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId": string;
}
