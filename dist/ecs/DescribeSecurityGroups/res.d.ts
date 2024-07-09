export interface DescribeSecurityGroupsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 安全组所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 本次调用返回的查询凭证（Token）。当使用MaxResults和NextToken方式进行分页查询，且该返回值为空时，表示无更多返回的数据信息。
     * @example `e71d8a535bd9cc11`
     */
    NextToken: string;
    SecurityGroups: {
        /**
         * 安全组信息集合。
         */
        SecurityGroup: {
            /**
             * 安全组ID。
             * @example `sg-bp67acfmxazb4p****`
             */
            SecurityGroupId: string;
            /**
             * 安全组名称。
             * @example `SGTestName`
             */
            SecurityGroupName: string;
            /**
             * 安全组描述信息。
             * @example `TestDescription`
             */
            Description: string;
            /**
             * 安全组类型。可能值：
             * - normal：普通安全组。
             * - enterprise：企业安全组。
             * @example `normal`
             */
            SecurityGroupType: string;
            /**
             * 安全组所属的专有网络。
             * @example `vpc-bp67acfmxazb4p****`
             */
            VpcId: string;
            /**
             * 创建时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddThh:mmZ。
             * @example `2021-08-31T03:12:29Z`
             */
            CreationTime: string;
            /**
             * 安全组中已经容纳的私网IP数量，参见[安全组容量](~~605897#section-kj9-e46-6v5~~)。
             * 当入参IsQueryEcsCount传入True时，该参数返回值有效。
             * > 该参数已废弃。返回值中的数量仅供参考，非实时一致。
             * @example `0`
             */
            EcsCount: number;
            /**
             * 安全组中还可加入的私网IP数量，参见[安全组容量](~~605897#section-kj9-e46-6v5~~)。
             * 当入参IsQueryEcsCount传入True时，该参数返回值有效。
             * > 该参数已废弃。返回值中的数量仅供参考，非实时一致。
             * @example `0`
             */
            AvailableInstanceAmount: number;
            /**
             * 安全组所在的企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 安全组的使用者是否为云产品或虚商。
             * @example `false`
             */
            ServiceManaged: boolean;
            /**
             * 安全组对应的虚商ID。
             * @example `12345678910`
             */
            ServiceID: number;
            Tags: {
                /**
                 * 安全组的标签。
                 */
                Tag: {
                    /**
                     * 安全组的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 安全组的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
    /**
     * 安全组的总数。当您使用`MaxResults`与`NextToken`参数查询时，不会返回该参数值。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `10`
     */
    PageSize: number;
}
