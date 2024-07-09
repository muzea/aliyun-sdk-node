export interface DescribeDedicatedHostAttributeRequest {
    /**
     * [地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主机ID。您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 主机所属集群的ID。您可以登录云数据库专属集群控制台，在**集群列表**查看并获取专属集群ID。
     * @example `dhg-34639v1jt4y4****`
     */
    "DedicatedHostGroupId": string;
}
