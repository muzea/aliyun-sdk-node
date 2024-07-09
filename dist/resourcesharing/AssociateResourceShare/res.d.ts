export interface AssociateResourceShareResponse {
    /**
     * 请求ID。
     * @example `111FB84A-60A9-403E-9067-E55D7EE95BD1`
     */
    RequestId: string;
    /**
     * 共享单元关联的共享资源或资源使用者信息。
     */
    ResourceShareAssociations: {
        /**
         * 更新关联的时间。存在以下两种情况：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为更新资源的时间。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为更新资源使用者的时间。
         * @example `2020-12-04T09:40:41.246Z`
         */
        UpdateTime: string;
        /**
         * 关联实体ID。取值：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为资源ID。
         * - 当关联类型`AssociationType`为资源使用者`Target` 时，该参数为资源使用者ID。
         * @example `vsw-bp183p93qs667muql****`
         */
        EntityId: string;
        /**
         * 共享单元名称。
         * @example `test`
         */
        ResourceShareName: string;
        /**
         * 关联的时间。存在以下两种情况：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为添加资源的时间。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为添加资源使用者的时间。
         * @example `2020-12-04T09:40:41.246Z`
         */
        CreateTime: string;
        /**
         * 关联实体类型。取值：
         * - 当关联实体为资源时，该参数为资源类型。更多信息，请参见[支持资源共享的云服务](~~450526~~)。
         * - 当关联实体为资源使用者时，该参数为`Account`。
         * @example `VSwitch`
         */
        EntityType: string;
        /**
         * 共享单元ID。
         * @example `rs-6GRmdD3X****`
         */
        ResourceShareId: string;
        /**
         * 关联失败的原因。
         * @example `The reason for the association failure.`
         */
        AssociationStatusMessage: string;
        /**
         * 关联类型。取值：
         * - Resource：资源。
         * - Target：资源使用者。
         * @example `Resource`
         */
        AssociationType: string;
        /**
         * 关联状态。取值：
         * - Associating：关联中。
         * - Associated：已关联。
         * - Failed：关联失败。
         * - Disassociating：分离中。
         * - Disassociated：已分离。
         * > `Failed`和`Disassociated`状态的记录，会在48~96小时内被系统自动删除。
         * @example `Associating`
         */
        AssociationStatus: string;
        /**
         * 资源使用者属性。例如：资源共享的时间段。
         * >  仅当资源使用者为阿里云服务时返回设置该参数。
         * @example `{
            "plan":{
                "timeRangeType":"timeRange",
                "beginAtTime":"00:00",
                "timezone":"UTC+8",
                "endAtTime":"19:59"
            }
        }`
         */
        TargetProperty: string;
    }[];
}
