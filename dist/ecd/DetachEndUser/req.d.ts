export interface DetachEndUserRequest {
    /**
     * 无影硬件终端的SN。
     * @example `12OERSLDO7M3****`
     */
    "DeviceId": string;
    /**
     * 需要为无影硬件终端移除的绑定用户ID。
     * @example `alice`
     */
    "EndUserId": string;
    /**
     * 便捷办公网络ID。
     * @example `cn-hangzhou+dir-jedbpr4sl9l37****`
     */
    "DirectoryId"?: string;
    /**
     * AD办公网络地址。
     * @example `xn--0zw****`
     */
    "AdDomain"?: string;
    /**
     * 客户端类型 。
     * @example `1`
     */
    "ClientType": string;
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
}
