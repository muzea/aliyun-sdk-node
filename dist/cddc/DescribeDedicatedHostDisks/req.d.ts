export interface DescribeDedicatedHostDisksRequest {
    /**
     * 主机ID。您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp183v72jr033****`
     */
    "DedicatedHostId": string;
    /**
     * 主机所在的地域ID。您可以登录云数据库专属集群控制台，查看主机所在[地域信息](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
