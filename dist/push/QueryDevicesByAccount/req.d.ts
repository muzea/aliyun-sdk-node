export interface QueryDevicesByAccountRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 账户名称，一次仅支持查询一个。
     * @example `test_account`
     */
    "Account": string;
}
