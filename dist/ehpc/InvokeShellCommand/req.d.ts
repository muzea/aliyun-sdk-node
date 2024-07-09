export interface InvokeShellCommandRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 命令内容。长度为2~2048个字符。
     * @example `echo "hello world"`
     */
    "Command": string;
    /**
     * 命令工作目录。默认值为`/root`。
     * @example `/home`
     */
    "WorkingDir"?: string;
    /**
     * 超时时间，超时将终止命令进程。单位：秒
     * 默认值：60
     * @example `3600`
     */
    "Timeout"?: number;
    /**
     * 执行命令的节点信息列表。
     */
    "Instance"?: {
        /**
         * 第N个执行命令的节点实例ID。
         * >用于限定执行范围，不指定则默认在集群所有节点上执行。
         * @example `i-bp1in9hmw3ur52x0****`
         */
        Id: string;
    }[];
}
