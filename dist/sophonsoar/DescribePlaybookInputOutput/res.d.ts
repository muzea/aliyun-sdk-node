export interface DescribePlaybookInputOutputResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `688B4CCD-5272-5DCF-9D76-FE5EFEF545F8`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    Config: {
        /**
         * 剧本的入参类型。
         * - **template-ip**：IP请求模板。
         * - **template-file**：文件请求模板。
         * - **template-process**：进程请求模板。
         * - **custom**：自定义参数。
         * @example `custom`
         */
        ParamType: string;
        /**
         * 剧本的执行方式，为JSONObject格式。
         * @example `{
           "executeMode":"mul",
          "cron":"0 0 1 *​/1 * ?"
        }`
         */
        ExeConfig: string;
        /**
         * 剧本的入参配置，为JSONArray格式。
         * @example `[
            {
                "typeName": "String",
                "dataClass": "normal",
                "dataType": "String",
                "description": "period",
                "example": "",
                "name": "period",
                "required": false
            }
        ]`
         */
        InputParams: string;
        /**
         * 剧本暂不支持出参配置，固定为空值。
         * @example `[]`
         */
        OutputParams: string;
        /**
         * 剧本的UUID。
         * @example `9030076b-6733-4842-b05a-xxxxxx`
         */
        PlaybookUuid: string;
    };
}
