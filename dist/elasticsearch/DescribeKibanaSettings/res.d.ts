export interface DescribeKibanaSettingsResponse {
    /**
     * 部分可配置的Kibana settings信息，详细信息请参见[Kibana settings](https://www.elastic.co/guide/cn/kibana/current/settings.html)。
     * @example `{"map.includeElasticMapsService": "false", "server.ssl.cert": "/home/admin/packages/kibana/config/cert/client.crt", "server.ssl.enabled": "true", "server.ssl.key": "/home/admin/packages/kibana/config/cert/client.key", "xpack.reporting.capture.browser.chromium.disableSandbox": "true"}`
     */
    Result: any;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6D*****`
     */
    RequestId: string;
}
