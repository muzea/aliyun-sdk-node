export interface ModifyParametersResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 修改结果信息。
     */
    Results: {
        /**
         * 是否修改成功。
         * - true：修改成功。
         * - false：修改失败。
         * @example `false`
         */
        Success: boolean;
        /**
         * 修改失败信息。
         * @example `schedule timeout.`
         */
        Message: string;
    };
}
