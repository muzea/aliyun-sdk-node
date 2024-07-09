export interface GetRepoTagScanStatusResponse {
    /**
     * 镜像版本扫描状态，取值：
     * - `SCANNING`：扫描中
     * - `COMPLETE`：扫描完成
     * - `FAILED`：扫描失败
     * - `RETRYING`：重试中
     * @example `COMPLETE`
     */
    Status: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `BC648259-91A7-4502-BED3-EDF64361FA83`
     */
    RequestId: string;
    /**
     * 扫描引擎类型
     * - `ACR_SCAN_SERVICE`：acr的trivy扫描引擎
     * - `SAS_SCAN_SERVICE`：云安全扫描引擎
     * @example `ACR_SCAN_SERVICE`
     */
    ScanService: string;
}
