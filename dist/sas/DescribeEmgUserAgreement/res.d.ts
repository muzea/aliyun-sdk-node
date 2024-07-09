export interface DescribeEmgUserAgreementResponse {
    /**
     * 应急漏洞扫描是否授权。取值：
     * - **true**：已获得授权
     * - **false**：未获得授权
     * @example `true`
     */
    Auth: boolean;
    /**
     * 本次请求的ID。
     * @example `768BB9F5-8AF3-557F-A489-9BDD64CB3E4C`
     */
    RequestId: string;
}
