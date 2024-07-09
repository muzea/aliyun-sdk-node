export interface ListMultiAccountResourceGroupsResponse {
    /**
     * 下一个查询开始的Token。
     * @example `AAAAAU5VsT9R1adMTuz9GzginZ3Y+7Y/5JATS+6q5GK9kT75`
     */
    NextToken: string;
    /**
     * 资源组列表。
     */
    ResourceGroups: {
        /**
         * 资源组显示名称。
         * @example `group1`
         */
        DisplayName: string;
        /**
         * 资源组状态。
         * - Creating：创建中。
         * - OK：创建成功。
         * - PendingDelete：等待删除。
         * @example `OK`
         */
        Status: string;
        /**
         * 资源目录管理账号ID或成员ID。
         * @example `1394339739****`
         */
        AccountId: string;
        /**
         * 资源组唯一标识。
         * @example `my-project`
         */
        Name: string;
        /**
         * 资源组的创建时间。
         * @example `2021-06-30T09:20:08Z`
         */
        CreateDate: string;
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxc****`
         */
        Id: string;
    }[];
    /**
     * 请求ID。
     * @example `0FF0A66E-781F-51EE-9531-928F197558F2`
     */
    RequestId: string;
}
