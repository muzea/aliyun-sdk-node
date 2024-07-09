export interface RejectResourceShareInvitationResponse {
    /**
     * 请求ID。
     * @example `E446D6DE-BFC8-5F37-A494-33D7B118147D`
     */
    RequestId: string;
    /**
     * 资源共享邀请信息。
     */
    ResourceShareInvitation: {
        /**
         * 资源共享邀请ID。
         * @example `i-yyTWbkjHArYh****`
         */
        ResourceShareInvitationId: string;
        /**
         * 共享单元ID。
         * @example `rs-JoA1Ayjm****`
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
         * @example `2022-09-02T07:07:30.809Z`
         */
        CreateTime: string;
        /**
         * 邀请状态。取值：
         * - Pending：等待确认。
         * - Accepted：已接受。
         * - Cancelled：已取消。
         * - Rejected：已拒绝。
         * - Expired：已过期。
         * @example `Rejected`
         */
        Status: string;
    };
}
