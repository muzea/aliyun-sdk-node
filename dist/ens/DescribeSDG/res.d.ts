export interface DescribeSDGResponse {
    /**
     * 请求ID。
     * @example `F3B261DD-3858-4D3C-877D-303ADF374600`
     */
    RequestId: string;
    /**
     * SDG信息列表。
     */
    SDGs: {
        /**
         * SDG存在快照的列表。
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
             * @example `sp-517qu0tgznrg622he7nf4wd7n`
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
        /**
         * 预加载配置信息
         */
        PreloadInfos: {
            /**
             * 节点ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 命名空间。
             * @example `test-20000`
             */
            Namespace: string;
            /**
             * 冗余数量，以快速响应共享挂载。
             * @example `2`
             */
            RedundantNum: number;
            /**
             * 创建时间。时间格式以ISO8601为标准，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2023-02-16T06:18:40Z`
             */
            CreationTime: string;
            /**
             * 最新的状态更新时间。
             * @example `2021-01-22T08:17Z`
             */
            UpdateTime: string;
        }[];
    }[];
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前查询每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `49`
     */
    TotalCount: number;
}
