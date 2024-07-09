export interface KillJobsRequest {
    /**
     * 租户id
     * @example `478403690625249`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "region"?: string;
    /**
     * 请求体参数
     * @example `[
          {
                "instanceId": "",
                "projectName": ""
          },
          {
                "instanceId": "",
                "projectName": ""
          }
    ]`
     */
    "body"?: string;
}
