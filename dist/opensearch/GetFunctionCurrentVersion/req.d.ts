export interface GetFunctionCurrentVersionRequest {
    /**
     * 功能名称，支持的模型有：
     * - CTR模型：ctr
     * - 人气模型：pop
     * - 类目模型：category
     * - 热词模型：hot
     * - 底纹模型：hint
     * - 下拉提示模型：suggest
     * - 分词模型：analyzer
     * - 词权重模型：termweight
     * @example `ctr`
     */
    "functionName": string;
    /**
     * 模型类型，不同功能对应的模型类型如下：
     * - CTR模型：tf_checkpoint
     * - 人气模型：pop
     * - 类目模型：offline_inference
     * - 热词模型：offline_inference
     * - 底纹模型：offline_inference
     * - 下拉提示模型：offline_inference
     * - 分词模型：text
     * - 词权重模型：tf_checkpoint
     * @example `tf_checkpoint`
     */
    "modelType": string;
    /**
     * 功能类型：
     * - PAAS （默认）
     * - SAAS
     * @example `PAAS`
     */
    "functionType"?: string;
    /**
     * 行业，默认为空，表示通用版
     * @example `ecommerce`
     */
    "domain"?: string;
    /**
     * 垂类，默认为空
     * @example `general`
     */
    "category"?: string;
}
