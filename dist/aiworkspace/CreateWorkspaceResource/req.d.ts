export interface CreateWorkspaceResourceRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `123`
     */
    "WorkspaceId": string;
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 资源列表。
         */
        Resources: {
            /**
             * 资源名。格式如下。
             * - 长度为3~28个字符，以字母开头，只能包含字母、数字和下划线（_）。
             * - 同地域内唯一。
             * @example `ResourceName`
             */
            Name: string;
            /**
             * **该字段已废弃，将会下线，请使用ResourceType字段**
             * @example `MaxCompute`
             */
            ProductType: string;
            /**
             * 环境类型， 取值如下：
             * - dev：开发环境。
             * - prod：生产环境。
             * @example `prod`
             */
            EnvType: string;
            /**
             * 所属的工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
             * @example `123`
             */
            WorkspaceId: string;
            /**
             * 是否为默认资源（每种资源类型有一个默认的资源）。取值如下：
             * - false（默认值）：不是默认资源。
             * - true：是默认资源。
             * @example `false`
             */
            IsDefault: boolean;
            /**
             * 资源配额列表，目前只有MaxCompute资源有资源配额。
             */
            Quotas: {
                /**
                 * 资源配额ID。如何获取资源配额ID，请参见[ListQuotas](~~449144~~)。
                 * @example `232892******92912`
                 */
                Id: string;
            }[];
            /**
             * 资源规格说明，JSON格式。
             * @example `对于MaxCompute {"Endpoint": "odps.alibaba-inc.com", "Project": "mignshi"}`
             */
            Spec: any;
            /**
             * 资源分组名，主账户内唯一。
             * @example `groupName`
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
             * 资源标签数组。
             */
            Labels: {
                /**
                 * 标签的Key。
                 * @example `system.support.eas`
                 */
                Key: string;
                /**
                 * 标签的Value。
                 * @example `true`
                 */
                Value: string;
            }[];
        }[];
        /**
         * 创建行为，取值如下：
         * - CreateAndAttach：创建资源并绑定到工作空间。
         * - Attach：绑定资源到工作空间。
         * @example `CreateAndAttach`
         */
        Option: string;
    };
}
