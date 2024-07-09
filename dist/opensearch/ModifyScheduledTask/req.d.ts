export interface ModifyScheduledTaskRequest {
    /**
     * 应用的名称或者是应用id
     * @example `121414148`
     */
    "appGroupIdentity": string;
    /**
     * 任务id
     * @example `56e9c2e7-5a4d-481a-9f1b-b07da6909450`
     */
    "taskId": string;
    /**
     * 请求参数。
     * @example `{
      "cron": "0 0 * * 1,2,3,4,5,6,7",
      "enabled": true,
      "filter": {
        "field": "cat_id",
        "days": 30,
        "unit": "s"
      }
    }`
     */
    "body"?: any;
}
