export interface PostEventDisposeAndWhiteruleListRequest {
    /**
     * 事件全局唯一UUID。
     * @example `85ea4241-798f-4684-a876-65d4f0c3****`
     */
    "IncidentUuid"?: string;
    /**
     * 事件状态。  取值：
     * - 0：未处理
     * - 1：处理中
     * - 5：处理失败
     * - 10：已处理
     * @example `0`
     */
    "Status"?: number;
    /**
     * 事件备注。
     * @example `dealed`
     */
    "Remark"?: string;
    /**
     * 事件处置配置 json对象。
     * @example `[
          {
                "playbookName": "WafBlockIP",
                "entityId": "104466118",
                "scope": [
                      "176618589410****"
                ],
                "startTime": 1604168946281,
                "endTime": 1614168946281
          },
          {
                "playbookName": "WafBlockIP",
                "entityId": "104466118",
                "scope": [
                      {
                            "instanceId": "waf-cn-n6w1oy1****",
                            "domains": [
                                  "lmfip.wafqax.***"
                            ]
                      }
                ],
                "startTime": 1604168946281,
                "endTime": 1614168946281
          }
    ]`
     */
    "EventDispose"?: string;
    /**
     * 告警接收人配置 json对象
     * @example `{
          "messageTitle": "test",
          "receiver": "xiaowang",
          "channel": "message"
    }`
     */
    "ReceiverInfo"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
