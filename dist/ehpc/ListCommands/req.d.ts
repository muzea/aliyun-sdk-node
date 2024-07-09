export interface ListCommandsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 命令ID。
     * @example `c-hz01v8vudql****`
     */
    "CommandId"?: string;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。
     * 取值范围：1~50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
