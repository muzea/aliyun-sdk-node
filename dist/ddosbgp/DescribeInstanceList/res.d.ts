export interface DescribeInstanceListResponse {
    /**
     * 查询到的DDoS原生防护实例的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `381D5D33-BB8F-395F-8EE4-AE3BB4B523C4`
     */
    RequestId: string;
    /**
     * DDoS原生防护实例的详情列表。
     */
    InstanceList: {
        /**
         * 实例的状态。取值：
         * - **1**：表示正常。
         * - **2**：表示已过期。
         * - **3**：表示已释放。
         * @example `1`
         */
        Status: string;
        /**
         * 实例防护的IP资产的协议类型。取值：
         * - **IPv4**：表示IPv4协议。
         * - **IPv6**：表示IPv6协议。
         * @example `IPv4`
         */
        IpType: string;
        /**
         * 实例是否已开启自动续费。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        AutoRenewal: boolean;
        /**
         * 实例的备注。
         * @example `test`
         */
        Remark: string;
        /**
         * 实例的到期时间。使用时间戳表示，单位：毫秒。
         * @example `1640275200000`
         */
        ExpireTime: number;
        /**
         * 实例关联的云产品类型。默认不返回该参数，只有当DDoS原生防护实例通过其他云产品创建时，才会返回对应云产品的代码。
         * 取值：
         * - **gamebox**：表示该DDoS原生防护实例通过游戏安全盒服务创建。
         * - **eip**：表示该DDoS原生防护实例通过DDoS防护（增强版）EIP实例创建。
         * @example `gamebox`
         */
        Product: string;
        /**
         * 实例的购买时间。使用时间戳表示，单位：毫秒。
         * @example `1592886047000`
         */
        GmtCreate: number;
        /**
         * 实例ID。
         * @example `ddosbgp-cn-oew1pjrk****`
         */
        InstanceId: string;
        /**
         * 实例的防护套餐类型。取值：
         * - **0**：表示专业版。
         * - **1**：表示企业版。
         * @example `1`
         */
        InstanceType: string;
        /**
         * 实例防护的公网IP资产中，处于黑洞状态的IP的数量。
         * > 您可以调用[DeleteBlackhole](~~118692~~)为单个受保护IP解除黑洞状态。
         * @example `0`
         */
        BlackholdingCount: string;
        /**
         * 实例的资产覆盖类型。
         * -  **1**：表示支持全球多个地域的公网IP资产。
         * - **2**：表示支持中国内地多个地域的公网IP资产。
         * - **3**：表示支持非中国内地多个地域的公网IP资产。
         * - **4**：表示支持全球一个地域的公网IP资产。
         */
        CoverageType: number;
        /**
         * 实例的商品类型。
         * -  **ddos_ddosorigin_public_cn**：表示DDoS原生防护2.0（后付费）中国站。
         * - **ddos_ddosorigin_public_intl**：表示DDoS原生防护2.0（后付费）国际站。
         */
        CommodityType: string;
        AutoProtectCondition: {
            Events: string[];
        };
    }[];
}
