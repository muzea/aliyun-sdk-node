export interface ListHoneypotProbeRequest {
    /**
     * 探针状态。取值：
     * - **installed**：安装成功
     * - **install_failed**：安装失败
     * - **online**：正常
     * - **offline**：离线
     * - **unnormal**：服务异常
     * - **unprobe**：未授权
     * - **uninstalling**：卸载中
     * - **uninstalled**：卸载成功
     * - **uninstall_failed**：卸载失败
     * - **not_exist**：未安装
     * @example `online`
     */
    "ProbeStatus"?: string;
    /**
     * 探针名称
     * @example `probe-test`
     */
    "DisplayName"?: string;
    /**
     * 探针类型。取值：
     * - **host_probe**：主机探针
     * - **vpc\_black\_hole_probe**：VPC黑洞探针
     * @example `host_probe`
     */
    "ProbeType"?: string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。起始值为**1**。默认值为**1**，表示从第**1**页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
