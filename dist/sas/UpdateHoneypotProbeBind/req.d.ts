export interface UpdateHoneypotProbeBindRequest {
    /**
     * 探针服务端口ID。
     * @example `1906`
     */
    "Id"?: number;
    /**
     * 探针ID。
     * >调用[ListHoneypotProbe](~~ListHoneypotProbe~~)接口可以获取该参数。
     * @example `36bad711-d1ac-4419-ac68-c1aa280f****
    `
     */
    "ProbeId"?: string;
    /**
     * 绑定服务的唯一ID。
     * @example `f52e8624-e43c-473c-8312-e0fed384****
    `
     */
    "BindId"?: string;
    /**
     * 服务绑定类型。取值：
     * - **forward_honey**：转发到蜜罐
     * - **scan_port**：监听扫描
     * @example `forward_honey`
     */
    "BindType"?: string;
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****
    `
     */
    "HoneypotId"?: string;
    /**
     * 监听IP列表。
     */
    "ServiceIpList"?: string[];
    /**
     * 监听端口范围。
     * @example `{\"tcp\":\"1-65535\",\"udp\":\"1-65535\"}
    `
     */
    "Ports"?: string;
    /**
     * 监听端口状态设置。
     * @example `0`
     */
    "SetStatus"?: number;
    /**
     * 绑定端口列表。
     */
    "BindPortList"?: {
        /**
         * 绑定端口唯一标识。
         * @example `3183`
         */
        Id: number;
        /**
         * 目标端口。
         * @example `80`
         */
        TargetPort: number;
        /**
         * 探针监听起始端口。
         * @example `81`
         */
        StartPort: number;
        /**
         * 探针监听结束端口。
         * @example `81`
         */
        EndPort: number;
        /**
         * 是否固定端口。取值：
         * - **0**：否
         * - **1**：是
         * @example `0`
         */
        Fixed: boolean;
        /**
         * 是否绑定端口。取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        BindPort: boolean;
        /**
         * 协议类型。取值：
         * - **tcp**
         * - **udp**
         * @example `tcp`
         */
        Proto: string;
    }[];
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
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
