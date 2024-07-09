export interface CreateHoneypotProbeBindRequest {
    /**
     * 探针ID。
     * >调用[ListHoneypotProbe](~~ListHoneypotProbe~~)接口可以获取该参数。
     * @example `36bad711-d1ac-4419-ac68-c1aa280f****`
     */
    "ProbeId"?: string;
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****`
     */
    "HoneypotId"?: string;
    /**
     * 监听IP列表。
     */
    "ServiceIpList"?: string[];
    /**
     * 绑定端口列表。
     */
    "BindPortList"?: {
        /**
         * 目标端口。
         * @example `8080`
         */
        TargetPort: number;
        /**
         * 探针监听起始端口。
         * @example `80`
         */
        StartPort: number;
        /**
         * 探针监听结束端口。
         * @example `80`
         */
        EndPort: number;
        /**
         * 是否固定端口。取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
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
         * - **tcp**：表示TCP协议。
         * - **udp**：表示UDP协议。
         * @example `tcp`
         */
        Proto: string;
    }[];
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
