export interface ListNodeTupleOrdersRequest {
    /**
     * 工单状态过滤，如未传入此参数，则不限制工单状态。
     * 工单状态取值请参见下方类型说明。
     * @example `APPLYING`
     */
    "State"?: string[];
    /**
     * 是否是Kpm发起的工单。
     * @example `true`
     */
    "IsKpm"?: boolean;
    /**
     * 本次查询的起始位置，从0开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 本次查询的工单数量上限，须大于等于1。
     * @example `10`
     */
    "Limit": number;
    /**
     * 查询结果的排序字段，可取值为：
     * - CREATED_MILLIS：根据工单发起时间排序。
     * - ACCEPTED_MILLIS：根据工单审批通过时间排序。
     * @example `CREATED_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 需配合**SortingField**字段一起使用。
     * - **true**：表示升序。
     * - **false**：表示降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
