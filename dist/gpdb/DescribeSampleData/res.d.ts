export interface DescribeSampleDataResponse {
    /**
     * 请求ID。
     * @example `84CD7CAF-FA7B-5178-B19F-D8CDE307D5FA_8111`
     */
    RequestId: string;
    /**
     * 是否加载了样本数据集，取值如下：
     * - **true**：已加载样本数据集。
     * - **false**：未加载样本数据集。
     * @example `true`
     */
    HasSampleData: boolean;
    /**
     * 该信息表示API在调用过程中出现了意料之外的错误，但不影响API的正常使用。
     * @example `******`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
    /**
     * 样本数据集的加载状态，取值说明：
     * - **loaded**：已加载。
     * - **loading**：加载中。
     * - **unload**：未加载。
     * @example `loaded`
     */
    SampleDataStatus: string;
}
