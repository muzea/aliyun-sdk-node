export interface ResizeDiskSizeRequest {
    /**
     * 集群ID。
     * @example `cds-bp1b136j****5d51`
     */
    "ClusterId": string;
    /**
     * 集群数据中心ID。
     * @example `cn-hangzhou-g`
     */
    "DataCenterId": string;
    /**
     * 修改后的磁盘大小。（单位：GB）
     * @example `240`
     */
    "DiskSize": number;
}
