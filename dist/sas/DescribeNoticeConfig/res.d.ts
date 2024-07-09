export interface DescribeNoticeConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D185B7FF-E24C-422D-83D3-C2A25C7A2727`
     */
    RequestId: string;
    /**
     * 通知配置信息列表。
     */
    NoticeConfigList: {
        /**
         * 通知的时间限制。
         * - **0**：无限制。
         * - **1**：08:00-22:00时间段内发送通知。
         * @example `1`
         */
        TimeLimit: number;
        /**
         * 用户的UID。
         * @example `12123414****`
         */
        AliUid: number;
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 项目标识。
         * - **yundun_security\_Weekreport**：漏洞通知。
         * - **yundun_sas\_antiransomware\_tas**k：防勒索任务执行结果通知。
         * - **sas_healthcheck**：基线检查通知。
         * - **sas_suspicious**：态势感知安全告警通知。
         * - **yundun_aegis\_AV\_true**：精准防御通知。
         * - **yundun_sas\_ak\_leakage**：AccessKey泄露情报通知。
         * - **yundun\_sas\_config_alert**：云平台配置检查通知。
         * - **yundun_sas\_vul\_Emergency**：应急漏洞情报通知。
         * - **yundun_webguard\_event**：网页防篡改通知。
         * - **yundun_sas\_cloud\_native\_firewall**：容器防火墙异常告警通知。
         * - **yundun_sas\_cloud\_native\_firewall\_Defense**：容器防火墙主动防御通知。
         * - **yundun_IP\_Blocking**：恶意 IP 拦截告警通知。
         * - **yundun_sas\_anti\_virus\_config**：病毒扫描通知。
         * - **yundun_sas\_log**：日志超量通知。
         * - **yundun_honeypot\_alarm**：云蜜罐告警通知。
         * - **aliyun_rasp\_alarm**：应用安全告警通知。
         * - **virusScheduleTask**：病毒防御定期扫描完成通知。
         * - **yundun\_anti_Virus**：未进行安全扫描通知。
         * - **sas_vulnerability**：漏洞通知。
         * - **weeklyreport**：周报通知。
         * - **agent**：客户端离线通知。
         * - **bruteforcesuccess**：防暴力破解通知。
         * - **webshell**：Webshell通知。
         * - **suspicious**：安骑士告警通知。
         * - **patch**：已废弃，无需关注。
         * - **remotelogin**：远程登录通知。
         * - **health**：安全检测通知。
         * - **yundun\_sas\_cloudsiem_log**：威胁分析日志超量提醒通知。
         * > **yundun_security\_Weekreport**以周报发送，通知存在还未处理的漏洞。
         * @example `sas_suspicious`
         */
        Project: string;
        /**
         * 通知方式。取值如下：
         * - **1**：短信开启。
         * - **2**：邮件开启。
         * - **4**：站内信开启。
         * - **3**：短信和邮件开启。
         * - **5**：短信和站内信开启。
         * - **6**：邮件和站内信开启。
         * - **7**：短信、邮件、站内信开启。
         * @example `7`
         */
        Route: number;
    }[];
}
