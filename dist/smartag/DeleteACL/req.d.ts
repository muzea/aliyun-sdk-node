interface DeleteACLRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制ID。
    * @example `acl-ohlexqptfhy*******`
    */ "AclId": string;
    "OwnerId"?: number;
}
export { DeleteACLRequest };