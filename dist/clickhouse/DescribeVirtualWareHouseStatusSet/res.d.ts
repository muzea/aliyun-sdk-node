export interface DescribeVirtualWareHouseStatusSetResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 计算组的状态，取值说明：
         * - **Creating**：创建中。
         * - **Running**：运行中。
         * - **CreatingPublicSLB**：创建公网链接中。
         * - **DeletingPublicSLB**：释放公网链接中。
         * - **ResourceChanging**：资源变配中。
         * - **ResourceChangingInReadonly**：资源变配中（计算组写入锁定）。
         * - **Deleting**：删除中。
         * @example `Running`
         */
        Value: string;
        /**
         * 计算组状态的描述。
         * @example `运行中`
         */
        Desc: string;
    }[];
    /**
     * 请求ID。
     * @example `FDF272C3-8FD0-507B-8E63-A19495217339`
     */
    RequestId: string;
}
