export interface StartAlertRequest {
    /**
     * 集群ID。您可以通过调用ListClusters获取集群ID。
     * @example `c245ff43c717f494489f42f5f1575e98d`
     */
    "ClusterId": string;
    "body"?: {
        /**
         * 需要开启的报警规则集的名称。
         */
        alert_rule_group_name: string;
        /**
         * 需要开启的报警规则集中具体报警规则的名称，不填写默认开启整个报警规则集。
         */
        alert_rule_name: string;
    };
}
