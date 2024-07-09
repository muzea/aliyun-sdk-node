export interface AddPrivateRegistryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F8B6F758-BCD4-597A-8A2C-DA5A552C****`
     */
    RequestId: string;
    /**
     * 处理结果。
     */
    Data: {
        /**
         * VPC的实例ID。
         * @example `vpc-2vchkxmf2j9yjt3x2****`
         */
        VpcId: string;
        /**
         * Token值。
         * @example `3c3c602c-fa1f-4bc0-992f-b4b2cac7****`
         */
        Token: string;
        /**
         * 每小时扫描任务数。
         * @example `10`
         */
        TransPerHour: number;
        /**
         * 用户ID。
         * @example `1766185894104***`
         */
        AliUid: number;
        /**
         * 镜像仓库类型。取值：
         * - **harbor**：harbor环境
         * - **quay**：quay环境
         * @example `harbor`
         */
        RegistryType: string;
        /**
         * 仓库域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 仓库地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 密码。
         * @example `***********`
         */
        Password: string;
        /**
         * 网络类型。取值：
         * - **1**：公网
         * - **2**：vpc
         * @example `2`
         */
        NetType: number;
        /**
         * 镜像仓版本，默认值"-"。取值：
         * - **\-**：默认
         * - **V1**：1.0版本
         * - **V2**：2.0版本
         * @example `V2`
         */
        RegistryVersion: string;
        /**
         * 协议类型。取值：
         * - **1**：http
         * - **2**：https
         * @example `2`
         */
        ProtocolType: number;
        /**
         * 仓库IP地址。
         * @example `114.55.**.**`
         */
        RegistryHostIp: string;
        /**
         * 用户名。
         * @example `******`
         */
        UserName: string;
        /**
         * 唯一ID。
         * @example `273698***`
         */
        Id: number;
    };
}
