export interface DescribeIpLocationServiceResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C728D7E9-9A39-52E0-966B-5C33118BDBB0`
     */
    RequestId: string;
    /**
     * 资产实例详情。
     */
    Instance: {
        /**
         * 实例ID。
         * @example `i-bp1cb6x80tfgocid****`
         */
        InstanceId: string;
        /**
         * 实例的名称。
         * @example `launch-advisor-2021****`
         */
        InstanceName: string;
        /**
         * 公网IP资产的IP地址。
         * @example `121.199.XX.XX`
         */
        InternetIp: string;
        /**
         * 公网IP资产的实例类型。取值：
         * - ecs：表示云服务器ECS实例。
         * - slb：表示负载均衡SLB实例。
         * - eip：表示弹性公网IP实例。
         * @example `ecs`
         */
        InstanceType: string;
        /**
         * 公网IP资产的IP归属地域。
         * @example `cn-hangzhou`
         */
        Region: string;
    };
}
