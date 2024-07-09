export interface DescribePropertySoftwareDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6AEE7412-0065-1135-B790-AE2C38BA68FB`
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
         * 分页查询时，每页显示的软件资产的指纹信息的数量。默认值为**10**，表示每页显示10条软件资产的指纹信息。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的软件资产的指纹信息的总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 当前页面显示的软件资产的指纹信息的数量。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 查询到的软件资产的指纹信息的详情列表。
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
         * 服务器的实例ID。
         * @example `i-hp35tftuh52wbp1g****`
         */
        InstanceId: string;
        /**
         * 服务器的私网IP地址。
         * @example `100.104.XX.XX`
         */
        IntranetIp: string;
        /**
         * 软件的安装时间。
         * @example `2022-04-07 10:54:49`
         */
        InstallTime: string;
        /**
         * 服务器的UUID。
         * @example `162eb349-c2d9-4f8b-805c-75b43d4c****`
         */
        Uuid: string;
        /**
         * 软件资产的版本信息。
         * @example `3.10.0`
         */
        Version: string;
        /**
         * 服务器实例的名称。
         * @example `hc-host-****`
         */
        InstanceName: string;
        /**
         * 软件资产的安装目录信息。
         * @example `/etc/test`
         */
        Path: string;
        /**
         * 软件的名称。
         * @example `aaa_base`
         */
        Name: string;
        /**
         * 资产指纹的最新扫描的时间戳。单位为毫秒。
         * @example `1649149566000`
         */
        CreateTimestamp: number;
        /**
         * 软件的安装时间戳。单位为毫秒。
         * @example `1649066826000`
         */
        InstallTimeDt: number;
    }[];
}
