export interface DescribeLiveDomainTimeShiftDataResponse {
    /**
     * 请求ID。
     * @example `8AE1CB3A-6510-442E-A6B9-EF03D05B3E09`
     */
    RequestId: string;
    TimeShiftData: {
        /**
         * 每个时间间隔的时移用量数据。
         */
        DataModule: {
            /**
             * 时移类型。可以是HLS_D1、HLS_D7等。
             * @example `HLS_D7`
             */
            Type: string;
            /**
             * 时间片起始时刻。
             * @example `2021-03-03T00:00:00Z`
             */
            TimeStamp: string;
            /**
             * 时移存储用量。单位：Byte。
             * @example `1664165660`
             */
            Size: string;
        }[];
    };
}
