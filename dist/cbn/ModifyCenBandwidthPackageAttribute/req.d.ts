export interface ModifyCenBandwidthPackageAttributeRequest {
    /**
     * 带宽包实例的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 带宽包实例新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `带宽包`
     */
    "Description"?: string;
    /**
     *  带宽包实例ID。
     * @example `cenbwp-4c2zaavbvh5fx****`
     */
    "CenBandwidthPackageId": string;
}
