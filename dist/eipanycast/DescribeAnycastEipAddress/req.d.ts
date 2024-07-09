export interface DescribeAnycastEipAddressRequest {
    /**
     * Anycast EIP实例IP地址。
     * > 您必须输入参数**Ip**和参数**AnycastId**中的任意一个。
     * @example `139.95.XX.XX`
     */
    "Ip"?: string;
    /**
     * Anycast EIP实例ID。
     * > 您必须输入参数**Ip**和参数**AnycastId**中的任意一个。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    "AnycastId"?: string;
    /**
     * Anycast EIP绑定的云资源实例ID。
     * @example `lb-2zebb08phyczzawe****`
     */
    "BindInstanceId"?: string;
}
