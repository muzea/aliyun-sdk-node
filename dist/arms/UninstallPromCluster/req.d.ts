export interface UninstallPromClusterRequest {
    /**
     * 语言环境（若不填，默认为 zh）：
     * - zh
     * - en
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c0bad479465464e1d8c1e641b0afb****`
     */
    "ClusterId": string;
}
