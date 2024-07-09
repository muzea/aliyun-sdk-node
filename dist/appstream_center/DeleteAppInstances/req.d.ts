export interface DeleteAppInstancesRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 交付组ID。可通过接口[ListAppInstanceGroup](~~428506~~)获取。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 应用实例ID列表。
     */
    "AppInstanceIds": string[];
}
