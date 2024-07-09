export interface DescribeMeterImsMediaConvertUsageResponse {
    /**
     * 请求ID。
     * @example `FBBB5210-2B78-58FB-A6FE-9DD887BB2C61`
     */
    RequestId: string;
    /**
     * IMS的点播转码计量数据。
     */
    Data: {
        /**
         * 时间段开始时间戳，10位。
         * @example `1656950400`
         */
        Time: number;
        /**
         * 转码规格。
         * @example `H264.HD
        `
         */
        Specification: string;
        /**
         * 时长，单位min。
         * @example `20`
         */
        Duration: number;
    }[];
}
