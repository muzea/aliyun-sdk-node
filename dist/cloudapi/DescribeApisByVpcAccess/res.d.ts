export interface DescribeApisByVpcAccessResponse {
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求id
     * @example `4E707B25-5119-5ACF-9D26-7D2A2762F05C`
     */
    RequestId: string;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条目数
     * @example `12`
     */
    TotalCount: number;
    ApiVpcAccessInfos: {
        /**
         * 由apiinfo组成的数组格式，返回api的信息项
         */
        ApiVpcAccessInfo: {
            /**
             * API的ID
             * @example `09839002de484e76b5a213b040a6a3ca`
             */
            ApiId: string;
            /**
             * vpc id
             * @example `vpc-2ze7bj64wstznvftrskbk`
             */
            VpcId: string;
            /**
             * VPC授权中的实例ID或IP
             * @example `Ib-04e41XXXXXd95e9c1`
             */
            InstanceId: string;
            /**
             * 端口号
             * @example `443`
             */
            Port: number;
            /**
             * 所在的region
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * 运行环境编号
             * @example `57e17906a69b4424914fb1e05f67c78a`
             */
            StageId: string;
            /**
             * VPC授权的名称
             * @example `aliYun_service_prod`
             */
            VpcName: string;
            /**
             * 分组ID
             * @example `41c33748cbfb41f6b00870156203b72a`
             */
            GroupId: string;
            /**
             * API分组名称
             * @example `RT_PLU_IP_CTRL_group`
             */
            GroupName: string;
            /**
             * 描述，不超过200个字符
             * @example `123`
             */
            Description: string;
            /**
             * API的环境。
             * - **RELEASE**: 线上
             * - **PRE**: 预发
             * - **TEST**: 测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `iwc`
             */
            ApiName: string;
            /**
             * API请求路径
             * @example `/api/v1/friends/rc/status`
             */
            Path: string;
            /**
             * API的请求HTTP Method
             * @example `POST`
             */
            Method: string;
        }[];
    };
}
