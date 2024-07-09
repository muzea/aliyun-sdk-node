export interface ListUserLevelsOfSkillGroupResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 技能等级列表。
         */
        List: {
            /**
             * 坐席展示名。
             * @example `坐席小王`
             */
            DisplayName: string;
            /**
             * 坐席技能等级。
             * @example `5`
             */
            SkillLevel: number;
            /**
             * 坐席登录名。
             * @example `agent`
             */
            LoginName: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            UserId: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupId: string;
            /**
             * 技能组名称。
             * @example `skillgroup`
             */
            SkillGroupName: string;
            /**
             * 角色名称。
             * @example `Admin`
             */
            RoleName: string;
            /**
             * 角色ID，格式为：角色@实例ID。
             * @example `Admin@ccc-test`
             */
            RoleId: string;
            /**
             * 用户的RAM账号。
             * @example `28036411123456****`
             */
            RamId: string;
        }[];
    };
}
