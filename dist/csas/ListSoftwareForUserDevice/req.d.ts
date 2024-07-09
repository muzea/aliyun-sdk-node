export interface ListSoftwareForUserDeviceRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值：1~500。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 终端设备ID。取值：
     * - [GetUserDevice](~~GetUserDevice~~)：查询用户终端设备详情。
     * - [ListUserDevices](~~ListUserDevices~~)：批量查询用户终端设备。
     * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****
    `
     */
    "DeviceTag": string;
}
