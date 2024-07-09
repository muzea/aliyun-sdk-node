export interface ListGrafanaWorkspaceRequest {
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Grafana实例的资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 语言环境，默认为中文：zh， 英文： en。
     * @example `zh`
     */
    "AliyunLang"?: string;
}
