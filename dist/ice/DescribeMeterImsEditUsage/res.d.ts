export interface DescribeMeterImsEditUsageResponse {
    /**
     * 请求ID。
     * @example `7F3AE2C6-5CC6-5712-BAC5-5A735A157687`
     */
    RequestId: string;
    /**
     * IMS点播视频剪辑用量数据。
     */
    Data: {
        /**
         * 时间段开始时间戳，10位。
         * @example `1656950400`
         */
        Time: number;
        /**
         * 时长，单位min。
         * @example `1.23`
         */
        Duration: number;
        /**
         * 规格。
         * @example `1080P`
         */
        Profile: string;
    }[];
}
