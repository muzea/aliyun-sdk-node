export interface ListDialogResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 通话交互内容。
     */
    Data: {
        /**
         * 说话的角色。
         * @example `robot`
         */
        Role: string;
        /**
         * 话术内容。
         * @example `您好`
         */
        Content: string;
        /**
         * 节点类型。
         * @example `normal`
         */
        NodeType: string;
        /**
         * 开始时间。时间戳格式，单位：毫秒。
         * @example `1619763900718`
         */
        Time: string;
        /**
         * 意图标签。
         * @example `意图标签`
         */
        Tag: string;
    }[];
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
