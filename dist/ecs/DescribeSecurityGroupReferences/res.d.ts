export interface DescribeSecurityGroupReferencesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    SecurityGroupReferences: {
        /**
         * 所有用户指定的安全组被授权的完整信息。
         */
        SecurityGroupReference: {
            /**
             * 对应用户要查询的一个安全组。
             * @example `sg-bp67acfmxazb4p****`
             */
            SecurityGroupId: string;
            ReferencingSecurityGroups: {
                /**
                 * 正在授权给这个安全组的其他安全组信息。
                 */
                ReferencingSecurityGroup: {
                    /**
                     * 安全组ID。
                     * @example `sg-bp67acfmxazb4j****`
                     */
                    SecurityGroupId: string;
                    /**
                     * 这个安全组所属用户ID。
                     * @example `123456****`
                     */
                    AliUid: string;
                }[];
            };
        }[];
    };
}
