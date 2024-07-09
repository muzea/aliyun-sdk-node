export interface CreateApplicationRequest {
    /**
     * 应用所属的区域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * MSE命名空间名字。
     * @example `prod`
     */
    "Namespace": string;
    /**
     * 应用名。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 应用的部署方式，ACK表示阿里云容器服务K8s。
     * @example `ACK`
     */
    "Source"?: string;
    /**
     * 应用的编程语言。
     * @example `JAVA`
     */
    "Language"?: string;
    /**
     * 是否开启Sentinel。
     * @example `true`
     */
    "SentinelEnable"?: string;
    /**
     * 是否开始Switch。
     * @example `true`
     */
    "SwitchEnable"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
