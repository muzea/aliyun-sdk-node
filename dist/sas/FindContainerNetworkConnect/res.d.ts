export interface FindContainerNetworkConnectResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8686CE6E-9BFA-5436-A9D9-77B984AEE7F8`
     */
    RequestId: string;
    /**
     * 网络连接信息。
     */
    Connects: {
        /**
         * 网络连接ID。
         * @example `1458`
         */
        Id: number;
        /**
         * 首次发生连接时间戳，单位：毫秒。
         * @example `1636077279174`
         */
        FirstTime: number;
        /**
         * 最新发生连接时间戳，单位：毫秒。
         * @example `1636595679174`
         */
        LastTime: number;
        /**
         * 源IP。
         * @example `35.233.62.116`
         */
        SrcIp: string;
        /**
         * 源端口号。
         * @example `10240`
         */
        SrcPort: string;
        /**
         * 目的IP。
         * @example `172.20.62.176`
         */
        DstIp: string;
        /**
         * 目的端口。
         * @example `443`
         */
        DstPort: string;
        /**
         * 源容器信息。
         * ><notice>暂不支持。></notice>
         */
        SrcContainer: {
            /**
             * 容器ID。
             * @example `48a6xxx5709d5a5866`
             */
            ContainerId: string;
        };
        /**
         * 目的容器信息。
         * ><notice>暂不支持。></notice>
         */
        DstContainer: {
            /**
             * 容器ID。
             * @example `48a6dxxx9d5a5866`
             */
            ContainerId: string;
        };
    }[];
    /**
     * 分页查询时页面显示的信息。
     */
    PageInfo: {
        /**
         * 查询到的连接的总数量。
         * @example `12`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
        /**
         * 分页查询时，每页显示的容器资产的数量。默认值为**20**，表示每页显示20条网络连接信息。
         * @example `20`
         */
        PageSize: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
    };
}
