export interface AddVmAppToMeshRequest {
    /**
     * 服务网格ID
     * @example `cb8963379255149cb98c8686f274****`
     */
    "ServiceMeshId": string;
    /**
     * 命名空间
     * @example `hello`
     */
    "Namespace": string;
    /**
     * 服务名称
     * @example `http-service`
     */
    "ServiceName": string;
    /**
     * IP列表，多值时使用逗号分割
     * @example `192.1**.*.*,192.1**.*.*`
     */
    "Ips": string;
    /**
     * 端口信息，格式为：`端口名称:端口值`，多值时使用逗号分割
     * @example `http:8000,http:8001`
     */
    "Ports": string;
    /**
     * 标签列表，多值时使用逗号分割
     * @example `app=http-workload`
     */
    "Labels": string;
    /**
     * 服务注解，多值时使用逗号分割
     * @example `env=staging,group=0001`
     */
    "Annotations"?: string;
    /**
     * 服务账号
     * @example `http-sa`
     */
    "ServiceAccount"?: string;
    /**
     * 是否强制跳过创建失败项，默认值为`false`
     * @example `false`
     */
    "Force"?: boolean;
}
