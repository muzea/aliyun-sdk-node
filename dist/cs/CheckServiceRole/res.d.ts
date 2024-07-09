export interface CheckServiceRoleResponse {
    /**
     * 角色检查结果
     */
    roles: {
        /**
         * 角色名称
         * @example `AliyunCSManagedAutoScalerRole`
         */
        name: string;
        /**
         * 是否已授权
         * @example `true`
         */
        granted: boolean;
        /**
         * 未授权时的提示信息
         * @example `The role does not exist: AliyunCSManagedAutoScalerRole`
         */
        message: string;
    }[];
}
