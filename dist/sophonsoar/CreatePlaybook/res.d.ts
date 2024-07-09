export interface CreatePlaybookResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B09B40B2-F11E-512C-B755-423F2056C17B`
     */
    RequestId: string;
    /**
     * 创建的返回结果。
     */
    Data: {
        /**
         * 新创建剧本的UUID。
         * @example `9e38111e-9794-4784-9ca8-xxxxxxx`
         */
        PlaybookUuid: string;
    };
}
