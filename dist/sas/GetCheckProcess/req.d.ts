export interface GetCheckProcessRequest {
    /**
     * 指定要查询的云产品配置检查的任务ID。
     * > 您可以调用[SubmitCheck](~~SubmitCheck~~)接口获取该参数。
     * @example `5347c7b6-c85c-4070-846a-3029e08e****`
     */
    "TaskId"?: string;
}
