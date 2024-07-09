export interface ListAssistDevicesResponse {
    /**
     * 总数量
     * @example `35`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 每页数目
     * @example `20`
     */
    PerPage: number;
    /**
     * 页码
     * @example `1`
     */
    PageIndex: number;
    /**
     * 设备列表
     */
    Devices: {
        /**
         * 序列号
         * @example `DX3JNY1FDTD2`
         */
        SerialNumber: string;
        /**
         * 硬件ID
         * @example `BALFL8429HI`
         */
        HardwareId: string;
        /**
         * 设备名称
         * @example `Model S`
         */
        DeviceName: string;
        /**
         * 设备访问时间
         * @example `1525767660000`
         */
        AccessTime: number;
        /**
         * 设备ID
         * @example `6fde56979c484b93b99fba257e3cbe83`
         */
        DeviceId: string;
        /**
         * AliOS设备UUID
         * @example `842972B2C0F4C9F030E60769CA65806A`
         */
        UUID: string;
        /**
         * 车架码
         * @example `LVFAG7A31HK000029`
         */
        VIN: string;
    }[];
}
