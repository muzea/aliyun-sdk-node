export interface ListResourceShareAssociationsResponse {
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `11BA57B5-7301-4E2F-BBA5-2AE4C2F4FCDB`
     */
    RequestId: string;
    /**
     * 共享资源或资源使用者信息。
     */
    ResourceShareAssociations: {
        /**
         * 更新关联的时间。存在以下两种情况：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为更新资源的时间。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为更新资源使用者的时间。
         * @example `2020-12-07T07:39:02.920Z`
         */
        UpdateTime: string;
        /**
         * 关联实体ID。取值：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为资源ID。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为资源使用者ID。
         * @example `vsw-bp1upw03qyz8n7us9****`
         */
        EntityId: string;
        /**
         * 共享单元名称。
         * @example `example`
         */
        ResourceShareName: string;
        /**
         * 关联的时间。存在以下两种情况：
         * - 当关联类型`AssociationType`为资源`Resource`时，该参数为添加或移除资源的时间。
         * - 当关联类型`AssociationType`为资源使用者`Target`时，该参数为添加或移除资源使用者的时间。
         * @example `2020-12-07T07:39:01.818Z`
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
         * @example `The reason for the association failure. `
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
         * @example `Failed`
         */
        AssociationStatus: string;
        /**
         * 资源使用者是否为资源目录外账号。取值：
         * - true：资源目录外账号。
         * - false：资源目录内账号。
         * @example `false`
         */
        External: boolean;
        /**
         * 资源使用者属性。例如：资源共享的时间段。`timeRangeType`取值：
         * - timeRange：指定时间段。
         * - day：全天。
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
        /**
         * 关联或解除关联资源或者资源使用者检查失败详细原因。
         */
        AssociationFailedDetails: {
            /**
             * 已弃用。请使用FailureReason。
             * @example `无`
             */
            Status: string;
            /**
             * 已弃用。请使用FailureDescription。
             * @example `无`
             */
            StatusMessage: string;
            /**
             * 已弃用。请使用OperationType。
             * @example `无`
             */
            AssociateType: string;
            /**
             * 关联实体ID。取值：
             * * 当关联类型AssociationType为资源Resource时，该参数为资源使用者ID。
             * * 当关联类型AssociationType为资源使用者Target时，该参数为资源ID。
             * @example `172050525300****`
             */
            EntityId: string;
            /**
             * 关联实体类型。取值：
             * * 当关联实体为资源时，该参数为资源类型。更多信息，请参见支持资源共享的云服务。
             * * 当关联实体为资源使用者时，该参数为`ResourceDirectory`、`Folder`、`Account`或`Service`。
             * @example `Account`
             */
            EntityType: string;
            /**
             * 关联或解除关联失败时的原因。 取值：
             * - Unavailable：资源不存在等情况导致共享失败。
             * - LimitExceeded：资源可共享的目标Quota超出上限。
             * - ZonalResourceInaccessible： 资源在此地域不可用。
             * - InternalError：服务器内部出现错误。
             * - UnsupportedOperation：不支持执行操作。
             * @example `Unavailable`
             */
            FailureReason: string;
            /**
             * 关联或解除关联失败时的详细原因描述。
             * @example `You cannot access the specified resource at this time.`
             */
            FailureDescription: string;
            /**
             * 操作类型。取值：
             * - Associate：关联。
             * - Disassociate：解除关联。
             * @example `Associate`
             */
            OperationType: string;
        }[];
    }[];
}
