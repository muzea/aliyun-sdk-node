export interface ListPortalMenuAuthorizationResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 门户菜单的授权详情列表。
     */
    Result: {
        /**
         * 是否仅授权可见。取值范围：
         * - true：仅授权可见
         * - false：都可见
         * @example `true`
         */
        ShowOnlyWithAccess: boolean;
        /**
         * 数据门户的叶子节点菜单ID。
         * @example `54kqgoa****`
         */
        MenuId: string;
        /**
         * 菜单所授权的对象详情。
         */
        Receivers: {
            /**
             * 授权对象ID。
             * @example `121344444790****`
             */
            ReceiverId: string;
            /**
             * 授权对象类型。取值范围：
             * - 0：用户
             * - 1：用户组
             * @example `0`
             */
            ReceiverType: number;
        }[];
    }[];
}
