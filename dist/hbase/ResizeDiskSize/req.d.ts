export interface ResizeDiskSizeRequest {
    /**
     * 实例ID。
     * @example `hb-bp16o0pd52e3y****`
     */
    "ClusterId": string;
    /**
     * 单节点磁盘大小，默认单位为GB。
     * @example `120`
     */
    "NodeDiskSize": number;
}
