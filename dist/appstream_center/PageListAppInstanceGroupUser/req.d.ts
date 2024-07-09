export interface PageListAppInstanceGroupUserRequest {
    /**
     * 交付组ID。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 每页的查询结果数量，不可超过`100`。建议填写该参数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 需展示的查询结果页码。建议填写该参数。
     * @example `1`
     */
    "PageNumber"?: number;
}
