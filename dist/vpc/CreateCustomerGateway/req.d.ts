export interface CreateCustomerGatewayRequest {
    /**
     * 用户网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44****`
     */
    "ClientToken"?: string;
    /**
     * 本地数据中心网关设备的公网IP地址。
     * @example `101.12.XX.XX`
     */
    "IpAddress": string;
    /**
     * 用户网关的名称。
     * 名称长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 用户网关的描述信息。
     * 描述信息长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 本地数据中心网关设备的自治系统号。
     * **Asn**是一个4字节的号码，支持按照两段位的格式进行输入，即：前16位比特.后16位比特。每个段位使用十进制输入。
     * 例如输入123.456，则表示自治系统号：123*65536+456=8061384。
     * @example `65530`
     */
    "Asn"?: string;
    /**
     * 本地数据中心网关设备BGP路由协议的认证密钥。
     * 密钥长度为1~64个字符，只支持ASCII字符，不支持空格、中文和半角问号（?）。
     * @example `AuthKey****`
     */
    "AuthKey"?: string;
    /**
     * 用户网关待添加的标签列表。
     * 一次最多支持为用户网关添加20个标签。
     */
    "Tags"?: {
        /**
         * 标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一次最多支持输入20个标签键。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 标签值。
         * 标签值最多支持128个字符，可以为空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一个标签键对应一个标签值。一次最多支持输入20个标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
    /**
     * 用户网关所属的资源组ID。
     * - 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组ID。
     * - 如果您未指定资源组，用户网关创建后将归属于默认资源组。
     * @example `rg-aek2qo2h4jy****`
     */
    "ResourceGroupId"?: string;
}
