export interface CreateBaselineRequest {
    /**
     * 基线名称。
     * @example `BaselineName`
     */
    "BaselineName": string;
    /**
     * DataWorks工作空间的ID，您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面查看ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 基线责任人的阿里云uid。
     * @example `1000000000001`
     */
    "Owner": string;
    /**
     * 基线的优先级，取值范围为{1,3,5,7,8}。
     * @example `1,3,5,7,8`
     */
    "Priority": number;
    /**
     * 基线上游节点列表。
     * @example `210001233239,210001236482`
     */
    "NodeIds"?: string;
    /**
     * 基线承诺时间配置。
     */
    "OvertimeSettings": {
        /**
         * 承诺时间对应的周期，天基线需要配置为1，小时基线可以配置最多24个周期。
         * @example `1`
         */
        Cycle: number;
        /**
         * 承诺时间，hh:mm格式，hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
         * @example `00:00`
         */
        Time: string;
    }[];
    /**
     * 基线预警余量，单位为分钟。
     * @example `30`
     */
    "AlertMarginThreshold"?: number;
    /**
     * 基线类型，包括DAILY（天基线）和HOURLY（小时基线）。
     * @example `DAILY`
     */
    "BaselineType": string;
}
