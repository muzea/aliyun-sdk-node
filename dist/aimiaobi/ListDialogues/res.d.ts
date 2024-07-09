export interface ListDialoguesResponse {
    /**
     * 生成历史列表
     */
    Data: {
        /**
         * 用户输入
         * @example `x`
         */
        User: string;
        /**
         * 模型生成
         * @example `xx`
         */
        Bot: string;
        /**
         * 任务ID
         * @example `xx`
         */
        TaskId: string;
        /**
         * 生成类型：1：创作；2：智搜（默认）
         * @example `2`
         */
        DialogueType: number;
        /**
         * 创建日期
         * @example `2024-01-04 11:46:07`
         */
        CreateTime: string;
        /**
         * 创建者
         * @example `xx`
         */
        CreateUser: string;
    }[];
    /**
     * 当前页码
     * @example `1`
     */
    Current: number;
    /**
     * 每页记录数
     * @example `10`
     */
    Size: number;
    /**
     * 总记录数
     * @example `100`
     */
    Total: number;
    /**
     * 请求唯一标识
     * @example `1813ceee-7fe5-41b4-87e5-982a4d18cca5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `NoData`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
