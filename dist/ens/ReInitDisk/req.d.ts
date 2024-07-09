export interface ReInitDiskRequest {
    /**
     * 待重置的磁盘ID。仅支持重置单个。
     * @example `d-5r7v69e0bejrnzger09w71yjv`
     */
    "DiskId": string;
    /**
     * 镜像文件ID，启动实例时选择的镜像资源。
     * @example `m-5rz3i231o531s4p4ozanxmgx7`
     */
    "ImageId": string;
}
