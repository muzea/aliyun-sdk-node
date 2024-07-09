export interface GenerateDownloadSecretKeyResponse {
    /**
     * 生成的安全下载密钥。
     * @example `***`
     */
    AppEncryptKey: string;
    /**
     * 请求ID。
     * @example `E99B9BAD-7F9D-552B-A689-B72E92EA040E`
     */
    RequestId: string;
}
