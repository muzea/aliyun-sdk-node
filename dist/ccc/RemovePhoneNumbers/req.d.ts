export interface RemovePhoneNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 待删除的号码列表。
     * @example `["0101234****","0105678****"]`
     */
    "NumberList": string;
    /**
     * 是否强制删除，如果号码关联了技能组、联系流或坐席，只有将该字段设置为true才可以执行删除，非必填，默认false。
     * @example `true`
     */
    "Force"?: boolean;
}
