export interface DeleteDedicatedHostGroupRequest {
    /**
     * 目标专属集群ID。可通过云数据库专属集群控制台的集群列表信息页查看。
     * @example `dhg-h5i4p331f509****`
     */
    "DedicatedHostGroupId": string;
    /**
     * 目标专属集群所在地域ID。可查看[地域信息](~~198326~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
