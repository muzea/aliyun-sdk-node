export interface DescribeMeterImsMediaConvertUHDUsageResponse {
    /**
     * 请求ID。
     * @example `BEA98A0C-7870-15FE-B96F-8880BB600A2C`
     */
    RequestId: string;
    /**
     * IMS的MPS转码UHD计量数据。
     */
    Data: {
        /**
         * 时间段开始时间戳，10位。
         * @example `1656950400`
         */
        Time: number;
        /**
         * 转码规格。
         * @example `SuperResolution.Standard.1080P
        `
         */
        Specification: string;
        /**
         * 时长，单位min。
         * @example `308028`
         */
        Duration: number;
    }[];
}
