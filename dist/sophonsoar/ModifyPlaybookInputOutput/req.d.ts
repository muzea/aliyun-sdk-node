export interface ModifyPlaybookInputOutputRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `8baa6cff-319e-4ede-97bc-xxxxxxx`
     */
    "PlaybookUuid": string;
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
    "InputParams": string;
    /**
     * 剧本暂不支持出参配置，固定为空值。
     * @example `[]`
     */
    "OutputParams": string;
    /**
     * 剧本的入参类型。
     * - **template-ip**：IP请求模板。
     * - **template-file**：文件请求模板。
     * - **template-process**：进程请求模板。
     * - **custom**：自定义参数。
     * @example `custom`
     */
    "ParamType"?: string;
    /**
     * 剧本的执行方式，为JSONObject格式。
     * @example `{
       "executeMode":"mul",
      "cron":"0 0 1 *​/1 * ?"
    }`
     */
    "ExeConfig"?: string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
