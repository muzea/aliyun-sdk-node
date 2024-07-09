export interface DisassociateResourceShareResponse {
    /**
     * 请求ID。
     * @example `95230BC9-A8E8-4493-96BD-4F0C758E37F8`
     */
    RequestId: string;
    /**
     * 共享单元关联的共享资源或资源使用者信息。
     */
    ResourceShareAssociations: {
        /**
         * 取消关联的更新时间。存在以下两种情况：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为移除资源的更新时间。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为移除资源使用者的更新时间。
         * @example `2020-12-04T09:40:45.556Z`
         */
        UpdateTime: string;
        /**
         * 关联实体ID。取值：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为资源ID。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为资源目录ID、资源夹ID或成员ID。
         * @example `172050525300****`
         */
        EntityId: string;
        /**
         * 共享单元名称。
         * @example `test`
         */
        ResourceShareName: string;
        /**
         * 取消关联的时间。存在以下两种情况：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为移除资源的时间。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为移除资源使用者的时间。
         * @example `2020-12-04T09:40:41.250Z`
         */
        CreateTime: string;
        /**
         * 关联实体类型。取值：
         * - 当关联实体为资源时，该参数为资源类型。更多信息，请参见[支持资源共享的云服务](~~450526~~)。
         * - 当关联实体为资源使用者时，该参数为Account。
         * @example `Account`
         */
        EntityType: string;
        /**
         * 共享单元ID。
         * @example `rs-6GRmdD3X****`
         */
        ResourceShareId: string;
        /**
         * 取消关联失败的原因。
         * @example `The Resources is invalid.`
         */
        AssociationStatusMessage: string;
        /**
         * 关联类型。取值：
         * - Resource：资源。
         * - Target：资源使用者。
         * @example `Target`
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
         * @example `Disassociating`
         */
        AssociationStatus: string;
        /**
         * 资源使用者属性。例如：资源共享的时间段。
         * > 仅当资源使用者为阿里云服务时返回该参数。
         * @example `{
            "timeRange":{
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
