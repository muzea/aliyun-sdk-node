export interface DeleteACLRuleRequest {
    /**
     * 需要删除的访问控制规则所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要删除的访问规则所属的访问控制ID。
     * @example `acl-xhwhyuo43l0n*****`
     */
    "AclId": string;
    /**
     * 需要删除的访问控制规则ID。
     * @example `acr-c1hkd054qywiw******`
     */
    "AcrId": string;
}
