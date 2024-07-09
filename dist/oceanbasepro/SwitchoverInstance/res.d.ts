export interface SwitchoverInstanceResponse {
    /**
     * 请求 ID。
     * @example `473469**-AA6F-4D**-B3DB-A***********`
     */
    RequestId: string;
    /**
     * 切换主备实例数据列表。
     */
    Data: {
        /**
         * 切换主备实例信息。
         * @example `delete tag-value success`
         */
        Message: string;
        /**
         * 是否修改成功。
         * - true：修改成功。
         * - false：修改失败。
         * @example `true`
         */
        Success: boolean;
    };
}
