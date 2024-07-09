export interface DescribeDialogueNodeStatisticsRequest {
    /**
     * 实例id
     * @example `aeff669b-388f-4619-82af-81e177df5628`
     */
    "InstanceId": string;
    /**
     * 作业组id
     * @example `a3c670d1-01bf-491d-b9aa-759b1a82f47c`
     */
    "JobGroupId": string;
    /**
     * 限制
     * @example `30`
     */
    "Limit": number;
}
