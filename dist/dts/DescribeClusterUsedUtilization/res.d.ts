export interface DescribeClusterUsedUtilizationResponse {
    /**
     * 集群ID。
     * @example `dtscluster_h3fl1cs217sx952`
     */
    DedicatedClusterId: string;
    /**
     * 集群CPU使用率，单位为%。
     * @example `50`
     */
    CpuTotal: number;
    /**
     * 内存使用量，暂时返回0。
     * @example `0`
     */
    MemoryUsed: number;
    /**
     * 内存总量，暂时返回0。
     * @example `0`
     */
    MemoryTotal: number;
    /**
     * 集群磁盘总量，单位GB。
     * @example `1024`
     */
    DiskTotal: number;
    /**
     * 集群磁盘使用量，单位GB。
     * @example `96`
     */
    DiskUsed: number;
    /**
     * 总DU量。
     * @example `30`
     */
    DuTotal: number;
    /**
     * DU使用量。
     * @example `2`
     */
    DuUsed: number;
    /**
     * 运行任务数。
     * @example `3`
     */
    TaskRunning: number;
    /**
     * 调用结果是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 后端错误码，数字递增。
     * @example `200`
     */
    Code: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     * 内存使用百分比。
     * @example `1.0`
     */
    MemoryUsedPercentage: number;
}
