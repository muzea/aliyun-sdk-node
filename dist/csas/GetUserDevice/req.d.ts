export interface GetUserDeviceRequest {
    /**
     * 终端设备ID。取值：
     * - [GetUserDevice](~~GetUserDevice~~)：查询用户终端设备详情。
     * - [ListUserDevices](~~ListUserDevices~~)：批量查询用户终端设备。
     * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****
    `
     */
    "DeviceTag": string;
}
