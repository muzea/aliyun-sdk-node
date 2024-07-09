export interface DescribeCountScannedImageResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3F4236AB-7070-538D-85EB-98EBFE6C****`
     */
    RequestId: string;
    /**
     * 已经扫描过的镜像数。
     * @example `11`
     */
    ScannedCount: number;
}
