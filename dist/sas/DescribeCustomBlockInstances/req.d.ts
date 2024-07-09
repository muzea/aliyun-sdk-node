export interface DescribeCustomBlockInstancesRequest {
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `8`
     */
    "CurrentPage"?: number;
    /**
     * 对应实例的规则开启状态。
     * - **2**：开启异常
     * - **1**：已启用
     * - **0**：未启用
     * @example `1`
     */
    "Status"?: number;
    /**
     * 防暴力破解IP地址。
     * > 调用[DescribeCustomBlockRecords](~~DescribeCustomBlockRecords~~)接口获取该参数。
     * @example `47.92.33.1xx`
     */
    "BlockIp"?: string;
    /**
     * 分页查询时，每页显示的检查项信息的数量。默认值为**20**，表示每页显示20条检查项信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 自定义规则中流量禁用方向。
     * 取值：
     * - **in**：入流量
     * - **out**：出流量
     * @example `in`
     */
    "Bound"?: string;
}
