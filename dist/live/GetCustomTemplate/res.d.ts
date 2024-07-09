export interface GetCustomTemplateResponse {
    /**
     * 请求ID。
     * @example `BC1E78D3-FA8B-4457-DEE2-6093E1232254`
     */
    RequestId: string;
    /**
     * 模板配置。
     * @example `{height:1080,scale:[16:9],gop:60,bframes:30,cdesc:h264}`
     */
    CustomTemplate: string;
    /**
     * 模板名。
     * @example `TestTemplate`
     */
    Template: string;
}
