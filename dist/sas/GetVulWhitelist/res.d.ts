export interface GetVulWhitelistResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F`
     */
    RequestId: string;
    /**
     * 漏洞白名单的详细信息。
     */
    VulWhitelist: {
        /**
         * 漏洞白名单ID。
         * @example `1275`
         */
        Id: number;
        /**
         * 漏洞名称。
         * @example `oval:com.redhat.rhsa:def:20173263`
         */
        Name: string;
        /**
         * 漏洞类型。
         * @example `cve`
         */
        Type: string;
        /**
         * 漏洞别名。
         * @example `RHSA-2017:3263: curl security update`
         */
        AliasName: string;
        /**
         * 加白原因。
         * @example `忽略`
         */
        Reason: string;
        /**
         * 规则使用范围。该值为JSON字符串，包含以下字段：
         * - **type**：适用类型。取值：
         *      - **Uuid**：主机
         *      - **GroupId**：群组
         * - **groupIds**：适用资产群组编号
         * - **uuids**：适用资产UUID
         * > 该值为空则适用全部资产。
         * @example `{
              "type": "GroupId",
              "uuids": [],
              "groupIds": [
                    10782678
              ]
        }`
         */
        Target: string;
        /**
         * 要添加到白名单中的漏洞的信息。格式为JSON格式的字符串。包含以下字段：
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
        Whitelist: string;
    };
}
