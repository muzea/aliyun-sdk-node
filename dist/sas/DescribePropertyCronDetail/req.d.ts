export interface DescribePropertyCronDetailRequest {
    /**
     * 要查询的服务器的名称或IP地址。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 要查询的任务路径。
     * @example `/etc/cron.d/root`
     */
    "Source"?: string;
    /**
     * 要查询的计划任务的账户名称。
     * @example `root`
     */
    "User"?: string;
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
     * 设置分页查询时，每页显示的计划任务产的指纹信息的数量。默认值为**10**，表示每页显示10条计划任务资产的指纹信息。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 计划任务的路径是否支持模糊查询。要设置支持模糊查询时，请将该参数的取值设置为**1**，其他值或取值为空则表示不支持模糊查询。
     * @example `1`
     */
    "Extend"?: string;
}
