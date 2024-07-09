export interface PublicPreCheckImageScanTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F9353221-40F4-5F98-B73C-2803DC804033`
     */
    RequestId: string;
    /**
     * 接口调用成功时，返回的数据。
     */
    Data: {
        /**
         * 镜像安全扫描待消耗的授权数。
         * @example `3`
         */
        ScanImageCount: number;
        /**
         * 镜像安全扫描覆盖的镜像的总数量。
         * @example `6`
         */
        NeedAuthCount: number;
    };
}
