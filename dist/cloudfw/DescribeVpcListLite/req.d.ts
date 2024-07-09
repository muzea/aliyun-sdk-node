export interface DescribeVpcListLiteRequest {
    /**
     * 访问者源IP地址。
     * @example `58.34.174.194`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC的实例名称。
     * @example `vpc-shanghai`
     */
    "VpcName"?: string;
    /**
     * VPC实例ID。
     * @example `vpc-8vbwbo90rq0anm6t****`
     */
    "VpcId"?: string;
    /**
     * VPC所在的地域ID。
     * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-shanghai`
     */
    "RegionNo"?: string;
}
