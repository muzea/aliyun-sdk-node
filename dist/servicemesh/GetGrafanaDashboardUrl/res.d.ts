export interface GetGrafanaDashboardUrlResponse {
    /**
     * 请求ID。
     * @example `76DBB8A0-5AA6-5A56-9A8A-****`
     */
    RequestId: string;
    /**
     * 仪表盘信息。
     */
    Dashboards: {
        /**
         * 仪表盘URL。
         * @example `https://g.console.aliyun.com/d/181863583797****-14651340-200-2/alibaba-cloud-mesh-service?orgId=32****&refresh=60s`
         */
        Url: string;
        /**
         * 仪表盘名称。
         * @example `Cloud ASM Istio Http Gateway`
         */
        Title: string;
    }[];
}
