export interface AddServiceSourceRequest {
    /**
     * 服务注册类型，按来源类型填写对应的值：
     * - 容器服务：K8S
     * - MSE Nacos：NACOS
     * - MSE ZooKeeper：ZOOKEEPER
     * - SAE 注册中心：NACOS
     * - EDAS 注册中心：NACOS
     * @example `NACOS
    `
     */
    "Type"?: string;
    /**
     * 服务来源类型：
     * - 容器服务：K8S
     * - MSE Nacos：MSE
     * - MSE ZooKeeper：MSE_ZK
     * - SAE 注册中心：SAE
     * - EDAS 注册中心：EDAS
     * @example `MSE`
     */
    "Source"?: string;
    /**
     * 访问地址（必填）：
     * * 容器服务：对应容器服务集群ID
     * * MSE Nacos：实例内网访问地址
     * * MSE ZooKeeper：实例内网访问地址
     * * SAE 注册中心：命名空间TID
     * * EDAS 注册中心：微服务空间Namespace
     * @example `mse-********-nacos-ans.mse.aliyuncs.com:8848`
     */
    "Address"?: string;
    /**
     * 名称。
     * > 不同来源类型描述。
     * - 类型为K8s时入参为名称。
     * - 类型为NACOS时入参为实例ID。
     * @example `nacos`
     */
    "Name"?: string;
    /**
     * 网关唯一ID。
     * @example `gw-c70622ff52fe49beb29bea9a6f52****`
     */
    "GatewayUniqueId": string;
    /**
     * Ingress配置（服务来源类型为K8S时使用）。
     */
    "IngressOptionsRequest"?: {
        /**
         * 是否开启Ingress。
         * @example `true`
         */
        EnableIngress: boolean;
        /**
         * 监听Ingress Class。
         * @example `com.test.xxx`
         */
        IngressClass: string;
        /**
         * 监听目标命名空间。
         * @example `default`
         */
        WatchNamespace: string;
        /**
         * 是否更新Ingress Status。
         * @example `true`
         */
        EnableStatus: boolean;
    };
    /**
     * 待授权安全组列表，用于在创建来源时打通后端服务的安全组限制
     */
    "ToAuthorizeSecurityGroups"?: {
        /**
         * 安全组ID。
         * @example `sg-bp1acepclex0vmi1****`
         */
        SecurityGroupId: string;
        /**
         * 安全组的授权端口范围，可多选，使用,分隔。
         * @example `8080/8080,9000/10000`
         */
        PortRange: string;
        /**
         * 授权记录描述。
         * @example `rule for xxx`
         */
        Description: string;
    }[];
    /**
     * 服务分组列表。
     */
    "GroupList"?: string[];
    /**
     * 服务根路径数组。
     */
    "PathList"?: string[];
    /**
     * 支持的语言。包括以下取值：
     * - 中文：zh-CN（默认值）。
     * - 英文：en-US。
     * - 日文：ja。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
