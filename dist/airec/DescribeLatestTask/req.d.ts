export interface DescribeLatestTaskRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 指定的召回ID
     * @example `123`
     */
    "algorithmId": string;
}
