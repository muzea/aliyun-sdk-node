export interface GetImageScanNumInPeriodResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92****`
     */
    RequestId: string;
    /**
     * 扫描数据信息。
     */
    ImageScanData: {
        /**
         * 镜像扫描次数。
         * @example `150`
         */
        ImageScanCount: number;
    };
}
