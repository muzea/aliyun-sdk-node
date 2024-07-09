export interface AttachDiskRequest {
    /**
     * 待挂载的云盘ID。云盘（DiskId）和实例（InstanceId）必须在同一个节点。
     * @example `d-5saf13yy6sopmmg88mzsg****`
     */
    "DiskId": string;
    /**
     * 实例ID。
     * @example `i-5rr19av7tkpgi9os52ag1****`
     */
    "InstanceId": string;
    /**
     * 待挂载的云盘是否随实例释放。取值：
     * - true：释放实例时，该云盘随实例一起释放。
     * - false ：释放实例时，保留该云盘，不随实例一起释放。
     * - 为空则表示默认为false。
     * @example `false`
     */
    "DeleteWithInstance"?: string;
}
