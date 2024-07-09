export interface CheckDevicesResponse {
    /**
     * 请求ID。
     * @example `9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC`
     */
    RequestId: string;
    DeviceCheckInfos: {
        /**
         * 批量设备有效性检查结果。
         */
        DeviceCheckInfo: {
            /**
             * 设备ID。
             * @example `ae296f3b04a58a05b30c95f****`
             */
            DeviceId: string;
            /**
             * 是否可用。
             * @example `true`
             */
            Available: boolean;
        }[];
    };
}
