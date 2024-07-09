export interface QueryFpDBDeleteJobListRequest {
    /**
     * 清空或删除DNA库作业ID，可以从[提交清空或删除DNA库作业](~~209341~~)的返回参数中获取。以半角逗号（,）分隔，如果为空则返回最近20个作业列表。
     * @example `2288c6ca184c0e47098a5b665e2a12****,78dc866518b843259669df58ed30****`
     */
    "JobIds"?: string;
}
