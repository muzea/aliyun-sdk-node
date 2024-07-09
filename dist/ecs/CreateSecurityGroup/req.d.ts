export interface CreateSecurityGroupRequest {
    /**
     * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 安全组描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 安全组名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头。支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `testSecurityGroupName`
     */
    "SecurityGroupName"?: string;
    /**
     * 安全组所属VPC ID。
     * >若指定的地域支持经典网络，则允许不指定VpcId，来创建经典网络的安全组；若指定的地域不支持经典网络，则必须指定VpcId，创建专有网络的安全组。
     * @example `vpc-bp1opxu1zkhn00gzv****`
     */
    "VpcId"?: string;
    /**
     * 安全组类型，分为普通安全组与企业安全组。取值范围：
     * - normal：普通安全组。
     * - enterprise：企业安全组。更多详情，请参见[企业安全组概述](~~120621~~)。
     * @example `enterprise`
     */
    "SecurityGroupType"?: string;
    /**
     * 该参数暂未开放使用。
     * @example `false`
     */
    "ServiceManaged"?: boolean;
    /**
     * 安全组所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 安全组绑定的标签。
     */
    "Tag"?: {
        /**
         * 安全组的标签键。
         * > 为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `null`
         */
        key: string;
        /**
         * 安全组的标签键。
         * N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 安全组的标签值。
         * N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 安全组的标签值。
         * > 为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `null`
         */
        value: string;
    }[];
}
