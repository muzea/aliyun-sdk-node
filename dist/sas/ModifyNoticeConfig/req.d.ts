export interface ModifyNoticeConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `42.178.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 通知方式。取值如下：
     * - **1**：短信开启。
     * - **2**：邮件开启。
     * - **4**：站内信开启。
     * - **3**：短信和邮件开启。
     * - **5**：短信和站内信开启。
     * - **6**：邮件和站内信开启。
     * - **7**：短信、邮件、站内信开启。
     * @example `4`
     */
    "Route"?: number;
    /**
     * 项目标识。
     * - **yundun_security_Weekreport**：安全周报（只支持邮件）。
     * - **sas_healthcheck**：基线检查。
     * - **yundun_defennce_antiRansomware_overflow**：防勒索空间超量。
     * - **yundun_sas_cloudsiem_log**：威胁分析日志超量提醒通知。
     * - **sas_suspicious**：安全告警。
     * - **yundun_aegis_AV_true**：精准防御。
     * - **yundun_sas_ak_leakage AccessKey**：AccessKey 泄露情报。
     * - **yundun_sas_config_alert**：云平台配置检查。
     * - **yundun_sas_vul_Emergency**：应急漏洞情报。
     * - **yundun_webguard_event**：网页防篡改。
     * - **yundun_sas_cloud_native_firewall**：容器防火墙异常告警通知（只支持邮件）。
     * - **yundun_sas_cloud_native_firewall_Defense**：容器防火墙主动防御通知（只支持邮件）。
     * - **yundun_IP_Blocking**：恶意 IP 拦截告警通知。
     * - **yundun_sas_anti_virus_config**：病毒扫描通知。
     * - **yundun_sas_log**：日志超量。
     * - **yundun_honeypot_alarm**：云蜜罐告警。
     * - **aliyun_rasp_alarm**：应用防护告警。
     * > **yundun_security\_Weekreport**以周报发送，通知存在还未处理的漏洞。
     * @example `yundun_webguard_event`
     */
    "Project"?: string;
    /**
     * 通知的时间限制。
     * - **0**：无限制。
     * - **1**：08:00-22:00时间段内发送通知。
     * @example `1`
     */
    "TimeLimit"?: number;
}
