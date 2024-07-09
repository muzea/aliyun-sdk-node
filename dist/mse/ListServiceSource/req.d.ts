export interface ListServiceSourceRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-c51a15c7ee934a4fb945ccf35fe1****`
     */
    "GatewayUniqueId": string;
    /**
     * 获取指定服务来源类型（为空返回所有类型）：
     * - 容器服务：K8s
     * - MSE Nacos：MSE
     * - MSE ZooKeeper：MSE_ZK
     * - SAE 注册中心：SAE
     * - EDAS 注册中心：EDAS
     * @example `MSE`
     */
    "Source"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
