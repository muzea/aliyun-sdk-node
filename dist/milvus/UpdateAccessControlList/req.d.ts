export interface UpdateAccessControlListRequest {
    /**
     * 实例ID。
     * @example `c-123xxx`
     */
    "InstanceId"?: string;
    /**
     * Cidr块。
     * @example `192.168.**.**​/24,172.1.**.**​/16`
     */
    "Cidr"?: string;
    /**
     * 公网访问控制ID。
     * @example `acl-123xxx`
     */
    "AclId"?: string;
}
