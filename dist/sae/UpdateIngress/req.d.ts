export interface UpdateIngressRequest {
    /**
     * 路由规则ID。
     * @example `87`
     */
    "IngressId": number;
    /**
     * **CLB**证书ID。取值说明如下：
     * - **LoadBalanceType**为**clb**时，使用该字段来配置HTTPS监听证书。
     * CLB使用SSL证书ID的更多信息，请参见[管理证书（CLB）](~~90792~~)。
     * @example `188077086902****_176993d****_181437****_108724****`
     */
    "CertId"?: string;
    /**
     * **ALB**多证书ID。取值说明如下：
     * - **LoadBalanceType**为**alb**时，使用该字段来配置HTTPS监听多证书，多个证书ID之间使用逗号分割。
     * - ALB使用的SSL证书ID需要从数字证书产品获取。例如配置`756***-cn-hangzhou`，`756***`为产品页获取的证书ID, `-cn-hangzhou`为固定后缀。更多信息，请参见[管理证书（ALB）](~~209076~~)。
     * @example `87***35-cn-hangzhou,812***3-cn-hangzhou`
     */
    "CertIds"?: string;
    /**
     * 路由规则名称。
     * @example `ingress-sae-test`
     */
    "Description"?: string;
    /**
     * SLB监听端口，该端口不能被占用。
     * @example `443`
     */
    "ListenerPort"?: string;
    /**
     * 默认转发规则。按照IP地址，通过指定端口转发流量到指定应用。参数说明如下：
     * - **appId**：应用ID。
     * - **containerPort**：应用实例端口。
     * > 所有未匹配或不满足**Rules**转发规则的请求都会转到该指定应用。
     * @example `{"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080}`
     */
    "DefaultRule"?: string;
    /**
     * 转发规则。按照域名和请求路径，通过指定端口转发流量到指定应用。参数说明如下：
     * - **appId**：应用ID。
     * - **containerPort**：应用实例端口。
     * - **domain**：域名。
     * - **path**：请求路径。
     * @example `[{"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080,"domain":"www.sae.site","path":"/path1"},{"appId":"666403ce-d25b-47cf-87fe-497565d2****","containerPort":8080,"domain":"sae.site","path":"/path2"}]`
     */
    "Rules"?: string;
    /**
     * 废弃参数，已不支持更新。
     * @example `clb`
     */
    "LoadBalanceType"?: string;
    /**
     * 请求转发协议。取值说明如下：
     * - **HTTP**：适用于需要对数据内容进行识别的应用。
     * - **HTTPS**：适用于需要加密传输的应用。
     * @example `HTTP`
     */
    "ListenerProtocol"?: string;
}
