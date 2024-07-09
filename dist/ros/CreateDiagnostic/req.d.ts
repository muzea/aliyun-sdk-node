export interface CreateDiagnosticRequest {
    /**
     * 诊断的关键字。
     * 您可以输入待诊断资源栈的ID。
     * @example `37A5679B-8488-5A5D-8D5C-90E66A577A5D`
     */
    "DiagnosticKey"?: string;
    /**
     * 诊断产品名称。
     * @example `ros`
     */
    "Product"?: string;
    /**
     * 诊断类型。取值：Stack，诊断资源栈。
     * @example `Stack`
     */
    "DiagnosticType"?: string;
    /**
     * 选择生成的诊断报告的语言。
     * 目前仅支持中英文。
     * @example `zh-cn`
     */
    "Lang"?: string;
}
