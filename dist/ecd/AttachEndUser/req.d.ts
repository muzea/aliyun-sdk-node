export interface AttachEndUserRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 无影硬件终端的SN。
     * @example `12OERSLDO7M3****`
     */
    "DeviceId": string;
    /**
     * 需要为无影硬件终端添加的绑定用户ID。
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
     * 用户账号类型。
     * @example `SIMPLE`
     */
    "UserType"?: string;
    /**
     * 设备类型。
     * @example `1`
     */
    "ClientType": number;
}
