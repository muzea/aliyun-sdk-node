export interface CreateCapacityReservationRequest {
    /**
     * 容量预定服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 容量预定服务所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 容量预定服务的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 容量预定服务的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 容量预定服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `crpTestName`
     */
    "PrivatePoolOptions.Name"?: string;
    /**
     * 容量预定服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 容量预定服务生效后生成的私有资源池的类型。取值范围：
     * - Open：开放模式。
     * - Target：专用模式。
     * 默认值：Open
     * @example `Open`
     */
    "PrivatePoolOptions.MatchCriteria"?: string;
    /**
     * 在一个实例规格内，需要预留的实例的总数量。
     * @example `2`
     */
    "InstanceAmount": number;
    /**
     * 实例规格。目前仅支持为一个实例规格设置容量预定服务。您可以调用[DescribeInstanceTypes](~~25620~~)查询云服务器ECS提供的实例规格信息。
     * @example `ecs.g6.xlarge`
     */
    "InstanceType": string;
    /**
     * 容量预定服务的生效方式。目前调用API的方式仅支持设置为立即生效。
     * > 该参数不传值即表示设置为立即生效。
     * @example `2021-10-30T05:32:00Z`
     */
    "StartTime"?: string;
    /**
     * 容量预定服务的失效时间。时间格式以ISO8601为标准，并需要使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。更多信息，请参见[ISO 8601](~~25696~~)。
     * @example `2021-10-30T06:32:00Z`
     */
    "EndTime"?: string;
    /**
     * 容量预定服务的失效方式。取值范围：
     * - Limited：指定时间释放。必须同时指定`EndTime`参数。
     * - Unlimited：手动释放。不限制时间。
     * @example `Unlimited`
     */
    "EndTimeType"?: string;
    /**
     * 实例使用的镜像的操作系统类型。该参数与地域级预留实例券的`Platform`参数对应。如果容量预定服务和地域级预留实例券的操作系统类型相匹配，则可以使用地域级预留实例券来抵扣容量预定服务中的未使用容量的账单。取值范围：
     * - Windows：Windows Server类型的操作系统。
     * - Linux：Linux及类Unix类型的操作系统。
     * 默认值：Linux
     * > 该参数暂未开放使用。
     * @example `Linux`
     */
    "Platform"?: string;
    /**
     * 容量预定服务所属地域下的可用区ID。目前仅支持在一个可用区下创建容量预定服务。
     * @example `cn-hangzhou-h`
     */
    "ZoneId": string[];
}
