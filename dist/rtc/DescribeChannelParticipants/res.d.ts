export interface DescribeChannelParticipantsResponse {
    /**
     * 返回分页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 请求ID。
     * @example `6159ba01-6687-4fb2-a831-f0cd8d188648`
     */
    RequestId: string;
    /**
     * 返回结果时间，使用UNIX时间戳表示，单位：秒。
     * @example `1557909133`
     */
    Timestamp: number;
    /**
     * 返回结果数。
     * @example `3`
     */
    TotalNum: number;
    UserList: {
        User: string[];
    };
}
