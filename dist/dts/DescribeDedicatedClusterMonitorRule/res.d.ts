export interface DescribeDedicatedClusterMonitorRuleResponse {
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
     * @example `dtsClustervcwn1oeyu5fx4yf`
     */
    DedicatedClusterId: string;
    /**
     * 报警开关，取值为：
     * - **1**：打开。
     * - **0**：关闭。
     * @example `1`
     */
    NoticeSwitch: string;
    /**
     * DU报警阈值，单位百分比。
     * @example `46`
     */
    DuAlarmThreshold: string;
    /**
     * CPU报警阈值，单位百分比。
     * @example `80`
     */
    CpuAlarmThreshold: string;
    /**
     * 内存报警阈值，单位百分比。
     * @example `80`
     */
    MemAlarmThreshold: string;
    /**
     * 磁盘报警阈值，单位百分比。
     * @example `80`
     */
    DiskAlarmThreshold: string;
    /**
     * 报警接收电话。如果有多个，用逗号（,）隔开。
     * @example `186****7653`
     */
    Phones: string;
}
