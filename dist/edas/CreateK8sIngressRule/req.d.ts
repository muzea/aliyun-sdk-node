export interface CreateK8sIngressRuleRequest {
    /**
     * 集群ID。
     * @example `5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx`
     */
    "ClusterId": string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 路由规则名称。只能为小写字母、数字和短划线（-），必须以小写字母开头，不以短划线（-）结尾，长度不超过63个字符。
     * @example `my-ingress-rule`
     */
    "Name": string;
    /**
     * JSON对象字符串表示的应用路由规则，格式如下所示：
     * ```
     * {
     *   "rules": [
     *     {
     *       "host": "abc.com",
     *       "secretName": "tls-secret",
     *       "paths": [
     *         {
     *           "path": "/path",
     *           "backend": {
     *             "servicePort": 80,
     *             "serviceName": "xxx"
     *           }
     *         }
     *       ]
     *     }
     *   ]
     * }
     * ```
     * 代码字段解释如下：
     * - rules：路由规则列表。
     * - host：路由规则域名。
     * - secretName：TLS证书类型的Secret，当需要支持HTTPS协议时需要配置该证书。
     * - paths：匹配路径列表。
     * - path：匹配路径。
     * - backend：后端服务，支持配置由EDAS控制台创建的Service。
     * - serviceName：后端服务名称。
     * - servicePort：后端服务端口。
     * @example `{"rules":[{"host":"abc.com","secretName":"tls-secret","paths":[{"path":"/path","backend":{"servicePort":80,"serviceName":"xxx"}}]}]}`
     */
    "IngressConf"?: string;
    /**
     * 注解。
     * @example `{\"alb.ingress.kubernetes.io/rewrite-target\":\"/consumer-echo/test\"}`
     */
    "Annotations"?: string;
    /**
     * 标签。
     * @example `{\"test-labels\":\"test-value\"}`
     */
    "Labels"?: string;
}
