export interface ModifySecurityGroupsRequest {
    /**
     * 集群ID。
     * @example `cds-bp142mt7****136k`
     */
    "ClusterId": string;
    /**
     * 所属安全组ID，逗号隔开最多三个。
     * @example `sg-t4ng4yyc916o81nua6**,sg-******`
     */
    "SecurityGroupIds": string;
}
