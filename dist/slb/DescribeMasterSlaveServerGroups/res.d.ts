export interface DescribeMasterSlaveServerGroupsResponse {
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C`
     */
    RequestId: string;
    MasterSlaveServerGroups: {
        /**
         * 主备服务器组列表。
         */
        MasterSlaveServerGroup: {
            /**
             * 主备服务器组ID。
             * @example `rsp-0bfuc******`
             */
            MasterSlaveServerGroupId: string;
            /**
             * 主备服务器组的名称。
             * @example `Group3`
             */
            MasterSlaveServerGroupName: string;
            /**
             * 关联信息。
             */
            AssociatedObjects: {
                Listeners: {
                    /**
                     * 监听列表。
                     */
                    Listener: {
                        /**
                         * 监听端口。
                         * @example `80`
                         */
                        Port: number;
                        /**
                         * 监听协议。
                         * @example `tcp`
                         */
                        Protocol: string;
                    }[];
                };
            };
            /**
             * 传统型负载均衡实例创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2022-12-02T02:49:05Z`
             */
            CreateTime: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 资源的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                    /**
                     * 资源的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
