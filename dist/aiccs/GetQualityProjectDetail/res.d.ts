export interface GetQualityProjectDetailResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 质检任务信息。
     */
    Data: {
        /**
         * 质检任务状态。取值：
         * - **0**：启动
         * - **1**：关闭
         * @example `0`
         */
        Status: number;
        /**
         * 质检类型 。固定取值为**1**（咨询类）。
         * @example `1`
         */
        QualityType: number;
        /**
         * 质检项规则ID。
         */
        QualityRuleIds: number[];
        /**
         * 创建时间。
         * @example `2021-04-07 18:07:18`
         */
        CreateTime: string;
        /**
         * 质检任务名称
         * @example `自动化质检任务`
         */
        ProjectName: string;
        /**
         * 检查频次类型。取值：
         * - **1**：周期质检
         * - **4**：临时质检
         * @example `1`
         */
        CheckFreqType: number;
        /**
         * 质检抽样范围。
         */
        DepList: number[];
        /**
         * 质检抽样范围。
         */
        ServicerList: number[];
        /**
         * 质检任务版本号。
         * @example `1`
         */
        Version: number;
        /**
         * 质检抽样范围。
         */
        GroupList: number[];
        /**
         * 质检任务ID。
         * @example `15977801`
         */
        Id: number;
        /**
         * 修改时间。
         * @example `2021-04-07 18:07:19`
         */
        ModifyTime: string;
    };
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: string;
}
