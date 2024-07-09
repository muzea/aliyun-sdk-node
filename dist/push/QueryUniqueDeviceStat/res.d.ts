export interface QueryUniqueDeviceStatResponse {
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
             * 时间片。
             * @example `2016-07-25T00:00:00Z`
             */
            Time: string;
            /**
             * 去重设备数。
             * @example `100`
             */
            Count: number;
        }[];
    };
}
