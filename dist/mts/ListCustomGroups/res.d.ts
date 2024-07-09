export interface ListCustomGroupsResponse {
    /**
     * 请求ID，具有唯一性。
     * @example `580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCount: number;
    CustomGroups: {
        /**
         * 自定义库。
         */
        CustomGroup: {
            /**
             * 自定义库ID。
             * @example `1`
             */
            CustomGroupId: string;
            /**
             * 自定义库名称。
             * @example `自定义库名称`
             */
            CustomGroupName: string;
            /**
             * 自定义库描述。
             * @example `这是一个自定义库`
             */
            CustomGroupDescription: string;
        }[];
    };
}
