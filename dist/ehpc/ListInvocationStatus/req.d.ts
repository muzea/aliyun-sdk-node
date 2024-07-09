export interface ListInvocationStatusRequest {
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
}
