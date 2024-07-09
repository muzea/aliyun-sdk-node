export interface DeleteJobTemplatesRequest {
    /**
     * 待删除的作业模板ID列表，取值范围：1~20
     * 格式为`[{"Id": "0.sched****"},{"Id": "1.sched****"}]`，多个作业模板ID之间用半角逗号（,）隔开。
     * 您可以通过调用[ListJobTemplates](~~87248~~)获取作业模板ID。
     * @example `[{"Id":"ehpc-job-tmpl-6RVcMK****"},{"Id": "ehpc-job-tmpl-6RxO5y****"}]`
     */
    "Templates": string;
}
