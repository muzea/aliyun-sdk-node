export interface ListPrometheusInstanceByTagAndResourceGroupIdRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `fpx-tag`
         */
        Key: string;
        /**
         * 标签值。
         * @example `fvt-tag-value`
         */
        Value: string;
    }[];
}
