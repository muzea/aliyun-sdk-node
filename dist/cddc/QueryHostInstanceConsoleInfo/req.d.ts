export interface QueryHostInstanceConsoleInfoRequest {
    /**
     * 主机所在地域ID。您可以登录云数据库专属集群控制台，查看[地域信息](~~198326~~)。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * 主机ID。您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp1fgj3kt7fsb****`
     */
    "DedicatedHostId": string;
}
