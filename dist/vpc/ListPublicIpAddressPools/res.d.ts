export interface ListPublicIpAddressPoolsResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * IP地址池的实例列表。
     */
    PublicIpAddressPoolList: {
        /**
         * IP地址池的实例ID。
         * @example `pippool-6wetvn6fumkgycssx****`
         */
        PublicIpAddressPoolId: string;
        /**
         * 要查询的IP地址池所在的地域ID。
         * @example `cn-chengdu`
         */
        RegionId: string;
        /**
         * 创建时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2022-05-10T01:37:38Z`
         */
        CreationTime: string;
        /**
         * 线路类型。
         * - **BGP**：BGP（多线）线路。
         * - **BGP_PRO**：BGP（多线）\_精品线路。
         * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
         * 如果您是单线带宽的白名单用户，返回类型还可能为：
         * -  **ChinaTelecom**：中国电信
         * - **ChinaUnicom**：中国联通
         * - **ChinaMobile**：中国移动
         * - **ChinaTelecom_L2**：中国电信L2
         * - **ChinaUnicom_L2**：中国联通L2
         * - **ChinaMobile_L2**：中国移动L2
         * 如果您是杭州金融云用户，返回**BGP_FinanceCloud**。
         * @example `BGP`
         */
        Isp: string;
        /**
         * IP地址池实例的名称。
         * @example `AddressPoolName`
         */
        Name: string;
        /**
         * IP地址池实例状态。
         * - **Created**：可用。
         * - **Deleting**：删除中。
         * - **Modifying**：修改中。
         * @example `Created`
         */
        Status: string;
        /**
         * IP地址池实例的描述。
         * @example `AddressPoolDescription`
         */
        Description: string;
        /**
         * 公网IP地址池可用IP地址总数。
         * @example `100`
         */
        TotalIpNum: number;
        /**
         * 公网IP地址池已用IP地址数。
         * @example `20`
         */
        UsedIpNum: number;
        /**
         * 是否还有空闲的IP地址。
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        IpAddressRemaining: boolean;
        /**
         * 用户的类型。取值：
         * - **admin**：管理员，表示可以删除、修改、查询IP地址池以及为IP地址池分配弹性公网IP（Elastic IP Address，简称EIP）等操作。
         * - **user**：普通用户，表示只能为IP地址池分配EIP以及查询IP地址池，但是无法修改以及删除IP地址池。
         * @example `admin`
         */
        UserType: boolean;
        /**
         * IP地址池所属的阿里云账号（主账号）。
         * @example `121012345612*****`
         */
        OwnerId: number;
        /**
         * IP地址池的共享类型。
         * - **Shared**：表示该IP地址池为共享的IP地址池。
         * - 空：表示该IP地址池不是共享的IP地址池。
         * @example `Shared`
         */
        ShareType: string;
        /**
         * IP地址池所属的资源组ID。
         * @example `rg-acfmxazb4pcdvf****`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceDept`
             */
            Value: string;
        }[];
        /**
         * IP地址池的业务类型。
         * - **CloudBox**：云盒。仅云盒用户支持该类型。
         * - **Default**（默认值）：默认，表示非特殊类型。
         * @example `CloudBox`
         */
        BizType: string;
        /**
         * IP地址池的可用区。
         * 仅当IP地址池业务类型为云盒时，返回该参数。
         */
        Zones: string[];
        /**
         * 安全防护级别。
         * - 配置为空时，默认为DDoS防护（基础版）。
         * - 配置为**AntiDDoS_Enhanced**时，表示DDoS防护（增强版）。
         */
        SecurityProtectionTypes: string[];
        /**
         * IP地址池实例的业务状态。
         * - **Normal**：正常。
         * - **FinancialLocked**：被锁定。
         * @example `Normal`
         */
        BusinessStatus: string;
    }[];
}
