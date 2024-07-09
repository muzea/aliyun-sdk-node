export interface DescribeAntChainMembersV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 联盟成员
         */
        Members: {
            /**
             * 成员身份
             * @example `AllianceJoined`
             */
            Status: string;
            /**
             * 成员ID
             * @example `1034774750177934`
             */
            MemberId: string;
            /**
             * 加入联盟状态
             * @example `Member`
             */
            Role: string;
            /**
             * 成员名称
             * @example `uid-1034774750177934`
             */
            MemberName: string;
            /**
             * 成员加入联盟时戳
             * @example `1609745002000`
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
             * 页面编号，从1开始
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `100`
             */
            TotalCount: number;
        };
    };
}
