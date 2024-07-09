export interface GetExperimentMetaResponse {
    /**
     * 请求ID。
     * @example `37cbf1a4-a7e8-4fff-93ac-XXXXXXXXXX`
     */
    RequestId: string;
    /**
     * 异常提示信息，若成功则不返回任何数据。
     * @example `null`
     */
    Message: string;
    /**
     * 演练状态。包括：
     * - INVISIBLE 不可见
     * - DRAFT 编辑中
     * - READY 就绪
     * - RUNNING 运行中
     * - FINISHED 已结束
     * @example `READY`
     */
    State: string;
    /**
     * 故障演练ID。
     * @example `1234567890`
     */
    ExperimentId: string;
    /**
     * 演练创建时间。
     * @example `1649658306000`
     */
    CreateTime: string;
    /**
     * 系统状态码，若成功则不返回任何数据。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    Tags: string[];
    /**
     * 演练名称。
     * @example `测试演练`
     */
    Name: string;
}
