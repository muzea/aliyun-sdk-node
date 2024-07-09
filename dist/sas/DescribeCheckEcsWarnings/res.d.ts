export interface DescribeCheckEcsWarningsResponse {
    /**
     * 已购买的云安全中心版本。 取值：
     * - **1**：基础版
     * - **2**或**3**：企业版
     * - **5**：高级版
     * - **6**：基础杀毒版
     * > 2和3对应的都是企业版，两者对应的版本无差异。
     * @example `3`
     */
    SasVersion: string;
    /**
     * 当前云安全中心版本是否为试用版本。取值：
     * - **0**：非试用版本
     * - **1**：试用版本
     * @example `0`
     */
    CanTry: string;
    /**
     * 您资产中检测到的高危弱口令风险的数量。
     * @example `3`
     */
    WeakPasswordCount: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D`
     */
    RequestId: string;
}
