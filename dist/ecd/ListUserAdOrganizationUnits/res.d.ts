export interface ListUserAdOrganizationUnitsResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * AD域的组织单元OU信息。
     */
    OUNames: {
        /**
         * AD办公网络的ID。
         * @example `cn-hangzhou+dir-485361****`
         */
        OfficeSiteId: string;
        /**
         * 用户AD域控的组织单元（CanonicalName）。
         * @example `example.com/wuying_computers`
         */
        OUName: string;
        /**
         * 组织单元名称。
         * @example `wuying_computers`
         */
        DisplayOUName: string;
    }[];
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
}
