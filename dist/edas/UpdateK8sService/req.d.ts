export interface UpdateK8sServiceRequest {
    /**
     * 应用ID。
     * @example `5a166fbd-****-****-a286-781659d9f54c`
     */
    "AppId": string;
    /**
     * K8s Service名称，需要遵循以下规范：
     * - 仅支持小写字母、数字和短划线（-）。
     * - 只能以字母开头，并且以字母或数字结尾。
     * - 长度范围为2~32字符。
     * @example `service-http`
     */
    "Name": string;
    /**
     * K8s服务类型，当前只支持ClusterIP类型。
     * @example `ClusterIP`
     */
    "Type": string;
    /**
     * K8s Service端口映射表，需要符合JsonArray格式，支持的参数如下：
     * - **protocol**：必填，服务协议，支持TCP和UDP。
     * - **port**：必填，前端服务端口，取值范围1~65535。
     * - **targetPort**：必填，后端容器端口，取值范围1~65535。
     * 参考示例：
     * `[{"protocol": "TCP", "port": 80, "targetPort": 8080},{"protocol": "TCP", "port": 81, "targetPort": 8081}]`
     * @example `[{"protocol":"TCP","port":80,"targetPort":8080}]`
     */
    "ServicePorts"?: string;
    /**
     * 设置外部流量管理策略：
     * - Local：Local模式。
     * - Cluster：Cluster模式。
     * 默认为Local模式。
     * @example `Local`
     */
    "ExternalTrafficPolicy"?: string;
}
