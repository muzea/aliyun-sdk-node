export interface QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest {
    /**
     * SetDedicatedBlockStorageClusterDiskThroughput接口返回的请求id。
     * @example `A37597B5-BB99-19B3-85EA-4C2B91F0****`
     */
    "QosRequestId": string;
    /**
     * 专属块存储集群所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务端生成的一串字符串，作为客户端进行请求的一个标识。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
