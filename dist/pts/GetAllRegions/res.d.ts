export interface GetAllRegionsResponse {
    /**
     * 错误提示消息，若成功则不返回任何数据。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `73D16B8D-0FCD-5596-B7BE-A47042989318`
     */
    RequestId: string;
    /**
     * 地域列表信息。
     */
    AllRegions: any;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码，成功则不返回任何数据。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `True`
     */
    Success: boolean;
}
