interface ModifyACLRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制ID。
    * @example `acl-e30a66to95cs******`
    */ "AclId": string;
    /**
    * 访问控制名称。
    * @example `test`
    */ "Name": string;
    "OwnerId"?: number;
}
export { ModifyACLRequest };