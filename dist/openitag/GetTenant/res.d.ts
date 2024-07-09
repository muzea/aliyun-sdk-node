export interface GetTenantResponse {
    /**
     * 返回编码，默认为0，表示执行正常。
     * @example `0`
     */
    Code: number;
    /**
     * 请求的返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90ABA848-AD74-1F6E-84BC-4182A7F1****`
     */
    RequestId: string;
    /**
     * 详情。
     * @example `-`
     */
    Details: string;
    /**
     * 是否成功，可能值：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 租户信息。
     */
    Tenant: any;
    /**
     * 错误码。
     * @example `-`
     */
    ErrorCode: string;
}
