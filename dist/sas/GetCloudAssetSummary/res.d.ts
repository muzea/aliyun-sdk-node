export interface GetCloudAssetSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F5CF78A7-30AA-59DB-847F-13EE3AE7****`
     */
    RequestId: string;
    /**
     * 云资产概要信息。
     */
    GroupedFields: {
        /**
         * 云产品统计信息列表。
         */
        CloudAssetSummaryMetas: {
            /**
             * 云产品的类型。取值：
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
             * @example `16`
             */
            AssetType: number;
            /**
             * 云产品的子类型。
             * @example `0`
             */
            AssetSubType: number;
            /**
             * 此类型云产品实例总数量。
             * @example `16`
             */
            InstanceCount: number;
            /**
             * 此类型云产品存在风险的实例总数量。
             * @example `5`
             */
            InstanceRiskCount: number;
            /**
             * 服务器厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量级资产
             * @example `3`
             */
            Vendor: number;
        }[];
        /**
         * 云产品实例总数量。
         * @example `919`
         */
        InstanceCountTotal: number;
        /**
         * 存在风险的云产品实例总数量。
         * @example `544`
         */
        InstanceRiskCountTotal: number;
    };
}
