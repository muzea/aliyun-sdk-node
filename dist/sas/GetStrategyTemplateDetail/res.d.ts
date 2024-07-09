export interface GetStrategyTemplateDetailResponse {
    /**
     * 模板详情信息。
     */
    Data: {
        /**
         * 规则编号。
         * @example `1005`
         */
        StrategyId: number;
        /**
         * 规则使用模板编号。
         * @example `1204`
         */
        StrategyTemplateId: number;
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 规则名称。
         * @example `Blank template`
         */
        StrategyName: string;
        /**
         * 规则说明。
         * @example `Custom defense configuration`
         */
        Description: string;
        /**
         * 集群名称。
         * @example `hhht-cluster-02`
         */
        ClusterName: string;
        /**
         * 该规则是否支持未扫描镜像。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `false`
         */
        UnScanedImage: boolean;
        /**
         * 该规则是否支持互联网恶意镜像。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `false`
         */
        MaliciousImage: boolean;
        /**
         * 命名空间列表。
         */
        Namespace: string[];
        /**
         * 镜像名称列表。
         */
        ImageName: string[];
        /**
         * 容器标签列表。
         */
        Label: string[];
        /**
         * 规则动作。取值：
         * - **1**：告警
         * - **2**：拦截
         * - **3**：放行
         * @example `1`
         */
        RuleAction: number;
        /**
         * 镜像标签白名单列表。
         */
        WhiteList: string[];
        /**
         * 规则配置信息。
         */
        AlarmDetail: {
            /**
             * 基线规则配置信息。
             */
            Baseline: {
                /**
                 * 基线等级列表。取值：
                 * - **high**：高危。
                 * - **medium**：中危。
                 * - **low**：低危。
                 */
                RiskLevel: string[];
                /**
                 * 基线项目信息列表。
                 */
                Item: {
                    /**
                     * 基线检查项唯一识别码。
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
             * 漏洞规则配置信息。
             */
            Vul: {
                /**
                 * 漏洞等级列表。
                 */
                RiskLevel: string[];
                /**
                 * 漏洞项目信息列表。
                 */
                Item: {
                    /**
                     * 漏洞编号。
                     * @example `AVD-2023-1680169`
                     */
                    Id: string;
                    /**
                     * 漏洞名称。
                     * @example `ezOffice evoInterfaceServlet Info Leak`
                     */
                    Name: string;
                }[];
            };
            /**
             * 恶意样本规则配置信息。
             */
            MaliciousFile: {
                /**
                 * 恶意样本等级列表。
                 */
                RiskLevel: string[];
                /**
                 * 恶意样本项目信息列表。
                 */
                Item: {
                    /**
                     * 恶意样本唯一识别码。
                     * @example `test`
                     */
                    Id: string;
                    /**
                     * 恶意样本名称。
                     * @example `test`
                     */
                    Name: string;
                }[];
            };
        };
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1E36BEEA-0B27-58CC-8319-50279203B048`
     */
    RequestId: string;
}
