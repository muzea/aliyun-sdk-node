export interface ModifyGlobalDatabaseNetworkRequest {
    /**
     * GDN ID。
     * @example `gdn-bp1fttxsrmv*****`
     */
    "GDNId": string;
    /**
     * GDN备注描述。要求如下：
     * - 不能以http://或https://开头。
     * - 必须以大小写字母或中文开头。
     * - 可以包含大小写字母、中文、数字、下划线（_）或连字符（-）。
     * - 长度为2~126个字符。
     * @example `GDN-fortest`
     */
    "GDNDescription": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
