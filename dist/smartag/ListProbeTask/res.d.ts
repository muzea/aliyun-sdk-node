export interface ListProbeTaskResponse {
    /**
     * 请求ID。
     * @example `324223F3-93D3-4CE4-B26F-66C0C3809922`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `successful`
     */
    Message: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 拨测任务配置信息列表。
     * @example `probe-xxx`
     */
    Data: {
        /**
         * 拨测任务ID。
         * @example `probe-****`
         */
        ProbeTaskId: string;
        /**
         * 拨测任务名称。
         * @example `test-ping`
         */
        TaskName: string;
        /**
         * 智能接入网关实例ID。
         * @example `sag-asdfz6ac74oj5v****`
         */
        SagId: string;
        /**
         * 智能接入网关设备序列号。
         * @example `sag****`
         */
        Sn: string;
        /**
         * 拨测任务类型。取值：
         * - **Internet**：公网拨测。
         * - **Intranet**：私网拨测。
         * @example `Internet`
         */
        Type: string;
        /**
         * 拨测任务协议。取值：
         * - **ICMP**。
         * - **TCP**。
         * - **HTTP**。
         * > 私网拨测仅支持ICMP和TCP协议。
         * @example `ICMP`
         */
        Protocol: string;
        /**
         * 拨测任务目的域名。
         * @example `www.example.com`
         */
        Domain: string;
        /**
         * 拨测协议端口号。
         * @example `80`
         */
        Port: number;
        /**
         * 拨测协议每分钟发包数。
         * @example `10`
         */
        PacketNumber: number;
        /**
         * 私网拨测源地址。
         * @example `192.168.1.1`
         */
        ProbeTaskSourceAddress: string;
        /**
         * 是否已启用拨测任务。取值：
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 创建时间。
         * @example `2022-11-23 14:09`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `2022-11-23 14:09`
         */
        GmtModify: string;
    }[];
}
