export interface ModifyCreateVulWhitelistRequest {
    /**
     * 要添加到白名单中的漏洞的信息。格式为JSON格式的字符串。包含以下字段：
     * - **Status**：漏洞状态
     * - **GmtLast**：漏洞最后发现的时间戳，单位为毫秒。
     * - **LaterCount**：修复优先级为中的漏洞的数量。
     * - **AsapCount**：修复优先级为高的漏洞的数量。
     * - **Name**：漏洞名称。
     * - **Type**：漏洞类型。取值：
     *     -  **cve**：Linux漏洞
     *     - **sys**：Windows漏洞
     *     - **cms**：WebCMS漏洞
     *     - **app**：应用漏洞
     *     - **emg**：应急漏洞
     * - **Related**：漏洞CVE编号。
     * - **HandledCount**：已处理的漏洞数量。
     * - **AliasName**：漏洞别名。
     * - **RuleModifyTime**：漏洞最后发布时间。
     * - **NntfCount**：	修复优先级为低的漏洞的数量。
     * - **TotalFixCount**：已修复漏洞的总数量。
     * - **Tags**：漏洞标签。
     * > 您可以调用[DescribeGroupedVul](~~DescribeGroupedVul~~)接口获取需要加白的漏洞信息。
     * @example `[{"Status":0,"GmtLast":1662281929000,"LaterCount":0,"AsapCount":1,"Name":"oval:com.redhat.rhsa:def:20172836","Type":"cve","Related":"CVE-2017-14491,CVE-2017-14492,CVE-2017-14493,CVE-2017-14494,CVE-2017-14495,CVE-2017-14496","HandledCount":1,"AliasName":"RHSA-2017:2836-Critical: dnsmasq security update","RuleModifyTime":1535542395000,"NntfCount":0,"TotalFixCount":196668,"Tags":"Exploit Exists,Code Execution"},{"Status":0,"GmtLast":1662281933000,"LaterCount":0,"AsapCount":1,"Name":"oval:com.redhat.rhsa:def:20173075","Type":"cve","Related":"CVE-2017-13089,CVE-2017-13090","HandledCount":1,"AliasName":"RHSA-2017:3075-Important: wget security update","RuleModifyTime":1551432867000,"NntfCount":0,"TotalFixCount":369136,"Tags":"Code Execution"}]`
     */
    "Whitelist": string;
    /**
     * 添加白名单原因说明。
     * @example `This vulnerability is not harmful`
     */
    "Reason"?: string;
    /**
     * 设置白名单生效的范围。该字段为JSON格式，包含以下字段。
     * - **type**：生效类型。取值：
     *     - **GroupId**：群组
     *     - **Uuid**：主机资产
     * - **uuids**：主机资产UUID集合。
     * - **groupIds**：群组编号集合。
     * > 该值为空表示作用全部主机。若**type**为**GroupId**时，**groupIds**不能为空。若**type**为**Uuid**时，**uuids**不能为空
     * @example `{"type":"GroupId","uuids":[],"groupIds":[10782678]}`
     */
    "TargetInfo"?: string;
}
