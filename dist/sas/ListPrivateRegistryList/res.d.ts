export interface ListPrivateRegistryListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578AB****`
     */
    RequestId: string;
    /**
     * 镜像仓列表信息。
     */
    ImageRegistryInfos: {
        /**
         * VPC实例的ID。
         * @example `vpc-bp12897gqrex01zn0****`
         */
        VpcId: string;
        /**
         * 用户鉴权令牌。
         * @example `0da12bce-cc36-4c48-b3e6-2215fc3a****`
         */
        Token: string;
        /**
         * 网络IP白名单。
         * @example `100.104.XXX.XXX`
         */
        WhiteList: string;
        /**
         * 用户的UID。
         * @example `1766185894******`
         */
        AliUid: number;
        /**
         * 镜像仓库的类型。取值：
         * - **acr**：acr。
         * - **harbor**：harbor。
         * - **quay**：quay。
         * - **CI/CD**：CICD仓类型。
         * @example `harbor`
         */
        RegistryType: string;
        /**
         * 仓库域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 服务器地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像仓密码。
         * @example `Harbor******`
         */
        Password: string;
        /**
         * 网络类型。取值：
         * - **1**：公网
         * - **2**：vpc
         * @example `1`
         */
        NetType: number;
        /**
         * 镜像仓版本。取值：
         * - **V1**：1.0版本
         * - **V2**：2.0版本
         * @example `V1`
         */
        RegistryVersion: string;
        /**
         * 协议类型。取值：
         * - **1**：http
         * - **2**：https
         * @example `1`
         */
        ProtocolType: number;
        /**
         * 镜像仓IP地址。
         * @example `114.55.XXX.XXX`
         */
        RegistryHostIp: string;
        /**
         * 镜像仓用户名。
         * @example `RegistryUser`
         */
        UserName: string;
        /**
         * 镜像仓唯一ID。
         * @example `66485`
         */
        Id: number;
        /**
         * 镜像仓别名。
         * @example `test1`
         */
        RegistryName: string;
        /**
         * 资产保存天数。
         * @example `90`
         */
        PersistenceDay: number;
        /**
         * Jenkins环境信息。
         * @example `JenkinsInfo`
         */
        JenkinsEnv: string;
        /**
         * 每小时扫描任务数。
         * @example `30`
         */
        TransPerHour: number;
    }[];
}
