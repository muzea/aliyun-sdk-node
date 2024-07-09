export interface DescribeSnatEntriesResponse {
    /**
     * SNAT条目记录总数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `674BC3B2-5828-41D5-830E-148EE6CF86C2`
     */
    RequestId: string;
    SnatEntries: {
        /**
         * SNAT条目信息。
         */
        SnatEntry: {
            /**
             * 目标网段。
             * @example `192.169.10.0/24`
             */
            CidrBlock: string;
            /**
             * SNAT条目创建时间。
             * @example `1523604565000`
             */
            CreateTime: number;
            /**
             * SNAT实例ID。
             * @example `snat-sl7kb9cpgfds*****`
             */
            InstanceId: string;
            /**
             * 公网IP地址。
             * @example `10.10.**.**`
             */
            SnatIp: string;
        }[];
    };
    /**
     * 实例状态列表的页码。
     * @example `12`
     */
    PageNumber: number;
}
