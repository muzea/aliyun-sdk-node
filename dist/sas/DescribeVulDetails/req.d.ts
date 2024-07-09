export interface DescribeVulDetailsRequest {
    /**
     * 设置请求和接收消息的语言类型，取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang": string;
    /**
     * 要查询的漏洞类型。取值：
     * - **cve**：Linux漏洞
     * - **sys**：Windows漏洞
     * - **cms**：Web-CMS漏洞
     * - **app**：应用漏洞
     * - **emg**：应急漏洞
     * - **sca**：软件成分分析漏洞
     * @example `sca`
     */
    "Type": string;
    /**
     * 漏洞名称。
     * > 您可以调用[DescribeGroupedVul](~~DescribeGroupedVul~~)或[DescribeVulList](~~DescribeVulList~~)获取该参数。
     * @example `SCA:ACSV-2020-052801`
     */
    "Name": string;
    /**
     * 漏洞公告。
     * @example `RHSA-2019:3197-Important: sudo security update`
     */
    "AliasName"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
