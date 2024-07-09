export interface DescribeImageLatestScanTaskResponse {
    /**
     * 本次请求的ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF4****`
     */
    RequestId: string;
    /**
     * 任务信息。
     */
    Task: {
        /**
         * 任务状态。取值：
         * - **PROCESSING**：任务执行中
         * - **START**：任务启动中
         * - **MESSAGE_SEND**：检测分发中
         * - **PRE_ANALYZER**：镜像预检中
         * - **SUCCESS**：任务执行成功
         * - **FAIL**：任务执行失败
         * - **TIMOUT**：任务执行超时
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 任务最新修改时间。格式为: yyyy-MM-ddTHH:mm:ss。
         * @example `2022-12-20 12:00:05`
         */
        Modified: string;
        /**
         * 任务的结束时间。当任务状态为Finished时，此参数才有值，否则返回值为空。
         * @example `1669693430977`
         */
        FinishTime: number;
        /**
         * 任务创建时间。格式为: yyyy-MM-ddTHH:mm:ss。
         * @example `2022-12-20 11:59:05`
         */
        Create: string;
        /**
         * 已完成的镜像任务数。
         * @example `100`
         */
        Finish: number;
        /**
         * 创建方式，可以为通过控制台创建或接口。取值：
         * - **console_batch**：控制台
         * - **openapi**：公开接口
         * @example `console_batch`
         */
        Source: string;
        /**
         * 任务开始时间。
         * @example `1668614400000`
         */
        StartTime: number;
        /**
         * 任务类型。取值：
         * - **IMAGE\_SCAN**：镜像扫描
         * @example `IMAGE_SCAN`
         */
        TaskType: string;
        /**
         * 任务名称。
         * @example `IMAGE_SCAN`
         */
        Name: string;
        /**
         * 扫描任务的ID。
         * @example `0a960b9a48b788a8689154b032bf****`
         */
        TaskId: string;
        /**
         * 目标镜像Digest。
         * @example `8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****`
         */
        Target: string;
        /**
         * 任务ID。
         * @example `9755662`
         */
        Id: number;
        /**
         * 扫描目标类型。取值：
         * - **IMAGE**：镜像
         * @example `IMAGE`
         */
        TargetType: string;
    }[];
}
