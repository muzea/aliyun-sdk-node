export interface GetSecurityScoreRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F8B6F758-BCD4-597A-8A2C-DA5A552C****`
     */
    RequestId: string;
    /**
     * 安全分规则列表。
     */
    SecurityScoreRuleList: {
        /**
         * 安全分规则类型。取值：
         * - SS_REINFORCE：关键功能配置。
         * - SS_ALARM： 待处理告警。
         * - SS_VUL：待修复漏洞。
         * - SS_HC： 基线问题。
         * - SS_CLOUD_HC：云平台配置检测项问题。
         * - SS_AK：存在AK泄露风险。
         * @example `SS_ALARM`
         */
        RuleType: string;
        /**
         * 安全分规则扣分值。
         * > 可配置范围为0～100分，所有安全分规则扣分阈值总和要等于100分。
         * @example `20`
         */
        Score: number;
        /**
         * 安全分规则描述。
         * @example `Unhandled Alerts`
         */
        Title: string;
        /**
         * 安全分规则扣分单项列表。
         */
        SecurityScoreItemList: {
            /**
             * 安全分扣分单项子规则类型。安全分类型与安全分扣分单项子规则类型的关系如下：
             * - SS_REINFORCE：关键功能配置。
             *   - XPRESS_INSTALL：未开启云安全中心服务授权。
             *   - REINFORCE_SUSPICIOUS：未开启防病毒功能。
             *   - RANSOMWARE：未开启防勒索策略。
             *   - WEB_LOCK：未开启网页防篡改功能。
             *   - VIRUS_SCHEDULE_SCAN：未开启周期病毒扫描策略。
             *   - IMAGE_REPO_SCAN：未配置容器镜像扫描范围。
             *   - IMAGE_SCAN_TASK：未执行一键扫描容器镜像安全风险。
             * - SS_ALARM： 待处理告警。
             *   - ALARM_SERIOUS：存在一个未处理的高危告警事件。
             *   - ALARM_SUSPICIOUS：存在一个未处理的中危告警事件。
             *   - ALARM_REMIND：存在一个未处理的低危告警事件。
             * - SS_VUL：待修复漏洞。
             *   - CMS_UNFIX：存在一个未修复的CMS漏洞。
             *   - WIN_UNFIX：存在一个未修复的Windows主机漏洞。
             *   - CVE_UNFIX：存在一个未修复的Linux主机漏洞。
             *   - ERM_UNFIX：存在一个未修复的应急漏洞。
             *   - ERM_UNCHECK：存在一个未检测的应急漏洞。
             * - SS_HC： 基线问题。
             *   - WEAK_EXPLOIT：存在公网暴露的弱口令风险。
             *   - WEAK_PASSWORD：存在弱口令风险。
             *   - HC_EXPLOIT：存在高危可被入侵的风险。
             *   - HC_OTHER_WARNING：存在安全配置风险。
             * - SS_CLOUD_HC：云平台配置检测项问题。
             *   - CSPM_CIEM_NOT_PASS：存在一个未通过的CIEM检查项。
             *   - CSPM_RISK_NOT_PASS：存在一个未通过的安全风险检查项。
             *   - CSPM_COMPLIANCE_NOT_PASS：存在一个未通过的合规检查项。
             * - SS_AK：存在AK泄露风险。
             * @example `ALARM_SERIOUS`
             */
            SubRuleType: string;
            /**
             * 单项扣分值。
             * @example `3`
             */
            Score: number;
            /**
             * 单项扣分阈值。
             * > 可配置范围为0～安全分规则扣分阈值。
             * @example `5`
             */
            ScoreThreshold: number;
            /**
             * 安全分扣分单项子规则类型描述。
             * @example `Unhandled Urgent Alert Event Exists`
             */
            Title: string;
        }[];
    }[];
    /**
     * 自定义安全评分规则启用状态。
     * - true：已启用。
     * - false： 未启用。
     * @example `true`
     */
    EnableStatus: boolean;
}
