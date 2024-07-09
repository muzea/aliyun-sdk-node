export interface DescribeNetworkAclsRequest {
    /**
     * 网络ACL的ID。
     * @example `nacl-bp1lhl0taikrbgnh****`
     */
    "NetworkAclId"?: string;
    /**
     * 网络ACL的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `acl-1`
     */
    "NetworkAclName"?: string;
    /**
     * 网络ACL关联的VPC的ID。
     * @example `vpc-m5ebpc2xh64mqm27e****`
     */
    "VpcId"?: string;
    /**
     * 关联实例的类型。取值：**VSwitch**，交换机。
     * **ResourceType**和**ResourceId**参数需要同时指定才生效。
     * @example `VSwitch`
     */
    "ResourceType"?: string;
    /**
     * 关联实例的ID。
     * @example `vsw-bp1de348lntdwnhbg****`
     */
    "ResourceId"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 网络ACL所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表。
     */
    "Tags"?: {
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
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
