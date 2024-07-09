export interface ListAgentlessRiskUuidResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `05AE6B16-741A-5A75-9BF0-BC747DD9****`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `69`
         */
        TotalCount: number;
    };
    /**
     * 主机列表。
     */
    List: {
        /**
         * 服务器的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 资产的实例名称。
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
         * 检测出的漏洞数量。
         * @example `1`
         */
        VulCount: number;
        /**
         * 恶意样本数量。
         * @example `1`
         */
        MaliciousCount: number;
        /**
         * 基线风险项数量。
         * @example `1`
         */
        BaselineCount: number;
        /**
         * 扫描对象ID。
         * @example `30****`
         */
        TargetId: string;
        /**
         * 扫描对象名称。
         * @example `test****`
         */
        TargetName: string;
        /**
         * 扫描的时间戳，单位：毫秒。
         * @example `168257753****`
         */
        ScanTime: number;
        InstanceId: string;
    }[];
}
