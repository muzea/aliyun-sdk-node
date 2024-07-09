export interface CreateElasticityAssuranceRequest {
    /**
     * 弹性保障服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性保障服务所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 弹性保障服务的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 弹性保障服务的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 购买时长。时长单位由`PeriodUnit`参数确定。取值范围：
     * - 当`PeriodUnit`参数值为`Month`时，该参数的取值：1、2、3、4、5、6、7、8、9。
     * - 当`PeriodUnit`参数值为`Year`时，该参数的取值：1、2、3、4、5。
     * 默认值：1
     * @example `1`
     */
    "Period"?: number;
    /**
     * 时长单位。取值范围：
     * - Month：月
     * - Year：年
     * 默认值：Year
     * @example `Year`
     */
    "PeriodUnit"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 弹性保障服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `eapTestName`
     */
    "PrivatePoolOptions.Name"?: string;
    /**
     * 弹性保障服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 弹性保障服务的匹配模式。取值范围：
     * - Open：开放模式的弹性保障服务。
     * - Target：指定模式的弹性保障服务。
     * 默认值：Open
     * @example `Open`
     */
    "PrivatePoolOptions.MatchCriteria"?: string;
    /**
     * 弹性保障的总次数。取值：Unlimited，目前仅支持在服务生效期内的无限次模式。
     * 默认值：Unlimited
     * @example `Unlimited`
     */
    "AssuranceTimes"?: string;
    /**
     * 在一个实例规格内，需要预留的实例的总数量。
     * 取值范围：1~1000。
     * @example `2`
     */
    "InstanceAmount"?: number;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "InstanceCpuCoreCount"?: number;
    /**
     * 弹性保障服务生效时间。默认为调用该接口创建服务的时间。时间格式以ISO8601为标准，需要使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。更多信息，请参见[ISO8601](~~25696~~)。
     * @example `2020-10-30T06:32:00Z`
     */
    "StartTime"?: string;
    /**
     * 弹性保障服务所属地域下的可用区ID。目前仅支持在一个可用区下创建弹性保障服务。
     * @example `cn-hangzhou-h`
     */
    "ZoneId": string[];
    /**
     * 实例规格。目前仅支持为一个实例规格设置弹性保障服务。
     * @example `ecs.c6.xlarge`
     */
    "InstanceType": string[];
}
