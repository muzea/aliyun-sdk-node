export interface BindPrometheusGrafanaInstanceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * Prometheus实例的资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * Grafana工作区ID。
     * @example `grafana-bp1*****`
     */
    "GrafanaInstanceId": string;
}
