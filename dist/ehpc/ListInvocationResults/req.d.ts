export interface ListInvocationResultsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 命令ID。
     * 您可以通过调用[ListCommands](~~87388~~)获取命令ID。
     * @example `c-hz01v8x80o3****`
     */
    "CommandId": string;
    /**
     * 需要查询的命令的运行状态。取值范围：
     * - Finished：已结束
     * - Running：运行中
     * - Failed：运行失败
     * - Stopped：已停止
     * @example `Finished`
     */
    "InvokeRecordStatus"?: string;
    /**
     * 当前页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。取值范围：1~50
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 执行命令的目标节点信息列表。
     */
    "Instance"?: {
        /**
         * 第N个执行命令的目标节点实例ID。
         * >用于限定执行范围，不指定则默认在集群所有节点上执行。
         * @example `i-uf65bh2113hlqvyr****`
         */
        Id: string;
    }[];
}
