export interface ListAppInstancesRequest {
    /**
     * 交付组ID。
     * @example `aig-4p5f8tj16yb8b****`
     */
    "AppInstanceGroupId": string;
    /**
     * 应用实例ID。
     * @example `ai-azn3kmwruh1vl****`
     */
    "AppInstanceId"?: string;
    /**
     * 应用实例状态列表。
     */
    "Status"?: string[];
    /**
     * 应用实例ID列表，最大长度为100。
     */
    "AppInstanceIdList"?: string[];
    /**
     * 每页的查询结果数量，不可超过`100`。默认值为`20`。建议填写该参数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 需展示的查询结果页码。默认值为`1`。建议填写该参数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 是否查询已删除的实例信息。
     * 该参数为true时AppInstanceIdList的字段必填，否则会报参数错误。
     * @example `true`
     */
    "IncludeDeleted"?: boolean;
}
