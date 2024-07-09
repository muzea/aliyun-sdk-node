export interface ResizeMultiZoneClusterDiskSizeRequest {
    /**
     * 多可用区实例Id。
     * @example `ld-f5d6vc2r8d6****`
     */
    "ClusterId": string;
    /**
     * core节点磁盘大小，必须大于当前磁盘大小，步长为40的整数倍，单位：GB，最大值64000。
     * @example `480`
     */
    "CoreDiskSize"?: number;
    /**
     * log节点磁盘大小，必须大于当前log节点磁盘大小，步长为40的整数倍，单位：GB，最大值8000。
     * @example `440`
     */
    "LogDiskSize"?: number;
}
