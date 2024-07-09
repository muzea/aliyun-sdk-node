export interface SubmitLiveEditingJobResponse {
    /**
     * 请求ID。
     * @example `****36-3C1E-4417-BDB2-1E034F****`
     */
    RequestId: string;
    /**
     * 直播剪辑工程ID。
     * @example `****fddd7748b58bf1d47e95****`
     */
    ProjectId: string;
    /**
     * 直播剪辑任务ID。
     * @example `****d80e4e4044975745c14b****`
     */
    JobId: string;
    /**
     * 合成成片媒资ID。
     * @example `****c469e944b5a856828dc2****`
     */
    MediaId: string;
    /**
     * 合成成片地址。
     * @example `http://test-bucket.cn-shanghai.aliyuncs.com/test.mp4`
     */
    MediaURL: string;
    /**
     * 如果视频输出的位置为vod时，返回vod媒资ID。
     * @example `****d7578s4h75ci945c14b****`
     */
    VodMediaId: string;
}
