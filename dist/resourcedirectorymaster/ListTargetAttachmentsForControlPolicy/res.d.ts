export interface ListTargetAttachmentsForControlPolicyResponse {
    /**
     * 绑定的目标节点数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `B32BD3D6-1089-41F3-8E70-E0079BC7D760`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    TargetAttachments: {
        /**
         * 绑定的目标节点列表。
         */
        TargetAttachment: {
            /**
             * 绑定的目标节点ID。
             * @example `fd-ZDNPiT****`
             */
            TargetId: string;
            /**
             * 绑定的目标节点名称。
             * @example `Dev_Department`
             */
            TargetName: string;
            /**
             * 管控策略绑定时间。
             * @example `2021-03-19T02:56:24Z`
             */
            AttachDate: string;
            /**
             * 绑定的目标节点类型。取值：
             * - Root：Root节点。
             * - Folder：资源夹。
             * - Account：成员账号。
             * @example `Folder`
             */
            TargetType: string;
        }[];
    };
}
