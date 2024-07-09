export interface CreateOpaStrategyNewRequest {
    /**
     * 策略ID。
     * >调用[ListOpaClusterStrategyNew](~~2623574~~)接口可以获取该参数。
     * <notice>创建策略时此参数无效。></notice>
     * @example `16`
     */
    "StrategyId"?: number;
    /**
     * 策略模板ID。
     * >调用[GetOpaStrategyTemplateSummary](~~2539952~~)接口可以获取该参数。
     * @example `109`
     */
    "StrategyTemplateId"?: number;
    /**
     * 集群ID。
     * ><notice>已废弃。></notice>
     * @example `cfa7e2fb8c221483ba59e098c34c6****`
     */
    "ClusterId"?: string;
    /**
     * 策略名称。
     * @example `default`
     */
    "StrategyName"?: string;
    /**
     * 策略描述。
     * @example `default policy`
     */
    "Description"?: string;
    /**
     * 集群名称。
     * ><notice>已废弃。></notice>
     * @example `*`
     */
    "ClusterName"?: string;
    /**
     * 该策略是否支持未扫描镜像。取值：
     * - **true**：支持
     * - **false**：不支持
     * @example `true`
     */
    "UnScanedImage"?: boolean;
    /**
     * 该策略是否支持互联网恶意镜像。取值：
     * - **true**：支持
     * - **false**：不支持
     * @example `true`
     */
    "MaliciousImage"?: boolean;
    /**
     * 镜像名称列表。
     */
    "ImageName"?: string[];
    /**
     * 容器标签列表。
     */
    "Label"?: string[];
    /**
     * 策略命中时执行操作。取值：
     * - **1**：告警
     * - **2**：拦截
     * - **3**：放行
     * @example `1`
     */
    "RuleAction"?: number;
    /**
     * 白名单列表。
     */
    "WhiteList"?: string[];
    /**
     * 策略包含的告警内容详情。
     */
    "AlarmDetail"?: {
        /**
         * 基线。
         */
        Baseline: {
            /**
             * 风险等级。
             */
            RiskLevel: string[];
            /**
             * 基线检查项列表。
             */
            Item: {
                /**
                 * 基线检查项ID。
                 * > 您可通过调用[GetOpaClusterBaseLineList](~~2539883~~)接口查询该值。
                 * @example `hc.image.checklist.identify.hc_exploit_couchdb_linux.item`
                 */
                Id: string;
                /**
                 * 基线检查项名称。
                 * > 您可通过调用[GetOpaClusterBaseLineList](~~2539883~~)接口查询该值。
                 * @example `Unauthorized access to CouchDB configuration risk`
                 */
                Name: string;
            }[];
        };
        /**
         * 漏洞项目信息。
         */
        Vul: {
            /**
             * 风险等级列表。
             */
            RiskLevel: string[];
            /**
             * 漏洞列表。
             */
            Item: {
                /**
                 * 漏洞ID。
                 * > 您可通过调用[DescribeVulListPage](~~471928~~)接口查询该值。
                 * @example `CVE-2023-36034`
                 */
                Id: string;
                /**
                 * 漏洞名称。
                 * > 您可通过调用[DescribeVulListPage](~~471928~~)接口查询该值。
                 * @example `Microsoft Edge vul`
                 */
                Name: string;
            }[];
            /**
             * 漏洞类型列表。
             */
            RiskClass: {
                /**
                 * 漏洞类型ID。取值：
                 * - **cve**：系统漏洞
                 * - **app**：应用漏洞
                 * @example `cve`
                 */
                Id: string;
                /**
                 * 漏洞类型名称。取值：
                 * - **系统漏洞**
                 * - **应用漏洞**
                 * @example `系统漏洞`
                 */
                Name: string;
            }[];
        };
        /**
         * 恶意样本信息。
         */
        MaliciousFile: {
            /**
             * 风险等级列表。
             */
            RiskLevel: string[];
            /**
             * 恶意样本列表。
             */
            Item: {
                /**
                 * 恶意样本ID。
                 * > 您可通过调用[DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~)接口查询该值。
                 * @example `3685699`
                 */
                Id: string;
                /**
                 * 恶意样本名称。
                 * > 您可通过调用[DescribeMatchedMaliciousNames](~~DescribeMatchedMaliciousNames~~)接口查询该值。
                 * @example `abnormal binary file`
                 */
                Name: string;
            }[];
        };
        /**
         * 敏感文件信息。
         */
        SensitiveFile: {
            /**
             * 风险等级列表。
             */
            RiskLevel: string[];
            /**
             * 敏感文件检查项列表。
             */
            Item: {
                /**
                 * 敏感文件类型ID。
                 * > 您可通过调用[GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~)接口查询该值。
                 * @example `key`
                 */
                Id: string;
                /**
                 * 敏感文件类型名称。
                 * > 您可通过调用[GetSensitiveDefineRuleConfig](~~GetSensitiveDefineRuleConfig~~)接口查询该值。
                 * @example `name`
                 */
                Name: string;
            }[];
        };
        /**
         * 镜像风险构建命令信息。
         */
        BuildRisk: {
            /**
             * 风险等级列表。
             */
            RiskLevel: string[];
            /**
             * 风险项列表。
             */
            Item: {
                /**
                 * 镜像风险构建命令类型ID。
                 * > 您可通过调用[ListImageBuildRiskItem](~~ListImageBuildRiskItem~~)接口查询该值。
                 * @example `key`
                 */
                Id: string;
                /**
                 * 镜像风险构建命令类型名称。
                 * > 您可通过调用[ListImageBuildRiskItem](~~ListImageBuildRiskItem~~)接口查询该值。
                 * @example `name`
                 */
                Name: string;
            }[];
        };
    };
    /**
     * 策略作用范围列表。
     */
    "Scopes"?: {
        /**
         * 策略包含的集群ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~421736~~)接口获取该参数。
         * @example `cc50d***015d2`
         */
        ClusterId: string;
        /**
         * 是否包含所有命名空间。取值：
         * - **1**：是
         * - **0**：否
         * @example `1`
         */
        AllNamespace: number;
        /**
         * 命名空间列表。
         * ><notice>本参数只有当AllNamespace为0时有效。></notice>
         */
        NamespaceList: string[];
        /**
         * 集群内策略略实例ID。
         * ><notice>创建时无需此参数。></notice>
         * @example `ack-p-1`
         */
        AckPolicyInstanceId: string;
    }[];
}
