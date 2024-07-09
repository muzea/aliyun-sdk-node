export interface UntagResourcesRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。唯一取值：**ALIYUN::DTS::INSTANCE**。
     * @example `ALIYUN::DTS::INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * 是否解绑实例的全部标签，取值：
     * - **true**：是。解绑实例的全部标签。
     * - **false**：否。需在**TagKey.N**参数传入需解绑的实例标签。
     * >  - **TagKey.N**和本参数至少传入一个。
     * - 如果同时传入了**TagKey.N**和本参数，则本参数不生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 数据迁移、同步和订阅实例的ID，可以通过调用[DescribeDtsJobs](~~209702~~)接口查询。
     * > N表示传入第几个实例ID。例如ResourceId.1表示传入第一个实例ID；ResourceId.2表示传入第二个实例ID。可以同时对1~50个实例解绑标签。
     * @example `dtsntk10k6r12v****`
     */
    "ResourceId": string[];
    /**
     * 标签键。
     * > - N表示传入第几个标签的键。例如TagKey.1表示传入第一个标签的键；TagKey.2表示传入第二个标签的键。可以同时解绑1~20个标签键。
     * - 不允许传入空字符串。
     * - **All**和本参数至少传入一个。
     * - 如果同时传入了**All**和本参数，则只有本参数生效。
     * @example `testkey1`
     */
    "TagKey"?: string[];
}
