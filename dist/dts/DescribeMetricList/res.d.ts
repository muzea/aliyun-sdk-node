export interface DescribeMetricListResponse {
    /**
     * 查询集群或节点，取值：
     * - **CLUSTER**：集群。
     * - **NODE**：节点
     * @example `CLUSTER`
     */
    MetricType: string;
    /**
     * 观测值。
     * - 当**MetricType**为**NODE**时，值为**nodeid**。
     * - 当**MetricType**为**CLUSTER**时为独享集群ID，可通过ListDedicatedCluster接口获取。
     * @example `ecs-jhjnjjn`
     */
    Param: string;
    /**
     * - **InternetOut**：公网流出流量，单位为Byte。
     * - **diskusage_utilization**：磁盘使用率。
     * - **IntranetInRate**：内网流入流量，单位为Byte。
     * - **InternetIn**：公网流入流量，单位为Byte。
     * - **cpu_total**：CPU使用率。
     * - **memory_usedutilization**：内存使用率。
     * - **IntranetOutRate**：内网流出流量，单位为Byte。
     * @example `cpu_total`
     */
    MetricName: string;
    /**
     * 观测间隔（单位为秒），最小间隔为15秒。
     * @example `15`
     */
    Period: number;
    /**
     * 监控统计信息。
     */
    DataPoints: {
        /**
         * 记录时间戳，单位毫秒。
         * @example `1650872310000`
         */
        Timestamp: number;
        /**
         * 统计值。
         * @example `15.25`
         */
        Statistics: number;
    }[];
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 后端错误码，数字递增。
     * @example `403`
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
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%s。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 异常对应的状态码。
     * @example `403`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
}
