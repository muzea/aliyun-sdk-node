export interface SetDedicatedBlockStorageClusterDiskThroughputRequest {
    /**
     * 云盘ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId": string;
    /**
     * 专属块存储集群所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 每秒读写（I/O）成功传输的数据数量上限，单位：MB/s。
     * @example `100`
     */
    "Bps": number;
    /**
     * 服务端生成的一串字符串，作为客户端进行请求的一个标识。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
