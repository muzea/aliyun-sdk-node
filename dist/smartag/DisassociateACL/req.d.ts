export interface DisassociateACLRequest {
    /**
     * 访问控制实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 访问控制实例ID。
     * @example `acl-xhwhyuo43l0****`
     */
    "AclId": string;
    /**
     * 需要与访问控制实例解除关联的智能接入网关实例ID。
     * @example `sag-ke3kq4evpi8****`
     */
    "SmartAGId": string;
}
