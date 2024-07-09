export interface ListTargetsForPolicyResponse {
    /**
     * 目标节点列表。
     */
    Targets: {
        /**
         * 目标节点ID。
         * @example `195320939469****`
         */
        TargetId: string;
        /**
         * 目标节点类型。取值：
         * - USER：当前登录账号。适用单账号模式。
         * - ROOT：资源目录中的Root资源夹。适用多账号模式。
         * - FOLDER：资源目录中的资源夹。适用多账号模式。
         * - ACCOUNT：资源目录中的成员。适用多账号模式。
         * @example `ACCOUNT`
         */
        TargetType: number;
    }[];
    /**
     * 请求ID。
     * @example `2EE71C8D-6DB8-56AC-8B05-3D4C0116E6A1`
     */
    RequestId: string;
    /**
     * 是否为资源目录中的节点。取值：
     * - true：目标节点是资源目录中的节点。适用多账号模式。
     * - false：目标节点不是资源目录中的节点。适用单账号模式。
     * @example `true`
     */
    IsRd: boolean;
    /**
     * 资源目录ID。
     * > 仅多账号模式返回该参数。
     * @example `rd-3G****`
     */
    RdId: string;
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
}
