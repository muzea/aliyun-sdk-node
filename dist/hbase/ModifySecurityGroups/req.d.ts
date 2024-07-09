export interface ModifySecurityGroupsRequest {
    /**
     * 集群ID
     * @example `hb-bp16f1441y6p2kv**`
     */
    "ClusterId": string;
    /**
     * 所属安全组id，逗号隔开
     * @example `sg-t4ng4yyc916o81nu****,sg-x4gg4dyc9d6w********`
     */
    "SecurityGroupIds": string;
}
