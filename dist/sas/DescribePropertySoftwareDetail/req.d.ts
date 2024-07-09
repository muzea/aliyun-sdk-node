export interface DescribePropertySoftwareDetailRequest {
    /**
     * 要查询的服务器的名称或IP地址。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 要查询的软件的名称。
     * @example `kernel`
     */
    "Name"?: string;
    /**
     * 软件的安装路径。
     * @example `/etc/test`
     */
    "Path"?: string;
    /**
     * 软件的版本信息。
     * @example `3.10.0`
     */
    "SoftwareVersion"?: string;
    /**
     * 服务器的UUID。
     * @example `50d213b4-3a35-427a-b8a5-****`
     */
    "Uuid"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的软件资产的指纹信息的数量。默认值为**10**，表示每页显示10条软件资产的指纹信息。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 软件更新开始的时间戳。单位为毫秒。
     * @example `1649321495000`
     */
    "InstallTimeStart"?: number;
    /**
     * 软件更新结束的时间戳。单位为毫秒。
     * @example `1650012695000`
     */
    "InstallTimeEnd"?: number;
    /**
     * 软件名称是否支持模糊查询。要设置支持模糊查询时，请将该参数的取值设置为1，其他值或取值为空则表示不支持模糊查询。
     * @example `1`
     */
    "Extend"?: string;
}
