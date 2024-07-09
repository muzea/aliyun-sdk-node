export interface TagResourcesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型：
     * - CLUSTER 注册配置中心。
     * - GATEWAY 云原生网关。
     * @example `CLUSTER`
     */
    "ResourceType": string;
    /**
     * 实例ID。
     * >表示传入第几个实例ID。例如：
     * - **ResourceId.0**表示传入第一个实例ID。
     *  - **ResourceId.1**表示传入第二个实例ID。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag": {
        /**
         * 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prd`
         */
        Value: string;
    }[];
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
