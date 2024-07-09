export interface DescribeVpcAccessesResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `8883AC74-259D-4C0B-99FC-0B7F9A588B2F`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `1`
     */
    TotalCount: number;
    VpcAccessAttributes: {
        /**
         * 由 VpcAccessAttribute 组成的数组格式，返回VPC授权信息
         */
        VpcAccessAttribute: {
            /**
             * 专用网络ID
             * @example `vpc-uf657qec7lx42paw3qxxx`
             */
            VpcId: string;
            /**
             * VPC授权的描述
             * @example `测试`
             */
            Description: string;
            /**
             * 专用网络中的实例ID（ECS/SLB）
             * @example `i-uf6bzcg1pr4oh5jjmxxx`
             */
            InstanceId: string;
            /**
             * 实例对应的端口号
             * @example `80`
             */
            Port: number;
            /**
             * 授权名称
             * @example `test`
             */
            Name: string;
            /**
             * 创建时间
             * @example `2017-01-30T04:10:19Z`
             */
            CreatedTime: string;
            /**
             * 地域ID
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * vpc授权ID
             * @example `vpc-*****ssds24`
             */
            VpcAccessId: string;
            /**
             * 后端服务的host
             * @example `hos-a***.fh-**nc.com`
             */
            VpcTargetHostName: string;
            Tags: {
                /**
                 * 标签。
                 */
                TagInfo: {
                    /**
                     * 标签键。
                     * @example `PROJECT`
                     */
                    Key: string;
                    /**
                     * 标签值
                     * @example `6427a17ae6041d1be62414e4`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
