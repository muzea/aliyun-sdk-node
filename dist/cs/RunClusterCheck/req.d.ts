export interface RunClusterCheckRequest {
    /**
     * 集群ID。
     * @example `ce0da5a1d627e4e9e9f96cae8ad07****`
     */
    "cluster_id"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 检查类型。
         * @example `NodePoolUpgrade`
         */
        type: string;
        /**
         * 检查目标。
         * @example `np1f6779297c4444a3a1cdd29be8e5****`
         */
        target: string;
        /**
         * 检查选项。
         */
        options: any;
    };
}
