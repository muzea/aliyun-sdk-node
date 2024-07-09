export interface DescribeImageScanAuthCountResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `892NYH839-0EDC-4CD0-A2EF-5BD294656C99`
     */
    RequestId: string;
    /**
     * 镜像安全扫描的授权信息详情。
     */
    ImageScan: {
        /**
         * 授权数使用量。
         * @example `5489`
         */
        ScanCount: number;
        /**
         * 总授权数。
         * @example `15340`
         */
        ImageScanCapacity: number;
        /**
         * 已购买的云安全中心的实例ID。
         * @example `sas-qdl123412****`
         */
        InstanceId: string;
    };
}
