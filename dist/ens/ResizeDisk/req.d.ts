export interface ResizeDiskRequest {
    /**
     * 待扩容的实例ID。
     * @example `d-5tzm9wnhzlhjzcbtxo465****`
     */
    "DiskId": string;
    /**
     * 目标扩容值，单位：GiB。
     * @example `100`
     */
    "NewSize": string;
}
