export interface DescribePropertyPortDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0FA7F1F4-488D-52CA-9BFC-3E47793B49D1`
     */
    RequestId: string;
    /**
     * 查询结果页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的端口资产的指纹信息的数量。默认值为**10**，表示每页显示10条端口资产的指纹信息。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的端口资产的指纹信息的总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 当前页面显示的账户资产的指纹信息的数量
         * @example `1`
         */
        Count: number;
    };
    /**
     * 查询到的端口资产的指纹信息的详情列表。
     */
    Propertys: {
        /**
         * 服务器的公网IP地址。
         * @example `192.168.XX.XX`
         */
        InternetIp: string;
        /**
         * 监听端口对应服务器的运行进程的标识符。
         * @example `522`
         */
        Pid: string;
        /**
         * 端口绑定IP。
         * @example `0.0.X.X`
         */
        BindIp: string;
        /**
         * 监听端口绑定的网卡的IP。
         * @example `192.168.XX.XX`
         */
        Ip: string;
        /**
         * 服务器进程的名称。
         * @example `sshd`
         */
        ProcName: string;
        /**
         * 服务器的实例ID。
         * @example `i-hp35tftuh52wbp1g****`
         */
        InstanceId: string;
        /**
         * 监听端口。
         * @example `22`
         */
        Port: string;
        /**
         * 服务器的私网IP地址。
         * @example `100.104.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器的UUID。
         * @example `162eb349-c2d9-4f8b-805c-75b43d4c****`
         */
        Uuid: string;
        /**
         * 服务器实例的名称。
         * @example `hc-host-****`
         */
        InstanceName: string;
        /**
         * 监听端口使用的网络协议。
         * @example `tcp`
         */
        Proto: string;
        /**
         * 资产指纹的最新扫描的时间戳。单位为毫秒。
         * @example `1649149566000`
         */
        CreateTimestamp: number;
    }[];
}
