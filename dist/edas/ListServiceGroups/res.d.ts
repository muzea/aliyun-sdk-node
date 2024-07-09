export interface ListServiceGroupsResponse {
    /**
     * Code码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
    ServiceGroupsList: {
        /**
         * 服务分组列表
         */
        ListServiceGroups: {
            /**
             * 服务分组ID
             * @example `789d9cda-74b1-****-****-05e21a0a7661`
             */
            GroupId: string;
            /**
             * 服务分组名称
             * @example `edas-test-group`
             */
            GroupName: string;
            /**
             * 创建时间的时间戳
             * @example `1575357165770`
             */
            CreateTime: string;
        }[];
    };
}
