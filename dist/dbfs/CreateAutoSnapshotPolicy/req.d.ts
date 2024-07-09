export interface CreateAutoSnapshotPolicyRequest {
    /**
     * 策略名称。
     * @example `policyTest`
     */
    "PolicyName": string;
    /**
     * 保留天数。
     * @example `30`
     */
    "RetentionDays": number;
    /**
     * 自动快照的重复日期列表，单位为天，周期为星期。取值范围：1~7，例如1表示周一。格式说明：
     * - 传入的参数需要保持JSON数组格式。例如，["1"]表示每周一重复创建自动快照。
     * - 当一星期内需要创建多次自动快照时，可以传入多个时间点，时间点之间用半角逗号（,）隔开，最多传入7个时间点。例如，["1","3","5"]表示每周一、周三、周五重复创建自动快照。
     */
    "RepeatWeekdays": string[];
    /**
     * 自动快照的创建时间点列表。使用UTC +8时间，单位为小时。取值范围：0~23，代表00:00至23:00共24个时间点，例如01表示01:00。格式说明：
     * - 传入的参数需要保持JSON数组格式。例如，["1"]表示01:00创建自动快照。
     * - 当一天内需要创建多次自动快照时，可以传入多个时间点，时间点之间用半角逗号（,）隔开，最多传入24个时间点。例如，["01","03","15"]表示01:00、03:00、15:00时创建自动快照。
     */
    "TimePoints": string[];
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
