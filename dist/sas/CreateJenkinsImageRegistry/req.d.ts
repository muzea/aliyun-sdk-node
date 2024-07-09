export interface CreateJenkinsImageRegistryRequest {
    /**
     * 镜像仓别名。
     * @example `testRepo`
     */
    "RegistryName"?: string;
    /**
     * 镜像仓库类型。取值：
     * - **CI/CD**：jenkins环境
     * @example `CI/CD`
     */
    "RegistryType"?: string;
    /**
     * 镜像仓版本，默认值"-"。取值：
     * - **\-**：默认
     * - **V1**：1.0版本
     * - **V2**：2.0版本
     * @example `V1`
     */
    "RegistryVersion"?: string;
    /**
     * 协议类型。取值：
     * - **1**：http
     * - **2**：https
     * @example `1`
     */
    "ProtocolType"?: number;
    /**
     * 网络类型。取值：
     * - **1**：公网
     * - **2**：vpc
     * @example `1`
     */
    "NetType"?: number;
    /**
     * VPC的实例ID。
     * @example `vpc-2ze4aoqgeu51ydfb8****`
     */
    "VpcId"?: string;
    /**
     * 仓库IP地址。
     * @example `114.55.XXX.XXX`
     */
    "RegistryHostIp"?: string;
    /**
     * 仓库域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 用户名。
     * @example `RegistryUser`
     */
    "UserName"?: string;
    /**
     * 密码。
     * @example `Harbor********`
     */
    "Password"?: string;
    /**
     * 仓库地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 网络IP白名单。
     * @example `192.168.XXX.XXX`
     */
    "WhiteList"?: string;
    /**
     * 每小时扫描的镜像数。
     * @example `30`
     */
    "TransPerHour"?: number;
    /**
     * 镜像仓库附加参数。包含：
     * - **namespace**：命名空间
     * - **authToken**：授权token
     * @example `[{\"namespace\":\"aa\",\"authToken\":\"aa\"}]`
     */
    "ExtraParam"?: string;
    /**
     * 资产有效天数。
     * @example `30`
     */
    "PersistenceDay"?: number;
    /**
     * 访问源的IP地址。
     * @example `41.121.XXX.XXX`
     */
    "SourceIp"?: string;
}
