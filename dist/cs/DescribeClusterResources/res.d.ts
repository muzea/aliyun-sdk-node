export type DescribeClusterResourcesResponse = {
    /**
     * 集群ID。
     * @example `cb95aa626a47740afbf6aa099b65****`
     */
    cluster_id: string;
    /**
     * 资源创建时间。
     * @example `2023-08-15T14:34:42+08:00`
     */
    created: string;
    /**
     * 资源ID。
     * @example `ngw-wz9sphwk42sdtjixo****`
     */
    instance_id: string;
    /**
     * 资源信息。关于资源的源信息，请参见[ListStackResources](~~133836~~)。
     * @example `{\"Id\":\"k8s_NAT_Gateway\",\"Name\":\"k8s_NAT_Gateway\",\"Type\":\"ALIYUN::VPC::NatGateway\",\"Status\":\"CREATE_COMPLETE\",\"StatusReason\":\"state changed\",\"Updated\":\"2023-08-15T06:33:10\",\"PhysicalId\":\"ngw-wz9sphwk42sdtjixo****\"}`
     */
    resource_info: string;
    /**
     * 资源类型。
     * @example `ALIYUN::VPC::NatGateway`
     */
    resource_type: string;
    /**
     * 资源状态。可选值：
     * - `CREATE_COMPLETE`：成功创建资源。
     * - `CREATE_FAILED`：创建资源失败。
     * - `CREATE_IN_PROGRESS`：创建资源中。
     * - `DELETE_FAILED`：删除资源失败。
     * - `DELETE_IN_PROGRESS`：删除资源中。
     * - `ROLLBACK_COMPLETE`：成功回滚。
     * - `ROLLBACK_FAILED`：回滚失败。
     * - `ROLLBACK_IN_PROGRESS`：回滚中。
     * @example `CREATE_COMPLETE`
     */
    state: string;
    /**
     * 资源是否由ACK创建：
     * - 1：表示由ACK创建
     * - 0：表示该资源为已有资源
     * @example `1`
     */
    auto_create: number;
    /**
     * 依赖资源列表。
     */
    dependencies: {
        /**
         * 依赖资源的集群ID。
         * @example `cc5ee03f63e43425cb6f71f1a1756****`
         */
        cluster_id: string;
        /**
         * 依赖资源类型。
         * @example `ALIYUN::VPC::NatGateway`
         */
        resource_type: string;
        /**
         * 依赖资源实例ID。
         * @example `ngw-wz9sphwk42sdtjixo****`
         */
        instance_id: string;
    }[];
    /**
     * 资源关联的k8s对象。
     */
    associated_object: {
        /**
         * k8s对象类型。
         * @example `Service`
         */
        kind: string;
        /**
         * k8s对象命名空间。
         * @example `kube-system`
         */
        namespace: string;
        /**
         * k8s对象名称。
         * @example `nginx-ingress-lb`
         */
        name: string;
    };
    /**
     * 删除集群时该资源的删除行为。
     */
    delete_behavior: {
        /**
         * 删除集群时是否默认删除该资源。
         * @example `false`
         */
        delete_by_default: boolean;
        /**
         * delete_by_default中返回的默认行为是否可以更改。
         * @example `false`
         */
        changeable: boolean;
    };
    /**
     * 该资源创建者的类型。可能的取值：
     * - user：由用户自行创建；
     * - system：由ACK管控系统创建；
     * - addon：由集群组件创建。
     * @example `addon`
     */
    creator_type: string;
    /**
     * 资源的其他信息。
     * @example `{"IP": "xx.xx.xx.xx"}`
     */
    extra_info: any;
}[];
