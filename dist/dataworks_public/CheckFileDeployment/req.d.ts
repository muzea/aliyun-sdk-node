export interface CheckFileDeploymentRequest {
    /**
     * 文件检查器所属的实例ID。您可以从文件发布检查事件中的CheckerInstanceId获取。
     * @example `66_123455623_2`
     */
    "CheckerInstanceId": string;
    /**
     * 待发布文件的检查状态，取值如下：
     * - OK，表示文件检查通过。
     * - WARN，表示文件检查通过，但是存在警告。
     * - FAIL，表示文件检查未通过。
     * @example `OK`
     */
    "Status": string;
    /**
     * 已废弃。
     * @example `https://result.aliyun.com/?checkerInstanceId=`
     */
    "CheckDetailUrl"?: string;
}
