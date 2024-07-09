export interface DescribeSecurityGroupAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 安全组描述信息。
     * @example `testDescription1`
     */
    Description: string;
    /**
     * 目标安全组ID。
     * @example `sg-bp1gxw6bznjjvhu3****`
     */
    SecurityGroupId: string;
    /**
     * 目标安全组名称。
     * @example `testSecurityGroupName2`
     */
    SecurityGroupName: string;
    Permissions: {
        /**
         * 规则。
         */
        Permission: {
            /**
             * 创建时间，UTC时间。
             * @example `2018-12-12T07:28:38Z`
             */
            CreationTime: string;
            /**
             * 授权方向。
             * @example `ingress`
             */
            Direction: string;
            /**
             * 授权策略。
             * @example `Accept`
             */
            Policy: string;
            /**
             * 源端端口范围。
             * @example `80/80`
             */
            PortRange: string;
            /**
             * 源IP地址段，用于入方向授权。
             * @example `0.0.0.0/0`
             */
            SourceCidrIp: string;
            /**
             * IP协议。
             * @example `TCP`
             */
            IpProtocol: string;
            /**
             * 目标IP地址段，用于出方向授权。
             * @example `0.0.0.0/0`
             */
            DestCidrIp: string;
            /**
             * 规则优先级。
             * @example `1`
             */
            Priority: number;
            /**
             * 源端安全组端口范围。
             * @example `22/22`
             */
            SourcePortRange: string;
            /**
             * 描述信息。
             * @example `testDescription1`
             */
            Description: string;
        }[];
    };
}
