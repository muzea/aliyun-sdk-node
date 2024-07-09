export interface SetTrafficControlApisRequest {
    /**
     * 指定要操作的流控策略ID
     * @example `dd05f1c54d6749eda95f9fa6d491449a`
     */
    "TrafficControlId": string;
    /**
     * 指定要操作API所属分组ID
     * @example `0009db9c828549768a200320714b8930`
     */
    "GroupId": string;
    /**
     * 指定要操作的API编号，支持输入多个，“,”分隔，最多支持100个
     * @example `3b81fd160f5645e097cc8855d75a1cf6,46fbb52840d146f186e38e8e70fc8c12`
     */
    "ApiIds": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**：线上
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName": string;
}
