export interface ListHoneypotProbeResponse {
    /**
     * 蜜罐探针数据列表。
     */
    List: {
        /**
         * 探针ID。
         * @example `4d167bb3-dd09-4a6a-a179-d5d6a5b0****`
         */
        ProbeId: string;
        /**
         * 探针类型。取值：
         * - **host_probe**：主机探针
         * - **vpc\_black\_hole_probe**：VPC黑洞探针
         * @example `host_probe`
         */
        ProbeType: string;
        /**
         * 探针版本。
         * @example `18060096`
         */
        ProbeVersion: string;
        /**
         * 探针名称。
         * @example `prod-pinpoint-hd1b `
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
         * 探针绑定的本地地址。
         * @example `33.53.XX.XX`
         */
        HostIp: string;
        /**
         * 管理节点数据。
         */
        ControlNode: {
            /**
             * 节点ID。
             * @example `8ec9da17-c0e7-4642-aad6-defc9722****`
             */
            NodeId: string;
            /**
             * 节点名称。
             * @example `HoneypotNode1`
             */
            NodeName: string;
            /**
             * ECS的实例ID。
             * @example `i-uf6eq0rlvu1mkh0p****`
             */
            EcsInstanceId: string;
        };
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
        Status: string;
        /**
         * 主机探针所在资产实例的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * vpc探针所在vpc实例的ID。
         * @example `vpc-5gu8iu68w9b472jbb****`
         */
        VpcId: string;
    }[];
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的蜜罐探针的数量。默认值为**20**，表示每页显示20条蜜罐探针信息。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的蜜罐探针数据的总数量。
         * @example `30`
         */
        TotalCount: number;
        /**
         * 当前页显示的蜜罐探针的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4BC9E610-21BE-537F-82EF-144A60D5A970`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
