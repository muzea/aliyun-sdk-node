export interface DescribeCustomerGatewayResponse {
    /**
     * 本地数据中心网关设备的自治系统号。
     * @example `65535`
     */
    Asn: number;
    /**
     * 请求ID。
     * @example `A0457BC9-6C0F-4437-AB9D-FB2EABC1D6A2`
     */
    RequestId: string;
    /**
     * 本地数据中心网关设备的IP地址。
     * @example `139.32.XX.XX`
     */
    IpAddress: string;
    /**
     * 用户网关的描述信息。
     * @example `desctest`
     */
    Description: string;
    /**
     * 用户网关的实例ID。
     * @example `cgw-bp1pvpl9r9adju6l5****`
     */
    CustomerGatewayId: string;
    /**
     * 创建用户网关的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建用户网关时的总时长。
     * @example `1492747187000`
     */
    CreateTime: number;
    /**
     * 用户网关的名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * 本地数据中心网关设备BGP路由协议的认证密钥。
     * @example `AuthKey****`
     */
    AuthKey: string;
    Tags: {
        /**
         * 用户网关绑定的标签列表。
         */
        Tag: {
            /**
             * 标签键。
             * @example `TagKey`
             */
            Key: string;
            /**
             * 标签值。
             * @example `TagValue`
             */
            Value: string;
        }[];
    };
    /**
     * 用户网关所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
}
