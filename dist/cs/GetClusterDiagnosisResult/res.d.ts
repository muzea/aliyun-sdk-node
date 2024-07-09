export interface GetClusterDiagnosisResultResponse {
    /**
     * 诊断结果代码：
     * - 0：诊断完成
     * - 1：诊断失败
     * @example `0`
     */
    code: number;
    /**
     * 诊断发起时间。
     * @example `2024-05-28T11:29Z`
     */
    created: string;
    /**
     * 诊断ID。
     * @example `6cf6b62e334e4583bdfd26707516****`
     */
    diagnosis_id: string;
    /**
     * 诊断完成时间。
     * @example `2024-05-28T11:29Z`
     */
    finished: string;
    /**
     * 诊断状态信息。
     * @example `success`
     */
    message: string;
    /**
     * 诊断结果。
     * @example `{"phase":5,"version":"20240101"}`
     */
    result: string;
    /**
     * 诊断状态：
     * - 0：诊断已创建
     * - 1：诊断运行中
     * - 2：诊断已完成
     * @example `2`
     */
    status: number;
    /**
     * 诊断对象。
     * @example `{"name":"cn-hongkong.10.0.0.246"}`
     */
    target: string;
    /**
     * 诊断类型。
     * @example `Node`
     */
    type: string;
}
