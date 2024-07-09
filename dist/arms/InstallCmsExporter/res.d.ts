export interface InstallCmsExporterResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `E7A04B0D-E2CA-59BB-8A9D-D5D349C22BF1`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * @example `success`
     */
    Data: string;
}
