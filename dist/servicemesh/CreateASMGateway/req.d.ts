export interface CreateASMGatewayRequest {
    /**
     * ASM实例ID
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId": string;
    /**
     * ASM网关名称
     * @example `ingressgateway`
     */
    "IstioGatewayName"?: string;
    /**
     * 创建的ASM网关的YAML内容
     * @example `{"apiVersion":"istio.alibabacloud.com/v1beta1","kind":"IstioGateway","metadata":{"name":"ingressgateway","namespace":"istio-system"},"spec":{"gatewayType":"ingress","clusterIds":["xxxxx"],"ports":[{"name":"http-0","port":80,"targetPort":80,"protocol":"TCP"},{"name":"https-1","port":443,"targetPort":443,"protocol":"TCP"}],"serviceAnnotations":{"service.beta.kubernetes.io/alicloud-loadbalancer-address-type":"internet","service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec":"slb.s1.small"},"replicaCount":2,"resources":{"limits":{"cpu":"2","memory":"4G"},"requests":{"cpu":"200m","memory":"256Mi"}},"serviceType":"LoadBalancer","maxReplicas":2,"minReplicas":2}}`
     */
    "Body"?: string;
}
