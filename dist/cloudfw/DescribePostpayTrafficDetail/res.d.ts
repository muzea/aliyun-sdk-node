export interface DescribePostpayTrafficDetailResponse {
    /**
     * 流量统计总条数。
     * @example `132`
     */
    TotalCount: number;
    /**
     * 返回结果的请求ID。
     * @example `0525EADE-C112-5702-A5BC-0E2F6F94DB23`
     */
    RequestId: string;
    /**
     * 流量统计列表。
     */
    TrafficList: {
        /**
         * 流量统计日期。
         * @example `20231001`
         */
        TrafficDay: string;
        /**
         * 统计流量的边界类型。取值：
         *
         * - **EIP_TRAFFIC**：互联网边界流量。
         *
         * - **NatGateway_TRAFFIC**：NAT边界流量。
         * - **VPC_TRAFFIC**：VPC边界流量。
         * @example `EIP_TRAFFIC`
         */
        TrafficType: string;
        /**
         * 资产实例的ID。
         * @example `i-8vb2d7c9mtn0bo9qcraq`
         */
        InstanceId: string;
        /**
         * 资源ID。互联网边界为资产的公网IP，NAT边界为资产的防火墙实例ID。
         * @example `39.106.146.214`
         */
        ResourceId: string;
        /**
         * 资产类型。仅互联网边界该值生效。
         * @example `EcsPublicIP`
         */
        InstanceType: string;
        /**
         * 出方向和入方向总的网络吞吐量（总共发送和接收多少字节）。单位：Byte。
         * @example `1215096939`
         */
        TotalBytes: number;
        /**
         * 入方向的网络吞吐量（总计字节数）。单位：Byte。
         * @example `1115096939`
         */
        InBytes: number;
        /**
         * 出方向的网络吞吐量（总计字节数）。单位：Byte。
         * @example `100000000`
         */
        OutBytes: number;
    }[];
}
