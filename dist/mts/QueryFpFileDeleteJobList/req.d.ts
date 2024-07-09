export interface QueryFpFileDeleteJobListRequest {
    /**
     * DNA删除作业ID，可以从[提交删除DNA文件作业](~~209274~~)的返回参数中获取。以半角逗号（,）分隔，如果为空则返回最近20个作业列表。
     * @example `d98459323c024947a104f6a50cbf****,c2dc694696f1441591c5012a73c1****`
     */
    "JobIds"?: string;
}
