export interface RestoreArchivedRecordingsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `Instance 0 does not exist.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F8066648-5D95-55AB-ACD3-2F4AD3BEA715`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 录音文件是否存在。
         * @example `False`
         */
        Exists: string;
        /**
         * 通话ID。
         * @example `job-25920271311543****`
         */
        ContactId: string;
        /**
         * 录音解冻状态，可选值为Completed或者Progressing。
         * @example `Progressing`
         */
        Status: string;
        /**
         * 录音文件的存储类型。
         * @example `Standard`
         */
        StorageType: string;
    }[];
}
