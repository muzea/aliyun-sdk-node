export interface DescribeDomainDetailResponse {
    /**
     * 域名。
     * @example `example.com`
     */
    Domain: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3A85CFCF-05C8-451A-9E41-C0D5E96BA407`
     */
    RequestId: string;
    /**
     * 您网站资产中的漏洞的总数量。
     * @example `2`
     */
    VulCount: number;
    /**
     * 您网站资产中的告警的总数量。
     * @example `2`
     */
    AlarmCount: number;
    /**
     * 域名对应的根域名的名称。
     * @example `example.com`
     */
    RootDomain: string;
    /**
     * 域名相关的资产信息。
     */
    DomainDetailItems: {
        /**
         * 资产实例的UUID。
         * @example `lb-bp1g9dohoyin9cjhn6****`
         */
        Uuid: string;
        /**
         * 资产对应的公网的IP地址。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 资产的名称。
         * @example `iZm5e6w7dzsktt6mz4yimeZ-6****`
         */
        InstanceName: string;
        /**
         * 资产的实例ID。
         * @example `i-m5e6w7dzsktt6mz4***`
         */
        InstanceId: string;
        /**
         * 资产对应的私网的IP地址。
         * @example `1.2.XX.XX`
         */
        IntranetIp: string;
        /**
         * 域名下资产的资产类型。取值包括：
         * - **0**：ECS
         * - **1**：负载均衡
         * - **2**：NAT网关
         * - **3**：RDS数据库
         * - **4**：MongoDB数据库
         * @example `0`
         */
        AssetType: string;
    }[];
}
