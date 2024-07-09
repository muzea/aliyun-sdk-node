export interface DescribeAffectedAssetsResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7E0618A9-D5EF-4220-9471-C42XXXXXXXX`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 查询到的服务器资产信息。
     */
    AssetList: {
        /**
         * 服务器唯一标识。
         * @example `947d7514-258a-4b47-9dde-9dxxxxxxxxxx`
         */
        Uuid: string;
        /**
         * 服务器公网ip。
         * @example `10.10.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器存在的病毒检测风险数量。
         * @example `1`
         */
        RiskNum: number;
        /**
         * 服务器实例名称。
         * @example `11`
         */
        InstanceName: string;
        /**
         * 服务器实例id。
         * @example `11`
         */
        InstanceId: string;
        /**
         * 服务器私网ip。
         * @example `172.0.XX.XX`
         */
        IntranetIp: string;
    }[];
}
