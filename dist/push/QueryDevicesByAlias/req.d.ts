export interface QueryDevicesByAliasRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 别名，一次仅支持查询一个。
     * @example `test_alias`
     */
    "Alias": string;
}
