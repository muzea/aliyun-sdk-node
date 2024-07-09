export interface RemoveIpControlApisRequest {
    /**
     * 指定要操作的IP访问控制ID
     * @example `dd05f1c54d6749eda95f9fa6d491449a`
     */
    "IpControlId": string;
    /**
     * 指定要操作API所属分组ID
     * @example `0009db9c828549768a200320714b8930`
     */
    "GroupId": string;
    /**
     * 指定要解绑的API。
     * - 若不传入：默认解绑该分组该环境下的所有API。
     * - 指定要查询的API编号，支持输入多个，“,”分隔，最多支持100个
     * @example `123`
     */
    "ApiIds"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **TEST**: 测试
     * @example `TEST`
     */
    "StageName": string;
}
