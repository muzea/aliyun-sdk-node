export interface CreateEndpointRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 挂载点的名称。
         * 长度限制为64个字符。
         * 如果传入值为空（包含空字符串），系统会使用Uuid字段的值作为默认名称。
         * @example `endpoint-1`
         */
        Name: string;
        /**
         * 挂载点的网络类型，根据网络类型不同，下列中需要传入的参数也有所不同。
         * - VPC：挂载点处于VPC网络。
         * - INNER：挂载点处于PAI内部网络中，用于PAI其他产品进行访问。
         * @example `VPC`
         */
        Type: string;
        /**
         * 挂载点使用的专有网络 VPC ID。
         * @example `vpc-j6co2fcdsl1q0gnuc****`
         */
        VpcId: string;
        /**
         * 挂载点使用的交换机vSwitch Id。
         * 该vSwitch需要属于传入的VPC。
         * @example `vsw-j6cmr00qjyrft6jo2****`
         */
        VswitchId: string;
        /**
         *
         * @example `inst-ivrq92qhbyrg4jctih`
         */
        InstanceId: string;
    };
}
