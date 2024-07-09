export interface BindK8sSlbRequest {
    /**
     * 应用ID。
     * @example `5a166fbd-****-****-a286-781659d9f54c`
     */
    "AppId": string;
    /**
     * 集群ID。
     * @example `712082c3-f554-****-****-a947b5cde6ee`
     */
    "ClusterId"?: string;
    /**
     * 设置SLB的类型：
     * * internet：公网SLB。
     * * intranet：私网SLB。
     * @example `internet`
     */
    "Type": string;
    /**
     * SLB ID。不配置时，EDAS会自动为用户新购SLB。
     * @example `lb-2ze1quax9t****iz82bjt`
     */
    "SlbId"?: string;
    /**
     * SLB协议，目前支持TCP、HTTP和HTTPS协议。
     * @example `TCP`
     */
    "SlbProtocol"?: string;
    /**
     * 后端端口，也是应用的服务端口，范围1~65535。
     * @example `8080`
     */
    "TargetPort"?: string;
    /**
     * 前端端口，范围1~65535。
     * @example `80`
     */
    "Port"?: string;
    /**
     * 多个端口需求以及非TCP协议需求填写字段。
     * 必须符合JsonArray格式，参考示例：
     * [{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"1362469756373809_16c185d6fa2_1914500329_-xxxxxxx","targetPort":8181,"lo
     * adBalancerProtocol":"HTTPS"}]
     * - port：必填，前端端口，范围 1~65535。不能重复。
     * - targetPort: 必填，后端端口，范围 1~65535。
     * - loadBalancerProtocol：必填，只支持TCP和HTTPS，对于HTTP类型的填写TCP即可。
     * - certId：如果是HTTPS，则该参数必填证书ID，可以在SLB控制台进行购买。
     * > 该参数用来支持多端口支持，需要配合appId、clusterId、type、slbId进行使用。
     * @example `[{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"136246975637380916c185d6fa21914500329_-988as","targetPort":8181,"lo adBalancerProtocol":"HTTPS"}]`
     */
    "ServicePortInfos"?: string;
    /**
     * 负载均衡实例的规格：
     * * slb.s1.small
     * * slb.s2.small
     * * slb.s2.medium
     * * slb.s3.small
     * * slb.s3.medium
     * * slb.s3.large
     * @example `slb.s1.small`
     */
    "Specification"?: string;
    /**
     * SLB调度算法。不填写则默认值为rr。支持负载均衡支持轮询 (rr)、加权轮询 (wr) 两种调度算法。
     * - 加权轮询 (wrr)：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * - 轮询 (rr)：按照访问顺序依次将外部请求分发到后端服务器。
     * @example `wrr`
     */
    "Scheduler"?: string;
}
