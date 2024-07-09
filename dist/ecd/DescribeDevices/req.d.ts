export interface DescribeDevicesRequest {
    /**
     * 设备ID。无影硬件终端的SN，或者无影软件客户端的UUID。
     * @example `5F52817BE267A43C608D245070D2****
    `
     */
    "DeviceId"?: string;
    /**
     * 绑定的用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
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
     * 客户端类型。
     * @example `1`
     */
    "ClientType": string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，每页最大行数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
}
