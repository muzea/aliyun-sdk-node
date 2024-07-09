export interface CheckServiceRoleRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 需要检查的角色列表
         */
        roles: {
            /**
             * 角色名称
             * @example `AliyunCSManagedAutoScalerRole`
             */
            name: string;
        }[];
    };
}
