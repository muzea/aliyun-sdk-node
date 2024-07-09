export interface ListIvrTrackingDetailsRequest {
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 通话ID。
     * @example `job-10963442671187****`
     */
    "ContactId": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
}
