export interface DescribeDomainGroupsResponse {
    DomainGroups: {
        /**
         * 域名分组结构列表。
         */
        DomainGroup: {
            /**
             * 域名分组ID。
             * - 默认分组GroupId："defaultGroup"，代表未设置分组的域名。
             * - 全部域名GroupId：""，代表所有域名。
             * @example `2223`
             */
            GroupId: string;
            /**
             * 域名分组名称。
             * @example `MyGroup`
             */
            GroupName: string;
            /**
             * 域名分组数量。
             * @example `2`
             */
            DomainCount: number;
        }[];
    };
    /**
     * 域名分组总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
}
