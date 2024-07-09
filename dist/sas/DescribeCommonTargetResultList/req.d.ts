export interface DescribeCommonTargetResultListRequest {
    /**
     * 要查询的访问源的IP地址。
     * @example `113.57.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 配置规则类型。取值：
     * - **webshell_timescan**：网站后门查杀。
     * - **aliscriptengine**：深度检测引擎。
     * - **alidetect**：本地文件检测引擎的安装范围。
     * - **alidetect-scan-enable**：本地文件检测引擎的检测范围。
     * > 您可以通过[ListClientUserDefineRules](~~ListClientUserDefineRules~~)和[ListSystemClientRules](~~ListSystemClientRules~~)获取更多自定义和系统配置的规则类型。
     * @example `webshell_timescan`
     */
    "Type": string;
}
