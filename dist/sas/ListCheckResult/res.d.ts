export interface ListCheckResultResponse {
    /**
     * 检查项信息列表。
     */
    Checks: {
        /**
         * 检查项策略。
         */
        CheckPolicies: {
            /**
             * 检查项的标准ID。
             * @example `1`
             */
            StandardId: number;
            /**
             * 检查项的标准展示名称。
             * @example `Best security practices`
             */
            StandardShowName: string;
            /**
             * 检查项的条例ID。
             * @example `2`
             */
            RequirementId: number;
            /**
             * 检查项的条例展示名称。
             * @example `Alibaba cloud OSS best security practices`
             */
            RequirementShowName: string;
            /**
             * 检查项的章节ID。
             * @example `3`
             */
            SectionId: number;
            /**
             * 检查项的章节展示名称。
             * @example `Log Audit`
             */
            SectionShowName: string;
        }[];
        /**
         * 检查项的ID。
         * @example `5`
         */
        CheckId: number;
        /**
         * 检查项名称。
         * @example `OSS-PublicReadOpenManifestFileWithoutEncryption`
         */
        CheckShowName: string;
        /**
         * 云厂商值。
         * @example `ALIYUN`
         */
        Vendor: string;
        /**
         * 云厂商名称。
         * @example `Aliyun`
         */
        VendorShowName: string;
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
         * @example `ECS`
         */
        InstanceType: string;
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
         * @example `DISK`
         */
        InstanceSubType: string;
        /**
         * 检查项的风险等级。取值：
         * - **HIGH**：高危
         * - **MEDIUM**：中危
         * - **LOW**：低危
         * @example `HIGH`
         */
        RiskLevel: string;
        /**
         * 检查项的状态。取值：
         * - **PASS**：通过
         * - **NOT_PASS**：未通过
         * - **CHECKING**：检查中
         * - **NOT_CHECK**：未检查
         * - **WHITELIST**：加白
         * @example `PASS`
         */
        Status: string;
        /**
         * 检查任务的ID。
         * @example `64`
         */
        TaskId: string;
        /**
         * 最新检测时间戳，单位为毫秒。
         * @example `1657793398000`
         */
        LastCheckTime: number;
        /**
         * 检查是否依赖TRIAL权限。
         * @example `true`
         */
        TrialPermission: boolean;
        /**
         * 检查项异常状态信息。
         * @example `TIMEOUT`
         */
        StatusMessage: string;
        /**
         * 检查项付费类型。取值：
         * - **0**：付费检查项
         * - **1**：免费检查项
         * @example `1`
         */
        CheckSaleType: number;
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
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `F9B6DD67-B289-5406-B35C-B0F4A217S23`
     */
    RequestId: string;
}
