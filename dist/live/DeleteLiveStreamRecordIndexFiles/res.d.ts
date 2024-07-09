export interface DeleteLiveStreamRecordIndexFilesResponse {
    /**
     * 状态定义码。若状态错误，请参考错误码信息。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态解释。若状态错误，请参考错误码信息。
     * @example `OK`
     */
    Message: string;
    RecordDeleteInfoList: {
        RecordDeleteInfo: {
            /**
             * 对每个FileId的处理结果。取值：
             * - **OK**：删除成功。
             * - **AccessDenied**：拒绝访问。
             * - **FileNotFound**：文件未找到。
             * @example `OK`
             */
            Message: string;
            /**
             * 请求被删除的索引文件ID 。
             * @example `c4d7f0a4-b506-43f9-8de3-07732c3f**`
             */
            RecordId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `939D19EE-59A0-18E9-B458-*****`
     */
    RequestId: string;
}
