export interface DescribePropertyProcDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `AA47D46F-10DE-138C-BBB4-8A0003F75CD7`
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
         * 分页查询时，每页显示的进程资产的指纹信息的数量。默认值为**10**，表示每页显示10条进程资产的指纹信息。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的进程资产的指纹信息的总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 当前页面显示的进程资产的指纹信息的数量。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 查询到的进程资产的指纹信息的详情列表。
     */
    Propertys: {
        /**
         * 服务器的公网IP地址。
         * @example `192.168.XX.XX`
         */
        InternetIp: string;
        /**
         * 运行进程的身份标识。
         * @example `12826`
         */
        Pid: string;
        /**
         * 进程的运行用户。
         * @example `root`
         */
        User: string;
        /**
         * 进程关联的服务器的实例ID。
         * @example `i-hp35tftuh52wbp1g****`
         */
        InstanceId: string;
        /**
         * 进程的启动参数。
         * @example `./8888`
         */
        Cmdline: string;
        /**
         * 资产的私网IP地址。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 进程的运行权限。
         * @example `root`
         */
        EuidName: string;
        /**
         * 进程关联的服务器的UUID。
         * @example `162eb349-c2d9-4f8b-805c-75b43d4c****`
         */
        Uuid: string;
        /**
         * 进程启动的时间。
         * @example `2019-08-07 10:09:05`
         */
        StartTime: string;
        /**
         * 进程所属父进程的名称。
         * @example `start***.s`
         */
        Pname: string;
        /**
         * 进程关联的服务器的名称。
         * @example `hc-host-****`
         */
        InstanceName: string;
        /**
         * 进程的路径。
         * @example `/root/Oracle/Middleware/***​/8888`
         */
        Path: string;
        /**
         * 进程文件的MD5信息。
         * @example `842644ea3d88bd7f7e14c1c089ef****`
         */
        Md5: string;
        /**
         * 进程的名称。
         * @example `agetty`
         */
        Name: string;
        /**
         * 最新采集数据的时间戳。单位为毫秒。
         * @example `1565686951000`
         */
        CreateTimestamp: number;
        /**
         * 进程启动的时间戳。单位为毫秒。
         * @example `1648783107000`
         */
        StartTimeDt: number;
        /**
         * 是否为安装包进程。取值：
         * - **1**：是
         * - **0**：否
         * @example `1`
         */
        IsPackage: number;
        /**
         * 进程的运行状态。
         * @example `sleeping`
         */
        State: string;
    }[];
}
