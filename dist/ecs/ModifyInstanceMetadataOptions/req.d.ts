export interface ModifyInstanceMetadataOptionsRequest {
    /**
     * 实例所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定的实例ID。
     * @example `i-bp67acfmxaz****`
     */
    "InstanceId"?: string;
    /**
     * 是否启用实例元数据的访问通道。取值范围：
     * - enabled：启用。
     * - disabled：禁用。
     * 默认值：enabled。
     * > 有关实例元数据的信息，请参见[实例元数据概述](~~49122~~)。
     * @example `enabled`
     */
    "HttpEndpoint": string;
    /**
     * 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
     * - optional：不强制使用。
     * - required：强制使用。设置该取值后，普通模式无法访问实例元数据。
     * 默认值：optional。
     * > 有关访问实例元数据的模式，请参见[实例元数据访问模式](~~150575~~)。
     * @example `optional`
     */
    "HttpTokens"?: string;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `1`
     */
    "HttpPutResponseHopLimit"?: number;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "InstanceMetadataTags"?: string;
}
