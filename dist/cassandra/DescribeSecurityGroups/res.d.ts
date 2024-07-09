export interface DescribeSecurityGroupsResponse {
    /**
     * 请求ID。
     * @example `C300D7C1-C45C-45F3-965C-9C4C0B7CB266`
     */
    RequestId: string;
    SecurityGroupIds: {
        SecurityGroupId: string[];
    };
}
