export interface UpdateInstanceNetworkTypeRequest {
    /**
     * 实例id。
     * @example `hgprecn-cn-lbj35pw74002`
     */
    "instanceId"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 希望开启的网络类型列表，已有网络类型的组合，顺序无关。
         * 比如已经开启公网、内网和VPCSingleTunnel，如要关闭公网，
         * 则把公网类型去掉即可，即传递 “Intranet, VPCSingleTunnel” 。
         * @example `Internet,VPCSingleTunnel`
         */
        networkTypes: string;
        /**
         * VPC ID。
         * @example `vpc-t4netc3y5etlondfb5ra7`
         */
        vpcId: string;
        /**
         * 虚拟交换机id
         * @example `vsw-2vccsiymtqr9aavew0vo3`
         */
        vSwitchId: string;
        /**
         * vpc所属地域。
         * @example `cn-hangzhou`
         */
        vpcRegionId: string;
        /**
         * vpc 的ownerId，即阿里云账号ID。
         * @example `1999365732646672`
         */
        vpcOwnerId: string;
        /**
         * 是否从AnyTunnel转换成SingleTunnel（新实例无用，默认为null即可）
         * @example `true`
         */
        anyTunnelToSingleTunnel: string;
    };
}
