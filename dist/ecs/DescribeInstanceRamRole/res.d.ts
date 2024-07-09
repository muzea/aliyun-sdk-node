export interface DescribeInstanceRamRoleResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的RAM角色数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 实例RAM角色所在的地域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    InstanceRamRoleSets: {
        /**
         * 由实例RAM角色类型InstanceRamRoleSet组成的信息集。
         */
        InstanceRamRoleSet: {
            /**
             * 实例RAM角色名称列表。
             * @example `EcsServiceRole-EcsDocGuideTest`
             */
            RamRoleName: string;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
        }[];
    };
}
