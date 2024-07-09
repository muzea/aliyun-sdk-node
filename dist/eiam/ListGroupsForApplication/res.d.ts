export interface ListGroupsForApplicationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表总条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 组ID列表。
     */
    Groups: {
        /**
         * 组ID。
         * @example `group_miu8e4t4d7i4u7uwezgr54xxxx`
         */
        GroupId: string;
    }[];
}
