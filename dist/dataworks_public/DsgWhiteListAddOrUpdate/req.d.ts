export interface DsgWhiteListAddOrUpdateRequest {
    /**
     * 白名单集合。
     */
    "WhiteLists": {
        /**
         * 脱敏规则ID。您可调用[DsgDesensPlanQueryList](~~2786578~~)接口获取。
         * @example `123`
         */
        RuleId: number;
        /**
         * 脱敏白名单ID。
         * - 不配置该参数：表示当前操作为新增脱敏白名单。
         * - 配置该参数：表示编辑指定脱敏白名单信息。您可调用[DsgWhiteListQueryList](~~2786508~~)接口查询白名单ID。
         * @example `123`
         */
        Id: number;
        /**
         * 脱敏白名单的生效时间。
         * @example `2024-04-10 00:00:00`
         */
        StartTime: string;
        /**
         * 脱敏白名单的失效时间。输入null表示白名单永久生效。
         * @example `null`
         */
        EndTime: string;
        /**
         * 用户组ID集合。
         */
        UserGroupIds: number[];
    }[];
}
