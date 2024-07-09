export interface GetResourceConfigurationResponse {
    /**
     * 请求ID。
     * @example `F1CE0D52-32DA-531A-87A4-B9A5B68D5D8E`
     */
    RequestId: string;
    /**
     * 资源类型。
     * @example `ACS::VPC::VSwitch`
     */
    ResourceType: string;
    /**
     * 资源创建时间。
     * @example `2021-06-30T09:20:08Z`
     */
    CreateTime: string;
    /**
     * 资源过期时间。
     * @example `2021-07-30T09:20:08Z`
     */
    ExpireTime: string;
    /**
     * 资源组ID。
     * @example `rg-acfmv4k****`
     */
    ResourceGroupId: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-k`
     */
    ZoneId: string;
    /**
     * 阿里云账号ID。
     * @example `151266687691****`
     */
    AccountId: string;
    /**
     * 资源ID。
     * @example `vtb-uf6978gdqbi****`
     */
    ResourceId: string;
    /**
     * 资源名称。
     * @example `group1`
     */
    ResourceName: string;
    /**
     * 资源地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 标签。
     */
    Tags: {
        /**
         * 标签键。
         * @example `test-key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `test-value`
         */
        Value: string;
    }[];
    /**
     * IP地址。
     * > 资源是否返回该参数，由所属的云服务决定。
     */
    IpAddresses: string[];
    /**
     * IP地址属性。
     */
    IpAddressAttributes: {
        /**
         * IP地址。
         * @example `192.168.1.2`
         */
        IpAddress: string;
        /**
         * 网络类型，取值：
         * - **Public**：公网。
         * - **Private**：私网。
         * @example `Public`
         */
        NetworkType: string;
        /**
         * IP地址的版本。
         * @example `Ipv4`
         */
        Version: string;
    }[];
    /**
     * 资源配置详情。
     */
    Configuration: any;
}
