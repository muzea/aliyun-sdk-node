export interface GetAsyncTaskResponse {
    /**
     * 异步任务id
     * @example `000e89fb-cf8f-11e9-8ab4-b6e980803a3b`
     */
    async_task_id: string;
    /**
     * <warning>已废弃（推荐使用state字段替代）</warning>
     * 任务状态
     * - Failed（失败）
     * - Running（运行中）
     * - PartialSucceed（部分成功）
     * - Succeed（成功）
     * @example `Succeed`
     */
    status: string;
    /**
     * 任务状态
     * - Failed（失败）
     * - Running（运行中）
     * - PartialSucceed（部分成功）
     * - Succeed（成功）
     * @example `Succeed`
     */
    state: string;
    /**
     * <warning>已废弃（推荐使用error_message字段替代）</warning>
     * 异步任务错误信息
     * @example `The request has been failed due to some unknown error. Please try again later.`
     */
    message: string;
    /**
     * <warning>已废弃（推荐使用error_code字段替代）</warning>
     * 异步任务错误码
     * @example `404`
     */
    err_code: number;
    /**
     * 异步任务需处理总量，如服务端打包下载需打包的文件量
     * @example `1000`
     */
    total_process: number;
    /**
     * 异步任务已处理总量，如服务端打包下载已打包的文件量
     * @example `100`
     */
    consumed_process: number;
    /**
     * 异步任务生成数据的下载地址，如服务端打包下载任务生成下载地址
     * @example `https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
     */
    url: string;
    /**
     * 任务错误码
     * @example `InternalError`
     */
    error_code: string;
    /**
     * 任务错误信息
     * @example `The request has been failed due to some unknown error. Please try again later.`
     */
    error_message: string;
    /**
     * 解压文件信息列表
     */
    uncompress_file_list: any[];
    /**
     * 任务自定义类别
     * @example `album`
     */
    category: string;
    /**
     * 任务创建时间，ISO格式， 如：2019-03-28T13:03:29.298Z
     * @example `2019-08-20T06:51:27.292Z`
     */
    created_at: string;
    /**
     * 任务开始时间，ISO格式， 如：2019-03-28T13:03:29.298Z
     * @example `2019-08-20T06:51:27.292Z`
     */
    started_at: string;
    /**
     * 任务完成时间，ISO格式， 如：2019-03-28T13:03:29.298Z
     * @example `2019-08-20T06:51:27.292Z`
     */
    finished_at: string;
    skipped_process: number;
    failed_process: number;
}
