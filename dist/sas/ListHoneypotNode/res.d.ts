export interface ListHoneypotNodeResponse {
    /**
     * 查询到的节点信息列表。
     */
    HoneypotNodeList: {
        /**
         * 节点ID。
         * @example `7d110ca6-05ee-4149-8042-13ad1a41fd****`
         */
        NodeId: string;
        /**
         * 节点名称。
         * @example `cyct_cnymu`
         */
        NodeName: string;
        /**
         * 蜜罐上限数量。
         * @example `10`
         */
        HoneypotTotalCount: number;
        /**
         * 蜜罐使用数量。
         * @example `2`
         */
        HoneypotUsedCount: number;
        /**
         * 探针上限数量。
         * @example `5`
         */
        ProbeTotalCount: number;
        /**
         * 探针使用数量。
         * @example `2`
         */
        ProbeUsedCount: number;
        /**
         * 管理节点状态。取值：
         * - **1**：正常
         * - **2**：异常
         * @example `1`
         */
        TotalStatus: number;
        /**
         * 实例ID。
         * @example `i-bp1fs3qsc1msa3512k****`
         */
        EcsInstanceId: string;
        /**
         * 节点创建时间。
         * @example `2022-08-04 15:52:56`
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
         * 节点类型。默认为**false**，取值：
         * - **false**：非默认
         * - **true**：默认
         * @example `false`
         */
        DefaultNode: boolean;
        /**
         * 节点IP。
         * @example `119.180.XX.XX`
         */
        NodeIp: string;
        /**
         * 该节点是否可升级。取值：
         * - **false**：非默认
         * - **true**：默认
         * @example `true`
         */
        UpgradeAvailable: boolean;
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `149`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示数据条数。
         * @example `2`
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
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `337BEA70-B03D-5370-8420-436F3FCD9924`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
