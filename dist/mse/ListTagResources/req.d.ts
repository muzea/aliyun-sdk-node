export interface ListTagResourcesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始Token。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kywps2Ezza3n8HAAzCCqsi`
     */
    "NextToken"?: string;
    /**
     * 资源类型：
     * - CLUSTER注册配置中心。
     * - GATEWAY云原生网关。
     * @example `CLUSTER`
     */
    "ResourceType": string;
    /**
     * 资源ID，最多 50个子项。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 标签键。
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
