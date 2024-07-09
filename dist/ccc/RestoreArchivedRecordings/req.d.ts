export interface RestoreArchivedRecordingsRequest {
    /**
     * 呼叫中心实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 话务ID列表，JSON格式。
     * @example `[\"job-216750038017142784\"]`
     */
    "ContactIds"?: string;
}
