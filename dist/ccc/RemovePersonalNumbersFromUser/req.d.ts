export interface RemovePersonalNumbersFromUserRequest {
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
     * 待删除的个人外呼号码列表，通过调用ListPersonalNumbersOfUser可获取坐席当前关联的个人外呼号码列表。
     * @example `["0101234****", "0105678****"]`
     */
    "NumberList": string;
}
