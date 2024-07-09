export interface DeleteVulWhitelistRequest {
    /**
     * 要删除的漏洞白名单信息。格式为JSON格式的字符串。包含以下字段：
     * - **Name**：漏洞名称。
     * - **Type**：漏洞类型。取值：
     *     -  **cve**：Linux漏洞
     *     - **sys**：Windows漏洞
     *     - **cms**：WebCMS漏洞
     *     - **app**：应用漏洞
     *     - **emg**：应急漏洞
     * - **AliasName**：漏洞别名。
     * @example `[
          {
                "Name": "oval:com.redhat.rhsa:def:20173263",
                "Type": "cve",
                "AliasName": "RHSA-2017:3263: curl security update"
          }
    ]`
     */
    "Whitelist"?: string;
    /**
     * 漏洞白名单ID。
     * > 删除漏洞白名单，可提供漏洞白名单ID，该ID可调用[DescribeVulWhitelist](~~DescribeVulWhitelist~~)接口获取。
     * @example `131231`
     */
    "Id"?: string;
}
