export interface UpdateDataDispatchEnablingStateRequest {
    /**
     * 节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
    /**
     * - **true**：表示启用数据流转
     * - **false**：表示停用数据流转
     * @example `true`
     */
    "DataDispatchEnabled": boolean;
}
