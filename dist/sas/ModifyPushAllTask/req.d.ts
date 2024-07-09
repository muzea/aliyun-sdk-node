export interface ModifyPushAllTaskRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要进行安全检查的服务器UUID列表。多个UUID之间使用半角逗号（,）隔开。
     * @example `inet-923b4538-0e88-409d-80ba-cb2e7487****,dc1691eb-656f-472f-b2aa-04f621f4****,70452f92-9fc1-45c5-ab35-e7bf8552****`
     */
    "Uuids": string;
    /**
     * 要进行的安全检查的检查项列表。多个检查项之间使用半角逗号（,）隔开。取值：
     * - **OVAL_ENTITY**：CVE漏洞
     * - **CMS**：CMS漏洞
     * - **SYSVUL**：系统漏洞
     * - **SCA**：应用漏洞
     * - **HEALTH_CHECK**：基线
     * - **WEBSHELL**：网站后门
     * - **PROC_SNAPSHOT**：进程数据
     * - **PORT_SNAPSHOT**：端口数据
     * - **ACCOUNT_SNAPSHOT**：账号数据
     * - **SOFTWARE_SNAPSHOT**：软件资产
     * - **SCA_SNAPSHOT**：中间件
     * @example `HEALTH_CHECK,OVAL_ENTITY`
     */
    "Tasks": string;
}
