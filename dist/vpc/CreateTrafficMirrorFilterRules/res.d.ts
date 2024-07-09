export interface CreateTrafficMirrorFilterRulesResponse {
    /**
     * 请求ID。
     * @example `07F272E2-6AD5-433A-8207-A607C76F1676`
     */
    RequestId: string;
    /**
     * 入方向规则列表。
     */
    IngressRules: {
        /**
         * 入方向规则的实例ID。
         * @example `tmr-j6c6rtallo51ouzv3****`
         */
        InstanceId: string;
    }[];
    /**
     * 出方向规则列表。
     */
    EgressRules: {
        /**
         * 出方向规则的实例ID。
         * @example `tmr-j6cok23ugp53eeib5****`
         */
        InstanceId: string;
    }[];
}
