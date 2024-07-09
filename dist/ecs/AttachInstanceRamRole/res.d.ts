export interface AttachInstanceRamRoleResponse {
    /**
     * 实例RAM角色的名称。
     * @example `testRamRoleName`
     */
    RamRoleName: string;
    /**
     * 请求ID。
     * @example `D9553E4C-6C3A-4D66-AE79-9835AF705639`
     */
    RequestId: string;
    /**
     * 授予的实例RAM角色总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 授予实例RAM角色的失败个数。
     * @example `0`
     */
    FailCount: number;
    AttachInstanceRamRoleResults: {
        /**
         * 由实例RAM角色类型（AttachInstanceRamRoleResult）组成的信息集。
         */
        AttachInstanceRamRoleResult: {
            /**
             * 判断是否成功授予实例RAM角色。返回值为200表示成功授予，返回其他值表示授予失败，失败原因参见错误码。
             * @example `200`
             */
            Code: string;
            /**
             * 判断是否成功授予实例RAM角色。返回值为Success表示成功授予，返回其他值表示授予失败，失败原因参见错误码。
             * @example `success`
             */
            Message: string;
            /**
             * 实例ID。
             * @example `i-bp10ws62o04ubhvi****`
             */
            InstanceId: string;
            /**
             * 是否成功授予实例RAM角色。
             * @example `true`
             */
            Success: boolean;
        }[];
    };
}
