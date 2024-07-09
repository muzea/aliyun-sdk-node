export interface GetHoneypotProbeResponse {
    /**
     * 探针数据。
     */
    Data: {
        /**
         * 探针ID。
         * @example `40f6501d-45ec-4bf0-b813-0072ceb4****`
         */
        ProbeId: string;
        /**
         * 探针类型。取值：
         * -  **host_probe**：主机探针
         * -  **vpc\_black\_hole\_probe**：VPC黑洞探针
         * @example `host_probe`
         */
        ProbeType: string;
        /**
         * 探针名称。
         * @example `test-probe`
         */
        DisplayName: string;
        /**
         * 探针实例的操作系统类型，取值范围：
         * - windows：操作系统类型为Windows。
         * - linux：操作系统类型为Linux。
         * @example `windows`
         */
        OsType: string;
        /**
         * 探针版本。
         * @example `18060096`
         */
        ProbeVersion: string;
        /**
         * 探针绑定的本地地址。
         * @example `33.53.XX.XX`
         */
        HostIp: string;
        /**
         * 管理节点。
         */
        ControlNode: {
            /**
             * 管理节点ID。
             * @example `37a15ff1-3475-4897-aa6c-f7fd9122****`
             */
            NodeId: string;
            /**
             * 管理节点名称。
             * @example `online-honeypot`
             */
            NodeName: string;
            /**
             * 管理节点实例ID。
             * @example `i-bp19ijepxytwtzrk****`
             */
            EcsInstanceId: string;
        };
        /**
         * 检查项目ping。
         * @example `false`
         */
        Ping: boolean;
        /**
         * 检查项目arp。
         * @example `true`
         */
        Arp: boolean;
        /**
         * 部署时间。
         * @example `1669363825000`
         */
        DeployTime: number;
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
        Status: number;
        /**
         * 可监听IP列表。
         */
        ListenIpList: string[];
        /**
         * CPU占用。
         * @example `0.51`
         */
        CpuLoad: number;
        /**
         * 内存占用。
         * @example `1.94`
         */
        MemoryLoad: number;
        /**
         * 探针绑定的蜜罐服务列表。
         */
        HoneypotProbeBindList: {
            /**
             * 监听IP列表。
             */
            ServiceIpList: string[];
            /**
             * 绑定的蜜罐服务状态。取值：
             * -  **1**：服务异常
             * -  **3**：正常
             * @example `3`
             */
            Status: number;
            /**
             * 蜜罐ID。
             * @example `913347774a3b3c378c6a50f66de23dfa097765214ec3f0526b01c67bf59c****`
             */
            HoneypotId: string;
            /**
             * 绑定端口列表。
             */
            BindPortList: {
                /**
                 * 探针监听起始端口。
                 * @example `22`
                 */
                StartPort: number;
                /**
                 * 探针监听结束端口。
                 * @example `80`
                 */
                EndPort: number;
                /**
                 * 协议类型。
                 * @example `tcp`
                 */
                Proto: string;
                /**
                 * 是否固定端口。
                 * @example `false`
                 */
                Fixed: boolean;
                /**
                 * 目标端口。
                 * @example `80`
                 */
                TargetPort: number;
                /**
                 * 绑定端口记录唯一ID。
                 * @example `2512`
                 */
                Id: number;
                /**
                 * 是否绑定端口。
                 * @example `false`
                 */
                BindPort: boolean;
                /**
                 * 绑定服务端口错误。
                 * @example `portmap failed`
                 */
                Err: string;
                /**
                 * 绑定服务端口错误详情。
                 * @example `listen 22 tcp4 failed`
                 */
                Msg: string;
                /**
                 * 绑定服务端口状态。取值：
                 * -  **1**：服务异常
                 * -  **3**：正常
                 * @example `3`
                 */
                Status: number;
            }[];
            /**
             * 绑定服务的唯一ID。
             * @example `45378f64-d7b4-4a53-9c48-4303eb4b****`
             */
            BindId: string;
        }[];
        /**
         * 蜜罐监听端口探测服务列表。
         */
        HoneyPotProbeScanPort: {
            /**
             * 监听服务唯一ID。
             * @example `15389`
             */
            Id: number;
            /**
             * 探针唯一ID。
             * @example `a46f5162-c70d-4e26-8ddf-7435feca****`
             */
            ProbeId: string;
            /**
             * 监听的IP列表。
             */
            ServiceIpList: string[];
            /**
             * 监听服务状态。取值：
             * -  **1**：服务异常
             * -  **3**：正常
             * @example `3`
             */
            Status: number;
            /**
             * 监听端口。
             * @example `{
                "tcp": "1-65535",
                "udp": "1-65535"
            }`
             */
            Ports: string;
        };
        /**
         * 主机探针所在资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * 可监听IP列表。
         */
        CanListenIpList: string[];
        /**
         * VPC探针覆盖的网段列表。
         */
        CidrList: string[];
        /**
         * IDC部署代理IP。
         * @example `47.108.XX.XX`
         */
        ProxyIp: string;
        /**
         * VPC探针所在VPC实例的ID。
         * @example `vpc-2vchkxmf2j9yjt3x2****`
         */
        VpcId: string;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6550E0E6-FD6C-5F39-AB5E-35B30DCA97B5`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
