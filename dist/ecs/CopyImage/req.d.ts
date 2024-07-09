export interface CopyImageRequest {
    /**
     * 复制后的镜像的名称。长度为2~128个字符。必须以大小写字母或中文开头，也不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `YourImageName`
     */
    "DestinationImageName"?: string;
    /**
     * 复制后的镜像的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `This is a description example.`
     */
    "DestinationDescription"?: string;
    /**
     * 源自定义镜像的ID。
     * @example `m-bp1h46wfpjsjastc****`
     */
    "ImageId": string;
    /**
     * 源自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 复制到目标地域的ID。
     * @example `cn-shanghai`
     */
    "DestinationRegionId"?: string;
    /**
     * 是否加密复制后的镜像。
     * - true：加密。
     * - false：不加密。
     * 默认值：false。
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 加密镜像使用的密钥ID。
     * @example `e522b26d-abf6-4e0d-b5da-04b7******3c`
     */
    "KMSKeyId"?: string;
    /**
     * >该参数暂未开放使用。
     * @example `hide`
     */
    "EncryptAlgorithm"?: string;
    /**
     * 复制后的镜像的资源组ID。如果不设置该参数值，复制后的镜像属于默认资源组。
     * > 如果您当前使用的是RAM用户调用该接口，且`ResourceGroupId`取值为空，您需要注意，当RAM用户没有默认资源组权限时，调用接口会返回报错信息`Forbidden: User not authorized to operate on the specified resource`。请您设置RAM用户支持的资源组ID或者通过相应阿里云账号为该RAM用户授予默认资源组权限后，再次调用该接口。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 复制后的镜像的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 复制后的镜像的标签值。N的取值范围为1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
