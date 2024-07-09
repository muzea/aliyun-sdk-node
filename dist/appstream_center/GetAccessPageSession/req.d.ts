export interface GetAccessPageSessionRequest {
    /**
     * 访问页面Id。
     * @example `a-062wec3cwmayw****`
     */
    "AccessPageId": string;
    /**
     * 访问页凭据
     * @example `8141B1A674D48ACB8E5D2D6CE53FDB2F3CF8710A5F8F78578D5254BC6F******`
     */
    "AccessPageToken": string;
    /**
     * 外部用户Id
     * @example `Banca******`
     */
    "ExternalUserId"?: string;
}
