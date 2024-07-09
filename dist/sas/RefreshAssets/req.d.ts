export interface RefreshAssetsRequest {
    /**
     * 同步的资产类型。默认**ecs**，取值：
     * - **cloud_product**：云产品
     * - **ecs**：服务器
     * - **container_image**：容器镜像
     * @example `cloud_product`
     */
    "AssetType"?: string;
    /**
     * 云产品类型。取值：
     * - **0**：云服务器
     * - **1**：负载均衡
     * - **3**：云数据库 RDS
     * - **4**：云数据库 MongoDB 版
     * - **5**：云数据库 Redis 版
     * - **6**：容器镜像服务
     * - **8**：容器服务Kubernetes版
     * - **9**：专有网络VPC
     * - **11**：操作审计
     * - **12**：CDN
     * - **13**：数字证书管理服务（原SSL证书
     * - **14**：云效
     * - **15**：访问控制
     * - **16**：DDoS防护
     * - **17**：Web应用防火墙
     * - **18**：对象存储
     * - **19**：云原生关系型数据库 PolarDB
     * - **20**：云数据库 PostgreSQL
     * - **21**：服务引擎
     * - **22**：文件存储NAS
     * - **23**：数据安全中心
     * - **24**：弹性公网IP
     * @example `0`
     */
    "CloudAssetType"?: number;
    /**
     * 云产品子类型。
     * > 取值参考以下列表。
     * @example `0`
     */
    "CloudAssetSubType"?: number;
    /**
     * 服务器厂商。取值：
     * - **0**：阿里云资产
     * - **1**：云外资产
     * - **2**：IDC资产
     * - **3**、**4**、**5**、**7**：其它云资产
     * - **8**：轻量级资产
     * @example `0`
     */
    "Vendor"?: number;
}
