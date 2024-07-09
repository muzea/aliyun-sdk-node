export interface ListGatewayTupleOrdersRequest {
    /**
     * 工单状态过滤列表，若不使用此参数，则表示查询所有状态的工单。可取值为：
     * - APPLYING：申请中。
     * - REJECTED：已拒绝。
     * - ACCEPTING：分发中。
     * - ACCEPTED：分发成功。
     * - ACCEPTING_FAILED：分发失败。
     * - REVOKING：撤回中。
     * - REVOKED：撤回成功。
     * - REVOKING_FAILED：撤回失败。
     * @example `APPLYING`
     */
    "State"?: string[];
    /**
     * 本次查询的起始位置，从0开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 本次查询的工单数量上限，需大于等于1。
     * @example `10`
     */
    "Limit": number;
    /**
     * 查询结果排序字段。可取值为：
     * - **CREATED_MILLIS**：根据工单发起时间排序。
     * - **ACCEPTED_MILLIS**：根据工单审批通过时间排序。
     * @example `CREATED_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 需配合**SortingField**参数一起使用。
     * - **true**：表示升序。
     * - **false**：表示降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
