export interface CreateHaVipRequest {
    /**
     * HaVip实例的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * HaVip实例所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * HaVip实例所属的交换机ID。
     * @example `vsw-asdfjlnaue4g****`
     */
    "VSwitchId": string;
    /**
     * HaVip实例的IP地址。
     * 指定的IP地址必须为交换机网段中未被占用的IP地址。如果不指定，则从指定的交换机中随机分配一个未被占用的IP地址。
     * @example `192.XX.XX.10`
     */
    "IpAddress"?: string;
    /**
     * HaVip实例的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my HaVip.`
     */
    "Description"?: string;
    /**
     * 高可用虚拟IP所属的资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
