export interface DescribeUserConnectionRecordsResponse {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2CC66B0A-BA3B-5D87-BFBE-11AAAD7A8E03`
     */
    RequestId: string;
    /**
     * 用户连接记录数组。
     */
    ConnectionRecords: {
        /**
         * 连接记录ID。
         * @example `528`
         */
        ConnectionRecordId: string;
        /**
         * 开始连接时间。
         * @example `2022-01-19T10:12:38Z`
         */
        ConnectStartTime: string;
        /**
         * 连接的云电脑名称。
         * @example `demoComputer`
         */
        DesktopName: string;
        /**
         * 连接时长。单位为秒。
         * @example `3600`
         */
        ConnectDuration: string;
        /**
         * 断开连接时间。
         * @example `2022-02-27T20:03:13Z`
         */
        ConnectEndTime: string;
        /**
         * 连接的云电脑ID。
         * @example `ecd-gx2x1dhsmucyy****`
         */
        DesktopId: string;
    }[];
}
