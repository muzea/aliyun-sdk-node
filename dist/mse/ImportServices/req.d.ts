export interface ImportServicesRequest {
    /**
     * 服务列表。
     * @example `DNS`
     */
    "ServiceList"?: {
        /**
         * 服务名。
         * @example `test`
         */
        Name: string;
        /**
         * 命名空间。
         * @example `public`
         */
        Namespace: string;
        /**
         * 分组。
         * @example `test`
         */
        GroupName: string;
        /**
         * IP列表。
         */
        Ips: string[];
        /**
         * 服务的端口。
         * @example `8080`
         */
        ServicePort: number;
        /**
         * 服务的协议版本。
         * @example `GRPC, HTTP`
         */
        ServiceProtocol: string;
    }[];
    /**
     * 服务来源：
     * -  MSE（MSE-NACOS）
     * -  K8s（ACK容器服务）
     * -  VIP（固定地址）
     * -  DNS（DNS域名）
     * @example `DNS`
     */
    "SourceType": string;
    /**
     * 网关唯一标识ID。
     * @example `gw-77e1153db6e14c0a8b1fae20bcb89ca5`
     */
    "GatewayUniqueId": string;
    /**
     * TLS设定。
     * - TLS模式：mode
     * - 证书ID：certId
     * - CA证书ID：caCertId
     * - CA证书公钥：caCertContent
     * - 服务名称标识：sni
     * @example `{
          "mode": "MUTUAL",
          "certId": "1*****-cn-hangzhou",
          "caCertContent": "123",
          "sni": "ceshi"
    }`
     */
    "TlsSetting"?: string;
    /**
     * FC服务名称，服务来源为“FC 函数计算”时使用。
     * @example `guide`
     */
    "FcServiceName"?: string;
    /**
     * FC服务版本号，服务来源为“FC 函数计算”时使用。
     * @example `LATEST`
     */
    "FcVersion"?: string;
    /**
     * FC服务别名，服务来源为“FC 函数计算”时使用。
     * @example `test-alias`
     */
    "FcAlias"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
