export interface GetHoneypotPresetResponse {
    /**
     * 蜜罐模板数据。
     */
    Data: {
        /**
         * 蜜罐镜像名称。
         * @example `ruoyi`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐模板自定义名称。
         * @example `ssh`
         */
        PresetName: string;
        /**
         * 蜜罐模板唯一ID。
         * @example `94fd8805-d178-4361-84d3-de47fb4e****`
         */
        HoneypotPresetId: string;
        /**
         * 蜜罐模板自定义参数。
         * @example `{"trojan_git":"zip","burp":"open","portrait_option":"true"}`
         */
        Meta: string;
        /**
         * 文件参数。
         */
        FileInfoList: {
            /**
             * 文件ID。
             * @example `HONEYPOT_FILE/1765_167040128****`
             */
            FileId: string;
            /**
             * 文件名称。
             * @example `HONEYPOT_FILE****`
             */
            FileName: string;
            /**
             * 下载地址。
             * @example `http://aegis****`
             */
            OssUrl: string;
        }[];
        /**
         * 管理节点唯一ID。
         * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
         */
        NodeId: string;
        /**
         * 蜜罐管理节点名称。
         * @example `managerNodename`
         */
        ControlNodeName: string;
        /**
         * 蜜罐镜像展示名称。
         * @example `RuoYi`
         */
        HoneypotImageDisplayName: string;
        /**
         * 模板类型。取值：
         * -  **TEMP**：自动生成
         * -  **CUSTOM**：自定义
         * -  **DEFAULT**：默认模板
         * @example `CUSTOM`
         */
        PresetType: string;
    };
    /**
     * 是否调用成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `38AFE393-88E8-5642-B3E2-D57C6E76025D`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
