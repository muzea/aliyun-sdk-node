export interface DescribeCountNotScannedImageResponse {
    /**
     * 未扫描镜像数量。
     * @example `28`
     */
    NotScannedCnt: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
}
