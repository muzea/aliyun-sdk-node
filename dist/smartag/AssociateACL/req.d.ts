interface AssociateACLRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制ID。
    * @example `acl-ohlexqptfhy******`
    */ "AclId": string;
    /**
    * 需要绑定访问控制的智能网关实例。
    * @example `sag-4yr0p2xa6o3k*******`
    */ "SmartAGId": string;
    "OwnerId"?: number;
}
export { AssociateACLRequest };