export interface AddPrivateRegistryRequest {
    /**
     * 私有镜像仓库类型。 取值：
     * - **harbor**：harbor环境
     * - **quay**：quay环境
     * @example `harbor`
     */
    "RegistryType": string;
    /**
     * 镜像仓版本。取值：
     * - **V1**：1.0版本
     * - **V2**：2.0版本
     * @example `V2`
     */
    "RegistryVersion": string;
    /**
     * 协议类型。取值：
     * - **1**：http
     * - **2**：https
     * @example `2`
     */
    "ProtocolType": number;
    /**
     * 网络类型。取值：
     * - **1**：公网
     * - **2**：vpc
     * @example `2`
     */
    "NetType": number;
    /**
     * VPC的实例ID。
     * @example `vpc-wz9hs3e5*******908kd`
     */
    "VpcId"?: string;
    /**
     * 仓库IP地址。
     * @example `114.55.**.**`
     */
    "RegistryHostIp": string;
    /**
     * 仓库域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 镜像仓库用户名
     * @example `xxxxx`
     */
    "UserName": string;
    /**
     * 密码。
     * @example `******`
     */
    "Password": string;
    /**
     * 地域ID。
     * >您可以调用[ListImageRegistryRegion](~~ListImageRegistryRegion~~)接口获取支持的地域ID。
     * @example `cn-hangzhou`
     */
    "RegistryRegionId": string;
    /**
     * 每小时扫描的镜像数。
     * @example `10`
     */
    "TransPerHour"?: number;
    /**
     * 镜像仓库附加参数，使用**quay**时必填。包含：
     * - **namespace**：命名空间
     * - **authToken**：授权token
     * @example `[{"namespace":"aa","authToken":"aa"}]`
     */
    "ExtraParam"?: string;
    /**
     * 端口号。
     * @example `80`
     */
    "Port"?: number;
}
