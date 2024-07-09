export interface DescribeVpcZoneRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 云防火墙成员账号的UID。
     * @example `1415189284827022`
     */
    "MemberUid"?: string;
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "RegionNo"?: string;
    /**
     * 环境。取值：
     * - **VPC**：VPC
     * - **TransitRouter**：TransitRouter
     * @example `VPC`
     */
    "Environment"?: string;
}
