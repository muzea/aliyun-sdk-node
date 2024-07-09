export interface DescribeDBClustersResponse {
    /**
     * 总记录数。
     * @example `16`
     */
    TotalRecordCount: number;
    /**
     * 本页集群数量。
     * @example `5`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `9B7BFB11-C077-4FE3-B051-F69CEB******`
     */
    RequestId: string;
    /**
     * 页数。
     * @example `12`
     */
    PageNumber: number;
    Items: {
        /**
         * 集群列表。
         */
        DBCluster: {
            /**
             * 专有网络ID。
             * @example `vpc-****************`
             */
            VpcId: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-***************`
             */
            VswitchId: string;
            /**
             * 集群到期时间。
             * > 仅付费方式为**Prepaid**（包年包月）的集群会返回具体参数值，**Postpaid**（按量付费）集群则返回空值。
             * @example `2020-11-14T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 集群是否到期。取值范围：
             * - **true**
             * - **false**
             * >仅付费方式为**Prepaid**（包年包月）的集群支持返该参数。
             * @example `false`
             */
            Expired: string;
            /**
             * 节点数量。
             * @example `2`
             */
            DBNodeNumber: number;
            /**
             * 创建时间。
             * @example `2020-08-14T05:58:42Z`
             */
            CreateTime: string;
            /**
             * 付费类型。取值范围：
             * - **Postpaid**：按量付费。
             * - **Prepaid**：包年包月（预付费）。
             * @example `Prepaid`
             */
            PayType: string;
            /**
             * 存储计费类型。取值范围：
             * - **Postpaid**：按容量计费（按量计费）。
             * - **Prepaid**：按空间计费（包年包月）。
             * @example `Prepaid`
             */
            StoragePayType: string;
            /**
             * Serverless类型。返回**AgileServerless**表示当前集群是Serverless集群，返回空值表示当前集群是普通集群。
             * @example `AgileServerless`
             */
            ServerlessType: string;
            /**
             * 集群是否开启了多可用区数据强一致。取值范围：
             * - **ON**：表示开启了多可用区数据强一致，适用于标准版3AZ场景。
             * - **OFF**：表示未开启多可用区数据强一致。
             * @example `ON`
             */
            StrictConsistency: string;
            /**
             * 节点规格。
             * @example `polar.mysql.x4.large`
             */
            DBNodeClass: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `MySQL`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `5.6`
                     */
                    Value: string;
                }[];
            };
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            DBType: string;
            /**
             * 集群的锁定状态，取值范围如下：
             * - **Unlock**：正常。
             * - **ManualLock**：手动触发锁定。
             * - **LockByExpiration**：集群过期自动锁定。
             * @example `Unlock`
             */
            LockMode: string;
            DBNodes: {
                /**
                 * 节点列表。
                 */
                DBNode: {
                    /**
                     * 节点规格。
                     * @example `polar.mysql.x4.large`
                     */
                    DBNodeClass: string;
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-i`
                     */
                    ZoneId: string;
                    /**
                     * 节点角色，取值范围如下：
                     * - **Writer**：主节点。
                     * - **Reader**：只读节点。
                     * - **ColumnReader**：列存只读节点。
                     * - **AI**：AI节点。
                     * @example `Reader`
                     */
                    DBNodeRole: string;
                    /**
                     * 节点ID。
                     * @example `pi-****************`
                     */
                    DBNodeId: string;
                    /**
                     * 地域ID。
                     * @example `cn-hangzhou`
                     */
                    RegionId: string;
                    /**
                     * 当前节点是否开启了Serverless功能。
                     * - 返回**ON**表示开启了Serverless功能。
                     * - 返回空值表示没有开启Serverless功能。
                     * @example `ON`
                     */
                    Serverless: string;
                    /**
                     * 是否开启列存索引。取值范围如下：
                     * - **ON**：开启
                     * - **OFF**：关闭
                     * @example `OFF`
                     */
                    ImciSwitch: string;
                    /**
                     * 是否开启热备。取值范围如下：
                     * - **ON**：开启
                     * - **OFF**：关闭
                     * @example `OFF`
                     */
                    HotReplicaMode: string;
                }[];
            };
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 集群删除的保护状态，取值范围如下：
             * *  **0**：未锁定。
             * * **1**：锁定。
             * > 锁定状态时，不可以删除集群。
             * @example `0`
             */
            DeletionLock: number;
            /**
             * 数据库版本。
             * @example `5.6`
             */
            DBVersion: string;
            /**
             * 集群ID。
             * @example `pc-****************`
             */
            DBClusterId: string;
            /**
             * 集群状态。
             * @example `Running`
             */
            DBClusterStatus: string;
            /**
             * 资源组ID。
             * @example `rg-************`
             */
            ResourceGroupId: string;
            /**
             * 集群已经使用的存储用量，单位为Byte。
             * @example `3009413120`
             */
            StorageUsed: number;
            /**
             * 按空间计费（包年包月）的存储空间。单位：Byte。
             * @example `50`
             */
            StorageSpace: number;
            /**
             * 集群的网络类型。
             * @example `VPC`
             */
            DBClusterNetworkType: string;
            /**
             * 集群描述。
             * @example `GDN-1`
             */
            DBClusterDescription: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            /**
             * 集群引擎。
             * @example `POLARDB`
             */
            Engine: string;
            /**
             * 集群系列，目前支持如下系列：
             * - **Normal**：集群版
             * - **Basic**：单节点
             * - **Archive**：高压缩引擎（X-Engine）
             * - **NormalMultimaster**：多主集群（库表）
             * @example `Normal`
             */
            Category: string;
            /**
             * ai 节点信息状态。取值范围如下：
             *
             * - SearchNode：搜索节点
             * - DLNode：ai节点
             * @example `SearchNode`
             */
            AiType: string;
            /**
             * CPU核数。单位：个。
             * @example `1`
             */
            CpuCores: string;
            /**
             * 节点内存大小，单位：MB。
             * @example `2048`
             */
            MemorySize: string;
            /**
             * 远端内存大小，单位：MB。
             * @example `3612`
             */
            RemoteMemorySize: string;
            /**
             * 计算节点的规格类型，取值范围如下：
             * * **Exclusive**：独享规格
             * * **General**：通用规格
             * @example `Exclusive`
             */
            SubCategory: string;
            /**
             * 企业版存储类型取值如下：
             * * **HighPerformance**：对应PSL5
             * * **Standard**：对应PSL4
             * 标准版存储类型取值如下：
             * * **essdpl0**
             * * **essdpl1**
             * * **essdpl2**
             * * **essdpl3**
             * * **essdautopl**
             * @example `essdautopl`
             */
            StorageType: string;
        }[];
    };
}
