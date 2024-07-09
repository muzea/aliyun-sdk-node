export interface ListAgentlessRelateMaliciousResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FCA270CC-24C8-5DA1-9184-20F2605C****`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `197`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 关联风险的主机列表。
     */
    List: {
        /**
         * 资产实例名称。
         * @example `sql-test-0****`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 首次扫描时间戳，单位：毫秒。
         * @example `168257753****`
         */
        FirstScanTimestamp: number;
        /**
         * 最新扫描时间戳，单位：毫秒。
         * @example `168257753****`
         */
        LatestScanTimestamp: number;
        /**
         * 文件路径。
         * @example `/root/logs/arms/tracelogs/log****`
         */
        FilePath: string;
    }[];
}
