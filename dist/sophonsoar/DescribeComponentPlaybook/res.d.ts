export interface DescribeComponentPlaybookResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C5F5D6C9-DF1A-5381-92B1-39676F777D20`
     */
    RequestId: string;
    /**
     * 预定义组件列表。
     */
    Playbooks: {
        /**
         * 预定义组件的名称。
         * @example `AegisKillQuara`
         */
        DisplayName: string;
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
        InputParams: string;
        /**
         * 预定义组件的描述信息。
         * @example `aegis_kill_process`
         */
        Description: string;
    }[];
}
