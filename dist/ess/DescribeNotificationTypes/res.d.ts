export interface DescribeNotificationTypesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 弹性伸缩事件及资源变化通知类型的列表。
     */
    NotificationTypes: string[];
}
