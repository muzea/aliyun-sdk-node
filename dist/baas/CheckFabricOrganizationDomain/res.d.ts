export interface CheckFabricOrganizationDomainResponse {
    /**
     * 请求ID
     * @example `C30A14C7-800E-468B-9EB2-C704DA49295E`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 检查结果
     */
    Result: {
        /**
         * 返回用户输入的域名
         * @example `bank`
         */
        Domain: string;
        /**
         * 是否有效
         * @example `true`
         */
        Valid: boolean;
        /**
         * 提示
         * @example `OK`
         */
        Prompt: string;
    };
}
