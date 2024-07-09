export interface DescribeVsDevicesDataResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    DevicesDataPerInterval: {
        /**
         * 每个时间间隔的接入设备用量。
         */
        DataModule: {
            /**
             * 统计数据的时间点。
             * @example `2022-01-04T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * 接入设备用量数值。单位：个。
             * @example `128`
             */
            DevicesDataValue: string;
        }[];
    };
}
