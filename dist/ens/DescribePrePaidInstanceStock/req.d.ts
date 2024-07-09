export interface DescribePrePaidInstanceStockRequest {
    /**
     * 节点ID。
     * @example `cn-suzhou-telecom`
     */
    "EnsRegionId": string;
    /**
     * 系统盘大小规格，单位：GB。
     * @example `100`
     */
    "SystemDiskSize": number;
    /**
     * 数据盘大小规格，单位：GB。
     * @example `20`
     */
    "DataDiskSize": number;
    /**
     * 实例规格。
     * @example `ens.sn1.stiny`
     */
    "InstanceSpec": string;
}
