export interface CreateServiceLinkedRoleRequest {
    /**
     * 服务名称。
     * 具体信息，请参见[支持服务关联角色的云服务](~~461722~~)。
     * @example `polardb.aliyuncs.com`
     */
    "ServiceName": string;
    /**
     * 角色名称后缀。
     * 角色名称（含后缀）的总长度为1~64个字符，可包含英文字母、数字、半角句号（.）和短划线（-）。
     * 例如：假设后缀为`Example`，则角色名称为`ServiceLinkedRoleName_Example`，且最大长度不能超过64个字符。
     * @example `Example`
     */
    "CustomSuffix"?: string;
    /**
     * 服务关联角色描述。
     * 只有允许自定义后缀的服务关联角色才能填写角色描述，否则，角色描述将使用预设值且不能修改。
     * 长度为1~1024个字符。
     * @example `Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.`
     */
    "Description"?: string;
}
