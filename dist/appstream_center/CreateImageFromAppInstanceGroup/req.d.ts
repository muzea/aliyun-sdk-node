export interface CreateImageFromAppInstanceGroupRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 应用镜像名称。
     * @example `test_name`
     */
    "AppCenterImageName": string;
    /**
     * 交付组ID。可调用[ListAppInstanceGroup](~~428506~~)接口获取。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
}
