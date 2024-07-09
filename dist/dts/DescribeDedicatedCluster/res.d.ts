export interface DescribeDedicatedClusterResponse {
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
     * 集群ID。
     * @example `dtsCluster****`
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
     * @example `inti`
     */
    State: string;
    /**
     * 实例所在区域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 集群节点数。
     * @example `5`
     */
    NodeCount: number;
    /**
     * DU使用百分比。
     * @example `16`
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
    /**
     * 创建时间。
     * @example `1642476144000`
     */
    GmtCreated: number;
    /**
     * 结束时间。
     * @example `1645200000000`
     */
    GmtFinished: number;
    /**
     * 实例ID。
     * @example `dtsb8r****`
     */
    DtsInstanceID: string;
}
