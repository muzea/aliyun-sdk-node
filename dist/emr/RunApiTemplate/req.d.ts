export interface RunApiTemplateRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群模板ID。
     * @example `AT-****`
     */
    "TemplateId": string;
    /**
     * 接口名。
     * @example `CreateCluster`
     */
    "ApiName": string;
    /**
     * 幂等客户端TOKEN。
     * @example `A7D960FA-6DBA-5E07-8746-A63E3E4D****`
     */
    "ClientToken"?: string;
}
