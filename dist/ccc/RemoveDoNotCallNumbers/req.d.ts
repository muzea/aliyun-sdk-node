export interface RemoveDoNotCallNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 待删除的禁止外呼号码列表，格式为JSON数组的字符串，数组长度区间为1-300。
     * @example `["1900000****","1312211****"]`
     */
    "NumberList"?: string;
}
