export interface DescribeAlertConfigurationResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 伸缩组中设置需要发送短信、站内信和邮件通知的伸缩活动类型。
     */
    ScaleStatuses: string[];
}
