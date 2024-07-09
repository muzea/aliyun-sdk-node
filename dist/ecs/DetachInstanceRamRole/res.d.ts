export interface DetachInstanceRamRoleResponse {
    /**
     * 收回实例RAM角色的名称。
     * @example `RamRoleTest`
     */
    RamRoleName: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 收回的实例RAM角色的总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 收回失败的实例RAM角色的个数。
     * @example `0`
     */
    FailCount: number;
    DetachInstanceRamRoleResults: {
        /**
         * 由实例RAM角色类型（DetachInstanceRamRoleResult）组成的信息集。
         */
        DetachInstanceRamRoleResult: {
            /**
             * 判断是否成功收回实例RAM角色。返回值为200表示成功收回，返回其他值表示收回失败，失败原因参见错误码。
             * @example `200`
             */
            Code: string;
            /**
             * 判断是否成功收回实例RAM角色。返回值为Success表示成功收回，返回其他值表示收回失败，失败原因参见错误码。
             * @example `Success`
             */
            Message: string;
            /**
             * 准备收回实例RAM角色的ECS实例。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            /**
             * 是否成功回收了指定的实例角色。
             * @example `true`
             */
            Success: boolean;
            InstanceRamRoleSets: {
                /**
                 * 实例的RAM角色集合。
                 */
                InstanceRamRoleSet: {
                    /**
                     * 收回实例RAM角色的名称。
                     * @example `RamRoleTest`
                     */
                    RamRoleName: string;
                    /**
                     * 实例ID。
                     * @example `i-bp67acfmxazb4p****`
                     */
                    InstanceId: string;
                }[];
            };
        }[];
    };
}
