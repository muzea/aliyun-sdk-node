interface DisassociateACLRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制ID。
    * @example `acl-xhwhyuo43l0*******`
    */ "AclId": string;
    /**
    * 需要与访问控制解绑的智能接入网关实例ID。
    * @example `sag-ke3kq4evpi8********`
    */ "SmartAGId": string;
    "OwnerId"?: number;
}
export { DisassociateACLRequest };