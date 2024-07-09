export interface GetMultiAccountResourceConfigurationResponse {
    /**
     * 请求ID。
     * @example `B2DCC08B-C12A-5705-879C-5A1450016156`
     */
    RequestId: string;
    /**
     * 资源类型。
     * @example `ACS::VPC::RouteTable`
     */
    ResourceType: string;
    /**
     * 资源创建时间。
     * @example `2023-02-14T03:12:11Z`
     */
    CreateTime: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzy6d****`
     */
    ResourceGroupId: string;
    /**
     * 可用区ID。
     * @example `cn-shanghai-a`
     */
    ZoneId: string;
    /**
     * 资源目录管理账号ID或成员ID。
     * @example `1619302****`
     */
    AccountId: string;
    /**
     * 资源ID。
     * @example `m-eb3hji****`
     */
    ResourceId: string;
    /**
     * 资源名称。
     * @example `test_resource`
     */
    ResourceName: string;
    /**
     * 资源地域ID。
     * @example `cn-shanghai`
     */
    RegionId: string;
    /**
     * 资源标签。
     */
    Tags: {
        /**
         * 标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * IP地址。
     * > 资源是否返回该参数，由所属的云服务决定。
     */
    IpAddresses: string[];
    /**
     * 资源配置详情。
     */
    Configuration: any;
    /**
     * IP地址属性。
     */
    IpAddressAttributes: {
        /**
         * IP地址。
         * @example `172.27.199.42`
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
     * 资源过期时间。
     * @example `2023-09-18T07:04:21Z`
     */
    ExpireTime: string;
}
