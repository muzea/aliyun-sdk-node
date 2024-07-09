export interface DescribeContainerGroupEventsResponse {
    /**
     * 请求ID。
     * @example `1340C38D-6189-54D1-86F6-7D5ECF3E0088`
     */
    RequestId: string;
    /**
     * 返回的事件条数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 事件信息列表。
     */
    Data: {
        /**
         * ECI实例ID。
         * @example `eci-uf6fonnghi50v6nq****`
         */
        ContainerGroupId: string;
        /**
         * ECI实例名称。
         * @example `test`
         */
        Name: string;
        /**
         * ECI实例所在命名空间。
         * @example `redis`
         */
        Namespace: string;
        /**
         * ECI实例的UUID。
         * @example `3fc6b309-****-****`
         */
        uuid: string;
        /**
         * ECI实例的注解。
         * @example `"{\"tenancy.x-k8s.io/namespace\":\"redis\"}"`
         */
        Annotations: string;
        /**
         * 事件列表。
         */
        Events: {
            /**
             * 事件类型。可能值：
             * - Normal
             * - Warning
             * @example `Normal`
             */
            Type: string;
            /**
             * 事件数量。
             * @example `10`
             */
            Count: number;
            /**
             * 事件第一次出现的时间。
             * @example `2021-10-04T09:08:04Z`
             */
            FirstTimestamp: string;
            /**
             * 事件最后一次出现的时间。
             * @example `2021-10-04T09:08:04Z`
             */
            LastTimestamp: string;
            /**
             * 事件信息。
             * @example `Started container`
             */
            Message: string;
            /**
             * 事件原因。
             * @example `Started`
             */
            Reason: string;
            /**
             * 上报事件的组件。
             * @example `test`
             */
            ReportingComponent: string;
            /**
             * 上报事件的实例。
             * @example `test`
             */
            ReportingInstance: string;
            /**
             * 来源。
             */
            Source: {
                /**
                 * 组件。
                 * @example `kubelet`
                 */
                Component: string;
                /**
                 * 主机类型。
                 * @example `eci`
                 */
                Host: string;
            };
            /**
             * 事件关联的资源对象。
             */
            involvedObject: {
                /**
                 * 资源类型。
                 * @example `Pod`
                 */
                Kind: string;
                /**
                 * 资源名称。
                 * @example `test`
                 */
                Name: string;
                /**
                 * 资源所在命名空间。
                 * @example `default`
                 */
                Namespace: string;
                /**
                 * 资源ID。
                 * @example `eci-8vb5nkcq3a5cu0p3****`
                 */
                Uid: string;
                /**
                 * K8s版本。
                 * @example `v1`
                 */
                ApiVersion: string;
            };
            /**
             * 事件元数据。
             */
            Metadata: {
                /**
                 * 事件名称。
                 * @example `eci-uto-created-eci-for-ubuntu.167e3fb73cc7f9cb`
                 */
                Name: string;
                /**
                 * 命名空间。
                 * @example `default`
                 */
                Namespace: string;
            };
        }[];
    }[];
}
