export interface DeleteVpdResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `BDBCC783-84CA-5733-8EEA-645C88B9009C`
     */
    RequestId: string;
    /**
     * 响应内容。（当存在依赖资源时，会返回存在的依赖资源）
     * @example `{
          "subnet": [
                {
                      "tenantId": "1620939556166277",
                      "regionId": "cn-wulanchabu",
                      "zoneId": "cn",
                      "type": null,
                      "subnetId": "subnet-zqebaxa0",
                      "name": "lql_testVPD"
                }
          ],
          "nc": [
                {}
          ]
    }`
     */
    Content: any;
}
