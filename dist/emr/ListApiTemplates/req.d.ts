export interface ListApiTemplatesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 集群模板ID。
     * @example `at-41b4c6a0fc63****`
     */
    "TemplateId"?: string;
    /**
     * API模板ID列表。
     * @example `["AT-****"]`
     */
    "TemplateIds"?: string[];
    /**
     * 接口名。
     * @example `CreateCluster`
     */
    "ApiName": string;
    /**
     * 集群模板名字。
     * @example `DATALAKE模板`
     */
    "TemplateName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId"?: string;
}
