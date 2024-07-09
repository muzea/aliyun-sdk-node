export interface DescribeSecurityGroupsResponse {
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 安全组列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时分页总页数。
     * @example `49`
     */
    TotalCount: number;
    SecurityGroups: {
        /**
         * 安全组。
         */
        SecurityGroup: {
            /**
             * 创建时间。按照ISO8601标准表示，并需要使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-11-01T06:08:46Z`
             */
            CreationTime: string;
            /**
             * 关联实例数量。
             * @example `5`
             */
            InstanceCount: number;
            /**
             * 安全组描述信息。
             * @example `TestDescription`
             */
            Description: string;
            /**
             * 安全组ID。
             * @example `sg-bp67acfmxazb4ph***`
             */
            SecurityGroupId: string;
            /**
             * 安全组名称。
             * @example `DocTest`
             */
            SecurityGroupName: string;
        }[];
    };
}
