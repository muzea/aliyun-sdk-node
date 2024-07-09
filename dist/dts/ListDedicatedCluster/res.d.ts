export interface ListDedicatedClusterResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 当前页可展示的最大记录数。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 所有符合条件的集群数量。
     * @example `15`
     */
    TotalRecordCount: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    DedicatedClusterStatusList: {
        /**
         * 查询所有集群的状态。
         */
        DedicatedClusterStatus: {
            /**
             * DTS实例ID。
             * @example `dtsi03e3zty16i****`
             */
            DtsInstanceID: string;
            /**
             * 集群ID。
             * @example `dtscluster*******`
             */
            DedicatedClusterId: string;
            /**
             * 集群名称。
             * @example `daily_test`
             */
            DedicatedClusterName: string;
            /**
             * DU数。
             * @example `30`
             */
            Du: number;
            /**
             * 超配DU的数量。
             * @example `60`
             */
            OversoldDu: number;
            /**
             * 已使用DU数量。
             * @example `5`
             */
            UsedDu: number;
            /**
             * 集群状态，取值为：
             * - **init**：初始化。
             * - **schedule**：待调度。
             * - **running**：运行中。
             * - **upgrade**：升级中。
             * - **downgrade**,：降级中。
             * - **locked**：已锁定。
             * - **releasing**：释放中。
             * - **released**：已经释放。
             * @example `init`
             */
            State: string;
            /**
             * 实例所在区域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 创建时间。
             * @example `1647424384606`
             */
            GmtCreated: number;
            /**
             * 集群节点数。
             * @example `5`
             */
            NodeCount: number;
            /**
             * DU使用百分比。
             * @example `16.6667`
             */
            DuUtilization: number;
            /**
             * CPU使用百分比。
             * @example `30`
             */
            CpuUtilization: number;
            /**
             * CPU总核数。
             * @example `100`
             */
            TotalCpuCore: number;
            /**
             * 已使用CPU核数。
             * @example `30`
             */
            UsedCpuCore: number;
            /**
             * CPU使用量。
             * @example `20`
             */
            MemUtilization: number;
            /**
             * 内存总大小（GB）。
             * @example `256`
             */
            TotalMemGBSize: number;
            /**
             * 已使用内存大小（GB）。
             * @example `128`
             */
            UsedMemGBSize: number;
            /**
             * 磁盘使用量。
             * @example `50`
             */
            DiskUtilization: number;
            /**
             * 磁盘总大小（GB）。
             * @example `2048`
             */
            TotalDiskGBSize: number;
            /**
             * 已使用磁盘大小（GB）。
             * @example `1024`
             */
            UsedDiskGBSize: number;
        }[];
    };
}
