export interface GetAssetsPropertyDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4C1AE3F3-18FA-4108-BBB9-AFA1A032****`
     */
    RequestId: string;
    /**
     * 分页查询时页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的资产指纹详情信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的资产指纹详情信息的总数量。
         * @example `23`
         */
        TotalCount: number;
        /**
         * 当前页面显示的资产指纹详情信息的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 资产指纹详情集合。
     */
    Propertys: {
        /**
         * 模块名称。
         * > 仅**Biz**取值为**lkm**时返回。
         * @example `alihids`
         */
        ModuleName: string;
        /**
         * 内核模块大小。
         * > 仅**Biz**取值为**lkm**时返回。
         * @example `10`
         */
        Size: number;
        /**
         * 内核模块文件路径。
         * > 仅**Biz**取值为**lkm**时返回。
         * @example `/lib/modules/4****`
         */
        Filepath: string;
        /**
         * 内核模块被依赖数目。
         * > 仅**Biz**取值为**lkm**时返回。
         * @example `0`
         */
        UsedByCount: number;
        /**
         * 根据**Biz**取值不同表示不同含义：
         * - **Biz**取值为**web_server**时，表示web根路径
         * - **Biz**取值为**autorun**时，表示启动项路径
         * @example `/lib/systemd/system****`
         */
        Path: string;
        /**
         * Web站点类型。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `nginx`
         */
        ServerType: string;
        /**
         * Web站点端口。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `80`
         */
        Port: string;
        /**
         * Web站点进程Pid。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `813`
         */
        Pid: string;
        /**
         * Web站点进程监听协议。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `tcp`
         */
        ListenProtocol: string;
        /**
         * Web站点进程启动时间戳，单位为毫秒。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `1671186801000`
         */
        ProcessStarted: number;
        /**
         * Web站点web路径。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `/usr/share/nginx/html`
         */
        WebPath: string;
        /**
         * Web站点域名。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `localhost`
         */
        Domain: string;
        /**
         * Web站点用户。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `root`
         */
        User: string;
        /**
         * Web站点目录权限。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `755`
         */
        PathMode: string;
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
         * 服务器的公网IP地址。
         * @example `47.42.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的IP。
         * @example `47.42.XX.XX`
         */
        Ip: string;
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
         * 实例所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资产指纹最新扫描时间戳，单位毫秒。
         * @example `1649149566000`
         */
        CreateTimestamp: number;
        /**
         * 镜像名称。
         * @example `registry-vpc.cn-beijing.aliyuncs.com/acs/aliyun-ingress-controller****`
         */
        ImageName: string;
        /**
         * 容器名称。
         * @example `5-rce_web_1`
         */
        ContainerName: string;
    }[];
}
