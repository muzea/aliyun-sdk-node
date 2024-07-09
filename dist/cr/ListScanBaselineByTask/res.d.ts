export interface ListScanBaselineByTaskResponse {
    /**
     * Id of the request
     * @example `5259118F-79E2-57E9-9AEA-551586F4FAED`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: number;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否调用 API 成功，取值：
     * - `true`：调用 API 成功
     * - `false`：调用 API 失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 条目数
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `2`
     */
    TotalCount: number;
    /**
     * 基线列表
     */
    ScanBaselines: {
        /**
         * 镜像扫描任务 ID
         * @example `2328fcaa-f28a-405d-a357-asdvfrew23`
         */
        ScanTaskId: string;
        /**
         * 基线检查分类
         * @example `服务配置`
         */
        BaselineClassAlias: string;
        /**
         * 基线检查名称
         * @example `服务配置`
         */
        BaselineNameAlias: string;
        /**
         * 基线检查风险等级
         * @example `high`
         */
        BaselineNameLevel: string;
        /**
         * 低风险数量
         * @example `1`
         */
        LowRiskItemCount: number;
        /**
         * 中风险数量
         * @example `1`
         */
        MiddleRiskItemCount: number;
        /**
         * 高风险数量
         * @example `1`
         */
        HighRiskItemCount: number;
        /**
         * 基线检查数量
         * @example `1`
         */
        BaselineItemCount: number;
        /**
         * 基线名称key
         * @example `ak_leak`
         */
        BaselineNameKey: string;
        /**
         * 首次扫描时间
         * @example `2024-04-10 15:33:26`
         */
        FirstScanTime: number;
        /**
         * 基线描述
         * @example `Access Key 明文存储`
         */
        BaselineDetailDescription: string;
        /**
         * 基线检查路径和内容
         * @example `usr/local/www/project/environments/dev/common/config/paramsxxx`
         */
        BaselineDetailPrompt: string;
        /**
         * 基线检查修复建议
         * @example `建议对ak混淆加密，避免被利用`
         */
        BaselineDetailAdvice: string;
        /**
         * 创建时间
         * @example `1695090008000`
         */
        CreateTime: number;
        /**
         * 更新时间
         * @example `1684220824226`
         */
        UpdateTime: number;
    }[];
}
