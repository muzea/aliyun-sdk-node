export interface ListCheckResultRequest {
    /**
     * 标准ID列表。
     */
    "StandardIds"?: number[];
    /**
     * 条例ID列表。
     */
    "RequirementIds"?: number[];
    /**
     * 检查项的状态列表。多个状态之间使用半角逗号（,）分隔。取值：
     * - **PASS**：通过
     * - **NOT_PASS**：未通过
     * - **CHECKING**：检查中
     * - **NOT_CHECK**：未检查
     * - **WHITELIST**：加白
     */
    "Statuses"?: string[];
    /**
     * 检查项的风险等级。多个风险等级之间使用半角逗号（,）分隔。取值：
     * - **HIGH**：高危
     * - **MEDIUM**：中危
     * - **LOW**：低危
     */
    "RiskLevels"?: string[];
    /**
     * 所属云厂商。取值：
     * - **ALIYUN**：阿里云
     */
    "Vendors"?: string[];
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
     */
    "InstanceTypes"?: string[];
    /**
     * 检查项模糊查询Key。
     * @example `OSS`
     */
    "CheckKey"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `2`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数，最大100。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 需要查询的云产品实例ID。多个ID使用英文逗号（,）隔开。
     */
    "InstanceIds"?: string[];
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 检查项的排序类型。取值：
     * - **RISK_LEVEL**：风险等级
     * - **STATUS**：检查项状态
     */
    "SortTypes"?: string[];
    /**
     * 检查标准所属类型列表。
     */
    "Types"?: string[];
    /**
     * 实例所在的地域的ID。取值：
     * - **cn-hangzhou**：中心
     * - **ap-southeast-1**：新加坡
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 检查项是否支持自定义参数。取值：
     * - **true**：支持
     * - **false**：不支持
     * @example `true`
     */
    "CustomParam"?: boolean;
}
