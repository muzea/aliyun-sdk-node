export interface QueryDevicesByAliasResponse {
    /**
     * 请求ID。
     * @example `6A9FD644-35A5-40E4-89B0-2021CAEDC1B4`
     */
    RequestId: string;
    DeviceIds: {
        /**
         * 设备ID列表。
         */
        DeviceId: string[];
    };
}
