export interface DeleteK8sIngressRuleRequest {
    /**
     * 集群ID。
     * @example `5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx`
     */
    "ClusterId"?: string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 路由规则名称。只能为小写字母、数字和短划线（-）必须以小写字母开头，不以短划线（-）结尾，长度不超过63个字符。
     * @example `my-ingress-rule`
     */
    "Name"?: string;
}
