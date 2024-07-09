export interface GetVbrFlowTopNResponse {
    /**
     * 请求ID。
     * @example `A7F0D6EC-E19E-58AC-AC9F-08036763960F`
     */
    RequestId: string;
    /**
     * 混合云流量详情排名列表。
     */
    VirtualBorderRouterFlowlogTopN: {
        /**
         * 云端IP对应的云端地域。
         * @example `cn-shanghai`
         */
        CloudRegion: string;
        /**
         * 云端IP。
         * @example `120.24.X.X`
         */
        CloudIp: string;
        /**
         * IDC侧IP。
         * @example `222.85.X.X`
         */
        OtherIp: string;
        /**
         * 云端端口。
         * @example `80`
         */
        CloudPort: string;
        /**
         * IDC侧端口。
         * @example `10965`
         */
        OtherPort: string;
        /**
         * 协议号。
         * @example `6`
         */
        Protocol: string;
        /**
         * CEN的连接ID。
         * @example `tr-attach-u6v1j3jre0fe9h****`
         */
        AttachmentId: string;
        /**
         * 专线ID。
         * @example `vbr-k1atj46citwuek42j****`
         */
        VirtualBorderRouterId: string;
        /**
         * 指定时间段内的流量总和。
         * @example `108`
         */
        Bytes: number;
        /**
         * 指定时间段内的发包数总和。
         * @example `66`
         */
        Packets: number;
        /**
         * 账号ID。
         * @example `156237031628****`
         */
        AccountId: string;
    }[];
}
