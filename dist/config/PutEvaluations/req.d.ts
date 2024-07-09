export interface PutEvaluationsRequest {
    /**
     * 评估结果。
     * @example `[{"accountId":120886317861****,"annotation":"The flow log is not enabled.","complianceResourceId":"flowlog-o6wdfo1yvgo4i8****","complianceResourceType":"ACS::CEN::Flowlog","complianceRegionId":"cn-shanghai","complianceType":"NON_COMPLIANT","orderingTimestamp":1588907220408}]`
     */
    "Evaluations"?: string;
    /**
     * 是否启用删除模式。取值：
     * - true：启用。
     * - false（默认值）：不启用。
     * > 仅当您手动触发或周期触发自定义函数规则评估资源时，该参数有效。如果启用删除模式，会自动删除本次评估期间未更新的评估结果。
     * @example `false`
     */
    "DeleteMode"?: boolean;
    /**
     * 回调令牌。当配置审计触发自定义函数计算规则评估时，会将令牌信息作为参数传递给函数计算，用于提交评估结果时输入回调令牌。
     * > `ResultToken`从[函数入参](~~127405~~)中获取。关于如何从函数计算中获取函数入参，请参见[查看调用日志](~~73349~~)。
     * @example `=lAUbfkWp7GL9AFoQEIStinqBMc4FC8sHvip/1F1npkWUDNS2GEm6xwL6Zl/fSr0bbkWY+aiCLjTJxnp4H/yp/8p/Q8VCAtqG5uhRii4sfnYRnTPnE****`
     */
    "ResultToken": string;
}
