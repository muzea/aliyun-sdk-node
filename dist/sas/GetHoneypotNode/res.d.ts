export interface GetHoneypotNodeResponse {
    /**
     * 蜜罐管理节点数据。
     */
    HoneypotNode: {
        /**
         * 蜜罐管理节点ID。
         * @example `a7409a58-bc60-41af-9d36-080d58ae****`
         */
        NodeId: string;
        /**
         * 蜜罐管理节点名称。
         * @example `gmmc`
         */
        NodeName: string;
        /**
         * 蜜罐上限数量。
         * @example `10`
         */
        HoneypotTotalCount: number;
        /**
         * 蜜罐使用数量。
         * @example `5`
         */
        HoneypotUsedCount: number;
        /**
         * 探针上限数目。
         * @example `20`
         */
        ProbeTotalCount: number;
        /**
         * 探针使用数量。
         * @example `15`
         */
        ProbeUsedCount: number;
        /**
         * 管理节点状态。取值：
         * - **0**：准备中
         * - **1**：正常运行
         * - **2**：异常
         * - **4**：启动中
         * - **5**：升级中
         * @example `2`
         */
        TotalStatus: number;
        /**
         * 实例ID。
         * @example `i-2vccskxjunf1ag6w****`
         */
        EcsInstanceId: string;
        /**
         * 创建时间。
         * @example `2022-12-02 17:13:43`
         */
        CreateTime: string;
        /**
         * 放行网段集合。
         */
        SecurityGroupProbeIpList: string[];
        /**
         * 允许蜜罐访问外网。
         * - **true**：允许
         * - **false**：禁止
         * @example `true`
         */
        AllowHoneypotAccessInternet: boolean;
        /**
         * 节点IP地址。
         * @example `101.37.XX.XX`
         */
        NodeIp: string;
        /**
         * 该节点是否可升级大版本。取值：
         * - **true**：可升级
         * - **false**：不可升级
         * @example `true`
         */
        UpgradeAvailable: boolean;
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
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0A453658-070B-5554-B46C-867425BE4FD4`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
