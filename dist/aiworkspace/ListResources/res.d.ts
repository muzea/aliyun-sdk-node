export interface ListResourcesResponse {
    /**
     * 请求ID。
     * @example `1e195c5116124202371861018d5bde`
     */
    RequestId: string;
    /**
     * 资源列表。
     */
    Resources: {
        /**
         * 资源ID。
         * @example `123`
         */
        Id: string;
        /**
         * 资源名。
         * @example `ResourceName`
         */
        Name: string;
        /**
         * **该字段已废弃，将会下线，请使用ResourceType字段**
         * @example `MaxCompute`
         */
        ProductType: string;
        /**
         * 环境类型，可能值：
         * -  dev：开发环境。
         * - prod：生产环境。
         * @example `prod`
         */
        EnvType: string;
        /**
         * 所属的工作空间ID。
         * @example `123`
         */
        WorkspaceId: string;
        /**
         * 是否为默认资源，每种资源类型都有一个默认的资源。可能值：
         * - true：是默认资源。
         * - false：不是默认资源。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 配额列表。
         */
        Quotas: {
            /**
             * 配额名称。
             * @example `QuotaName`
             */
            Name: string;
            /**
             * 产品名，可能值：
             * - PAI_isolate：pai预付费资源组（pai cpu）。
             * - PAI_share：pai后付费资源组（pai gpu）。
             * - MaxCompute_share：MaxCompute后付费资源组。
             * - MaxCompute_isolate：MaxCompute预付费资源组。
             * - DataWorks_isolate：DataWorks预付费资源组。
             * - DataWorks_share：DataWorks后付费资源组。
             * - DLC_share：DLC后付费资源组。
             * @example `MaxCompute_isolate`
             */
            ProductCode: string;
            /**
             * 资源配额类型， 可能值：
             * - PAI
             * - MaxCompute
             * - DLC
             * @example `MaxCompute`
             */
            QuotaType: string;
            /**
             * 付费模式，可能值：
             * - isolate：预付费。
             * - share：后付费。
             * @example `isolate`
             */
            Mode: string;
            /**
             * 规格描述列表。
             * @example `{\"cu\":\"11500\",\"minCu\":\"2300\",\"parentId\":\"0\"}`
             */
            Specs: {
                /**
                 * 规格名字。
                 * @example `cu`
                 */
                Name: string;
                /**
                 * 规格描述。
                 * @example `11500`
                 */
                Value: string;
            }[];
            /**
             * 卡类型，可能值：
             * - CPU
             * - GPU
             * @example `CPU`
             */
            CardType: string;
            /**
             * 资源配额ID。
             * @example `123`
             */
            Id: string;
            /**
             * 资源配额别名。
             * @example `默认后付费Quota`
             */
            DisplayName: string;
        }[];
        /**
         * 规格说明。
         * @example `对于MaxCompute {"Endpoint": "odps.alibaba-inc.com", "Project": "mignshi"}`
         */
        Spec: any;
        /**
         * 资源分组名，主账户内唯一。
         * @example `groupName`
         */
        GroupName: string;
        /**
         * 创建UTC时间，时间格式为ISO8601。
         * @example `2021-01-21T17:12:35.232Z`
         */
        GmtCreateTime: string;
        /**
         * 该字段无效，已废弃。
         */
        Executor: {
            /**
             * 该字段无效，已废弃。
             * @example `110973******7793`
             */
            OwnerId: string;
        };
        /**
         * 加密信息，目前只对MaxCompute资源有效。
         */
        Encryption: {
            /**
             * 是否加密。
             * @example `false`
             */
            Enabled: boolean;
            /**
             * 加密算法。
             * @example `AESCTR`
             */
            Algorithm: string;
            /**
             * 加密主键。
             * @example `DEFAULT`
             */
            Key: string;
        };
        /**
         * 资源类型，可能值：
         * - MaxCompute：大数据计算服务资源。
         * - DLC：云原生资源。
         * - FLINK：Flink资源。
         * @example `MaxCompute`
         */
        ResourceType: string;
        /**
         * 标签集合。
         */
        Labels: {
            /**
             * 标签的Key。
             * @example `system.supported.dsw`
             */
            Key: string;
            /**
             * 标签的Value。
             * @example `true`
             */
            Value: string;
        }[];
    }[];
    /**
     * 符合过滤条件的资源数量。
     * @example `2`
     */
    TotalCount: number;
}
