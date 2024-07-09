export interface DescribeSDGsResponse {
    /**
     * 请求ID。
     * @example `3703C4AC-9396-458C-8F25-1D701334D309`
     */
    RequestId: string;
    /**
     * SDG信息列表。
     */
    SDGs: {
        /**
         * 可用节点列表。
         */
        AvaliableRegionIds: {
            /**
             * 该节点内SDG的创建时间。
             * @example `2023-02-27 15:13:26`
             */
            CreationTime: string;
            /**
             * 节点ID。
             * @example `cn-hangzhou-26`
             */
            RegionId: string;
            /**
             * 快照ID。
             * @example `mock-clone_snapshot_id`
             */
            SnapshotId: string;
            /**
             * 该节点SDG的状态，包括：
             * - **sdg_making**：制作中。
             * - **sdg_saving**：保存中。
             * - **sdg_copying**：跨节点同步中。
             * - **failed**：制作失败。
             * - **success**：制作成功。
             * @example `success`
             */
            Status: string;
        }[];
        /**
         * 创建SDG的实例ID。
         * @example `aic-5x20dyeos****`
         */
        CreationInstanceId: string;
        /**
         * 创建SDG的节点ID。
         * @example `cn-hangzhou-26`
         */
        CreationRegionId: string;
        /**
         * SDG首次创建时间。
         * @example `2023-02-27 15:07:21`
         */
        CreationTime: string;
        /**
         * 部署状态信息列表
         */
        DeployedInstanceIds: {
            /**
             * SDG在该实例上的部署时间。
             * @example `2023-02-27 16:48:43`
             */
            CreationTime: string;
            /**
             * 实例ID。
             * @example `aic-5x20dyeos****`
             */
            InstanceId: string;
            /**
             * 部署状态，包括：
             * - **sdg_deploying**：部署中。
             * - **failed**：部署失败。
             * - **success**：部署成功。
             * @example `sdg_deploying`
             */
            Status: string;
            /**
             * SDG部署类型，包括：
             * - common: 普通部署
             * - overlay: 读写分离部署
             * @example `overlay`
             */
            DeploymentType: string;
        }[];
        /**
         * SDG的描述信息。
         * @example `测试SDG`
         */
        Description: string;
        /**
         * 增量制作时，来源SDG的ID，即[CreateSDG](~~608128~~)时传入的**FromSDGId**。
         * @example `sdg-xxxxx`
         */
        ParentSDGId: string;
        /**
         * SDG的ID。
         * @example `sdg-30e1fdba7196bc****`
         */
        SDGId: string;
        /**
         * SDG大小，单位GB。
         * @example `20`
         */
        Size: number;
        /**
         * SDG制作状态，包括：
         * - **sdg_making**：制作中。
         * - **sdg_saving**：保存中。
         * - **failed**：制作失败。
         * - **success**：制作成功。
         * @example `success`
         */
        Status: string;
        /**
         * SDG最后更新时间。
         * @example `2023-02-27 16:04:39`
         */
        UpdateTime: string;
    }[];
}
