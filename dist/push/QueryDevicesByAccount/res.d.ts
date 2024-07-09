export interface QueryDevicesByAccountResponse {
    /**
     * 请求ID。
     * @example `A8A24108-2AD0-4F6E-81C7-A8A24C2C2AD0`
     */
    RequestId: string;
    DeviceIds: {
        /**
         * 设备ID列表。
         */
        DeviceId: string[];
    };
}
