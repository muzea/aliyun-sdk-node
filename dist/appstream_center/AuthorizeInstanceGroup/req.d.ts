export interface AuthorizeInstanceGroupRequest {
    /**
     * 交付组ID。可调用[ListAppInstanceGroup](~~428506~~)接口获取。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 要添加交付组授权的用户名列表。可设置1\~100个。
     */
    "AuthorizeUserIds"?: string[];
    /**
     * 要移除交付组授权的用户名列表。可设置1\~100个。
     */
    "UnAuthorizeUserIds"?: string[];
}
