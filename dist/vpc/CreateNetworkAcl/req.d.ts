export interface CreateNetworkAclRequest {
    /**
     * 网络ACL所属的VPC的ID。
     * 网络ACL属于VPC高级功能。当所属VPC不支持该高级功能（不支持创建网络ACL）时，您需要联系阿里云工程师处理。
     * @example `vpc-dsfd34356vdf****`
     */
    "VpcId": string;
    /**
     * 网络ACL的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `acl-1`
     */
    "NetworkAclName"?: string;
    /**
     * 网络ACL的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my NetworkAcl.`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否检测此次请求。取值：
     * * **true**：发送检查请求。
     * * **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
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
    /**
     * 网络ACL所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
