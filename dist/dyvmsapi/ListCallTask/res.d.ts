export interface ListCallTaskResponse {
    /**
     * 请求状态码。
     * * 返回200代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 每页显示的任务个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `5B0F201F-DCDA-45C2-AA92-1AE177F94991`
     */
    RequestId: string;
    /**
     * 任务总数。
     * @example `1`
     */
    Total: number;
    /**
     * 任务信息。
     */
    Data: {
        /**
         * 任务状态。取值：
         * - **INIT**：新建任务，任务未启动。
         * - **RELEASE**：任务解析中。
         * - **RUNNING**：任务运行中。
         * - **STOP**：任务暂停。
         * - **SYSTEM_STOP**：系统暂停。
         * - **CANCEL**：任务取消。
         * - **SYSTEM_CANCEL**：系统取消。
         * - **DONE**：任务已完成。
         * > 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/task/list)**任务中心**页面，查看任务状态。
         * @example `INIT
        `
         */
        Status: string;
        /**
         * 返回的任务状态数据。
         * @example `1`
         */
        Data: string;
        /**
         * 被叫号码类型。
         * 在[创建通话任务](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-createcalltask?spm=a2c4g.11186623.0.0.c24e3a52pFfNZV)时已选择被叫号码类型。
         * @example `LIST`
         */
        DataType: string;
        /**
         * 任务名称。
         * @example `验证码`
         */
        TaskName: string;
        /**
         * 已完成任务的个数。
         * @example `2`
         */
        CompletedCount: number;
        /**
         * 被叫号码总数。
         * @example `6`
         */
        TotalCount: number;
        /**
         * 模板名称。
         * @example `身份验证`
         */
        TemplateName: string;
        /**
         * 任务暂停时间。
         * @example `1614332378000`
         */
        StopTime: string;
        /**
         * 任务模板类型。取值：
         * - **VMS_VOICE_TTS**：语音通知文本转语音模版。
         * - **VMS_VOICE_CODE**：语音通知文件模版。
         * - **VMS_TTS**：语音验证码模版。
         * @example `VMS_TTS`
         */
        BizType: string;
        /**
         * 主叫号码。
         * @example `0571000****`
         */
        Resource: string;
        /**
         * 语音模板ID。
         * @example `TTS_28292****`
         */
        TemplateCode: string;
        /**
         * 定时启动任务。Unix时间戳格式，单位：毫秒。
         * @example `1614330978000`
         */
        FireTime: string;
        /**
         * 任务完成时间。Unix时间戳格式，单位：毫秒。
         * @example `1614330986000`
         */
        CompleteTime: string;
        /**
         * 任务执行进度。
         * @example `26%`
         */
        CompletedRate: number;
        /**
         * 任务ID。
         * @example `1605***`
         */
        Id: number;
    }[];
}
