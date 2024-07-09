export interface GetDebugAppInstanceRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 交付组ID。可通过`listAppInstanceGroup`接口获取。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
}
