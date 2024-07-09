export interface GetVoicemailRecordingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 通话ID，请确保该通话ID存在语音信箱留言，否则返回结果将没有数据。
     * @example `job-12515239414412****`
     */
    "ContactId": string;
}
