interface OnsMessagePageQueryByTopicRequest {
    "RegionId"?: string;
    "BeginTime": number;
    "EndTime": number;
    "CurrentPage": number;
    "Topic": string;
    "TaskId"?: string;
    "PageSize"?: number;
    "InstanceId"?: string;
}
export { OnsMessagePageQueryByTopicRequest };