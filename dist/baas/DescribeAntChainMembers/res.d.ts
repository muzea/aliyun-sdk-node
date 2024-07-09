export interface DescribeAntChainMembersResponse {
    /**
     * 请求ID
     * @example `E0DB75A2-28C8-4295-8851-A157FFB3DFED`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 联盟成员
         */
        Members: {
            /**
             * 加入联盟状态
             * @example `AllianceNotJoined`
             */
            Status: string;
            /**
             * 成员ID
             * @example `uid-1388601577407805`
             */
            MemberId: string;
            /**
             * 成员身份
             * @example `Member`
             */
            Role: string;
            /**
             * 成员名称
             * @example `uid-1562589998337656`
             */
            MemberName: string;
            /**
             * 成员加入联盟时戳
             * @example `1557477823000`
             */
            JoinTime: number;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 页面编号
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `6`
             */
            TotalCount: number;
        };
    };
}
