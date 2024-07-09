export interface DescribeGadInstancesResponse {
    /**
     * 请求ID。
     * @example `76AF0609-4195-5DFC-BC78-3AD76FF872BB`
     */
    RequestId: string;
    /**
     * RDS全球多活数据库集群信息列表。
     */
    GadInstances: {
        /**
         * RDS全球多活数据库集群的ID。
         * @example `gad-rm-bp1npi2j8****`
         */
        GadInstanceName: string;
        /**
         * 集群名称。
         * @example `GadTest`
         */
        Description: string;
        /**
         * 集群状态。取值：
         * * **activation**：运行中。
         * * **creating**：创建中。
         * * **replica_adding**：添加节点中。
         * @example `activation`
         */
        Status: string;
        /**
         * 集群的创建时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-10-21T02:57:08Z`
         */
        CreationTime: string;
        /**
         * 最后一次变更集群的时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-10-21T03:01:20Z`
         */
        ModificationTime: string;
        /**
         * 集群中各节点信息列表。
         */
        GadInstanceMembers: {
            /**
             * 集群中节点的ID。
             * @example `rm-bp1npi2j8****`
             */
            DBInstanceID: string;
            /**
             * 集群中节点的数据库引擎。
             * >当前仅支持**mysql**。
             * @example `mysql`
             */
            Engine: string;
            /**
             * 集群中节点的数据库版本。
             * @example `8.0`
             */
            EngineVersion: string;
            /**
             * 集群中节点所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * RDS全球多活数据库集群中的节点类型。返回值：
             * * **CENTRAL**：中心节点，集群中的唯一主节点，所有单元节点的数据都从该节点同步。
             * * **UNIT**：单元节点，一个集群中可以有10个单元节点，所有单元节点都从中心节点同步数据。
             * @example `CENTRAL`
             */
            Role: string;
            /**
             * 节点状态。取值：
             * * **activation**：运行中。
             * * **creating**：创建中。
             * @example `activation`
             */
            Status: string;
            /**
             * 包含DTS同步信息的JSON数组。
             * >每个单元节点（备节点）都会通过DTS和中心节点（主节点）进行数据同步，该参数中包含了DTS的同步链路ID和请求ID。
             * @example `{\"dtsInstanceId\":\"dtsm9t107c****\",\"dtsRequestId\":\"190F0C6C-4BE6-5676-989B-DBDE6D34CD9C\"}`
             */
            DtsInstance: string;
            /**
             * 资源组ID。
             * @example `rg-acfmy****`
             */
            ResourceGroupId: string;
        }[];
        /**
         * RDS全球多活数据库集群的引擎。
         * >当前仅支持**mysql**。
         * @example `mysql`
         */
        Service: string;
    }[];
}
