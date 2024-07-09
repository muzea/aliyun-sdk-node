export interface EnableKibanaPvlNetworkRequest {
    /**
     * 当前实例ID。
     * @example `es-cn-n6w1oxxx****`
     */
    "InstanceId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 终端节点名称。
         * @example `es-cn-27a3mul6l000xxx-kibana-endpoint`
         */
        endpointName: string;
        /**
         * 安全组。
         */
        securityGroups: string[];
        /**
         * 交换机及可用区信息。
         */
        vSwitchIdsZone: {
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp194pz9iezj6h1n5****`
             */
            vswitchId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            zoneId: string;
        }[];
        /**
         * VPC实例ID。
         * @example `vpc-bp19ip2ocyv24w0e2****`
         */
        vpcId: string;
    };
}
