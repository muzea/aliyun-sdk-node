export interface GetDocTranslateTaskResponse {
    /**
     * 任务状态。
     * @example `translated`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `12952E92-FDF3-4D3C-88E3-242D72BA7150`
     */
    RequestId: string;
    /**
     * 翻译后的文件下载地址。
     * @example `http://translateFileUrl`
     */
    TranslateFileUrl: string;
    /**
     * 任务错误码。
     * @example `Error`
     */
    TranslateErrorCode: string;
    /**
     * 文档页数。
     * @example `20`
     */
    PageCount: number;
    /**
     * 任务ID。
     * @example `0586df512c8b4bb382d7d9a6a01b5854`
     */
    TaskId: string;
    /**
     * 任务错误信息。
     * @example `Fail to get the page number of document.`
     */
    TranslateErrorMessage: string;
}
