export interface UpdateWorkspaceResourceRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `123`
     */
    "WorkspaceId": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 是否为默认资源，目前该参数只支持传入true，暂不支持false。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * **该字段已废弃，将会下线，请使用ResourceType字段**
         * @example `MaxCompute`
         */
        ProductType: string;
        /**
         * 分组名。
         * @example `group-kjds******sd`
         */
        GroupName: string;
        /**
         * 资源类型列表。取值如下：
         * - MaxCompute：大数据计算服务资源。
         * - ECS：通用计算资源
         * - Lingjun：灵骏智算资源
         * - ACS：ACS计算资源
         * - FLINK：Flink资源。
         * @example `MaxCompute`
         */
        ResourceType: string;
        /**
         * 资源标签集合。如果有多个标签，只有同时具备这些标签的资源才会被返回。
         */
        Labels: {
            /**
             * 标签的键。
             * @example `system.******`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `True`
             */
            Value: string;
        }[];
        /**
         * 资源ID集合。
         * GroupName与ResourceIds不能都为空，但可以都不为空；如果都不为空，集合内每个资源ID的GroupName必须一致。
         */
        ResourceIds: string[];
        /**
         * 资源的规格。
         * @example `{
              "clusterType": "share"
        }`
         */
        Spec: any;
    };
}
