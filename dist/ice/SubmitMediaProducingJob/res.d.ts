export interface SubmitMediaProducingJobResponse {
    /**
     * 请求ID。
     * @example `****36-3C1E-4417-BDB2-1E034F****`
     */
    RequestId: string;
    /**
     * 剪辑工程ID。
     * @example `****b4549d46c88681030f6e****`
     */
    ProjectId: string;
    /**
     * 合成作业ID。
     * @example `****d80e4e4044975745c14b****`
     */
    JobId: string;
    /**
     * 合成媒资ID。
     * @example `****c469e944b5a856828dc2****`
     */
    MediaId: string;
    /**
     * 如果视频输出的位置为vod时，返回vod媒资id。
     * @example `****d8s4h75ci975745c14b****`
     */
    VodMediaId: string;
}
