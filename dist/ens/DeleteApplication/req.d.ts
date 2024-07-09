export interface DeleteApplicationRequest {
    /**
     * 应用ID。获取应用ID，请参见ListApplications。
     * @example `d0639abf-789a-4527-b420-031d2cd9ad9b`
     */
    "AppId": string;
    /**
     * 异步释放的超时时间，单位秒。默认300。
     * @example `1800`
     */
    "Timeout"?: number;
}
