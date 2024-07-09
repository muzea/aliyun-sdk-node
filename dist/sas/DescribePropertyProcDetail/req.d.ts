export interface DescribePropertyProcDetailRequest {
    /**
     * 要查询的服务器的名称或IP地址。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 进程名称。
     * @example `8888`
     */
    "Name"?: string;
    /**
     * 运行进程的用户的信息。
     * @example `root`
     */
    "User"?: string;
    /**
     * 进程的启动参数。
     * @example `./8888`
     */
    "Cmdline"?: string;
    /**
     * 要查询的服务器的UUID。
     * @example `50d213b4-3a35-427a-b8a5-04b0c7e1****`
     */
    "Uuid"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的进程资产的指纹信息的数量。默认值为**10**，表示每页显示10条进程资产的指纹信息。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 进程启动开始的时间戳。单位为毫秒。
     * @example `1648809853000`
     */
    "ProcTimeStart"?: number;
    /**
     * 进程启动结束的时间戳。单位为毫秒。
     * @example `1649587453000`
     */
    "ProcTimeEnd"?: number;
    /**
     * 进程名称是否支持模糊查询。要设置支持模糊查询时，请将该参数的取值设置为1，其他值或取值为空则表示不支持模糊查询。
     * @example `1`
     */
    "Extend"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
