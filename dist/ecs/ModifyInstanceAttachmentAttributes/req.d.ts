export interface ModifyInstanceAttachmentAttributesRequest {
    /**
     * 私有池所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要修改私有池匹配属性的实例ID。
     * @example `i-bp67acfmxazb4****`
     */
    "InstanceId": string;
    /**
     * 修改实例的私有池匹配模式。取值范围：
     * - Open：开放模式。该模式下系统自动为实例匹配开放的私有池。
     * - Target：指定模式。该模式下必须同时指定`PrivatePoolOptions.Id`参数，设置指定的私有池ID。
     * - None：不使用。该模式下实例正常启动，不使用私有池。
     * @example `Open`
     */
    "PrivatePoolOptions.MatchCriteria": string;
    /**
     * 私有池ID，即弹性保障服务ID或者容量预定服务ID。
     * - 当`PrivatePoolOptions.MatchCriteria`取值为`Target`时，该参数为必填项。
     * - 当`PrivatePoolOptions.MatchCriteria`取值为`Open`或`None`时，该参数不传值。
     * @example `eap-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id"?: string;
}
