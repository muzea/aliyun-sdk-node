export interface GetQualityProjectDetailRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre***`
     */
    "InstanceId": string;
    /**
     * 质检任务ID
     * @example `15977801`
     */
    "ProjectId": number;
}
