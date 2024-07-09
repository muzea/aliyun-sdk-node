export interface ModifyDiskSpecRequest {
    /**
     * 云盘的ID。
     * @example `d-bp131n0q38u3a4zi****`
     */
    "DiskId": string;
    /**
     * 修改一块ESSD云盘的性能级别。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 默认值：PL1。
     * @example `PL2`
     */
    "PerformanceLevel"?: string;
    /**
     * 变更一块云盘的类型。取值范围：
     * - cloud_essd：ESSD云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * - cloud_ssd：SSD云盘。
     * <props="china">
     * - cloud_essd_entry：ESSD Entry云盘。
     * </props>
     * - cloud_efficiency：高效云盘。
     * 默认值：空，表示不变配云盘。
     * > - 以上有效取值按云盘性能降序排列。如果指定的云盘是包年包月云盘，则不允许降配云盘。
     * <props="china">
     * - ESSD Entry云盘仅支持变配到ESSD云盘和ESSD AutoPL云盘。更多信息，请参见[变更云盘类型](~~161980~~)。
     * </props>
     * @example `cloud_essd`
     */
    "DiskCategory"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * * true：发送检查请求。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * * false：发送正常请求，通过检查后返回2XX HTTP状态码并且直接变配云盘或修改ESSD性能等级。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否修改ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。
     * 基准性能=min{1,800+50*容量, 50,000}
     * > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)和[修改ESSD AutoPL云盘预配置信息](~~413275~~)。
     * @example `50000`
     */
    "ProvisionedIops"?: number;
    /**
     * 磁盘性能控制参数集合
     */
    "PerformanceControlOptions"?: {
        /**
         * 目标云盘IOPS。仅支持修改专属存储集群云盘IOPS。
         * 取值范围：900~单盘最大IOPS，步长100。
         * 更多信息，请参见[云盘性能](~~25382~~)。
         * @example `2000`
         */
        IOPS: number;
        /**
         * 目标云盘吞吐量，仅支持修改专属存储集群云盘吞吐量，单位MB/s。
         * 取值范围：60~单盘最大吞吐量。
         * 更多信息，请参见[云盘性能](~~25382~~)。
         * @example `200`
         */
        Throughput: number;
        /**
         * 重置云盘性能，仅支持专属存储集群云盘。
         * 设置该参数后，PerformanceControlOptions.IOPS和PerformanceControlOptions.Throughput参数不生效。
         * 目前仅支持设置为All（重置云盘IOPS和吞吐量到初始值）。
         * @example `All`
         */
        Recover: string;
    };
}
