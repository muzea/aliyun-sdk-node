export interface CreateResourceResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 资源组ID。
     * @example `eas-r-h7lcw24dyqztwxxxxxx`
     */
    ResourceId: string;
    /**
     * 资源组名称。
     * @example `MyResource`
     */
    ResourceName: string;
    /**
     * 资源组所在集群ID。
     * @example `cn-shanghai`
     */
    ClusterId: string;
    /**
     * 资源组的Owner UID。
     * @example `14401087478****`
     */
    OwnerUid: string;
    /**
     * 机器实例ID列表。
     */
    InstanceIds: string[];
}
