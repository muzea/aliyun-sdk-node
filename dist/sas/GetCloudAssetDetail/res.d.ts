export interface GetCloudAssetDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CB45CAED-31C3-517A-8619-10F632D3****`
     */
    RequestId: string;
    /**
     * 云资产详细信息列表。
     */
    Instances: {
        /**
         * 云资产所在地域。
         * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
         * @example `cn-hanghzou`
         */
        RegionId: string;
        /**
         * 云资产厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量应用服务器
         * @example `0`
         */
        Vendor: number;
        /**
         * 云资产的类型。取值：
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
         * - **15**：访问控制
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
         * @example `3`
         */
        AssetType: number;
        /**
         * 云产品的子类型。
         * @example `0`
         */
        AssetSubType: number;
        /**
         * 云资产的实例ID。
         * @example `rm-uf6t6u05n6g48****`
         */
        InstanceId: string;
        /**
         * 云资产的实例名称。
         * @example `yztest-l***`
         */
        InstanceName: string;
        /**
         * 云资产实例创建时间。时间戳形式展示。
         * @example `1607365213000`
         */
        CreatedTime: number;
        /**
         * 实例的公网IP地址。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 当前云资产是否存在安全告警。取值：
         * - **YES**：存在安全告警
         * - **NO**：不存在安全告警
         * @example `NO`
         */
        AlarmStatus: string;
        /**
         * 当前云资产是否存在安全风险。取值：
         * - **YES**：存在
         * - **NO**：不存在
         * @example `NO`
         */
        RiskStatus: string;
        /**
         * 云资产类型名称。
         * @example `RDS`
         */
        AssetTypeName: string;
        /**
         * 云资产的子类型名称。
         * @example `INSTANCE`
         */
        AssetSubTypeName: string;
        /**
         * 云资产的安全信息。
         * @example `{\"seriousNum\":0,\"appNum\":0,\"baselineMedium\":0,\"remindNum\":0,\"imageVulNntf\":0,\"cveNum\":0,\"vul\":0,\"uuid\":\"rm-uf6t6u05n6g485o70\",\"emgNum\":0,\"weakPWNum\":0,\"imageMaliciousFileRemind\":0,\"imageBaselineMedium\":0,\"laterVulCount\":0,\"cmsNum\":0,\"imageMaliciousFileSerious\":0,\"agentlessMalicious\":0,\"suspNum\":0,\"imageBaselineHigh\":0,\"asapVulCount\":0,\"imageVulLater\":0,\"agentlessAll\":0,\"sysNum\":0,\"containerLater\":0,\"containerSuspicious\":0,\"imageBaselineNum\":0,\"newSuspicious\":0,\"nntfVulCount\":0,\"scaNum\":0,\"containerNntf\":0,\"health\":0,\"trojan\":0,\"suspicious\":0,\"imageMaliciousFileSuspicious\":0,\"containerRemind\":0,\"baselineLow\":0,\"imageVulAsap\":0,\"imageBaselineLow\":0,\"containerAsap\":0,\"agentlessBaseline\":0,\"agentlessVulSca\":0,\"agentlessVulCve\":0,\"containerSerious\":0,\"baselineHigh\":0,\"account\":0,\"baselineNum\":6}`
         */
        SecurityInfo: string;
        /**
         * 云资产的明细地址。
         * @example `https://rdsnext.console.aliyun.com/detail/rm-uf6t6u05n6g48****​/basicInfo?region=cn-shanghai`
         */
        DetailLink: string;
    }[];
    /**
     * 查询到的云资产列表内的实例数量。
     * @example `1`
     */
    Count: number;
}
