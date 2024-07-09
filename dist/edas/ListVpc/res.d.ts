export interface ListVpcResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    VpcList: {
        /**
         * VPC列表
         */
        VpcEntity: {
            /**
             * VPC ID
             * @example `vpc-wz9pcq3jofczwpujq****`
             */
            VpcId: string;
            /**
             * VPC名称
             * @example `edas-default-vpc4`
             */
            VpcName: string;
            /**
             * VPC的状态是否可用
             * - true：可用
             * - false：不可用
             * @example `false`
             */
            Expired: boolean;
            /**
             * 用户ID
             * @example `edas_****_test@aliyun-****.com`
             */
            UserId: string;
            /**
             * 关联的ECS实例数量
             * @example `0`
             */
            EcsNum: number;
            /**
             * 所在地域
             * @example `cn-shenzhen`
             */
            RegionId: string;
        }[];
    };
}
