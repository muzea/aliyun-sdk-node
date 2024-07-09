export interface DescribeExecutePlaybooksResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `88A39217-2802-5B1E-BA2B-CF1BBC43C1F5`
     */
    RequestId: string;
    /**
     * 剧本列表。
     */
    PlaybookMetrics: {
        /**
         * 剧本的描述信息。
         * @example `a demo playbook`
         */
        Description: string;
        /**
         * 剧本的名称。
         * @example `demo_playbook`
         */
        DisplayName: string;
        /**
         * 剧本的UUID。
         * @example `c5c88b5e-97ca-435d-8c20-2xxxxx`
         */
        Uuid: string;
        /**
         * 剧本的入参配置，为JSONArray格式。
         * >参考[DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~)接口的格式说明。
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
        ParamConfig: string;
        /**
         * 剧本的入参类型。
         * - **template-ip**：IP请求模板。
         * - **template-file**：文件请求模板。
         * - **template-process**：进程请求模板。
         * - **custom**：自定义参数。
         * @example `custom`
         */
        ParamType: string;
    }[];
}
