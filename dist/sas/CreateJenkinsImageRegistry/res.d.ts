export interface CreateJenkinsImageRegistryResponse {
    /**
     * 仓库创建结果。
     */
    Data: {
        /**
         * 唯一ID。
         * @example `443496`
         */
        Id: number;
        /**
         * 创建时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2022-10-16 18:17:16`
         */
        GmtCreate: string;
        /**
         * 更新时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2022-11-21 10:40:01`
         */
        GmtModified: string;
        /**
         * 镜像仓库别名。
         * @example `fanyi`
         */
        RegistryName: string;
        /**
         * 镜像仓库类型。取值：
         * - **CI/CD**：jenkins环境
         * @example `CI/CD`
         */
        RegistryType: string;
        /**
         * 协议类型。取值：
         * - **1**：http
         * - **2**：https
         * @example `1`
         */
        ProtocolType: number;
        /**
         * 网络类型。取值：
         * - **1**：公网
         * - **2**：vpc
         * @example `1`
         */
        NetType: number;
        /**
         * VPC的实例ID。
         * @example `vpc-2vchkxmf2j9yjt3x2****`
         */
        VpcId: string;
        /**
         * 仓库IP地址。
         * @example `1.13.XXX.XXX`
         */
        RegistryHostIp: string;
        /**
         * 仓库域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 用户名。
         * @example `RegistryUser`
         */
        UserName: string;
        /**
         * 密码。
         * @example `Harbor******`
         */
        Password: string;
        /**
         * 仓库地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 用户鉴权令牌。
         * @example `3c3c602c-fa1f-4bc0-992f-b4b2cac7****`
         */
        Token: string;
        /**
         * 白名单。
         * @example `192.168.XXX.XXX`
         */
        WhiteList: string;
        /**
         * 黑名单。
         * @example `61.9.XXX.XXX`
         */
        BlackList: string;
        /**
         * 每小时扫描任务数。
         * @example `30`
         */
        TransPerHour: number;
        /**
         * 资产保存天数。
         * @example `30`
         */
        PersistenceDay: number;
    };
    /**
     * 本次请求的ID。
     * @example `1AF1E723-53F1-55BF-A4B2-15CB7A32****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 创建花费的时间，单位为秒。
     * @example `1`
     */
    TimeCost: number;
}
