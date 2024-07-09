export interface DescribeEventTypesRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 子类型异常事件所属父类型异常事件ID。取值：
     * - **01**：权限使用异常。
     * - **02**：数据流转异常。
     * - **03**：数据操作异常。
     * @example `01`
     */
    "ParentTypeId"?: number;
    /**
     * 产品的资源类型。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `5`
     */
    "ResourceId"?: number;
    /**
     * 状态。取值：
     * - **1**：可用。
     * - **2**：不可用。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 该参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
}
