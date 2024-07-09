export interface QueryDeviceStatResponse {
    /**
     * 请求ID。
     * @example `9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC`
     */
    RequestId: string;
    AppDeviceStats: {
        /**
         * 设备统计数据AppDeviceStat组成的数组。
         */
        AppDeviceStat: {
            /**
             * 截止时间。时间格式按照ISO8601标准表示，并使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。
             * @example `2016-07-28T16:00:00Z`
             */
            Time: string;
            /**
             * 设备类型。
             * @example `iOS`
             */
            DeviceType: string;
            /**
             * 设备数。
             * @example `100`
             */
            Count: number;
        }[];
    };
}
