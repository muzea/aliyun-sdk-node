export interface ListGroupIdResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `95996EEB-D894-44FA-A87C-940F5CD9****`
     */
    RequestId: string;
    /**
     * 所查询的Group ID的详细信息。
     */
    Data: {
        /**
         * 该Group ID的最近一次更新时间。
         * @example `1564577317000`
         */
        UpdateTime: number;
        /**
         * 查询的Group ID所属实例的ID。
         * @example `post-cn-45910tj****`
         */
        InstanceId: string;
        /**
         * 该实例是否有独立命名空间。取值如下：
         * - **true**：有独立命名空间，该实例下的资源需保证命名唯一，跨实例可重名。
         * - **false**：无独立命名空间，该实例下的资源需保证全局命名唯一，跨实例不可重名。
         * @example `true`
         */
        IndependentNaming: boolean;
        /**
         * 查询到的属于该实例的Group ID。
         * @example `GID_test1`
         */
        GroupId: string;
        /**
         * 该Group ID的创建时间。
         * @example `1564577317000`
         */
        CreateTime: number;
    }[];
}
