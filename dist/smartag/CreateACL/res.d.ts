export interface CreateACLResponse {
    /**
     * 请求ID。
     * @example `EE837E9F-BD50-4C2B-9E47-260F9D848480`
     */
    RequestId: string;
    /**
     * 访问控制实例ID。
     * @example `acl-o6yol7zowii5n2****`
     */
    AclId: string;
    /**
     * 访问控制实例所属资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    ResourceGroupId: string;
    /**
     * 访问控制实例关联的智能接入网关实例类型。
     * @example `acl-hardware`
     */
    AclType: string;
}
