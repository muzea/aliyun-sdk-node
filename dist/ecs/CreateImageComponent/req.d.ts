export interface CreateImageComponentRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 组件名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://和https://开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * > 不设置`Name`时，默认使用`ImageComponentId`返回值。
     * @example `testComponent`
     */
    "Name"?: string;
    /**
     * 描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 组件支持的操作系统。目前仅支持Linux系统。取值：Linux
     * 默认值：Linux
     * @example `Linux`
     */
    "SystemType"?: string;
    /**
     * 组件类型。目前仅支持镜像构建组件。取值：Build
     * 默认值：Build
     * @example `Build`
     */
    "ComponentType"?: string;
    /**
     * <props="china">组件内容。由多条命令组成，命令最大条数不能超过127条。支持的命令和命令格式详情，请参见[镜像构建服务支持的命令说明](~~200206~~)。</props>
     * <props="intl">组件内容。由多条命令组成，命令最大条数不能超过127条。</props>
     * <props="partner">组件内容。由多条命令组成，命令最大条数不能超过127条。</props>
     * @example `RUN yum update -y`
     */
    "Content"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
