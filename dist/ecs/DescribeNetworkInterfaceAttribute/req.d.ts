export interface DescribeNetworkInterfaceAttributeRequest {
    /**
     * 弹性网卡所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * > 该参数暂未开放使用。
     */
    "Tag"?: {
        /**
         * > 该参数暂未开放使用。
         * @example `TestKey`
         */
        Key: string;
        /**
         * > 该参数暂未开放使用。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 弹性网卡ID。
     * @example `eni-bp67acfmxazb4p****`
     */
    "NetworkInterfaceId": string;
    /**
     * 弹性网卡属性，取值范围：
     * attachment：查询成员网卡的挂载信息。
     * > 该参数正在邀测中，暂未开放使用。
     * @example `attachment`
     */
    "Attribute"?: string;
}
