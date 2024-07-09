export interface GetOpaStrategyDetailNewResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 策略ID。
         * @example `1005`
         */
        StrategyId: number;
        /**
         * 策略模板ID。
         * @example `1204`
         */
        StrategyTemplateId: number;
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 策略名称。
         * @example `test001`
         */
        StrategyName: string;
        /**
         * 描述。
         * @example `Custom defense configuration`
         */
        Description: string;
        /**
         * 集群名称。
         * @example `test`
         */
        ClusterName: string;
        /**
         * 策略是否支持未扫描镜像。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `true`
         */
        UnScanedImage: boolean;
        /**
         * 策略是否支持互联网恶意镜像。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `true`
         */
        MaliciousImage: boolean;
        /**
         * 镜像名称。
         */
        ImageName: string[];
        /**
         * 镜像标签。
         */
        Label: string[];
        /**
         * 策略命中执行动作。取值：
         * - **1**：告警
         * - **2**：拦截
         * - **3**：放行
         * @example `1`
         */
        RuleAction: number;
        /**
         * 镜像标签白名单。
         */
        WhiteList: string[];
        /**
         * 策略配置信息。
         */
        AlarmDetail: {
            /**
             * 基线配置信息。
             */
            Baseline: {
                /**
                 * 风险等级列表。
                 */
                RiskLevel: string[];
                /**
                 * 基线项目信息。
                 */
                Item: {
                    /**
                     * 基线检查项ID。
                     * @example `ak_leak`
                     */
                    Id: string;
                    /**
                     * 基线检查项名称。
                     * @example `Access Key plaintext storage`
                     */
                    Name: string;
                }[];
            };
            /**
             * 漏洞配置信息。
             */
            Vul: {
                /**
                 * 风险等级列表。
                 */
                RiskLevel: string[];
                /**
                 * 漏洞项目信息。
                 */
                Item: {
                    /**
                     * 漏洞ID。
                     * @example `AVD-2023-1680169`
                     */
                    Id: string;
                    /**
                     * 漏洞名称。
                     * @example `ezOffice evoInterfaceServlet Info Leak`
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
             * 恶意样本配置信息。
             */
            MaliciousFile: {
                /**
                 * 风险等级列表。
                 */
                RiskLevel: string[];
                /**
                 * 恶意样本项目信息。
                 */
                Item: {
                    /**
                     * 恶意样本ID。
                     * @example `1811`
                     */
                    Id: string;
                    /**
                     * 恶意样本名称。
                     * @example `abnormal binary file
                    `
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
         * 作用范围。
         */
        Scopes: {
            /**
             * 集群的ID。
             * @example `c1fdb5fd8d**7163`
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
             */
            NamespaceList: string[];
            /**
             * 集群内策略略实例ID。
             * @example `ack-0`
             */
            AckPolicyInstanceId: string;
        }[];
        /**
         * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
         * - **zh**：中文
         * - **en**：英文
         * @example `zh`
         */
        Lang: string;
        /**
         * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
         * @example `4`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E819FD71-D240-5E54-AA7F-20FED2ECBEB6`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
