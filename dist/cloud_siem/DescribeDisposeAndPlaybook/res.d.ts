export interface DescribeDisposeAndPlaybookResponse {
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 分页记录。
         */
        PageInfo: {
            /**
             * 列表当前页号。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数。
             * @example `100`
             */
            TotalCount: number;
        };
        /**
         * 详细数据。
         */
        ResponseData: {
            /**
             * 实体ID。
             * @example `12345****`
             */
            EntityId: number;
            /**
             * opcode与oplevel键值对。
             * @example `12345`
             */
            OpcodeMap: any;
            /**
             * 实体处置推荐剧本code。
             * @example `[1,3]`
             */
            OpcodeSet: string[];
            /**
             * 实体信息。
             * @example `{"file_path": "c:/www/leixi.jsp","file_hash": "aa0ca926ad948cd820e0a3d9a18c****","host_uuid": "efed2cf7-0b77-45d9-a97b-d2cf246b****","malware_type": "${aliyun.siem.sas.alert_tag.webshell}","host_name": "launch-advisor-2023****"}`
             */
            EntityInfo: any;
            /**
             * 处置对象。
             * @example `192.168.*.*`
             */
            Dispose: string;
            /**
             * 处置作用域，可进行处置用户ID列表。
             * @example `176618589410****`
             */
            Scope: any[];
            /**
             * 能够处置该实体的剧本列表。
             * @example `[{"name":"云安全中心-云服务器安全","code":"1"}]`
             */
            PlaybookList: {
                /**
                 * 剧本opcode，与处置实体的推荐剧本opcode相对应。
                 * @example `7`
                 */
                OpCode: string;
                /**
                 * 事件一键处置是否默认勾选。取值：
                 * - 2：勾选
                 * - 1：只展示不勾选
                 * @example `2`
                 */
                OpLevel: string;
                /**
                 * 剧本描述。
                 * @example `WafBlockIP`
                 */
                Description: string;
                /**
                 * 剧本显示名称。
                 * @example `WafBlockIP`
                 */
                DisplayName: string;
                /**
                 * opcode配置。
                 * @example `{"opCode":"3"}`
                 */
                TaskConfig: string;
                /**
                 * 剧本名称，剧本唯一标识。
                 * @example `kill_process_isolate_file`
                 */
                Name: string;
                /**
                 * 剧本的参数列表以及对应参数属性
                 */
                ParamConfig: any[];
                /**
                 * 是否是waf剧本。取值：
                 * - true：是
                 * - false：不是
                 * @example `false`
                 */
                WafPlaybook: boolean;
            }[];
            /**
             * 该实体关联的告警数。
             * @example `1`
             */
            AlertNum: number;
        }[];
    };
}
