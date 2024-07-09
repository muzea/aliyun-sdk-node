export interface AcceptHandshakeResponse {
    /**
     * 请求ID。
     * @example `5828C836-3286-49A6-9006-15231BB19342`
     */
    RequestId: string;
    /**
     * 邀请信息。
     */
    Handshake: {
        /**
         * 邀请状态。取值：
         * - Pending：等待确认。
         * - Accepted：已接受。
         * - Cancelled：已取消。
         * - Declined：已拒绝。
         * - Expired：超时。
         * @example `Accepted`
         */
        Status: string;
        /**
         * 邀请的过期时间（UTC时间）。
         * @example `2021-01-20T02:15:40Z`
         */
        ExpireTime: string;
        /**
         * 资源目录ID。
         * @example `rd-3G****`
         */
        ResourceDirectoryId: string;
        /**
         * 邀请的创建时间（UTC时间）。
         * @example `2021-01-06T02:15:40Z`
         */
        CreateTime: string;
        /**
         * 备注。
         * @example `欢迎您加入`
         */
        Note: string;
        /**
         * 被邀请的阿里云账号ID或登录邮箱。
         * @example `177242285274****`
         */
        TargetEntity: string;
        /**
         * 资源目录的管理账号ID。
         * @example `151266687691****`
         */
        MasterAccountId: string;
        /**
         * 资源目录的管理账号名称。
         * @example `CompanyA`
         */
        MasterAccountName: string;
        /**
         * 邀请的修改时间（UTC时间）。
         * @example `2021-01-06T02:16:40Z`
         */
        ModifyTime: string;
        /**
         * 被邀请的阿里云账号类型。取值：
         * - Account：阿里云账号ID。
         * - Email：阿里云账号登录邮箱。
         * @example `Account`
         */
        TargetType: string;
        /**
         * 邀请ID。
         * @example `h-Ih8IuPfvV0t0****`
         */
        HandshakeId: string;
    };
}
