export interface DescribePropertyCronDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B0C4E12E-CCE1-109D-9E62-7B95CBBAEF8C`
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
         * 分页查询时，每页显示的计划任务资产的指纹信息的数量。默认值为**10**，表示每页显示10条计划任务资产的指纹信息。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的计划任务资产的指纹信息的总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 当前页面显示的计划任务资产的指纹信息的数量。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 查询到的计划任务资产的指纹信息的详情列表。
     */
    Propertys: {
        /**
         * 服务器的公网IP地址。
         * @example `192.168.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的IP列表。
         * @example `192.168.XX.XX`
         */
        Ip: string;
        /**
         * 执行计划任务的账户名称。
         * @example `root`
         */
        User: string;
        /**
         * 服务器的实例ID。
         * @example `i-hp35tftuh52wbp1g****`
         */
        InstanceId: string;
        /**
         * 计划任务的路径。
         * @example `/etc/cron.d/root`
         */
        Source: string;
        /**
         * 服务器的私网IP地址。
         * @example `100.104.XX.XX`
         */
        IntranetIp: string;
        /**
         * 计划任务的执行命令。
         * @example `/usr/lib64/sa/sa1 1 1`
         */
        Cmd: string;
        /**
         * 计划任务执行的周期。
         * @example `*​/10 * * * *`
         */
        Period: string;
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
         * 计划任务路径的MD5信息。
         * @example `4cc8f97c2bf9cbabb2c2be2erqw****`
         */
        Md5: string;
        /**
         * 资产指纹的最新扫描的时间戳。单位为毫秒。
         * @example `1649149566000`
         */
        CreateTimestamp: number;
    }[];
}
