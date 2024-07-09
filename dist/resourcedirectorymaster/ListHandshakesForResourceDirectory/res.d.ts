export interface ListHandshakesForResourceDirectoryResponse {
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Handshakes: {
        /**
         * 邀请信息。
         */
        Handshake: {
            /**
             * 邀请状态。
             * - Pending：等待确认。
             * - Accepted：已接受。
             * - Cancelled：已取消。
             * - Declined：已拒绝。
             * - Expired：超时。
             * @example `Pending`
             */
            Status: string;
            /**
             * 邀请的过期时间（UTC时间）。
             * @example `2018-08-24T09:55:41Z`
             */
            ExpireTime: string;
            /**
             * 资源目录ID。
             * @example `rd-abcdef****`
             */
            ResourceDirectoryId: string;
            /**
             * 邀请的创建时间（UTC时间）。
             * @example `2018-08-10T09:55:41Z`
             */
            CreateTime: string;
            /**
             * 备注。
             * @example `欢迎您加入`
             */
            Note: string;
            /**
             * 被邀请账号ID或登录邮箱。
             * @example `someone@example.com`
             */
            TargetEntity: string;
            /**
             * 资源目录管理账号ID。
             * @example `172841235500****`
             */
            MasterAccountId: string;
            /**
             * 资源目录管理账号名称。
             * @example `Alice`
             */
            MasterAccountName: string;
            /**
             * 邀请的修改时间（UTC时间）。
             * @example `2018-08-10T09:55:41Z`
             */
            ModifyTime: string;
            /**
             * 被邀请账号类型。
             * - Account：账号ID。
             * - Email：账号登录邮箱。
             * @example `Email`
             */
            TargetType: string;
            /**
             * 邀请ID。
             * @example `h-ycm4rp****`
             */
            HandshakeId: string;
        }[];
    };
}
