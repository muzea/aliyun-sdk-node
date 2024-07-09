export interface QuerySmarttagJobRequest {
    /**
     * 需要查询的智能标签作业ID。可以从提交智能标签作业的返回参数中获取。
     * @example `88c6ca184c0e47098a5b665e2****`
     */
    "JobId": string;
    /**
     * 额外的请求参数，使用JSON字符串表示，例如：{"labelResultType":"auto"}。其中，labelResultType为String类型，可取值：
     * - auto：机器打标结果
     * - hmi：人机协同结果
     * @example `{"labelResultType":"auto"}
    `
     */
    "Params"?: string;
}
