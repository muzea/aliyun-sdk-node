export interface DescribeSceneDefensePoliciesResponse {
    /**
     * 本次请求是否成功调用成功。取值：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求的ID。
     * @example `F65DF043-E0EB-4796-9467-23DDCDF92C1D`
     */
    RequestId: string;
    /**
     * 定制场景策略的详细配置。
     */
    Policies: {
        /**
         * 策略执行状态。取值：
         * - **1**：表示未执行或执行完成。
         * - **0**：表示执行中。
         * - **-1**：表示执行失败。
         * @example `1`
         */
        Done: number;
        /**
         * 策略结束生效的时间。使用时间戳表示，单位：毫秒。
         * @example `1586016000000`
         */
        EndTime: number;
        /**
         * 策略的生效状态。取值：
         * - **0**：表示已被禁用。
         * - **1**：表示等待生效。
         * - **2**：表示生效中。
         * - **3**：表示已过期。
         * @example `1`
         */
        Status: number;
        /**
         * 策略开始生效的时间。使用时间戳表示，单位：毫秒。
         * @example `1585670400000`
         */
        StartTime: number;
        /**
         * 策略的防护对象数量。
         * @example `1`
         */
        ObjectCount: number;
        /**
         * 策略使用的模板类型。取值：
         * - **promotion**：表示重大活动模板。
         * - **bypass**：表示全量转发模板。
         * @example `promotion`
         */
        Template: string;
        /**
         * 策略ID。
         * @example `321a-fd31-df51-****`
         */
        PolicyId: string;
        /**
         * 策略名称。
         * @example `testpolicy`
         */
        Name: string;
        /**
         * 策略运行规则。
         */
        RuntimePolicies: {
            /**
             * 策略运行状态。取值：
             * - **0**：表示未下发或策略恢复成功。
             * - **1**：表示正在生效中（策略生效）。
             * - **2**：表示正在恢复中（策略恢复）。
             * - **3**：表示策略生效成功 。
             * - **4**：表示策略生效失败。
             * - **5**：表示策略恢复失败。
             * - **6**：表示策略对应对象的配置不存在（可能已删除）。
             * @example `3`
             */
            Status: number;
            /**
             * 策略生效前的防护规则。
             * **PolicyType**为**1**时，取值：**{"cc\_rule_enable": true}**，表示启用了频率控制。
             * **PolicyType**为**2**时，取值：**{"ai\_rule_enable": 1}**，表示启用了AI智能防护。
             * @example `{"cc_rule_enable": true}`
             */
            oldValue: string;
            /**
             * 策略生效时的防护规则。
             * **PolicyType**为**1**时，取值：**{"cc\_rule_enable": false }**，表示禁用频率控制。
             * **PolicyType**为**2**时，取值：**{"ai\_rule_enable": 0}**，表示禁用AI智能防护。
             * @example `{"cc_rule_enable": false }`
             */
            NewValue: string;
            /**
             * 策略生效时触发的防护功能变更类型。取值：
             * - **1**：表示频率控制功能变更。
             * - **2**：表示AI智能防护功能变更。
             * @example `1`
             */
            PolicyType: number;
        }[];
    }[];
}
