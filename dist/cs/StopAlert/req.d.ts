export interface StopAlertRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `c7f9c85baee73452883b3299a0107****`
     */
    "ClusterId": string;
    "body"?: {
        /**
         * 需要关闭的报警规则集的名称。
         */
        alert_rule_group_name: string;
        /**
         * 需要关闭的报警规则集中具体报警规则的名称，不填写默认关闭整个报警规则集。
         */
        alert_rule_name: string;
    };
}
