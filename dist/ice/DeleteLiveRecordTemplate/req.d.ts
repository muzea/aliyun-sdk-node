export interface DeleteLiveRecordTemplateRequest {
    /**
     * 需要删除的实时录制模板ID。可以通过[智能媒体服务控制台](https://ice.console.aliyun.com/live-processing/template/list/record)或[创建实时录制模板](~~448213~~)的返回参数中获取。
     * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b7****`
     */
    "TemplateId": string;
}
