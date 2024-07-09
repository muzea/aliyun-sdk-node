export interface PageableQueryUserExperimentResponse {
    /**
     * 页数
     * @example `2`
     */
    Pages: number;
    /**
     * 请求ID
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 接口异常信息
     * @example `null`
     */
    Message: string;
    /**
     * 每页数据条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 数据总数
     * @example `20`
     */
    Total: number;
    /**
     * 演练列表
     */
    ExperimentList: {
        /**
         * 当前账号对故障演练权限：
         * - 1：只读权限
         * - 2：编辑权限
         * - 4：执行权限
         * - 7：所有权限
         * @example `7`
         */
        Permission: number;
        /**
         * 故障演练最后一次任务的执行结果：
         * - SUCCESS（成功）
         * - FAILED（失败）
         * - REJECTED（任务调过）
         * - ERROR（任务异常中断）
         * - STOPPED（任务被终止）
         * - SOPPED_FAILED（停止失败）
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 演练状态：
         * - READY（就绪）
         * - RUNNING（正在执行）
         * - FINISHED（执行结束）
         * @example `READY`
         */
        State: string;
        /**
         * 演练创建时间
         * @example `1611835037000`
         */
        CreateTime: number;
        /**
         * 故障演练ID
         * @example `1234567890123456789`
         */
        ExperimentId: string;
        /**
         * 演练标签
         */
        Tags: string[];
        /**
         * 故障演练有关的小程序
         */
        MiniApps: string[];
        /**
         * 故障演练名称
         * @example `演练名称`
         */
        Name: string;
        /**
         * 演练创建人UserID
         * @example `1XXXXXXXXXX`
         */
        Creator: string;
    }[];
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口请求反馈编码
     * @example `P_ERROR_****`
     */
    Code: string;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
}
