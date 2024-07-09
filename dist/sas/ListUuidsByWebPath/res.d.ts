export interface ListUuidsByWebPathResponse {
    /**
     * 防护资产列表。
     */
    List: {
        /**
         * 服务器的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
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
         * 服务器机器名称。
         * @example `test****`
         */
        MachineName: string;
    }[];
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
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A3C1240F-9DAC-5EE8-ADF5-2F930A95****`
     */
    RequestId: string;
}
