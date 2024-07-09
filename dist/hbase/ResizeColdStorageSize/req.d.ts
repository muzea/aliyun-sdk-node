export interface ResizeColdStorageSizeRequest {
    /**
     * HBase实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp169l540vc6c****`
     */
    "ClusterId": string;
    /**
     * 修改后的冷存储容量，单位为GB，取值范围为**800**~**1000000**。
     * @example `900`
     */
    "ColdStorageSize": number;
}
