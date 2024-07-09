export interface ListSlbRequest {
    /**
     * VPC网络ID。
     * @example `vpc-bp1f90rfybszjogyw****`
     */
    "VpcId"?: string;
    /**
     * 地址类型：
     * - Internet：公网地址。
     * - Intranet：私网地址。
     * @example `internet`
     */
    "AddressType"?: string;
    /**
     * SLB类型：
     * - clb：传统型负载均衡。
     * - alb：应用型负载均衡。
     * @example `clb`
     */
    "SlbType"?: string;
}
