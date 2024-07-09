export interface ListCheckItemResponse {
    /**
     * 检查项信息列表。
     */
    CheckItems: {
        /**
         * 云产品的资产子类型。取值：
         * - 当**InstanceType**取值为**ECS**时，本参数的取值：
         *     - **INSTANCE**
         *     - **DISK**
         *     - **SECURITY_GROUP**
         * - 当**InstanceType**取值为**ACR**时，本参数的取值：
         *     - **REPOSITORY_ENTERPRISE**
         *     - **REPOSITORY_PERSON**
         * - 当**InstanceType**取值为**RAM**时，本参数的取值：
         *     - **ALIAS**
         *     - **USER**
         *     - **POLICY**
         *     - **GROUP**
         * - 当**InstanceType**取值为**WAF**时，本参数的取值：
         *     - **DOMAIN**
         * - 当**InstanceType**取值为其他时，本参数的取值：
         *     - **INSTANCE**
         * @example `INSTANCE`
         */
        InstanceSubType: string;
        /**
         * 检查项id。
         * @example `21`
         */
        CheckId: number;
        /**
         * 检查项名称。
         * @example `IPv4 Access Control`
         */
        CheckShowName: string;
        /**
         * 云产品的资产类型。取值：
         * - **ECS**：云服务器
         * - **SLB**：负载均衡
         * - **RDS**：RDS数据库
         * - **MONGODB**：MongoDb数据库
         * - **KVSTORE**：Redis数据库
         * - **ACR**：ACR
         * - **CSK**：CSK
         * - **VPC**：VPC
         * - **ACTIONTRAIL**：操作审计
         * - **CDN**：CDN
         * - **CAS**：数字证书管理服务[原SSL证书]
         * - **RDC**：云效
         * - **RAM**：RAM
         * - **DDOS**：分布式拒绝服务
         * - **WAF**：WAF
         * - **OSS**：访问控制
         * - **POLARDB**：POLARDB
         * - **POSTGRESQL**：PostgreSQL
         * - **MSE**：MSE
         * - **NAS**：NAS
         * - **SDDP**：SDDP
         * - **EIP**：EIP
         * @example `API_GATEWAY`
         */
        InstanceType: string;
        /**
         * 检查项的风险等级。取值：
         * - **HIGH**：高危
         * - **MEDIUM**：中危
         * - **LOW**：低危
         * @example `HIGH`
         */
        RiskLevel: string;
        /**
         * 云资产厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量应用服务器
         * @example `0`
         */
        Vendor: string;
        /**
         * 检查项关联章节列表。
         */
        SectionIds: number[];
        /**
         * 检查项描述。
         */
        Description: {
            /**
             * 检查描述属性类型。取值：
             * - **text**：文本
             * @example `text`
             */
            Type: string;
            /**
             * 检查项风险的描述类型为text时的文本内容。
             * @example `Checks whether strict access control policies are configured. Requirements: 1. If no blacklists and whitelist are configured, configure a whitelist first. 2. If a blacklist is configured, find the blacklist in the list of access control policies. We recommend that you do not configure an empty blacklist. 3. If a whitelist is configured, find the whitelist in the list of access control policies. We recommend that you do not configure an empty whitelist. Make sure that the whitelist does not contain 0.0.0.0. You can add the following IP addresses to the whitelist: ${IPList}.`
             */
            Value: string;
        };
        /**
         * 用户自定义检查配置信息列表。
         */
        CustomConfigs: {
            /**
             * 用户自定义检查配置名称。
             * @example `IPList`
             */
            Name: string;
            /**
             * 检查项自定义配置项类型JSON字符串。
             * @example `{\"type\":\"LIST\",\"range\":[1,512],\"listType\":{\"type\":\"STRING\",\"range\":[0,22]}}`
             */
            TypeDefine: string;
            /**
             * 检查项自定义配置项默认值字符串。
             * @example `0`
             */
            DefaultValue: string;
            /**
             * 检查项自定义配置项用户配置字符串。
             * @example `1`
             */
            Value: string;
            /**
             * 用户自定义检查配置展示名称。
             * @example `IP列表`
             */
            ShowName: string;
        }[];
        /**
         * 预估的该检查项将消耗的授权数量。
         * @example `30`
         */
        EstimatedCount: number;
    }[];
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询结果的总数。
         * @example `149`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    RequestId: string;
}
