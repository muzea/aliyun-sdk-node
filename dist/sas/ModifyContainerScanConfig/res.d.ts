export interface ModifyContainerScanConfigResponse {
    /**
     * 返回的处理结果。
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `BFF355BC-8A40-55F3-8CBC-CC3E9DAC****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
