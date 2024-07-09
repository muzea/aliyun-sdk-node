export interface DescribeDcdnWafGroupResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 自定义WAF规则组ID。
     * @example `1012`
     */
    Id: number;
    /**
     * WAF规则组名称。
     * @example `test`
     */
    Name: string;
    /**
     * 模板ID。
     * @example `1012`
     */
    TemplateId: number;
    /**
     * 是否开启订阅。取值：
     * - **on**：开启。
     * - **off**：关闭。
     * @example `on`
     */
    Subscribe: string;
    /**
     * 过滤出的规则总数。
     * @example `16`
     */
    TotalCount: number;
    /**
     * 规则结构体。
     */
    Rules: {
        /**
         * 修改时间。
         * @example `2021-12-29T17:08:45Z`
         */
        GmtModified: string;
        /**
         * 自定义WAF规则ID。
         * @example `100001`
         */
        Id: number;
        /**
         * WAF规则名称。
         * @example `test`
         */
        Name: string;
        /**
         * WAF规则描述。
         * @example `OK`
         */
        Description: string;
        /**
         * 规则风险等级。取值：
         * - **1**：高风险。
         * - **2**：中风险。
         * - **3**：低风险。
         * @example `2`
         */
        RiskLevel: number;
        /**
         * 防护类型。取值如下：
         * -  **11**：SQL注入
         * -  **12**：跨站脚本
         * -  **13**：代码执行
         * -  **14**：CRLF
         * -  **15**：本地文件包含
         * -  **16**：远程文件包含
         * -  **17**：webshell
         * -  **19**：跨站请求伪造
         * -  **20**：其他
         * -  **21**：SEMA
         * @example `11`
         */
        ProtectionType: number;
        /**
         * 应用类型。取值如下：
         * -  **0**：Common
         * -  **1**：Wordpress
         * -  **2**：Dedecms
         * -  **3**：Discuz
         * -  **4**：Phpcms
         * -  **5**：Ecshop
         * -  **6**：Shopex
         * -  **7**：Drupal
         * -  **8**：Joomla
         * - **9**：Metinfo
         * -  **10**：Struts2
         * - **11**：Spring Boot
         * - **12**：Jboss
         * -  **13**：Weblogic
         * -  **14**：Websphere
         * -  **15**：Tomcat
         * -  **16**：Elastic Search
         * -  **18**：Thinkphp
         * -  **19**：Fastjson
         * -  **20**：ImageMagick
         * -  **21**：PHPwind
         * -  **22** ：phpMyAdmin
         * -  **23**： Resin
         * -  **24**： IIS
         * -  **99**： Others
         * @example `1`
         */
        ApplicationType: number;
        /**
         * CVE ID。
         * @example `CVE-2021-22945`
         */
        CveId: string;
        /**
         * CVE链接。
         * @example `https://nxx.nxxx.gov/vuln/detail/CVE-2022-XXXX`
         */
        CveUrl: string;
    }[];
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，默认**20**。
     * @example `20`
     */
    PageSize: number;
}
