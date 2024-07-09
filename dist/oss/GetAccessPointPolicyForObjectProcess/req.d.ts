export interface GetAccessPointPolicyForObjectProcessRequest {
    /**
     * 存储空间名称。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 填写对象FC接入点名称。
     * @example `fc-ap-01`
     */
    "x-oss-access-point-for-object-process-name": string;
}
