export interface ListCrowdUsersResponse {
    /**
     * Id of the request
     * @example `F0AB6527-093F-5C44-B3BD-42C8C210C619`
     */
    RequestId: string;
    /**
     * 列表内元素总个数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 用户列表。
     */
    Users: string[];
}
