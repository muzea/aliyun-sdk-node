export interface ListProjectsResponse {
    /**
     * 请求ID
     * @example `3305DEE5-4020-4FF0-9D42-5882B1580088`
     */
    RequestId: string;
    /**
     * 项目列表信息
     */
    Projects: {
        /**
         * 状态，0表示正常
         * @example `0`
         */
        Status: number;
        /**
         * 项目描述
         * @example `test`
         */
        Description: string;
        /**
         * 项目所属用户ID
         * @example `1768723179523459`
         */
        UserId: string;
        /**
         * 项目ID
         * @example `11`
         */
        ProjectId: string;
        /**
         * 创建时间
         * @example `1508341160000`
         */
        GmtCreate: number;
        /**
         * 修改时间
         * @example `1525687817000`
         */
        GmtModified: number;
        /**
         * 项目名称
         * @example `aicc_test11`
         */
        Name: string;
        /**
         * 主键ID
         * @example `11`
         */
        Id: number;
        /**
         * 项目创建人
         * @example `user001`
         */
        Creator: string;
    }[];
}
