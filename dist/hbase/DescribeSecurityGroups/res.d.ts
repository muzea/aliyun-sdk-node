export interface DescribeSecurityGroupsResponse {
    /**
     * 请求id
     * @example `50373857-C47B-4B64-9332-D0B5280B59EA`
     */
    RequestId: string;
    SecurityGroupIds: {
        SecurityGroupId: string[];
    };
}
