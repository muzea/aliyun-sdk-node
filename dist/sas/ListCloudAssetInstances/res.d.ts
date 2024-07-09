export interface ListCloudAssetInstancesResponse {
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `028CF634-5268-5660-9575-48C9ED6BF880`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `2`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `100`
         */
        PageSize: number;
        /**
         * 云资产总数。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 云资产详细信息列表。
     */
    Instances: {
        /**
         * 资产实例所属区域id。
         * @example `cn-hanghzou`
         */
        RegionId: string;
        /**
         * 资产厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量级资产
         * @example `0`
         */
        Vendor: number;
        /**
         * 资产的类型。取值：
         * - **0**：云服务器 ECS
         * - **1**：负载均衡
         * - **3**：云数据库 RDS
         * - **4**：云数据库 MongoDB 版
         * - **5**：云数据库 Redis 版
         * - **6**：容器镜像服务
         * - **8**：容器服务Kubernetes版
         * - **9**：专有网络VPC
         * - **11**：操作审计
         * - **12**：CDN
         * - **13**：数字证书管理服务（原SSL证书）
         * - **14**：云效
         * - **16**：DDoS防护
         * - **17**：Web应用防火墙
         * - **18**：对象存储
         * - **19**：云原生关系型数据库 PolarDB
         * - **20**：云数据库 PostgreSQL 版
         * - **21**：微服务引擎
         * - **22**：文件存储NAS
         * - **23**：数据安全中心
         * - **24**：弹性公网IP
         * - **25**：云身份服务-EIAM
         * - **26**：PolarDB-X
         * - **27**：Elasticsearch
         * @example `0`
         */
        AssetType: number;
        /**
         * 云产品的子类型。
         * 资产的类型-子类型。取值：
         * - **0**：云服务器 ECS
         *     * **0**:实例
         *     * **1**:磁盘（存储）
         *     * **2**:安全组
         * - **1**：负载均衡
         *     * **0**:负载均衡
         *     * **1**:应用型负载均衡
         * - **3**：云数据库 RDS
         *     * **0**:实例
         * - **4**：云数据库 MongoDB 版
         *     * **0**:实例
         * - **5**：云数据库 Redis 版
         *     * **0**:实例
         * - **6**：容器镜像服务
         *     * **1**:企业版
         *     * **2**:个人版
         * - **8**：容器服务Kubernetes版
         *     * **0**:集群
         * - **9**：专有网络VPC
         *     * **0**:NAT网关
         *     * **1**:EIP
         *     * **2**:VPN
         *     * **3**:FLOW_LOG
         * - **11**：操作审计
         *     * **0**:跟踪
         * - **12**：CDN
         *     * **0**:实例
         * - **13**：数字证书管理服务（原SSL证书）
         *     * **0**:证书
         * - **14**：云效
         *     * **0**:组织
         * - **16**：DDoS防护
         *     * **0**:实例
         * - **17**：Web应用防火墙
         *      * **0**:域名
         * - **18**：对象存储
         *     * **0**:Bucket
         * - **19**：云原生关系型数据库 PolarDB
         *     * **0**:集群
         * - **20**：云数据库 PostgreSQL 版
         *     * **0**:实例
         * - **21**：微服务引擎
         *     * **0**:集群
         * - **22**：文件存储NAS
         *     * **0**:文件系统
         * - **23**：数据安全中心
         *     * **0**:实例
         * - **24**：弹性公网IP
         *     * **0**:任播弹性公网IP
         * - **25**：云身份服务-EIAM
         *     * **0**:实例
         * - **26**：PolarDB-X
         *     * **0**:实例
         * - **27**：Elasticsearch
         *     * **0**:实例
         * @example `0`
         */
        AssetSubType: string;
        /**
         * 云资产实例id。
         * @example `d-uf60vevzkztnflx7cny5`
         */
        InstanceId: string;
        /**
         * 资产的实例名称。
         * @example `yztest-l***`
         */
        InstanceName: string;
        /**
         * 实例创建时间。
         * @example `1607365213000`
         */
        CreatedTime: number;
        /**
         * 实例的公网IP地址。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 云资产是否存在安全告警。取值：
         * - **YES**：存在安全告警
         * - **NO**：不存在安全告警
         * @example `NO`
         */
        AlarmStatus: string;
        /**
         * 云资产是否存在安全风险。取值：
         * - **YES**：存在
         * - **NO**：不存在
         * @example `NO`
         */
        RiskStatus: string;
        /**
         * 云资产类型名称。
         * @example `ECS`
         */
        AssetTypeName: string;
        /**
         * 云资产的子类型名称。
         * @example `SECURITY_GROUP`
         */
        AssetSubTypeName: string;
        /**
         * 云资产的安全信息。
         * @example `{"seriousNum":0,"appNum":0,"baselineMedium":0,"remindNum":0,"imageVulNntf":0,"cveNum":0,"vul":0,"uuid":"yuejia-test","emgNum":0,"weakPWNum":0,"imageMaliciousFileRemind":0,"imageBaselineMedium":0,"laterVulCount":0,"cmsNum":0,"imageMaliciousFileSerious":0,"agentlessMalicious":0,"suspNum":0,"imageBaselineHigh":0,"asapVulCount":0,"imageVulLater":0,"agentlessAll":0,"sysNum":0,"containerLater":0,"containerSuspicious":0,"imageBaselineNum":0,"newSuspicious":0,"nntfVulCount":0,"scaNum":0,"containerNntf":0,"health":0,"trojan":0,"suspicious":0,"imageMaliciousFileSuspicious":0,"containerRemind":0,"baselineLow":0,"imageVulAsap":0,"imageBaselineLow":0,"containerAsap":0,"agentlessBaseline":0,"agentlessVulSca":0,"agentlessVulCve":0,"containerSerious":0,"baselineHigh":0,"account":0,"baselineNum":5}`
         */
        SecurityInfo: string;
    }[];
}
