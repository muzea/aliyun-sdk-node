interface DeleteACLRuleRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 需要删除的访问规则所属的访问控制。
    * @example `acl-xhwhyuo43l0n*****`
    */ "AclId": string;
    /**
    * 需要删除的访问控制规则。
    * @example `acr-c1hkd054qywiw******`
    */ "AcrId": string;
    "OwnerId"?: number;
}
export { DeleteACLRuleRequest };