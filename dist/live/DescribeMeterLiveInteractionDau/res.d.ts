export interface DescribeMeterLiveInteractionDauResponse {
    /**
     * 返回数据
     */
    Data: {
        /**
         * DAU
         * @example `100`
         */
        Dau: number;
        /**
         * 执行时间，格式为Unix时间戳，单位为秒。
         * @example `1664522670`
         */
        Timestamp: number;
    }[];
    /**
     * 峰值DAU
     * @example `1024`
     */
    PeakDau: number;
    /**
     * Id
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
