export interface ResendEmailResponse {
    /**
     * 结果码
     * 错误代码，候选值:
     * 200: OK
     * 1109: 系统错误
     * 3058: 发送过于频繁，限定5分钟10封邮件 3057: InviteId 为空
     * 3060: 找不到InviteId的发送记录
     * 3061: 注册URL过期，无法重发
     * @example `200`
     */
    Code: string;
    /**
     * 结果信息
     * @example `成功`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后续 业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求id，阿里云为该请求生成的唯一标识符。
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
