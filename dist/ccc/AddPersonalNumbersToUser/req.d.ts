export interface AddPersonalNumbersToUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId": string;
    /**
     * 待添加的号码列表，要求号码可被UserId对应的坐席绑定，如果不清楚坐席可绑定哪些号码，请参考ListPersonalNumbersOfUser接口。
     * @example `["0101234****","0105678****"]`
     */
    "NumberList": string;
}
