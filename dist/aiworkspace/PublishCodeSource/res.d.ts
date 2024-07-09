export interface PublishCodeSourceResponse {
    /**
     * 发布成功的代码源配置ID。
     * @example `code-a797*******`
     */
    CodeSourceId: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
}
