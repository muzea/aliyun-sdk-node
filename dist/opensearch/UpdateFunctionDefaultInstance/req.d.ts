export interface UpdateFunctionDefaultInstanceRequest {
    /**
     * body参数
     * @example `{}`
     */
    "Body"?: {
        /**
         * 实例名称
         * @example `"pop_test"`
         */
        instanceName: string;
    };
    /**
     * 应用名称
     * @example `"app_group_name"`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `pop`
     */
    "functionName": string;
}
