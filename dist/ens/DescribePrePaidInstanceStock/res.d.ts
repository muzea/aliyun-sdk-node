export interface DescribePrePaidInstanceStockResponse {
    /**
     * 可购买数量。
     * @example `84`
     */
    AvaliableCount: number;
    /**
     * CPU核数。
     * @example `1`
     */
    Cores: number;
    /**
     * 数据盘大小规格。
     * @example `20`
     */
    DataDiskSize: number;
    /**
     * 节点。
     * @example `cn-suzhou-telecom`
     */
    EnsRegionId: string;
    /**
     * 实例规格。
     * @example `ens.sn1.stiny`
     */
    InstanceSpec: string;
    /**
     * 内存，单位：GB。
     * @example `2048`
     */
    Memory: number;
    /**
     * 请求ID。
     * @example `007833C8-E819-4122-B636-0D48D7BF6DFB`
     */
    RequestId: string;
    /**
     * 系统盘大小规格。
     * @example `20`
     */
    SystemDiskSize: number;
    /**
     * 资源不足原因。
     * @example `StockNotEnough`
     */
    ResourceGap: string;
}
