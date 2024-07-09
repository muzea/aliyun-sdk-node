export interface AcceptResourceShareInvitationResponse {
    /**
     * 请求ID。
     * @example `08F18B04-47CB-5C0E-A6D2-37DEF5C2A961`
     */
    RequestId: string;
    /**
     * 资源共享邀请信息。
     */
    ResourceShareInvitation: {
        /**
         * 资源共享邀请ID。
         * @example `i-pMnItMX19fBJ****`
         */
        ResourceShareInvitationId: string;
        /**
         * 共享单元ID。
         * @example `rs-ysGRci9z****`
         */
        ResourceShareId: string;
        /**
         * 共享单元名称。
         * @example `example`
         */
        ResourceShareName: string;
        /**
         * 邀请者的阿里云账号ID。
         * @example `151266687691****`
         */
        SenderAccountId: string;
        /**
         * 被邀请者的阿里云账号ID。
         * @example `134254031178****`
         */
        ReceiverAccountId: string;
        /**
         * 邀请创建时间（UTC时间）。
         * @example `2022-09-02T06:43:12.353Z`
         */
        CreateTime: string;
        /**
         * 邀请状态。取值：
         * - Pending：等待确认。
         * - Accepted：接受邀请成功。
         * - Cancelled：已取消。
         * - Rejected：已拒绝。
         * - Expired：已过期。
         * - AcceptFailed：接受邀请失败。
         * @example `AcceptFailed`
         */
        Status: string;
        /**
         * 接受共享单元邀请检查失败详细原因。
         */
        AcceptInvitationFailedDetails: {
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
             * 共享资源ID。
             * @example `s-7xvh46nx5oqlre0wv***`
             */
            ResourceId: string;
            /**
             * 共享资源类型。
             * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
             * @example `Snapshot`
             */
            ResourceType: string;
            /**
             * 接受共享单元邀请检查失败时的原因。取值：
             * - Unavailable：资源不可以共享。
             * - LimitExceeded：资源可共享账号配额超限。
             * - ZonalResourceInaccessible： 资源在此地域不可用。
             * - InternalError：检查过程服务器内部出现错误。
             * @example `Unavailable`
             */
            FailureReason: string;
            /**
             * 接受共享单元邀请检查失败时的详细原因描述。
             * @example `You cannot access the specified resource at this time.`
             */
            FailureDescription: string;
            /**
             * 操作类型。取值：
             * - Associate：关联。
             * @example `Associate`
             */
            OperationType: string;
        }[];
    };
}
